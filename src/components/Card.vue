<script setup>

import {ref, onMounted } from "@vue/runtime-core";
import { userStore } from '../store/user.js';
import Dialog from "../components/Dialimg.vue"

const store = userStore()
const showImg = ref(false)

const props = defineProps({
  size: String,
  imgurl: String,
  category: String,
  idx: 0,
  id: 0,
})
</script>

<template>
<div v-if="idx % 3 === 0" class="cardsmall"  @click="showImg = true">
   <img :src="imgurl" alt="img" class="imgsize">
    <Dialog
    v-model="showImg"
    :imgurl="imgurl"
    :category="category"
    :idImg="id"
    />
</div> 
<div v-else-if="idx % 2 === 0" class="cardlarge"  @click="showImg = true">
   <img :src="imgurl" alt="img" class="imgsize">
   <Dialog
    v-model="showImg"
    :imgurl="imgurl"
    :category="category"
    :idImg="id"
    />
</div> 
<div v-else class="cardmedium"  @click="showImg = true">
    <img :src="imgurl" alt="img" class="imgsize">
    <Dialog
    v-model="showImg"
    :imgurl="imgurl"
    :category="category"
    :idImg="id"
    />
</div>

</template>

<style scoped>

.imgsize {
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 7%;

}

.cardsmall {
    margin: 10px;
    padding: 0;
    border-radius: '16px';
    grid-row-end: span 40;
    border-radius: 10%;
}


.cardmedium {
    margin: 10px;
    padding: 0;
    border-radius: '16px';
    grid-row-end: span 45;
    border-radius: 10%;
}

.cardlarge {
    margin: 10px;
    padding: 0;
    border-radius: '16px';
    grid-row-end: span 50;
    border-radius: 10%;
}
</style>
