import { useHistory } from 'react-router-dom';

import ilustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';

import { Button } from '../componentes/Button';

import { useAuth } from '../hooks/useAuth';

import '../styles/auth.scss';

export function Home() {
    const history = useHistory(); 
    const {user, signInWithGoolge} = useAuth()


   async function handleCreateRoom() {

        if (!user) {
           await signInWithGoolge()
        }

        history.push('/rooms/new');
     
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
                <form>
                    <input
                        type="Text"
                        placeholder="Digite o codigo da sala"
                    />
                    <Button type="submit">Entrar na sala </Button>
                </form>
                </div>
            </main>
        </div>
    );
}