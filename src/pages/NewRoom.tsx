import { FormEvent, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import ilustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { useAuth } from '../hooks/useAuth';

import { Button } from '../components/Button';
import { database } from '../services/firebase';

import '../styles/auth.scss';


export function NewRoom() {

    const [newRoom, setNewRoom] = useState("");
    const { user } = useAuth();
    const history = useHistory();

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
    
        if (newRoom.trim() === '') {
          return;
        }
    
        const roomRef = database.ref('rooms');

        const firebaseRoom = await roomRef.push({
          title: newRoom,
          authorId: user?.id 
        })
    
        history.push(`/rooms/${firebaseRoom.key}`)
    
      }

    return (
        <div id="page-auth">
            <aside>
                <img
                    src={ilustration}
                    alt="Ilustracao simbolizando perguntas e respostas"
                />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>

            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <h1>{user?.name}</h1>
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                            type="Text"
                            placeholder="Nome da Sala"
                            onChange={(event) => setNewRoom(event.target.value)}
                            value={newRoom  }
                        />
                        <Button type="submit">Criar sala 
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    );
}