import { Link } from 'react-router-dom';

import ilustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import '../styles/auth.scss'; 
import { Button } from '../componentes/Button';

export function NewRoom() {
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
                    <h2>Criar uma nova sala</h2>
                <form>
                    <input
                        type="Text"
                        placeholder="Nome da Sala"
                    />
                    <Button type="submit">Criar sala </Button>
                </form>
                <p>
                    Quer entrar em uma sala existente? <Link to="/">Clique aqui</Link>
                </p>
                </div>
            </main>
        </div>
    );
}