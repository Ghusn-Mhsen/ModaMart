import { createContext, useState } from 'react'
import { products } from '../assets/assets'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

// eslint-disable-next-line react-refresh/only-export-components
export const ShopContext = createContext()

const ShopContextProvider = props => {
  const currency = '$'
  const delivery_fee = 10
  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(true);
  const [cartItems, setCartItems] = useState({});
  const navigate = useNavigate();

  const addToCart = (itemId, size) => {
    const cartData = structuredClone(cartItems);

    if (!size) {
      toast.error("Select Product Size !");
      return;
    }

    if (!cartData[itemId]) {
      cartData[itemId] = {};
    }

    cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;


    setCartItems(cartData);
  };
  const getTotalCount = () => {
    let count = 0;
    Object.values(cartItems).forEach(sizeObj => {

      Object.values(sizeObj).forEach(quantity => {
        count += quantity || 0;
      });
    });

    return count;
  };

  const updateQuantity = async (itemId, size, quantity) => {

    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
  }

  const getCartAmount = () => {
    let totalAmount = 0;

    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id == items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
          }
        } catch (error) {
          console.error(error)
        }
      }
    }
    return totalAmount;
  }

  const value = {
    products, currency, delivery_fee,
    search, setSearch, showSearch, setShowSearch,
    cartItems, addToCart, getTotalCount, updateQuantity,
    getCartAmount, navigate
  }

  return (

    // eslint-disable-next-line react/prop-types
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>

  )
}
export default ShopContextProvider
