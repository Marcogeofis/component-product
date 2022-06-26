import React from 'react';
import '../estilos/product.css';

function Product(props){
    return (
        <div className='container-product'>
            <div className='container-product-image'>
                <img src={require(`../imagenes/product-${props.src}.jpg`)} />
            </div>
            <div className='product-info'>
                <p className='product-name'>{props.nombre} 12k</p>
                <label className='start'>&#9733;&#9733;&#9733;&#9733;&#9733;</label>
                <p className='product-price'>{`$${props.precio}`}</p>
                <div className='product-offer'>
                    <p className='product-stock'>En existencia {props.stock}</p>
                    <p className='offer'>Ahorra {props.offer}%</p>
                </div>
                <div className='container-buttons'>
                    <button className='buton-buy'>Comprar</button>
                </div>
            </div>
        </div>

    );
}

export {Product};