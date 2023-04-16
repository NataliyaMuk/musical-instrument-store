<template>
<div>


    <SliderItem />
    
    <p class="text-[24px] ml-20 mb-6">Возможно, вам понравится</p>
    <div class="mb-20 flex justify-center">
        <CardsItem
            v-bind:cards="state.CardsYouEnjoy"
        />
    </div>


    <p class="text-[24px] ml-20 mb-6">Вы ранее смотрели</p>
    <div class="mb-20 flex justify-center">
        <CardsItem
            v-bind:cards="state.CardsYouEnjoy"
        />
    </div>


</div>
</template>




<script>

import { reactive } from 'vue'


export default {
    name: "MainPage",

    setup () {
    const state = reactive({
      CardsYouEnjoy: [
                {id: 1, name: 'Барабаны', img: 'baraban-black.png', price: '13999 р'},
                {id: 2, name: 'Гитара', img: 'gitara.png', price: '12999 р'},
                {id: 3, name: 'Баян', img: 'bayan.png', price: '2999 р'},
                {id: 4, name: 'Синтезатор', img: 'cintezator.png', price: '10999 р'},
                {id: 5, name: 'Барабаны', img: 'baraban-green.png', price: '13999 р'},
        ]
    })

    // const login = () => {

    // }
    return { 
    //   login,
      state
    }
  }
}
</script>


