import {Header} from './blocks/Header/Header';
import {Card} from './blocks/Cards-grid/Card';
import {CardsGrid} from './blocks/Cards-grid/Cards-grid';
import {ShopCart} from './blocks/Shop-cart/Shop-cart';
function App() {
  return (
    <div className="App">
      <div className='wrapper p-45'>
        <ShopCart/>
        <Header/>
        <CardsGrid/>
        <Card/>
      </div>
    </div>
  );
}

export default App;
