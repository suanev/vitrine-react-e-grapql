import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

const Categories = () => (
    <section className="container-categories">
        <h2 className="title">Categorias</h2>
        <div className="container">
            <div className="small-container">
                <div className="row">
                    <div className="col-5">
                        <Link to="/categories/1">
                            <img src="https://i.imgur.com/V82I7ZB.jpg" alt="Categoria - Top" />
                            <h4>Top</h4>
                        </Link>
                    </div>
                    <div className="col-5">
                        <Link to="/categories/2">
                            <img src="https://i.imgur.com/9zDQSbh.jpg" alt="Categoria - Bottom" />
                            <h4>Bottom</h4>
                        </Link>
                    </div>
                    <div className="col-5">
                        <Link to="/categories/3">
                            <img src="https://i.imgur.com/iL7qulK.jpg" alt="Categoria - One piece" />
                            <h4>One piece</h4>
                        </Link>
                    </div>
                    <div className="col-5">
                        <Link to="/categories/4">
                            <img src="https://i.imgur.com/AaKBfwn.jpg" alt="Categoria - Beachwear" />
                            <h4>Beachwear</h4>
                        </Link>
                    </div>
                    <div className="col-5">
                        <Link to="/categories/5">
                            <img src="https://i.imgur.com/bbssRgs.jpg" alt="Categoria - Acessórios" />
                            <h4>Acessórios</h4>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Categories;