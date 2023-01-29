<template>
    <div v-if="user">
      <h1>Nombre: {{ user.name }}</h1>
      <h2>Email:{{ user.email }}</h2>
      <img :src="user.avatar" alt="">
      <h2>Role:{{ userRole }}</h2>
    </div>
    <div v-else>
      Loading...
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {AxiosResponse} from "axios";
  import shopypopApi from "../api/shopypopApi";
  import {User} from "../models/users";

  
  
  export default defineComponent({
    props:{
      id:{
        type: Number,
        required: true,
      },
      userRole:String
    },
    setup(props){
      let user = ref<User>();
      shopypopApi
        .get<unknown, AxiosResponse<User>>(`/user/${props.id}`)
        .then((resp) => user.value = resp.data);
      return {user}
    },
  });
  </script>
  <style scoped>
  
  </style>