<script setup></script>

<template>
  <div class="layout__container">
    <main class="h-full">
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="postcss" scoped>
.layout__container {
  height: 100vh;
  background: linear-gradient(180deg, #70aabb 0%, #334d55 100%);
}
</style>
