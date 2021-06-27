import { useHistory } from 'react-router-dom';

import ilustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';
import { database } from '../services/firebase';
import { FormEvent, useState } from 'react';

export function Home() {
    const history = useHistory();
    const { user, signInWithGoolge } = useAuth();
    const [roomCode, setRoomCode] = useState('');

    async function handleCreateRoom() {

        if (!user) {
            await signInWithGoolge()
        }

        history.push('/rooms/new');
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`rooms/${roomCode}`).get();

        if (!roomRef.exists()) {
            alert('Room does not exists!');
            return;
        }

        if (roomRef.val().endedAt) {
            alert('Room already closed.');
            return
        }

        history.push(`/rooms/${roomCode}`);
    }

    return (
        <div id="page-auth">
            <aside>
                <img
                    src={ilustration}
                    alt="Ilustracao simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />

                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImage} alt="Logo do Google" />
                        crie sua sala com o google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input
                            type="Text"
                            placeholder="Digite o codigo da sala"
                            value={roomCode}
                            onChange={event => setRoomCode(event.target.value)}
                        />
                        <Button type="submit">Entrar na sala </Button>
                    </form>
                </div>
            </main>
        </div>
    );
}