<script setup>
import AppHeader from '../components/partials/AppHeader.vue'
import AppFooter from '../components/partials/AppFooter.vue'
</script>

<template>
  <div class="layout__container">
    <AppHeader />

    <main>
      <router-view></router-view>
    </main>

    <AppFooter />
  </div>
</template>

<style lang="postcss" scoped>
.layout__container {
  @apply w-full h-[100vh] gap-9;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
}
.layout__mask-clip {
  @apply absolute top-0 -z-10 w-full h-[73%];
  background: linear-gradient(180deg, #31295d 0%, #31295d 70.3%), #31295d;
  clip-path: polygon(
    50% 0%,
    100% 0,
    100% 35%,
    100% 70%,
    100% 70%,
    50% 100%,
    0 71%,
    0 71%,
    0 0,
    12% 0
  );
}

.layout__mask-curve {
  @apply absolute w-[80%] -z-10 h-[60%] top-[2.5%] left-1/2 -translate-x-1/2;
  background: linear-gradient(180deg, #31295d 0%, #31295d 70.3%), #31295d;

  border-radius: 98% / 100%; /* Create a circle */
  border-top-left-radius: 0; /* Adjust radius for top left corner */
  border-top-right-radius: 0;
}

.layout__mask-white {
  @apply absolute -z-[8] w-[100%] h-[40%] bottom-0  bg-light-900;
}

.layout__mask-figure-1 {
  @apply absolute top-0 -z-10 -right-[3%] w-[70%] h-[75%];
}

.layout__mask-figure-2 {
  @apply absolute top-44 -z-10 left-[36%] -translate-x-1/2 w-[55%] h-[59.5%];
}
.layout__mask-figure-1 img,
.layout__mask-figure-2 img {
  @apply w-full h-full;
}

main {
  @apply w-[85%] mx-auto;

  @media screen and (width <= 65.625em) {
    @apply w-[95%];
  }
}
</style>
