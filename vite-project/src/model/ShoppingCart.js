import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  #cartItems; 

  static #allCarts = []

  constructor() {
    this.id = getId()
    this.#cartItems = []
    ShoppingCart.#allCarts.push(this)
  }
  createItem(name,price) {
    const newItem = new CartItem(name, price);
    this.#cartItems.push(newItem);
    return newItem
  }
  getItems() {
    return [...this.#cartItems]
  }
  removeItem(id) {
    return this.#cartItems = this.#cartItems.filter(item => item.id !== id);
  }
  getTotal() {
    return this.#cartItems.reduce((total, item) => total + item.price, 0);
  }
  static listAll() {
    return [...ShoppingCart.#allCarts]
  }
  static findBy(id) {
    return ShoppingCart.#allCarts.find(cart => cart.id === id);
  }
}

export default ShoppingCart;