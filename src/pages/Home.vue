<template>
    <div>
        <section class="home-section">
            <div class="container">
                <div class="row">
                    <div class="col-xl-10 offset-xl-1">
                        <main class="form-signin">
  <form>



    
      <div class="block">
          
        
 

        <img class="mb-4" src="https://img.utdstc.com/icon/ab2/460/ab2460b3aa69e9be0fdc5306b6bc95e1673777f31269d6e663682dc546dacf10:200" alt="" width="72" height="57">

 
      </div>
 

  <HeaderBlock :loading="loading" :error="error" />


    <div class="card animate__animated animate__fadeIn wow animate__delay-1s" v-for="(hotel, index) in gettingDataNotify" :key="index" >
    <div class="card-image waves-effect waves-block waves-light">

      
      <img class="activator" :src="hotel.img">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">{{hotel.name}}<i class="material-icons right">more_vert</i></span>
      <p>{{hotel.description}}</p>
      <button class="btn mt-4" @click="reloadData()" type="button">reloding</button>
    </div>


    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">{{hotel.country}}<i class="material-icons right">close</i></span>
        <label for="address">{{hotel.address}}</label>
          <hr>
        <ul>
            <li v-for="(srv, index) in hotel.services" :key="index" >{{srv}}</li>
        </ul>      
      <hr>

      <h5>Рейтинг отеля: </h5>
      
     <div class="progress">
  <div class="progress-bar" role="progressbar" :style="`width: ${hotel.rating*100/5}%;`" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{{hotel.rating}}%</div>
</div>

    <h5>{{hotel.rating}} </h5>

 
      
        <div class="col">
      <div class="card shadow-sm">
      <div class="card-header">
        <h4 class=" fw-normal">Price</h4>
      </div>
      <div class="card-body">
        <h1 class="card-title pricing-card-title">{{hotel.min_price}}<small class="text-muted">$</small></h1>
        <ul class="list-unstyled  ">
          <li>{{hotel.currency}}</li>
          <li>





          </li>
        </ul>
        <button type="button" class="w-100 btn btn-lg btn-outline-primary">Sign up for free</button>
      </div>
    </div>
    </div>
   

 
 <h4>{{hotel.name}}</h4><h3> {{getStarsHotel[hotel.stars]}}</h3>


    </div>
  </div>
            

    <button 
    @click="loadHotels()" 
    class="w-100 btn btn-lg btn-primary" 
    type="button"
    :disabled="maxLength === 0" 
    :class="{btnDisabled : maxLength === 0}"
    >
    

    More Loading
    
    </button>
    <p class="mt-5 mb-3 text-muted text-center">© 2020–2021</p>
  </form>
</main>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>


<script>

import axios from 'axios' 
import HeaderBlock from '@/components/HeaderBlock.vue'


export default {

  components: {
    HeaderBlock
  },


   data() {
       return {
         error: null,
         loading: null,
       }
   },

   created() {
      this.loading = this.$store.getters.getLoading;
   },


    mounted () {
        this.getNotify();
    },

    computed: {
      gettingDataNotify () {
        return this.$store.getters.getNotifyMain;
      },

      getStarsHotel () {
        return this.$store.getters.getStarsHotel;
      },

      maxLength () {
        return this.$store.getters.getNotifyFilter.length;
      },
    
    },

    methods: {
      
      getNotify () {
          this.loading = true;
          axios
            .get('http://api/hotels.json.php')
                .then((response) => {
                    // console.log(response.data.hotels);
                    let res = response.data.hotels,
                    hotels = [],
                    hotelsMain = [];

                    // filter

                    for (let i=0; i<res.length; i++) {
                      if (res[i].main) hotelsMain.push(res[i]);
                      else hotels.push(res[i]);
                    }
                    // console.log({hotels, hotelsMain})

                    this.$store.dispatch('setNotify', hotels);
                    this.$store.dispatch('setNotifyMain', hotelsMain);


                    this.$store.dispatch('setNotify', res);
                })
                    .catch((error) => {
                        console.log(error);
                        this.error = 'Network Error!'
                    })
                        .finally( () => (this.loading = false))
        },

        loadHotels () {
          this.$store.dispatch('loadHotels')
             .catch(err => { console.log(err); })
        },

        reloadData () {
           window.location.reload()
        },
        
    },







}
</script>

<style lang="scss" scoped>

// Fonts Google

@import url('https://fonts.googleapis.com/css2?family=Arizonia&display=swap');


    .home-section {
background-color: #9dc2e5;
padding-top: 70px;


.btnDisabled {
  cursor: default;
}

.link {
    cursor: pointer;
    margin-top: 20px;
}

.card-title {
    font-weight: 800;
    font-family: 'Arizonia', cursive;
}



h3 {
    color: chartreuse;
}


    }
</style>