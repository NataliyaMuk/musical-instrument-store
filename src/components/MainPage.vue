
<template>
    <div>

        <CarouselUniversal v-bind:photos="state.photosCarousel"/>
        
        <p class="text-[24px] ml-20 mb-6 ">Возможно, вам понравится</p>
        <div class="mb-20 flex justify-start flex-wrap w-250 px-4 sm:px-[60px] md:px-[100px] lg:px-[90px] xl:px-[120px] 2xl:p-0 2xl:w-[1380px] mx-auto ">
            <CardsItem
                v-bind:cards="state.CardsYouEnjoy"
            />
        </div>
    
    
        <p class="text-[24px] ml-20 mb-6">Вы ранее смотрели</p>
        <div class="mb-20 flex justify-start flex-wrap w-250 px-4 sm:px-[60px] md:px-[100px] lg:px-[90px] xl:px-[120px] 2xl:p-0 2xl:w-[1380px] mx-auto ">
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
    setup() {
        const state = reactive({
            CardsYouEnjoy: [
                { id: 1, name: "Барабаны", img: "baraban-black.png", price: "13999 р" },
                { id: 2, name: "Гитара", img: "gitara.png", price: "12999 р" },
                { id: 3, name: "Баян", img: "bayan.png", price: "2999 р" },
                { id: 4, name: "Синтезатор", img: "cintezator.png", price: "10999 р" },
                { id: 5, name: "Барабаны", img: "baraban-green.png", price: "13999 р" },
            ],
            photosCarousel: ["slider1.png", "slider2.png", "slider1.png"]
        });
        // const login = () => {
        // }
        return {
            //   login,
            state
        };
    }
}
</script>


