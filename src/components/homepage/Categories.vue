<script setup>
    import { ref, onMounted } from 'vue'
    import axios from 'axios'

    import CategoryCard from './../CategoryCard.vue'

    const categories = ref([])

    // function getCategoriesData() {
        // axios.get('https://zullkit-backend.buildwithangga.id/api/categories').then(function (response) {
        //     // handle success
        //     console.log(response.data);
        // })
        // const ajax = axios.get('https://zullkit-backend.buildwithangga.id/api/categories')
        // console.log(ajax)
    // }

    async function getCategoriesData() {
        try {
            const response = await axios.get('https://zullkit-backend.buildwithangga.id/api/categories?show_product=1&limit=4')
            // console.log(response.data)
            categories.value = response.data.data.data
        } catch (error) {
            console.error(error)
        }
    }

    // const categories = ref([
    //     { id: 1, title: 'Mobile UI kit', count: 731,image: 'categories-1.jpg'},
    //     { id: 2, title: 'Fonts', count: 371,image: 'categories-2.jpg'},
    //     { id: 3, title: 'Icon Set', count: 137,image: 'categories-3.jpg'},
    //     { id: 4, title: 'Website UI kit', count: 4500,image: 'categories-4.jpg'},
    // ])

    onMounted(() => {
        getCategoriesData()
    })

</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12" id="categories">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">Top Categories</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
            <CategoryCard
                v-for="category in categories"
                :key="category.id"
                :id="category.id"
                :title="category.name"
                :count="category.products_count"
                :image="category.thumbnails"
            />
                <!-- :count="category.products.length" -->
        </div>
    </div>
</template>