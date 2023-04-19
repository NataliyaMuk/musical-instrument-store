<template>
    <div v-if="visibleCatalogDesktop" class="w-full bg-white h-[500px] shadow-lg shadow-gray-500/40 mb-10 flex justify-center p-10">
      <div class="flex flex-col mr-32 text-[20px]">
              <p
                v-on:click="setCategory('guitar')"
               
              >
                Гитары
              </p>

              <a >
                Укулеле
              </a>
              <a >
                Клавишные инструменты
              </a>
              <a>
                Ударные инструменты
              </a>
              <a>
                Духовые инструменты
              </a>
              <a>
                Аккордеоны, баяны, гармони
              </a>
              <a>
                Смычковые инструменты
              </a>
              <a>
                Микрофоны и радиосистемы
              </a>
              <a>
                Студийное оборудование
              </a>
      </div>

      <div class="flex flex-col text-[18px]">
        <a href="#">
          Акустические гитары
        </a>
        <a href="#">
          Электрогитары
        </a>
        <a href="#">
          Классические гитары
        </a>
        <a href="#">
          Бас-гитары
        </a>
        <a href="#">
          Струны
        </a>
        <a href="#">
          Усилители для гитар
        </a>
        <a href="#">
          Чехлы и кейсы
        </a>
        <a href="#">
          Тюнеры и кейсы
        </a>
      </div>
    </div>
</template>

<script>


 export default {
  name: 'App',

  props: {
        visibleCatalogDesktop: {
          type: Boolean,
        }
      },

  data: () => ({
      selectCategory: '',
    }),

    methods: {
        setCategory(cat) {
          this.selectCategory = cat;
          this.$router.push({ name: 'CatalogSection', params: { catalogcategory: this.selectCategory } })
        },
      }
 }
</script>