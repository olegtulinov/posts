<template lang="">
    <nav class="breadcrumbs">
        <ul class="breadcrumbs__list">
            <li class="breadcrumbs__list__item" v-for="(item, index) in crumbs" :key="index">
                <router-link class="breadcrumbs__list__item__link" :to='item.to'>{{item.name}}</router-link>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    props: {
        crumbs: {
            type: Array,
            required: true
        }
    }
}
</script>
<style lang="scss">
.breadcrumbs {
    margin: 15px 30px;
    padding: 10px;


    &__list {
        display: flex;
        list-style: none;

        &__item {

            &__link {
                &:hover {
                    color: rgb(245, 134, 82);
                }
            }

            &::after {
                content: '>';
            }

            &:last-child {
                &::after {
                    content: '';
                }
            }
        }
    }
}
</style>