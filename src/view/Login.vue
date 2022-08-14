<script setup>
import { ref, onMounted } from 'vue'
import Swal from "sweetalert2"
import { storeToRefs } from 'pinia'
import { userStore } from '../store/user.js'


let store = userStore()

let isPassword = ref(true)
let showRegister = ref(false)
let regName = ref("")
let regPass = ref("")
let username = ref("")
let password = ref("")



const register = async () => {
  Swal.showLoading()
  let respon = await store.register(regName.value, regPass.value)
  showRegister = ref(false)
  if(respon){
    Swal.close();
    Swal.fire(
    'Good job!',
    'Register Success',
    'success'
  )
  }else{
    Swal.fire(
        'Fail !',
        'Register Failed',
        'error'
      )
  }
}

const login = async () => {
  Swal.showLoading()
  await store.login(username.value, password.value)
  Swal.close();
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
    <w-button class="ma1" color="primary" text md @click="showRegister = true">register</w-button>
    </w-card>

    <w-dialog
      width=50.0em
      v-model="showRegister"
      title="Register User">
      
      <w-input
        class="mb1"
        label="username"
        v-model="regName"
        round
        shadow>
      </w-input>

      <w-input
        class="mb1"
        label="password"
        v-model="regPass"
        round
        shadow>
      </w-input> 

      <w-button class="ma1" bg-color="success" 
      @click="register(); showUpload=false; 
      $waveui.notify('Success!', 'success', 3000)">
        <w-icon class="mr1"  >wi-check</w-icon>
        Register
      </w-button>

    </w-dialog>

  </div>

  


</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.conlogin {
  padding: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  width: 50%;
  height: 50%;
}
</style>
