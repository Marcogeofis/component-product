import { Product } from './componentes/product';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='moob-store'><strong>MOOB</strong> store the best products</h1>
      <div className='container-products'>
        <Product 
          src='watch'
          nombre='Rolex-Gold'
          precio='1000'
          stock='3'
          offer='10'
        /> 
        <Product 
          src='shouse'
          nombre='Nike sport'
          precio='300'
          stock='5'
          offer='5'
        />  
        <Product 
          src='phone'
          nombre='Phone Txls'
          precio='500'
          stock='2'
          offer='8'
        />   
      </div>
      
    </div>
  );
}

export default App;
