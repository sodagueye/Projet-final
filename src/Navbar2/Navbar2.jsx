import { useState, useEffect } from 'react';
import logo from "../Footer-img/logo-remove2.png";
import './Navbar.css';
import { Footer } from '../Footer/Footer';

export default function Navbar2() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            {!scrolled ? (
                <div className="navbar1">
                    <div className="d-flex justify-content-around">
                        <div>
                            <a href=""> <img src={logo} alt="" style={{ width: 80, height: 100}} /></a>
                        </div>
                        <ul className='d-flex gap-2'>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li>Contact</li>
                            <li>Menu</li>
                        </ul>
                    </div>
                </div>
            ) : (
                <div className="navbar2 d-flex justify-content-around align-items-center">
                    <div>
                        <a href=""> <img src={logo} alt="" style={{ width: 60, height: 60}} /></a>
                    </div>
                    <ul className='d-flex gap-2'>
                        <li><a href="#">Plat sénégalais</a></li>
                        <li><a href="#">Fast food</a></li>
                        <li>Dessert</li>
                        <li>Jus</li>
                    </ul>
                </div>
            )}
           <div className='pt-5 mt-5'>
           <p> className='d-flex gap-2 className='d-flex gap-2' className='d-flex gap-2' className=
                'd-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-
                2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className
                ='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap
                -2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className
                ='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-
                2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className=
                'd-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2
                ' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='
                d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2'
                className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d
                -flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2'
                className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='
                d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-
                className='d-flex gap-2 className='d-flex gap-2' className='d-flex gap-2' className=
                'd-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-
                2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className
                ='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap
                -2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className
                ='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-
                2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className=
                'd-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2
                ' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='
                d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2'
                className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d
                -flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2'
                className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='
                d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-
                2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' classNam
                e='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex g
                ap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' class
                Name='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-fle


                x gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2'
                 className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2'
                  className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2'
                   className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-
                   flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' cl
                   assName='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex 
                   gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className
                   ='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' 
                   className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-fle
                   x gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' classNa
                   me='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' 
                   className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2
                   ' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2' className='d-flex gap-2'
            </p>

           </div>
           <Footer/>
        </div>
    );
}
