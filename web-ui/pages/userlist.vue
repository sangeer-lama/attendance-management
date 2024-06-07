<template>
    <div class="container">
      <header>
        <button class="return-button" @click="goBack">← RETURN</button>
        <h1>出退勤管理Web(attndnc mgt)</h1>
        <div class="controls">
          <div>
            <label for="year">年year</label>
            <select id="year" v-model="year">
              <option v-for="y in years" :key="y" :value="y">{{ y }}</option>
            </select>
          </div>
          <div>
            <label for="month">月month</label>
            <select id="month" v-model="month">
              <option v-for="m in months" :key="m" :value="m">{{ m }}</option>
            </select>
          </div>
          <div>
            <label for="country">国kuni</label>
            <select id="country" v-model="country">
              <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>
        </div>
      </header>
      <main>
        <div class="userlist-header">
          <h2>ユーザー一覧</h2>
          <div class="search-bar">
            <input type="text" placeholder="検索">
            <button>🔍</button>
          </div>
          <a href="#" class="download-link">すべてダウンロード</a>
        </div>
        <table>
          <thead>
            <tr>
              <th>カードID</th>
              <th>ユーザ名</th>
              <th>ダウンロード</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="3">No data available</td>
            </tr>
          </tbody>
        </table>
        <div class="pagination">
          <div class="items-per-page">
            <label for="itemsPerPage">Items per page:</label>
            <select id="itemsPerPage" v-model="itemsPerPage">
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select>
          </div>
          <div class="page-info">0-0 of 0</div>
          <div class="page-navigation">
            <button disabled>⏮️</button>
            <button disabled>◀️</button>
            <button disabled>▶️</button>
            <button disabled>⏭️</button>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        year: 2020,
        month: 7,
        country: '日本nihon',
        years: [2020, 2021, 2022, 2023, 2024],
        months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        countries: ['日本nihon', 'USA', 'UK', 'China'],
        itemsPerPage: 100
      }
    },
    methods: {
      goBack() {
        this.$router.push('/');
      }
    }
  }
  </script>
  
  <style>
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1c1c1c;
    color: white;
    font-family: Arial, sans-serif;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    padding: 1rem;
    background-color: #1c1c1c;
  }
  
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1rem;
    border-bottom: 1px solid #333;
  }
  
  .return-button {
    background-color: #555;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    cursor: pointer;
    border-radius: 0.25rem;
  }
  
  .return-button:hover {
    background-color: #666;
  }
  
  .controls {
    display: flex;
    gap: 1rem;
  }
  
  .controls div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  label {
    margin-bottom: 0.5rem;
  }
  
  select {
    padding: 0.5rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 0.25rem;
  }
  
  main {
    flex-grow: 1;
    width: 100%;
  }
  
  .userlist-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid #333;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
  }
  
  .search-bar input {
    padding: 0.5rem;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 0.25rem;
  }
  
  .search-bar button {
    background-color: #555;
    color: white;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
  }
  
  .download-link {
    color: #bbb;
    text-decoration: none;
  }
  
  .download-link:hover {
    text-decoration: underline;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
  }
  
  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #333;
  }
  
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .items-per-page {
    display: flex;
    align-items: center;
  }
  
  .page-info {
    margin: 0 1rem;
  }
  
  .page-navigation button {
    background-color: #555;
    color: white;
    border: none;
    padding: 0.5rem;
    cursor: pointer;
    border-radius: 0.25rem;
    margin-left: 0.5rem;
  }
  
  .page-navigation button:disabled {
    background-color: #333;
    cursor: not-allowed;
  }
  </style>
  