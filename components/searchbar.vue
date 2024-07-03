<template>
    <div class="searchbar-container">
      <input
        type="text"
        v-model="internalQuery"
        @input="emitInput"
        placeholder="Search products..."
      />
      <!-- <input
        type="text"
        v-bind:value="internalQuery"
        v-on:input="internalQuery = $event.target.value"
        @input="emitInput"
        placeholder="Search products..."
      /> -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        internalQuery: ''
      };
    },
    methods: {
      emitInput() {
        // Emit the current value to the parent compo nent 
        this.$emit('inputt', this.internalQuery);
      }
    }
  };
  </script>
  
  <style scoped>
  .searchbar-container {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
  }
  
  .searchbar-container input {
    width: 100%;
    padding: 15px 20px;
    font-size: 16px;
    border: none;
    border-radius: 30px;
    background-color: white;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
  }
  
  .searchbar-container input:focus {
    outline: none;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
  
  .searchbar-container input::placeholder {
    color: #95a5a6;
  }
  
  @media (max-width: 768px) {
    .searchbar-container {
      max-width: 90%;
    }
    
    .searchbar-container input {
      font-size: 14px;
      padding: 12px 16px;
    }
  }
  </style>
  <!-- 
  User Types in Searchbar:
  The v-model directive in the searchbar component updates its local internalQuery data property.

  Emit Input Event:
  The emitInput method of the searchbar component emits an input event with the current value of internalQuery.

  Parent Component Receives Event:
  The parent component listens for the input event from the searchbar and calls the updateSearchQuery method.
  
  Update Search Query:
  The updateSearchQuery method updates the searchQuery data property in the parent component with the new value.
 
  Filtered Products: 
  The filteredProducts computed property in the parent component automatically recalculates based on the updated searchQuery, 
  filtering the products accordingly. 
  -->