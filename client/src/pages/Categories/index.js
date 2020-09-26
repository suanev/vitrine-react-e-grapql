import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProducts } from "../../queries/queries";
import { useQuery } from "react-apollo";
import { Loading } from '../../components/Loading';
import truncate from '../../utils/truncate';

import './styles.scss';

const Category = () => {
    const { data, loading } = useQuery(getProducts);

    const { id } = useParams();

    return (
        loading
            ? (<Loading />)
            : (
                <section className="container-category">
                    <h2 className="title-categories">Lista Produtos</h2>
                    <div className="container">
                        <div className="small-container">
                            <div className="row">
                                {data.products.filter(product => product.category === id)
                                    .map(product => {
                                        return (
                                            <div className="col-4" key={product.id}>
                                                <img src={product.img} alt={product.name} />
                                                <h4>{truncate(product.name, 17)}</h4>
                                                <Link to={`/products/${product.id}`}>
                                                    <button>Ver mais</button>
                                                </Link>
                                            </div>
                                        )
                                    })}
                            </div>
                        </div>
                    </div>
                </section>)
    )
};

export default Category;