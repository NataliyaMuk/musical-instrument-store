<template>
    <div class="mr-4 ml-3 mb-3 w-[240px] p-4 border-2 border-gray-900 rounded-md  shadow-md flex flex-col justify-between"
            v-for="card in cards"
            :key="card.id"
            :title="card.name"
    >
        <img :src="require('../assets/'+ card.img)" alt="" class="object-cover object-center w-full rounded-md  dark:bg-gray-500">

        <div class="mt-6 mb-2">
            <span class="block text-xs font-medium tracking-widest uppercase dark:text-violet-400">{{ card.name }}</span>
        </div>
        <p class="dark:text-gray-100">{{ card.price }}</p>
    </div>
</template>



<script>
export default {
    name: "CardsItem",
    props: {
        cards: {
            type: Array
        },
  }
  }

</script>