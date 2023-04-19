<template>
    <div id="CatalogSection">
        <div class="mt-4 ml-8 mb-8">
            <div class="inline">
                <router-link to="/">
                    Главная/
                </router-link>
                <a href="#">
                    {{ catalogSectionParam }}
                </a>
            </div>
        </div>

        <div class="grid grid-cols-[1fr_5fr] gap-4 overflow-clip text-[18px]">
            <div class="ml-8">
                <p class="mb-2 text-[22px]">
                    Гитары
                </p>
                <p class="mb-2">
                    Акустические гитары
                </p>
                <p class="mb-2">
                    Электрогитары
                </p>
                <p class="mb-2">
                    Классические гитары
                </p>
                <p class="mb-2">
                    Бас-гитары
                </p>
                <p class="mb-2">
                    Струны
                </p>
                <p class="mb-2">
                    Усилители для гитар
                </p>
                <p class="mb-2">
                    Чехлы и кейсы
                </p>
                <p class="mb-2">
                    Тюнеры и метрономы
                </p>
            </div>


            <div> <!-- НАЧИНАЯ С :SM ИДЕТ ДЕСКТОР ВЕРСИЯ  -->
                <div class="mb-20 flex justify-start flex-wrap w-250 px-[70px] md:px-[20px] lg:px-[4px] xl:px-[120px] 2xl:px-[120px]  mx-auto">
                    <CardsItem
                        v-bind:cards="filteredProductsByCategory"
                    />
                </div>
            </div>
        </div>


    </div>
</template>
    
<script>

import productsData from "../../public/products.json";

    export default {
        name: "CatalogSection",
        data(){
            return {
                catalogSectionParam: this.$route.params.catalogcategory,
                productsAll: productsData
            }
        },

        computed: {
            filteredProductsByCategory() {
                return this.productsAll.filter(item => item.category === this.catalogSectionParam);
            }
        }

    
    }
</script>