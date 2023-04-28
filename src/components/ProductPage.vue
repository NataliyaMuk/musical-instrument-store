<template>
    <h2>Страница продукта</h2>
    <div class="info-wrapper">
        <div class="photo-wrapper">
            <div class="img-wrapper"><img :src="require('../assets/' + prodPhoto)" class="main-img"></div>
            <div class="scroll-wrapper">
                <carousel :items-to-show="4">
                    <slide v-for="item in photoList" :key="item">
                        <button @click="changePhoto(item)"><img :src="require('../assets/' + item)" alt=""></button>
                    </slide>
                    <template #addons>
                    <navigation />
                    <pagination />
                    </template>
                </carousel>
            </div>
        </div>
        <div class="cta-info">
            <div class="cta-wrapper">
                <p class="price">2222 руб.</p>
                <div class="buttons">
                    <button class="cta-btn">В избранное</button>
                    <button class="cta-btn">В корзину</button>
                </div>
            </div>
            <div class="prod-info" >
                <button @click="char" id="char" class="toggle-btn active">Описание</button>
                <button @click="desc" id="desc" class="toggle-btn">Характеристики</button>
                <p class="info-desc" v-if="show == 0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dignissim id tortor ac mattis. Suspendisse lacinia vulputate nibh eu pharetra. Vestibulum consectetur auctor tellus, nec placerat ipsum tincidunt in. Nulla tempus sollicitudin ligula et congue. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi gravida, augue eu eleifend facilisis, est sapien lobortis urna, in aliquam velit ligula vel dolor. Duis ornare vulputate mauris sed tincidunt. Aliquam erat volutpat.
                </p>
                <p class="info-char" v-if="show == 1">ghdxfghdfgdfgdfg</p>
            </div>
        </div>
        <div class="similar">
            <p>Похожие товары</p>
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </div>
</template>

<script>

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
export default {
    data() {
        return {
            photoList: ['prod1-1.jpg', 'prod1-2.jpg', 'prod1-3.jpg', 'prod1-4.jpg'],
            prodPhoto: 'prod1-0.jpg',
            show: 0
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    methods: {
        char() {
            if (this.show == 1) {
                document.getElementById('char').classList.toggle('active');
                document.getElementById('desc').classList.toggle('active');
            }
            this.show = 0;
        },
        desc() {
            if (this.show == 0) {
                document.getElementById('char').classList.toggle('active');
                document.getElementById('desc').classList.toggle('active');
            }
            this.show = 1;
        },
        changePhoto(name) {
            this.prodPhoto = name;
        },
    }
}
</script>

<style>
h2 {
    margin: 50px auto;
    text-align: center;
}

.info-wrapper {
    margin: auto;
    max-width: 375px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 0 15px;
    gap:  20px;
}

.img-wrapper {
    max-width: 372px;
    min-height: 415px;
    border: 1px solid #000000;
    margin-bottom: 10px;
}

.main-img {
    min-height: 415px;
    margin: 0 auto;
}

.photos-item img {
    height: 100%;
}

.cta-wrapper {
    margin-bottom: 30px;
}

.price {
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
}

.buttons {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    max-width: 385px;
}

.cta-btn {
    background: #FCBA06;
    border-radius: 15px;
    max-width: 185px;
    width: 100%;
    padding: 10px 15px;
}

.toggle-btn + .toggle-btn {
    margin-left: 20px;
}

.cta-info {
    max-width: 372px;
}

.toggle-btn {
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
}

.active {
    text-decoration: underline;
}

@media (min-width: 1000px) {
    .info-wrapper {
        max-width: 950px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .cta-info {
        display: flex;
        flex-direction: column;
        gap: 30px;
        max-width: 500px;
        width: 100%;
    }
}
</style>