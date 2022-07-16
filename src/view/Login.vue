<script setup>
import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { userStore } from '../store/user.js'


const store = userStore()
const isPassword = ref(true)
const username = ref("")
const password = ref("")



const login = () => {
  
  store.username = username.value
  store.password = password.value
  store.login()
  console.log("LOGIN BERHASIL")
}
</script>

<template>
  <div class="conlogin">
    <w-card class="login" title="Login" title-class="blue-light5--bg">
    <w-input
      name="username"
      class="mb2"
      label="Username"
      label-position="left"
      outline
      v-model="username"
      inner-icon-left="mdi mdi-account">
    </w-input>

    <w-input class="mb2"
      label="Password"
      :type="isPassword ? 'password' : 'text'"
      label-position="left"
      outline
      v-model="password"
      :inner-icon-right="isPassword ? 'mdi mdi-eye-off' : 'mdi mdi-eye'"
      @click:inner-icon-right="isPassword = !isPassword">
    </w-input>

    <w-button class="ma1" bg-color="success" shadow @click="login">Login</w-button>
    <w-button class="ma1" color="primary" text md>register</w-button>
    </w-card>
  </div>


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.conlogin {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items:center;
}

.login {
  width: 50%;
  height: 50%;
}
</style>
