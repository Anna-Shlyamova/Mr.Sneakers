import React from 'react';

export const Card = () =>{
    return(
        <div className='Card'>
            <img className='mb-15' width={133} height={112} src= './image/sneak1.jpg'/>
            <p className='mb-15'>Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex align-center flex-column align-start'>
                    <span className='text-uppercase Card__price-name'>Цена:</span>
                    <span className='Card__price'>12000 руб.</span>
                </div>
                <button className='Card__add-button'><img width={32} height={32} src= './image/plus-button.svg'/></button>
            </div>
        </div>
    );
};