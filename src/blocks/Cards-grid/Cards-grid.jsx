import React from 'react';

export const CardsGrid = () =>{
    return(
        <div className='CardsGrid'>
            <div className='CardsGrid__top d-flex justify-between align-center'>
                <h1>Все кроссовки</h1>
                <div className='CardsGrid__search  d-flex align-center p-10'>
                    <img className='mr-15' width={15} height={15} src= './image/search.svg' alt='search'/>
                    <input placeholder='Поиск...'/>
                </div>
            </div>
        </div>
    );
};