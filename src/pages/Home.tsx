import ilustration from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImage from '../assets/images/google-icon.svg';

export function Home() {
    return (
        <div>
            <aside>
                <img src={ilustration} alt="Ilustracao simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as dúvidas de sua audiência em tempo real</p>
            </aside>

            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                </div>
                <button>
                    <img src={googleIconImage} alt="Logo do Google" />
                    crie sua sala com o google
                </button>
                <div>Ou entre em uma sala</div>
                <form>
                    <input
                        type="Text"
                        placeholder="Digite o codigo da sala"
                    />
                    <button type="submit">
                        Entrar na sala
                    </button>
                </form>
            </main>
        </div>
    )
}