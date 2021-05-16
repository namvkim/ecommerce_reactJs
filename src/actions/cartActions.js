import { ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY} from "./types";

export const addToCart = (items, product) => (dispatch) => {
  const cartItems = items.slice();
  let productAlreadyInCart = false;

  cartItems.forEach((cp) => {
    if (cp.id === product.id) {
      cp.count += 1;
      productAlreadyInCart = true;
    }
  });

  if (!productAlreadyInCart) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: ADD_TO_CART, payload: { cartItems } });
};


export const increaseQuantity= (items,index,id) =>(dispatch) =>{
  
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  let productAlreadyInCart = false;
  cartItems.forEach((item) => {
    if (item.id===id) {
      cartItems[index].count += 1;
 
      productAlreadyInCart = true;
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: INCREASE_QUANTITY, payload: { cartItems } });

};


export const decreaseQuantity= (items,index,id) =>(dispatch) =>{
  
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));

  let productAlreadyInCart = false;
  cartItems.forEach((item) => {
    if (item.id===id) {
      cartItems[index].count -= 1;
     
      productAlreadyInCart = true;
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: DECREASE_QUANTITY, payload: { cartItems } });

};




export const removeFromCart = (items, product) => (dispatch) => {
  const cartItems = items.slice().filter((a) => a.id !== product.id);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
};