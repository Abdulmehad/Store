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
              <a href="#"><img src="https://static.independent.co.uk/2024/01/23/09/mens%20fashion%20week.png?width=1200&height=900&fit=crop" alt="Men's Clothing"> Men's Clothing</a>
              <a href="#"><img src="https://t3.ftcdn.net/jpg/00/05/04/34/360_F_5043459_YVGGYgI4PTUJcD2IoXi6yb1wU7kLrtIF.jpg" alt="Electronics"> Electronics</a>
              <a href="#"><img src="https://cdn.shopify.com/s/files/1/0162/2116/files/received_511517509874482.jpg?v=1620135114" alt="Women's Clothing"> Women's Clothing</a>
              <a href="#"><img src="https://nicandsyd.com/cdn/shop/collections/handbags-hero_1024x1024.jpg?v=1633378855" alt="Fashion"> Fashion</a>
            </div>
          </div>
          <button class="gotocheckout" @click="checkout" >Checkout</button>
        </div>
      </header>
      <slot/>
    </div>
  </template>
  <script>
  export default {
    methods: {
      checkout() {
        this.$router.push('/checkout');
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
}

    
</style>  