<template>
  <div class="home">
    <h1>Bienvenido</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LoginComponent from '../components/LoginComponent.vue'

export default defineComponent({
  name: 'Login',
  components: {
  LoginComponent,
  },
});
</script>
<style scoped>
h1{
  font-size: 40px;
  margin-top: 20px;
}
</style>
