<template>
    <div>
      <header class="header1">
        <div class="left-section">
          <font-awesome-icon class="img1" icon="cart-shopping" />
          <h1 class="he">MY Store</h1>
        </div>
        <div class="right-section">
          <div class="dropdown">
            <button class="dropbtn">Categories</button>
            <div class="dropdown-content">
              <a href="#" @click="selectCategory('')"><img src="https://th.bing.com/th/id/OIP.u-1dWGTM7biu51ZxKpOIiAHaFL?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Fashion"> All</a>
              <a href="#" @click="selectCategory('category/men\'s clothing')"><img src="https://th.bing.com/th/id/OIP.DLw5_Nc1QZX5WaejKuiP8QHaE8?w=269&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Men's Clothing"> Men's Clothing</a>
              <a href="#" @click="selectCategory('category/electronics')"><img src="https://th.bing.com/th/id/OIP.XADlGa0yS4rkbmyRvTvezAHaFj?w=252&h=189&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Electronics"> Electronics</a>
              <a href="#" @click="selectCategory('category/women\'s clothing')"><img src="https://th.bing.com/th/id/OIP.B_JL-zUDnkfFcQLaDcOvOAAAAA?w=193&h=192&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Women's Clothing"> Women's Clothing</a>
              <a href="#" @click="selectCategory('category/jewelery')"><img src="data:image/jpeg;base64,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" alt="jewellery"> Jewellery</a>
            </div>
          </div>
          <button class="gotocheckout" @click="checkout" >Checkout</button>
        </div>
      </header>
      <slot/>
    </div>
  </template>
<script>
import store from '../store';

export default {
  // data() {
  //   return {
  //     selectedCategory: null,
  //   };
  // },
  methods: {
    // emptyitems(){
    //     localStorage.removeItem('cart');
    //     localStorage.removeItem('totalPrice');
    //   },
    checkout() {
      this.$router.push('/checkout');
    },
    selectCategory(category) {
      // this.selectedCategory = category;
      store.commit('setCategory', category);
    }
  }
}
</script>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header1 {
  width: 100%;
  height: 100px;
  background: #1476D1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
}

.left-section {
  display: flex;
  align-items: center;
}

.right-section {
  display: flex;
  align-items: center;
}

.he {
  color: white;
  font-family: Poppins;
  margin-left: 10px;
}

.img1 {
  width: 40px;
  height: 44px;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  background-color: #1476D1;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  font-family: Poppins;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content img {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}

.shopping-cart {
  width: 40px;
  height: 40px;
  margin-left: 20px;
  cursor: pointer;
}@media (max-width: 768px) {
  .header1 {
    height: 60px;
    padding: 0 10px;
  }

  .left-section {
    gap: 8px;
  }

  .img1 {
    width: 30px;
    height: 34px;
  }

  .he {
    font-size: 14px;
    margin-left: 6px;
  }

  .dropbtn {
    font-size: 14px;
    padding: 8px 12px;
  }

  .dropdown-content {
    min-width: 180px;
  }

  .dropdown-content a {
    font-size: 14px;
    padding: 8px 12px;
  }

  .dropdown-content img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  .shopping-cart {
    width: 28px;
    height: 28px;
    margin-left: 12px;
  }
}
    
</style>  