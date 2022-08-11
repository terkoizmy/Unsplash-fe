<script setup>
import Swal from "sweetalert2"
import {ref, onMounted, onUpdated, onBeforeUpdate } from "@vue/runtime-core";
import { useRouter, useRoute } from 'vue-router'
import { userStore } from '../store/user.js';
import 'font-awesome/css/font-awesome.min.css'
import Card from "../components/Card.vue"

const store = userStore()
const router = useRouter()
const showUpload = ref(false)
const ImgUrl = ref("")
const Category = ref("")
const updateKey = ref(0)
const filter = ref("")

const imgurl = (url) => {
  return String(url)
}

const upload = async () => {
  Swal.showLoading()
  let respon = await store.upload(ImgUrl.value, Category.value)
  ImgUrl.value = ""
  Category.value = ""
  if(respon){
    Swal.close();
    Swal.fire(
    'Good job!',
    'Upload image Success',
    'success'
  )
  }else{
    Swal.fire(
        'Fail !',
        'Upload image Error',
        'error'
      )
  }

}

const logout = async () => {
  store.token = ""
  store.img = []
  router.push("/login")
}

onMounted(()=> {
  store.checktoken()
  store.imgUser()
})

onBeforeUpdate(()=> {
  store.imgFilter(filter.value)
})

</script>

<template>

  <div class="header">
    <div class="h-left"> 
      
      <h1> <w-icon
        size=1.3em
        color="primary">
        fa fa-user-circle
      </w-icon> {{store.username}} Galery</h1>
    </div>

    <div class="h-mid">
      <w-input
        class="mb2"
        label="Filter Image"
        label-position="inside"
        v-model="filter"
        outline
        inner-icon-left="wi-search">
      </w-input>
    </div>

    <div>
      <w-button
        class="ma1"
        bg-color="success"
        color="yellow-light2"
        xl
        @click="showUpload = true">
        Upload
      </w-button>

      <w-button
        class="ma1"
        bg-color="error"
        color="yellow-light2"
        xl
        @click="logout()">
        Logout
      </w-button>
    </div>
    
  </div>

  <div class="body"> 
      
    <w-dialog
      width=50.0em
      v-model="showUpload"
      title="Upload">
      
      <w-input
        class="mb1"
        label="Img Url"
        v-model="ImgUrl"
        round
        shadow>
      </w-input>

      <w-input
        class="mb1"
        label="Category"
        v-model="Category"
        round
        shadow>
      </w-input> 

      <w-button class="ma1" bg-color="success" 
      @click="upload(); showUpload=false">
        <w-icon class="mr1"  >wi-check</w-icon>
        Save
      </w-button>

    </w-dialog>

    <w-grid columns="3" gap="2" class="wrapper" >

      <Card 
      v-for="(img, index) in store.img"
      :key="img.id"
      :idx="index"
      :id="img.id"
      :imgurl="imgurl(img.imgUrl)"
      :category="img.category"
      class="box" />
      
    </w-grid>

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

.header {
  padding: 20px;
  display: flex;
  justify-content: space-between;
}

.h-mid {
  width: 400px;
}

.h-left {
  display: flex;
  flex-direction: row;
}

.img-bd {
  margin: 0;
  padding: 0;
  background-color: black;
  position: absolute;
  width: 80%;
  display: 'grid';
  grid-template-columns: repeat(auto-fill);
  grid-auto-rows: 10px;
}

.body {
  max-height: 100;
  display: flex;
  justify-content: center;
}

.card {
  margin: 0;
  width: 350px;
  padding: 10px;
  grid-row-end: span 24;
}



.bg {
  background-color: #1d180f;
  height: 90%;
  width: 90%;
  ;
}

.wrapper {
  padding: 12px;
  
}

.box {
  background-color: #e2ecfc;
  display: grid;
  grid: auto-flow 200px;
  grid-template-columns: repeat(auto-fill, 339px);
  grid-auto-flow: column;
  grid-auto-columns: 200px;
  grid-auto-rows: auto;
}

.asd {
  object-fit: cover;
}

</style>


