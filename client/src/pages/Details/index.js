import React from 'react';
import { useQuery } from "react-apollo";
import { getProductByID } from "../../queries/queries";
import { useParams } from 'react-router-dom';
import { Loading } from '../../components/Loading';

import './styles.scss';

const Details = () => {
    const { id } = useParams();

    const { data, loading } = useQuery(getProductByID, { variables: { id: id } });

    return (
        loading
            ? (<Loading />)
            : (
                <section className="container-details">
                    <div className="container">
                        <div className="small-container single-product">
                            <div className="row">
                                {data.product.map(product => {
                                    return (
                                        <div key={product.id} className="product">
                                            <div className="col-2">
                                                <img src={product.img} alt={product.name} />
                                            </div>
                                            <div className="col-2">
                                                <h1>{product.name}</h1>
                                                <h4>{product.price}</h4>

                                                <h3>Descrições do produto</h3>
                                                <p>{product.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </section>)
    )
};

export default Details;