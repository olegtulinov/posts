
<template>
  <div class="sidebar">
    <nav class="sidebar__items">
      <RouterLink class="btn" to="/posts">Список постов</RouterLink>
    </nav>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router';
</script>

<style lang="scss">
.sidebar {
  display: flex;
  width: 100%;
  height: 80px;
  padding: 30px 45px;
  background-color: white;
  border-bottom: 2px solid rgb(235, 235, 212);

  &__items {
    display: flex;
    gap: 15px;
    padding: 10px;
    align-items: center;
    justify-content: center;
  }
}

.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 240px;
  padding: 13px;
  border-radius: 10px;
  color: white;
  background-color: #9a9a99;


  &:hover {
    background-color: rgb(245, 134, 82);

  }
}
</style>
