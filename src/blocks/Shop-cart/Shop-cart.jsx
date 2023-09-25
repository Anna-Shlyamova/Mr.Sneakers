import React from 'react';

export const ShopCart = () =>{
    return(
        <div className="overlay">
            <div className='ShopCart p-30 d-flex flex-column'>
                <h2>Корзина</h2>
                <div className="ShopCart__items mb-40">
                    <div className='CartItem d-flex align-center p-10 mb-20'>
                        <img className='mr-20' width={70} height={70} src= './image/sneak1.jpg' alt='sneakers'/>
                        <div className='CartItem__text d-flex flex-column mr-10'>
                            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
                            <b>12 999 руб.</b>
                        </div>
                        <button className='CartItem__delete-button'><img width={32} height={32} src= './image/delete-button.svg' alt='delete from cart button'/></button>
                    </div>
                </div>
                <div className="ShopCart__footer">
                    <div className="d-flex align-center mb-20">
                        <span className="ShopCart__footer-names">Итого:</span>
                        <div className="ShopCart__footer-dots ml-5 mr-5"></div>
                        <b>12000 руб.</b>
                    </div>
                    <div className="d-flex align-center mb-25">
                        <span className="ShopCart__footer-names">Налог 5%</span>
                        <div className="ShopCart__footer-dots ml-5 mr-5"></div>
                        <b>1100 руб.</b>
                    </div>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
};