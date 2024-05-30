import axios from 'axios'
import { defineNuxtPlugin, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin(async (nuxtApp) => {
  const config = useRuntimeConfig();

  try {
    const axiosInstance = axios.create({
      baseURL: config.public.apiBase,
    });

    // Attach token to requests if available
    axiosInstance.interceptors.request.use((config) => {
      const keycloak = nuxtApp.$keycloak;
      if (keycloak && keycloak.token) {
        config.headers.Authorization = `Bearer ${keycloak.token}`;
      }
      return config;
    });

    // Provide axios instance globally
    nuxtApp.provide('axios', axiosInstance);
  } catch (error) {
    console.error('Error initializing Axios plugin:', error);
  }
});
