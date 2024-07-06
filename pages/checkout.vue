<template>
  <div class="ccontainer">
    <div class="cmaincontainer">
      <div class="ccart-page">
        <div class="ccart-page2">
          <div class="cstartcart">
            <h1>Your Cart</h1>
          </div>
          <div class="ccartitems">
            <div v-for="item in carts" :key="item.id" class="ccart-item">
              <img :src="item.image" :alt="item.title" class="ccart-item-image">
              <div class="ccart-item-details">
                <p>{{ item.title }}</p>
                <p>Price: ${{ item.price }}</p>
                <div class="cquantity-control">
                  <button @click="updateQuantity(item, -1)">-</button>
                  <span>{{ item.quantity }}</span>
                  <button @click="updateQuantity(item, 1)">+</button>
                </div>
              </div>
            </div>
          </div>
          <div class="cendcart">
            <div class="ctotal-price">
              <p>Total Price: ${{ totalprices }}</p>
            </div>
            <nuxt-link to="/">Continue Shopping</nuxt-link>
          </div>
        </div>
      </div>
      <div class="ccheckout">
        <h1>Checkout</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for="name">Name:</label>
            <input type="text" id="name" v-model="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email:</label>
            <input type="email" id="email" v-model="email" required>
          </div>
          <div class="form-group">
            <label for="address">Address:</label>
            <textarea id="address" v-model="address" required></textarea>
          </div>
          <div class="form-group">
            <label for="payment">Payment Method:</label>
            <select id="payment" v-model="paymentMethod" required>
              <option value="">Select Payment Method</option>
              <option value="credit">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="cash">Cash on Delivery</option>
            </select>
            <button 
              class="submit" 
              type="submit" 
              :disabled="!isFormValid"
              :class="{ 'submit-disabled': !isFormValid }"
            >
              Place Order
            </button>           
          </div>
        </form>
        <nuxt-link class="mobileback" to="/">Continue Shopping</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from '~/store';

export default {
  data() {
    return {
      name: '',
      email: '',
      address: '',
      paymentMethod: ''
    };
  },
  computed: {
    isFormValid() {
      return this.name && this.email && this.address && this.paymentMethod;
    },
    carts() {
      return store.getters.getCart;
    },
    totalprices() {
      return store.getters.getTotalPrice;
    }
  },
  methods: {
    submitForm() {
      if (this.isFormValid && this.carts.length > 0) {
        window.alert('Your Order has been placed! ');
        this.$router.push('/');
        store.commit('setCart', []);
        store.commit('setTotalPrice', 0);
      } else {
        window.alert('Please add items to the cart and then fill in all the details!');
      }
    },
    updateQuantity(product, amount) {
      const cartItem = this.carts.find(item => item.id === product.id);
      if (cartItem) {
        cartItem.quantity += amount;
        if (cartItem.quantity <= 0) {
          this.removeFromCart(product.id);
        } else {
          this.updateCartItem(cartItem);
        }
        this.updateTotalPrice();
      }
    },
    updateCartItem(updatedItem) {
      const newCart = [];
for (const item of this.carts) {
  if (item.id === updatedItem.id) {
    newCart.push(updatedItem);
  } else {
    newCart.push(item);
  }
}
      store.commit('setCart', newCart);
    },
    removeFromCart(itemId) {
      const newCart = this.carts.filter(item => item.id !== itemId);
      store.commit('setCart', newCart);
    },
    updateTotalPrice() {
      const newTotalPrice = this.carts.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
      store.commit('setTotalPrice', newTotalPrice);
    }
  },
};
</script>

  
  <style>
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.ccontainer {
    display: flex;
    height: 100vh;
}
.cmaincontainer {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.1);
}
.ccheckout {
  position: fixed;
  top: 0;
  right: 0;
  width: 30%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #34495e;
  z-index: 1000;
  overflow-y: auto;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
}
.ccheckout form {
    width: 80%;
}
.ccheckout .form-group {
    margin-bottom: 20px;
}
.ccheckout label {
    display: block;
    margin-bottom: 5px;
}
.ccheckout input,
.ccheckout textarea,
.ccheckout select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.submit{
  background-color: #e74c3c;
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  margin: 20px 0;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 10px;
  text-decoration:none;
  text-align: center;
    /* display: flex;
    justify-content: center;
    align-items: center; */
    position:fixed;
    bottom: 60PX;
    /* right: 0; */
    right: 140px;
}
.submit:hover {
    background-color: #c0392b;
    transform: scale(1.05);
}
.ccart-page2 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  height: 100vh;
  background-color: whitesmoke;
  color: #34495e;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  overflow-y: auto;
}

.cstartcart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: whitesmoke;
  padding: 20px 0;
}
.ccart-page h1 {
  padding: 30px;
  font-size: 40px;
  color: black;
}
.cendcart {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: whitesmoke;
  width: 100%;
  padding: 20px;
}
.ctotal-price {
  /* position: fixed; */
  font-size: 20px;
  font-weight: 700;
  /* margin: 10px; */
  /* background-color: white */
}
.ccartitems {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow-y: auto;
  /* margin-top: 100px;
  margin-bottom: 120px; */
  padding-top: 20px;
  height: calc(100vh - 220px); /* Adjust based on your header and footer height */
}

.ccart-item {
  background-color: white;
  color: #34495e;
  padding: 15px;
  margin: 10px;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  /* min-width: 600px; */
}

.ccart-item-image {
  height: 50px;
  width: 50px;
  object-fit: contain;
  margin-right: 10px;
}

.ccart-item-details {
  flex: 1;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
}

.cquantity-control {
  display: flex;
  align-items: center;
  /* justify-content: center; */
}

.cquantity-control button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
}

.cquantity-control button:hover {
  background-color: #2980b9;
}
.submit-disabled {
  background-color: #95a5a6;
  cursor: not-allowed;
}

.submit-disabled:hover {
  background-color: #95a5a6;
  transform: none;
}
.mobileback{
  display: none;
}
@media (max-width: 768px){
  .ccheckout{
    width: 100%;
  }
  .mobileback{
    display: block;
    position: fixed;
    bottom: 50px;
  }
  .submit{
    position: fixed;
    width: 90%;
    left: 0;
    right: 0;
    margin: 20px;
  }

}

</style>