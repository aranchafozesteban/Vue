<template>
    <nav>
        
        <ul>
            
            <img class= "logo" src="../assets/logo.png" alt="Shopypop">
            <h1 class="Shopypop">Shopypop</h1>
            <li>
                <router-link :to ="{name: 'list'}">Productos</router-link>
            </li>
            <li>
                <router-link :to = "{name:'login'}">Login</router-link>
            </li>
            
        </ul>
    </nav>
  
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent( {
    setup(){
        return {}
    },

})
</script>

<style>
nav{
    min-height: 40px;
    background-color: black;
}
.Shopypop{
    color: aquamarine;
    float: left;
    font-size: 20px;
    
}
ul{
    list-style: none;
    padding: 15px;
    margin-bottom: 20px;
   
}
li{
    font-weight: bold;
    margin-left: 25px;
    float:right;
    display:flex;
}
a{
    color: white;
    text-decoration: dotted;
}
a:visited{
    color: white;
}
.logo{
width: 50px;
height: 50px;
float:left;
margin-right: 35px;
}
</style>