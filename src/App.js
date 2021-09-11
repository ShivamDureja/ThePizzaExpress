import React, {useState} from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Layout/Header';
import Meals from './Components/Meals/Meals';
import CartProvider from './Store/CartProvider';



function App() {

  const [CartIsShown,setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }


  return (
   <CartProvider>
     {CartIsShown && <Cart onClose={hideCartHandler}/>}
     <Header onShowCart = {showCartHandler}></Header>
     <main>
       <Meals/>
     </main>
   </CartProvider>
  );
}

export default App;
