<script setup>
import { onMounted } from "@vue/runtime-core";
import { userStore } from '../store/user.js';

const imgts = "https://media.hitekno.com/thumbs/2021/11/26/63590-honkai-impact-3-v53/730x480-img-63590-honkai-impact-3-v53.jpg"
const imgts1 = "https://i.pinimg.com/474x/42/83/94/42839458bcd5b83c12e749fb0a525df9.jpg"
const store = userStore()

const imgurl = (url) => {
  return String(url)
}

onMounted(()=> {
// store.imgUser()
})
</script>

<template>

  <div class="header">
    <h1>Header</h1>      
  </div>

  <div class="body"> 
    <div class="img-bd">
      <img :src="imgts" class="card">
      <img :src="imgts" class="card">
      <img :src="imgts" class="card">
      <img :src="imgts" class="card">
      <img :src="imgts" class="card">
      <img :src="imgts" class="card">
      <img :src="imgts" class="card">
      <img :src="imgts" class="card">
      
    </div>
    <!-- <w-card :image="imgts" >

      <template #actions>
        <div class="spacer"></div>
        <w-button>Read more</w-button>
      </template>
    </w-card> -->
  </div>
  
  <!-- <div :gutter="1" v-for="img in store.img" class="bg">
    <img :src="imgurl(img.url)">
  </div> -->
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

}

.img-bd {
  margin: 0;
  background-color: black;
  width: 80%;
  max-height: 1000px;
  min-height: 500px;
}

.body {
  background-color: #e2ecfc;
  width: 100%;
  max-height: 100;
  margin: auto;
  display: flex;
  justify-content: center;
}

.card {
  width: 400px;
  height: 300px;
  padding: 10px;
  
}



.bg {
  background-color: #1d180f;
  height: 90%;
  width: 90%;
  ;
}
</style>
