import React from 'react';

import './styles.scss';

const Header = () => (
    <header className="container-header">
        <div className="header">
            <div className="col-2">
                <h1>News!</h1>
                <p>Planejadas com muito amor, as roupas que atendem do PP ao 4G são produzidas
                        100% pela nossa equipe e confeccionadas com muito carinho. </p>
                <button className="btn">Conferir agora</button>
            </div>
            <div className="col-2">
                <img src="https://i.imgur.com/Q7ZYFrb.png" alt="Header" />
            </div>
        </div>
    </header>
);

export default Header;