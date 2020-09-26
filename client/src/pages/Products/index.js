import React from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from "../../queries/queries";
import { useQuery } from "react-apollo";
import { Loading } from '../../components/Loading';
import truncate from '../../utils/truncate';

import './styles.scss';

const Products = () => {
    const { data, loading } = useQuery(getProducts);

    return (
        loading
            ? (<Loading />)
            : (
                <section className="container-products">
                    <h2 className="title-products">Produtos</h2>
                    <div className="container">
                        <div className="small-container">
                            <div className="row">
                                {data.products.map(product => (
                                    <div className="col-4" key={product.id}>
                                        <img src={product.img} alt={product.name} />
                                        <h4>{truncate(product.name, 17)}</h4>
                                        <Link to={`/products/${product.id}`}>
                                            <button>Ver mais</button>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>)
    )
};

export default Products;