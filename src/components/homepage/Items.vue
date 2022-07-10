<script setup>
    import ItemsCard from './../ItemsCard.vue'
    import axios from 'axios'
    import { ref, onMounted } from 'vue'

    const items = ref([])

    async function getItemsData() {
        try {
            const response = await axios.get('https://zullkit-backend.buildwithangga.id/api/products')
            console.log(response.data)
            items.value = response.data.data.data
        } catch (error) {
            console.log(error)
        }
    }

    onMounted(() => {
        getItemsData()
    })

    // const items = ref([
    //     { id: 1, title: 'Mobile UI Kit', description:'Mobile UI Kit', image:'items-1.jpg' },
    //     { id: 2, title: 'Online Doctor Consultation', description:'Website UI Kit', image:'items-2.jpg' },
    //     { id: 3, title: 'Banking Crypto UI Kit', description:'Mobile UI Kit', image:'items-3.jpg' },
    // ])
</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
        <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
        <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <ItemsCard
            v-for="item in items"
            :key="item.id"
            :id="item.id"
            :title="item.title"
            :description="item.subtitle"
            :image="item.thumbnails"
        />
        </div>
    </div>
</template>