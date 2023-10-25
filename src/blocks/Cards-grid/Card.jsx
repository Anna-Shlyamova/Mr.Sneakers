import React from 'react';

export const Card = ({id, name, price, img}) =>{
    console.log(name);
    console.log(price);
    return(
        <div className='Card'>
            <img className='Card__favourite' src= './image/fav.svg' alt='unliked'/>
            <img className='mb-15' width={133} height={112} src= {img} alt='sneakers'/>
            <p className='mb-15'>{name}</p>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex align-center flex-column align-start'>
                    <span className='text-uppercase Card__price-name'>Цена:</span>
                    <span className='Card__price'>{price}</span>
                </div>
                <button className='Card__add-button'><img width={32} height={32} src= './image/plus-button.svg'/></button>
            </div>
        </div>
    );
};