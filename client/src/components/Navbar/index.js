import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

import './styles.scss';

const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const isVisible = !menu ? 'closed' : '';

    return (
        <nav className="container-navbar">
            <div className="container">
                <p className="logo">
                    Use Sempre
                </p>
                <div className={`nav-content ${isVisible}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/products">Produtos</Link></li>
                        <li><Link to="/">Sobre</Link></li>
                        <li><Link to="/find-us">Comprar</Link></li>
                    </ul>
                </div>
                <MenuIcon onClick={toggleMenu} />
            </div>
        </nav>
    );
}

export default Navbar;