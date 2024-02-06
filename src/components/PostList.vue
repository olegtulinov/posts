<template >
    <div>
        <BreadCrumbs :crumbs="res" />
        <div v-if="isLoading">
            <Loader />
        </div>
        <div v-else class="post__list">
            <TransitionGroup name="list">
                <PostItem v-for="post in posts" :key="post.id" :post="post" @click.right.prevent='removePost(post)'
                    @click="$router.push(`/posts/${post.id}`)" />
            </TransitionGroup>
        </div>

    </div>
</template>
<script>
import PostItem from '@/components/PostItem.vue'
import usePosts from '@/hooks/usePosts'
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import { computed, reactive } from 'vue'
import Loader from './Loader.vue'
export default {
    components: {
        PostItem,
        BreadCrumbs,
        Loader
    },
    setup() {
        const { posts, isLoading, removePost } = usePosts()
        const crumbs = reactive([
            { name: "Главная", to: '/' },
            { name: "Список постов", to: '/posts' },
        ])
        const res = computed(() => { return crumbs })
        return {
            posts,
            res,
            isLoading,
            removePost
        }
    },
}
</script>
<style lang="scss" >
.post {
    &__list {
        width: 100%;
        min-height: 100%;
        margin: auto;
        padding: 30px;
        border-radius: 10px;
        background-color: white;
    }
}

.list-enter-active,
.list-leave-active {
    transition: all 0.4s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>