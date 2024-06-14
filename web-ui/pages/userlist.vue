<template>
  <div class="container">
    <div class="user-list-header">
      <h2>ユーザー一覧User list</h2>
      <input type="text" placeholder="検索search" v-model="searchTerm" class="search-input" />
      <button class="download-all-button" @click="downloadAll">すべてダウンロードDownload all</button>
    </div>
    <table class="user-list-table">
      <thead>
        <tr>
          <th>カードID</th>
          <th>ユーザ名</th>
          <th>ダウンロード</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="users.length === 0">
          <td colspan="3">No data available</td>
        </tr>
        <tr v-for="user in filteredUsers" :key="user.id">
          <td>{{ user.cardId }}</td>
          <td>{{ user.name }}</td>
          <td><button @click="download(user)">Download</button></td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <span>Items per page:</span>
      <select v-model="itemsPerPage">
        <option v-for="n in [10, 25, 50, 100]" :key="n">{{ n }}</option>
      </select>
      <span>{{ paginationInfo }}</span>
      <button @click="prevPage" :disabled="currentPage === 1">«</button>
      <button @click="nextPage" :disabled="currentPage === totalPages">»</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const users = ref([
  // Add user data here
]);

const searchTerm = ref('');
const itemsPerPage = ref(100);
const currentPage = ref(1);

const filteredUsers = computed(() => {
  return users.value.filter(user => user.name.includes(searchTerm.value));
});

const totalPages = computed(() => {
  return Math.ceil(filteredUsers.value.length / itemsPerPage.value);
});

const paginationInfo = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value + 1;
  const end = Math.min(currentPage.value * itemsPerPage.value, filteredUsers.value.length);
  return `${start}-${end} of ${filteredUsers.value.length}`;
});

const goBack = () => {
  router.back();
};

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};

const download = (user) => {
  // Implement download logic
};

const downloadAll = () => {
  // Implement download all logic
};
</script>

<style scoped>
.container {
  padding: 20px;
  background-color: #333;
  color: #fff;  
  position: relative
}

.return-button {
  background: none;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
}

h1 {
  margin-top: 0;
}

.user-list-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-input {
  padding: 5px;
}

.user-list-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.user-list-table th,
.user-list-table td {
  border: 1px solid #fff;
  padding: 10px;
  text-align: left;
}

.pagination {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
}

.pagination select {
  margin-left: 5px;
}

.pagination button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
}

.footer {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
}

.download-all-button {
  background: none;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  top:0px;right:0px;}
</style>
