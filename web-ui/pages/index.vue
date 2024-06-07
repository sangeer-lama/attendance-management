<template>
  <div>
    <h1>Welcome to Nuxt with Keycloak</h1>
      <p>Welcome </p>
  </div>
</template>

<script setup>
</script>
<!-- import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#imports';

const isLoading = ref(true);
const isAuthenticated = ref(false);
// const keycloak = ref(null);
// const username = ref('');

const initializeKeycloak = async () => {
  try {
    const { $keycloak } = useNuxtApp();
    if (!$keycloak) {
      throw new Error('Keycloak instance not found');
    }
    console.log("Before checking if authenticated or not ", $keycloak);
    // if (!keycloak.value.authenticated) {
    //   await keycloak.value.init({ onLoad: 'login-required' });
    // }
    // isAuthenticated.value = keycloak.value.authenticated;
    // console.log(isAuthenticated.value);
  } catch (error) {
    console.error("Authentication Failed ------", error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(async () => {
  await initializeKeycloak();
}); -->
