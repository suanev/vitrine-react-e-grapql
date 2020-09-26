import React from 'react';
import { ReactComponent as TwitterIcon } from '../../assets/twitter.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagram.svg';
import { ReactComponent as FacebookIcon } from '../../assets/facebook.svg';
import { ReactComponent as LetterIcon } from '../../assets/letter.svg';

import './styles.scss';

const Footer = () => (
    <section className="container-footer">
        <div className="container">
            <div className="small-container">
                <div className="col-3">
                    <h4>Use Sempre</h4>
                    <p>
                        A Wear Ever é a sua loja de roupas de estilo alternativos criada para servir todos os
                        tipos de corpos. Planejadas com muito amor, as roupas que atendem do PP ao 4G são
                        produzidas 100% pela nossa equipe e confeccionadas com muito carinho. Acreditamos na
                        moda como liberdade de expressão e que não devemos nos encaixar nas roupas e sim ter
                        peças disponíveis que se encaixem em qualquer corpo.
                    </p>
                </div>
                <div className="col-3">
                    <h4>Central de Atendimento</h4>
                    <p> Em caso de dúvida, entre em contato através de um de nossos canais.</p>
                    <div className="social-medias">
                        <a href="/#" className="icon-style" title="Twitter"><TwitterIcon /></a>
                        <a href="/#" className="icon-style" title="Instagram"><InstagramIcon /></a>
                        <a href="/#" className="icon-style" title="Facebook"><FacebookIcon /></a>
                    </div>
                </div>
                <div className="col-3">
                    <h4>Envie um e-mail</h4>
                    <div className="contact">
                        <LetterIcon className="icon-style"/>
                            contato@wearever.com.br
                    </div>

                    <strong>Horário de atendimento: </strong>Segunda a sexta-feira, das 8h às 18h. Sábados e domingos, 12h às 18h.
                </div>
            </div>
        </div>
    </section>
);

export default Footer;