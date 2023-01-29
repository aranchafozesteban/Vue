<template>
    <div class="detail">
      <h1>Hola</h1>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import NavBar from '../components/NavBar.vue'
  
  export default defineComponent({
    name: 'Detail',
    components: {
    NavBar,
    }
  });
  </script>
  <style scoped>
  
  </style>
  