<script setup>
import {ref, onMounted, onUpdated, onBeforeUpdate } from "@vue/runtime-core";
import { userStore } from '../store/user.js';
import Swal from "sweetalert2"

const store = userStore()
const updateKey = ref(0)

const dltimg = async (id) => {
    Swal.showLoading()
    let respon = await store.dltImg(id)
    console.log("Delete Berhasil")
    if(respon){
        Swal.close();
        Swal.fire(
        'Good job!',
        'Delete image Success',
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

const props = defineProps({
  imgurl: String,
  category: String,
  idImg: 0,
})
</script>

<template>
    <w-dialog
    :key="updateKey"
    class="dialog"
    width=50.0em
    :title="category">
        <img :src="imgurl" alt="img" class="img-dlg">
        <w-confirm 
        :cancel="false"
        question="Are you sure you want to delete this?"
        :confirm="{ bgColor: 'green-dark1', color: 'white', label: 'Yes' }"
        @confirm="dltimg(idImg)">
        Delete
        </w-confirm>
    </w-dialog>
</template>

<style scoped>
.img-dlg {
    width: 40%;
}
</style>