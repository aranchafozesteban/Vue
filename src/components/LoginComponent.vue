<template>
    <div class="contenedor">
        <h1>Login</h1>
        <form id="loginForm">
            <input type="text" name="user" placeholder="Usuario" required>
            <input type="password" placeholder="Contraseña" name="password" required>
            <Button type="submit" title="submit" name="submit"> Iniciar sesión</Button>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
   name: 'loginPage',
   props:{
    msg:String,
   }
})
</script>
