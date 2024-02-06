<template >
    <div class="post__item">
        <div>
            <div>
                <h3 class="post__item__title">
                    {{ post.id }}.{{ post.title }}
                </h3>
            </div>
            <div class="post__item__text">{{ post.body }}</div>
            <div v-if="user" class="post__user">
                <p class="post__user_text">name: {{ user.name }}</p>
                <p class="post__user_text">email: {{ user.email }}</p>
                <p class="post__user_text">phone: {{ user.phone }}</p>
                <p class="post__user_text">website: {{ user.website }}</p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
        },
        user: {
            default: null
        }
    },
    setup() {

    }
}
</script>
<style lang="scss">
$accentColor: rgb(245, 134, 82);

.post {
    &__item {
        padding: 25px;
        border: 3px solid #9a9a99;
        ;
        margin-bottom: 15px;
        transition: border 0.3s ease-in;

        &:hover {
            cursor: pointer;
            border: 3px solid $accentColor;
        }

        &__title {
            color: rgba(22, 31, 62, 0.90);
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            padding-bottom: 17px;
            border-bottom: 1px solid rgb(52, 52, 28);

        }

        &__text {
            color: rgba(22, 31, 62, 0.90);
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 175%;
            letter-spacing: 0.15px;
            margin-top: 10px;
        }
    }

    &__user {
        margin-top: 15px;

        &_text {
            color: rgba(22, 31, 62, 0.90);
            font-size: 12px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%;
            letter-spacing: 0.5px;
        }
    }
}
</style>