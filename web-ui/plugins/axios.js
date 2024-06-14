import axios from 'axios';
import { defineNuxtPlugin, useRuntimeConfig } from '#imports';

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig().public;
  const keycloak = nuxtApp.$keycloak;

  const axiosInstance = axios.create({
    baseURL: config.apiBase,
  });

  // Attach token to requests if available
  axiosInstance.interceptors.request.use((config) => {
    if (keycloak && keycloak.token) {
      config.headers.Authorization = `Bearer ${keycloak.token}`;
    }
    return config;
  });

  // Provide axios instance globally
  nuxtApp.provide('axios', axiosInstance);
});
