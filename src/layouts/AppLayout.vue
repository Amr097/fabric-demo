<script setup></script>

<template>
  <div class="layout__container">
    <img src="/logo-footer.svg" alt="" class="absolute top-8 right-[4%] w-[50rem] z-10" />
    <img src="/logo-footer.svg" alt="" class="absolute bottom-8 left-[4%] w-[40rem] z-10" />
    <main class="h-full z-20 relative">
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
