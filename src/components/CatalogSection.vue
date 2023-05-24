<template>
    <div id="CatalogSection">


        <!-- ХЛЕБНЫЕ КРОШКИ -->

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


        <!-- СЕКЦИЯ КАТАЛОГА DESKTOP -->

        <div class="grid grid-cols-[1fr_5fr] gap-4 overflow-clip text-[18px] hidden sm:grid">
            <div class="ml-8">
                <div
                    v-for="sub in subcategories"
                    :key="sub.id"
                >
                    <button v-on:click="setSubcategory(sub.category_id, sub.id)" class="mb-3 block" >
                        {{ sub.name }}
                    </button>
                </div> 
            </div>


            <div> 
                <div class="mb-20 flex justify-start flex-wrap w-250 px-[70px] md:px-[20px] lg:px-[4px] xl:px-[120px] 2xl:px-[120px]  mx-auto">
                    <CardsItem 
                        v-bind:cards="filteredProductsByCategory"
                    />
                </div>
            </div>
        </div>








        <!-- СЕКЦИЯ КАТАЛОГА МОБИЛЬНАЯ С ФИЛЬТРАМИ И СОРТИРОВКОЙ -->

        <div class="flex flex-col sm:hidden">

            <div class="flex justify-around mb-10">
                <div>
                    <select id="countries" class="h-12 w-[130px]  border border-black text-black text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        <option class="text-[10px]"  selected>Фильтры</option>

                        <option class="text-[10px]"  value="US">United States</option>
                        <option class="text-[10px]"  value="CA">Canada</option>
                        <option class="text-[10px]"  value="FR">France</option>
                        <option class="text-[10px]"  value="DE">Germany</option>
                    </select>
                </div>
                <div>
                    <select id="countries" class="h-12 w-[170px]  border border-black text-black text-[16px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5">
                        <option class="text-[10px]"  selected>По популярности</option>

                        <option class="text-[10px]"  value="US">United States</option>
                        <option class="text-[10px]"  value="CA">Canada</option>
                        <option class="text-[10px]"  value="FR">France</option>
                        <option class="text-[10px]"  value="DE">Germany</option>
                    </select>
                </div>
            </div>



            <div> <!-- НАЧИНАЯ С :SM ИДЕТ ДЕСКТОР ВЕРСИЯ  -->
                <div class="mb-20 flex flex-col items-center ">
                    <CardsItem
                        v-bind:cards="filteredProductsByCategory"
                    />

                    
                </div>
            </div>
        </div>



    </div>
</template>
    
<script>


    export default {
        name: "CatalogSection",
        data(){
            return {
                catalogSectionParam: this.$route.params.catalogcategory,
            }
        },

        methods: {
            setSubcategory(cat, sub) {
                this.$store.dispatch('GET_INSTRUMENTS_FILTER_SUBCATEGORY', {cat: cat, sub: sub });
            }
        },

        computed: {
            filteredProductsByCategory() {
                return this.$store.getters.INSTRUMENTS
            },

            subcategories() {
                return this.$store.getters.SUBCATEGORY
            },
        },

    }
</script>