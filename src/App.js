import {Header} from './blocks/Header/Header';
//import {Card} from './blocks/Cards-grid/Card';
import {CardsGrid} from './blocks/Cards-grid/Cards-grid';
import {ShopCart} from './blocks/Shop-cart/Shop-cart';
import { useState } from 'react';

function App() {
  const sneakers = [{id : 1,name:'Мужские Кроссовки Nike Blazer Mid Suede', price:12000 , img: './image/sneak1.jpg'},
  {id: 2,name:'Мужские Кроссовки Nike Air Max 270', price:11000 , img: './image/sneak1.jpg'},
  {id: 2,name:'Мужские Кроссовки Nike Air Max 270', price:11000 , img: './image/sneak1.jpg'},
  {id: 2,name:'Мужские Кроссовки Nike Air Max 270', price:11000 , img: './image/sneak1.jpg'},
  {id: 2,name:'Мужские Кроссовки Nike Air Max 270', price:11000 , img: './image/sneak1.jpg'}];
  const [searchValue, setSearchValue] = useState('');
  const onChangeSearch = (event) =>{
    setSearchValue(event.target.value);
  }
  return (
    <div className="App">
      <div className='wrapper p-45'>
        <ShopCart/>
        <Header/>
        <CardsGrid items={sneakers} searchValue={searchValue} onChangeSearch={onChangeSearch}/>
      </div>
    </div>
  );
}

export default App;
