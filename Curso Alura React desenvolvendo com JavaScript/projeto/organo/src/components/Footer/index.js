import './Footer.css'

const Footer = () => {
    return(
        <footer className='footer'>
            <div>
                <a href='https://facebook.com'>
                    <img src='/imagens/fb.png' alt='Facebook' />
                </a>
                <a href='https://x.com'>
                    <img src='/imagens/tw.png' alt='Twitter' />
                </a>
                <a href='https://instagram.com'>
                    <img src='/imagens/ig.png' alt='Instagram' />
                </a>
            </div>

            <img src='imagens/logo.png'/>
            
            <p>
                Desenvolvido por Giovanni Romano.
            </p>

        </footer>
    )
}

export default Footer