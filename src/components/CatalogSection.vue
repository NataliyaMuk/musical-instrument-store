<template>
    <div id="CatalogSection">
        <p class="mt-4 ml-8 mb-8" >хлебные крошки потом сделаю</p>


        <div class="grid grid-cols-[1fr_5fr] gap-4 overflow-clip">
            <div class="ml-8">
                <p>
                    Гитары
                </p>
                <p>
                    Акустические гитары
                </p>
                <p>
                    Электрогитары
                </p>
                <p>
                    Классические гитары
                </p>
                <p>
                    Бас-гитары
                </p>
                <p>
                    Струны
                </p>
                <p>
                    Усилители для гитар
                </p>
                <p>
                    Чехлы и кейсы
                </p>
                <p>
                    Тюнеры и метрономы
                </p>

            </div>

            <div>
                <div class="mb-20 flex justify-center flex-wrap">
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