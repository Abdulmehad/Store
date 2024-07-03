<template>
  <div class="container">
    <title>Shopping Area</title>
    <h1 class="t">Welcome to XYZ store</h1>
    <searchbar @inputt="updateSearchQuery" />
    <!-- this line listen for the input event and call the updateSearchQuery method -->
    
    <div v-for="data in filteredProducts" :key="data.id">
      <div class="card">
        <div class="second-content">
          <img :src="data.image" :alt="data.title">
        </div>
        <div class="first-content">
          <h1>{{ data.title }}</h1>
          <p><span>Price: $</span> {{ data.price }}</p>
          <button class="addtocart"  @click="addToCart(data)">Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="showcart">
      <button class="cart" @click="showCart = true">Go to Cart</button>
    </div>
    <div v-if="showCart" class="cart-page">
      <h1>Your Cart</h1>
      <div v-for="item in cart" :key="item.id" class="cart-item">
        <p>{{ item.title }} - {{ item.price }}</p>
      </div>
      <button @click="showCart = false">Back to Store</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      cart: [],
      searchQuery: '',
      showCart: false
    };
  },
  computed: {
    filteredProducts() {
      return this.products.filter(product =>
        product.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },
  methods: {
    async fetchProducts() {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      this.products = data;
    },
    addToCart(product) {
      this.cart.push(product);
    },


    // addToCart(product) {
    //   const existingItem = this.cart.find(item => item.id === product.id);
    //   if (existingItem) {
    //   existingItem.quantity++;
    //   } else {
    //   this.cart.push({ ...product, quantity: 1 });
    //   }
    // }


    // Add this method to update searchQuery based on the searchbar's emitted event
    updateSearchQuery(value) {
      this.searchQuery = value; // Update searchQuery with the emitted value
    }
  },
  watch: {
    searchQuery(newQuery, oldQuery) {
      console.log(`Search query changed from ${oldQuery} to ${newQuery}`);},
    cart: {
      handler(newCart, oldCart,very) {
      console.log('Cart updated from', oldCart, 'to', newCart,'to',very);
      },
      deep: true
    }
  
},
  mounted() {
    this.fetchProducts();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Arial', sans-serif;
}

body {
  background-color: #f0f0f0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
  padding: 40px 20px;
  min-height: 100vh;
}

.t {
  color: #2c3e50;
  font-size: 48px;
  font-weight: 700;
  margin: 30px 0;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
}

.card {
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 25px;
  width: 500px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.second-content {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.second-content img {
  height: 200px;
  width: 200px;
  object-fit: contain;
  border-radius: 10px;
}

.first-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.first-content h1 {
  font-size: 18px;
  font-weight: 600;
  color: #34495e;
  margin-bottom: 10px;
  text-align: center;
}

.first-content p {
  font-size: 16px;
  font-weight: 500;
  color: #7f8c8d;
  margin-bottom: 15px;
  text-align: center;
}

.addtocart {
  background-color: #3498db;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s ease;
  width: 100%;
}

.addtocart:hover {
  background-color: #2980b9;
}

.cart {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background-color: #2ecc71;
  color: white;
  padding: 15px 25px;
  border: none;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart:hover {
  background-color: #27ae60;
  transform: scale(1.05);
}

.cart-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1000;
  overflow-y: auto;
  padding-top: 50px;
}
.cart-page h1 {
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100%;
  text-align: center;
  background-color: #2c3e50;
  z-index: 1001;
}
.cart-item {
  background-color: white;
  color: #34495e;
  padding: 15px;
  margin: 10px ;
  border-radius: 10px;
  width: 80%;
  max-width: 400px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cart-page button {
  margin-top: 20px;
  background-color: #e74c3c;
  color: white;
  padding: 12px 25px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.cart-page button:hover {
  background-color: #c0392b;
}
</style>
