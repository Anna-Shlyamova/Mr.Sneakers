import React from 'react';
import {Card} from './Card';

export const CardsGrid = ({items, searchValue, onChangeSearch}) =>{
    return(
        <div className='CardsGrid'>
            <div className='CardsGrid__top d-flex justify-between align-center'>
                <h1>Все кроссовки</h1>
                <div className='CardsGrid__search  d-flex align-center p-10'>
                    <img className='mr-15' width={15} height={15} src= './image/search.svg' alt='search'/>
                    <input value={searchValue} onInput={onChangeSearch} placeholder='Поиск...'/>
                </div>
            </div>
            <ul className="CardsGrid-list">
          {
            items.filter((obj)=>{
                const lowerName = obj.name.toLowerCase();
                return(lowerName.includes(searchValue.toLowerCase()));
            }).map((obj)=>(<li key ={obj.id}><Card {...obj}/></li>))
          }         
        </ul>
        </div>
    );
};