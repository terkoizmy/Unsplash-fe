import { storeToRefs } from 'pinia'
import { defineStore } from 'pinia'
import Swal from "sweetalert2"
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'


export const userStore = defineStore('user', {
    state: () =>({
        username: "",
        token: "",
        router: useRouter(),
        img: [],
        imgTemp: []
    }),

    actions: {
        async checktoken (){
            if(this.token.length == 0){
                this.router.push("/login")
                return false
            }else{
                return true
            }
        },
        async imgFilter (substring){
            if(substring.length > 0){
                let filterImg = []
                this.imgTemp.forEach(i => {
                    if(i.category.includes(substring)){
                        filterImg.push(i)
                    }
                });
                this.img = filterImg
            }else{
                this.img = this.imgTemp
            }
        },

        async login (username, password){

            try{
                
                let data = {
                    username: username,
                    password: password
                }

                const response = await axios({
                    method: 'POST',
                    url: 'https://unsplash-zx.herokuapp.com/user/login',
                    data: data,
                })
                this.username = username.charAt(0).toUpperCase() + username.slice(1);
                this.token = String(response.data.data.token)
                this.router.push("/")
                console.log(this.token)
            }catch(error){
                console.log(error.response.data.message)
            }
        },

        async imgUser(){
            try{
                const headers = {
                    token: this.token
                }
                const response = await axios({
                    method: 'GET',
                    url: 'https://unsplash-zx.herokuapp.com/user/user-img',
                    data: {},
                    headers: headers
                })
                this.img = response.data
                this.imgTemp = response.data
            }catch(error){
                console.log(error.response.data.message)
            }
            
        },

        async upload(url, category){
            try{
                const headers = {
                    token: this.token
                }
                let data = {
                    imgUrl: url,
                    category: category
                }
                const response = await axios({
                    method: 'POST',
                    url: 'https://unsplash-zx.herokuapp.com/user/post-img',
                    data: data,
                    headers: headers
                })
                console.log(response.data.message)
                this.imgUser()
                return true
            }catch(error){
                console.log(error)
                return false
            }
        },

        async dltImg(id){
            try{
                const headers = {
                    token: this.token
                }
                let data = {
                    imgId: id
                }
                const response = await axios({
                    method: 'DELETE',
                    url: 'https://unsplash-zx.herokuapp.com/user/dlt-img',
                    data: data,
                    headers: headers
                })
                
                this.imgUser()
                return true
            }catch(error){
                return false
            }
        },

        async register(username, password){
            try{

                let data = {
                    username: username,
                    password: password
                }

                const response = await axios({
                    method: 'POST',
                    url: 'https://unsplash-zx.herokuapp.com/user/register',
                    data: data,
                })

                return true
            }catch(error){
                return false
            }
        }

    }
  })