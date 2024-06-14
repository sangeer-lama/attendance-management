<template>
      <main>
        <button @click="goToUserlist" class="userlist-button">ユーザー一覧 Userlist</button>
      </main>
  </template>
  
  <script>
  export default {
    methods: {
      goToUserlist() {
        this.$router.push('/userlist');
      }
    }
  }
  </script>
  
  <style>
 
  
  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-grow: 1;
  }
  
  .userlist-button {
    background-color: #444;
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1.5rem;
  }
  
  .userlist-button:hover {
    background-color: #555;
  }
  </style>
  