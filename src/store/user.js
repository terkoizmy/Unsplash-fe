import { storeToRefs } from 'pinia'
import { defineStore } from 'pinia'
import axios from 'axios'
import { useRouter, useRoute } from 'vue-router'


export const userStore = defineStore('user', {
    state: () =>({
        token: "",
        username: "",
        password: "" ,
        router: useRouter(),
        img: [{url: "https://play-lh.googleusercontent.com/4fjEqLBawtQowSTwlMVeaxXWvHJzjgfRDR6_yVcEnCK2h4lMlE7QZy-BWTHa5hGOivI"},
            {url: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/293100797_2079958402183822_5809414592213646090_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGqJQPrY3pcHOHWg5f89PXLk59qjvoX_AmTn2qO-hf8CVqTi-nqTKa9nmC9_nWjrKGYROkWWG-R7N5p166op45P&_nc_ohc=K-x5AO07jkMAX-kDMSb&_nc_ht=scontent-sin6-4.xx&oh=00_AT-1ZED4H2azWQc8KXC_RZtSbhbQF0G2eWS15SjMbOvbZA&oe=62D19C57",},
            {url: "https://scontent-sin6-1.xx.fbcdn.net/v/t39.30808-6/293351653_2079958438850485_3981311364186323082_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH5_F5wA5aWrdN7f4Zya2FhMAZSZCcnyikwBlJkJyfKKdZoV839wf3ureJ_TdEJ3uNiQ60q2dZ5bZ7iUK-cKq47&_nc_ohc=SciShMX7HYgAX8w3cCZ&_nc_ht=scontent-sin6-1.xx&oh=00_AT8AeYcrlZJfnVHusgOKrQOras6BdT7M3l0dLh-zktuz8w&oe=62D09F76",},
            {url: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/293045238_2079958465517149_6622339192973211363_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeERIhEJDP-P0-fYWc389DDI9Gxip6jImwX0bGKnqMibBY5TaCgWMpYB3WnliPkjnT0YLoXS8OZ2kt_qY5kxIU57&_nc_ohc=X26QnJuAubMAX84GciJ&_nc_ht=scontent-sin6-4.xx&oh=00_AT-7hRvcHmNdoHHhqDIxR_GLVYfmuSrsSWbmTR-w-mOUfA&oe=62D21965",},
            {url: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/293090845_2079958492183813_6255718287325153283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGmmSXYmIYdY-gC8elFZCG1s19z86nQ1LqzX3PzqdDUutjklId9p50OXS8Rg3_nR-3VqnFpABOYqbzmFXCmP_Pm&_nc_ohc=0_4Dy9D16TwAX_fCg9k&_nc_ht=scontent-sin6-4.xx&oh=00_AT90FShNlFTPBmqinEa1_rDWi2ATwsceQxuMqfpm7AHT0A&oe=62D0F498",},
            {url: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/293236060_2079958518850477_1933010674581301535_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGYnHAuSK1kTTSgmlkrVl1ZxIjncJjS2hPEiOdwmNLaE4TZYKtixMGZcLuZILAEE7xS8Rx84q8H6CWYKNLer-gT&_nc_ohc=zJOX5DAqVXEAX8XiweS&tn=ILu8C3L2ePyVnKVU&_nc_ht=scontent-sin6-3.xx&oh=00_AT_RsOze9KWyLROwyCtGHLELoDpwW1sR5chcDUYm7wvYnA&oe=62D0DA19",},
            {url: "https://scontent-sin6-4.xx.fbcdn.net/v/t39.30808-6/293390439_2079958555517140_7870265871305498028_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHdvI2D5lTQcMdDwS0hzeSRn_V7QLq13_2f9XtAurXf_a7_VnrEyvwEUWPlJHjCrPit5DbreDTcvv8QGfwP9rbZ&_nc_ohc=7EVflyaNJtcAX-EG5a7&_nc_ht=scontent-sin6-4.xx&oh=00_AT9kFNHnGguYyQdsmOgUqOsHC4y5U86Mb4b8O-c6NUijdw&oe=62D0D315",},
            {url: "https://scontent-sin6-3.xx.fbcdn.net/v/t39.30808-6/293126368_2079958588850470_4426511493969557252_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeE6SMxOr0eh8qTrlD4NarH22oDff7z3XB7agN9_vPdcHl5DM56y9ahNJLrTRss3ggcrsLPhYPFFG6uhMmn1eWVi&_nc_ohc=gHAebQ6lF5YAX-IqHxy&tn=ILu8C3L2ePyVnKVU&_nc_ht=scontent-sin6-3.xx&oh=00_AT_-RZS1TPBck2C3vgvANX8iXB3BfTHfdCkGw4LP8hQARQ&oe=62D09284"}
            ]
    }),

    actions: {
        async login (){

            try{

                let data = {
                    username: this.username,
                    password: this.password
                }

                const response = await axios({
                    method: 'POST',
                    url: 'http://unsplash-zx.herokuapp.com/user/login',
                    data: data,
                })

                this.token = String(response.data.data.token)
                this.router.push("/")

            }catch(error){
                console.log(error.response.data.message)
            }
        },

        async imgUser(){
            try{
                console.log(this.token)
                const headers = {
                    token: this.token
                }
                const response = await axios({
                    method: 'GET',
                    url: 'http://unsplash-zx.herokuapp.com/user/user-img',
                    data: {},
                    headers: headers
                })
                console.log("berhasilll")
                console.log(response.data)
            }catch(error){
                console.log(error.response.data.message)
            }
            
        }

    }
  })