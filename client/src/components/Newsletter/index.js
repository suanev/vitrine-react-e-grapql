import React from 'react';

import './styles.scss';

const Newsletter = () => (
    <section className="container-newsletter">
        <div className="small-container">
            <h2>Receba ofertas e novidades por e-mail</h2>
            <div className="form-content">
                <input placeholder="cadastre seu nome" />
                <input placeholder="email@email.com" />
            </div>
            <button className="btn">Assinar</button>
        </div>
    </section>
);

export default Newsletter;