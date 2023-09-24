import React from 'react';

export const Header = () =>{
    return(
        <header className='header d-flex justify-between mb-45'>
            <div className='header-left d-flex align-center'>
                <img class='mr-15' src='./image/logo.svg' width={40} height={40} alt='logo'/>
                <div className='header-info'>
                    <h3 className='text-uppercase'>Mr. Sneakers</h3>
                    <span>Магазин лучших кроссовок</span>
                </div>
            </div>
            <div className='header-right d-flex align-center justify-between'>
                <span>RUB</span>
                <div className='d-flex align-center header-cart'>
                    <img className='mr-5'width={18} height={18} src= './image/cart.svg'/>
                    <span>1205</span>
                </div>
                <img width={18} height={18}src='./image/fav.svg'/>
                <img width={18} height={18}src='./image/user.svg'/>
            </div>
        </header>
    );
};