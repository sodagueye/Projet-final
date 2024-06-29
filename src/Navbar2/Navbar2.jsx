import { useEffect } from 'react';

export default function Navbar2() {
    useEffect(() => {
        // Détecter le scroll pour basculer entre les navbars
        const handleScroll = () => {
            const navbar1 = document.querySelector('.navbar1');
            const navbar2 = document.querySelector('.navbar2');

            if (window.scrollY > 0) {
                // Si l'utilisateur a commencé à scroller, afficher navbar2 et masquer navbar1
                navbar1.style.display = 'none';
                navbar2.style.display = 'block';
            } else {
                // Sinon, afficher navbar1 et masquer navbar2
                navbar1.style.display = 'block';
                navbar2.style.display = 'none';
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className="navbar1 bg-dark text-white fixed-top">
                <div className="d-flex justify-content-around">
                    <div><h1>Logo</h1></div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Menu</li>
                    </ul>
                </div>
            </div>
            <div className="navbar2 bg-dark text-white fixed-top" style={{ display: 'none' }}>
                <div className="d-flex justify-content-around">
                    <div><h1>Logo</h1></div>
                    <ul>
                        <li>Jus</li>
                        <li>Burger</li>
                        <li>Plat national</li>
                        <li>Autre</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
