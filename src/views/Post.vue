<template lang="">
    <div>
        <BreadCrumbs :crumbs="res"/>
        <div v-if="isLoading">      
            <Loader/>
        </div>
        <div v-else class="posts">
            <PostItem :post="post" :user="user"/>        
        </div>
    </div>
</template>
<script>
import { computed, onMounted, reactive, ref } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';
import PostItem from '@/components/PostItem.vue';
import BreadCrumbs from '@/components/BreadCrumbs.vue';
import Loader from '@/components/Loader.vue';


export default {
    components: { PostItem, BreadCrumbs, Loader },
    setup() {
        const post = ref({})
        const route = useRoute()
        const id = ref(route.params.id)
        const user = ref({})
        const isLoading = ref(true)
        const crumbs = reactive([
            { name: "Главная", to: '/' },
            { name: "Список постов", to: '/posts' },
            { name: `Пост #${id.value}`, to: `/posts/${id.value}` },
        ])
        const res = computed(() => { return crumbs })

        const fetchPost = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts/${id.value}`
                );
                post.value = response.data;
            } catch (error) {
                console.log(error);
            }
        };
        const fetchUser = async () => {
            try {
                const response = await axios.get(
                    `https://jsonplaceholder.typicode.com/users/${post.value.userId}`
                );
                user.value = response.data;
            } catch (error) {
                console.log(error);
            } finally {
                isLoading.value = false
            }
        };


        onMounted(async () => {
            await fetchPost()
            await fetchUser()
        })
        return {
            id,
            post,
            user,
            route,
            res,
            isLoading

        }
    }
}
</script>

<style lang="scss">
.posts {
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px
}
</style>