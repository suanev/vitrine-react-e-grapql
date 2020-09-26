import React from 'react';

import './styles.scss';

const Contact = () => (
    <section className="container-buy">
        <div className="content">
            <h1>Nossas lojas</h1>
            <p>A Use Sempre possui 179 lojas em todos os estados do Brasil</p>

            <div id="search-store">
                <input type="text" placeholder="DIGITE SEU CEP" />
                <p>ou</p>

                <div className="state">
                    <select>
                        <option>Estado</option>
                        <option value="RS">Rio Grande do Sul</option>
                    </select>

                    <select>
                        <option>Cidade</option>
                        <option value="POA">Porto Alegre</option>
                    </select>
                </div>
            </div>
        </div>
    </section>
);

export default Contact;