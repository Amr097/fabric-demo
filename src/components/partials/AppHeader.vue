<script setup>
const unCheckMenu = () => {
  document.querySelector(`#nav-toggle`).checked = false
}
const items = [`Item One`, `Item Two`, `Item Three`, `Item Four`, `Item Five`]
</script>
<template>
  <div class="nav__bg--mobile"></div>
  <input type="checkbox" class="header__checkbox" id="nav-toggle" />
  <label for="nav-toggle" class="header__btn"> <span class="header__icon">&nbsp;</span> </label>
  <router-link :to="{ name: `index` }" class="logo-sm-header">
    <img :src="`/images/vue.png`" alt="logo" class="logo-sm-header-image" />
  </router-link>
  <div class="filter" @click="unCheckMenu"></div>
  <nav class="nav">
    <router-link :to="{ name: `index` }"
      ><img :src="`/images/vue.png`" alt="logo" class="logo"
    /></router-link>
    <ul class="nav__list" role="list">
      <li class="nav__item link" v-for="(item, index) in items" :key="index">
        <span class="nav__link" @click="unCheckMenu">{{ item }}</span>
      </li>
    </ul>
  </nav>
</template>
<style lang="postcss" scoped>
.nav {
  position: sticky;
  width: 100%;
  padding: 1.4rem 1.4rem 1.4rem;
  grid-column: 1/-1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 888;
  top: 0;
  backdrop-filter: blur(3px);
  background-color: white;
  @media screen and (max-width: 56.875em) {
    height: 100vh;
    width: 75%;
    padding: 2.4rem 0;
    position: fixed;
    align-items: flex-start;
    top: 0;
    right: 0;
    transform: translateX(300rem);
    border: none;
    transition: all 0.2s ease-in-out;
    background-color: white;
    z-index: 899;
    overflow-y: auto;
  }
}
.nav__bg--mobile {
  display: none;
  @media screen and (max-width: 56.875em) {
    display: inline-block;
    top: 0;
    position: sticky;
    width: 100%;
    height: 9.7675rem;
    z-index: 888;
  }
}
.logo {
  z-index: 889;
  width: 6rem;
  @media screen and (max-width: 56.875em) {
    display: none;
  }
}
.logo-sm-header {
  display: none;
  @media screen and (max-width: 56.875em) {
    width: 6rem;
    display: block;
    position: fixed;
    z-index: 888;
    top: 1.5rem;
    left: 2rem;
  }
}

.logo-sm-header-image {
}

.dropdown-screen {
  @media screen and (max-width: 56.875em) {
    display: none;
  }
}
.accordion-tab {
  display: none;
  @media screen and (max-width: 56.875em) {
    display: block;
  }
}
.nav__list {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  @media screen and (max-width: 56.875em) {
    width: 100%;
    flex-direction: column;
    align-items: start;
    padding-top: 10rem;
    position: relative;
    gap: 0;
  }
}
.nav__list :nth-child(1) {
  order: 1;
}
.nav__list :nth-child(2) {
  order: 2;
}
.nav__list :nth-child(4) {
  order: 3;
}
.nav__list :nth-child(3) {
  order: 4;
}
.nav__item {
  position: relative;
  font-size: 1.6rem;
  line-height: 1.95rem;
  cursor: pointer;
  transition: color 0.95ms ease-out;
  @media screen and (max-width: 56.875em) {
    flex-direction: column;
    text-align: end;
    font-size: 2rem;
    padding: 0.5rem 1rem /* 8px */;
    width: 100%;
    text-align: left;
    padding-left: 1rem;
    border-top: solid 0.1px rgba(128, 128, 128, 0.493);
  }
}
.nav__item:nth-child(3) {
  @media screen and (max-width: 56.875em) {
    border-bottom: solid 0.1px rgba(128, 128, 128, 0.493);
  }
}
.nav__link {
  width: 100%;
  display: inline-block;
  transition: color 0.5s;
  border-top-left-radius: 2rem /* 12px */;
  border-top-right-radius: 2rem /* 12px */;
  padding: 1.4rem 1.8rem /* 8px */;
}
.header__btn {
  background-color: transparent;
  border-radius: 8px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.2rem;
  width: 4.5rem;
  top: 2.5rem;
  right: 2.5rem;
  z-index: 901;
  text-align: center;
  cursor: pointer;
  display: none;
  @media screen and (max-width: 56.875em) {
    display: flex;
    background-color: white;
  }
} /* .header__checkbox */
.header__checkbox {
  position: absolute;
  z-index: -9999999;
  top: 0.5rem;
  right: 5rem;
  transform: translate(1.5rem, 1.5rem);
  visibility: hidden;
  display: none;
  @media screen and (max-width: 46.875em) {
    display: inline-block;
  }
}
.header__checkbox:checked + .header__btn .header__icon::before {
  transform: translate(-50%) rotate(135deg);
}
.header__checkbox:checked + .header__btn .header__icon {
  background: transparent;
}
.header__checkbox:checked + .header__btn .header__icon::after {
  transform: translate(-50%) rotate(-135deg);
}
.header__checkbox:checked + .header__btn {
  border: none;
  box-shadow: none;
}
.header__checkbox:checked ~ .nav {
  transform: translate(0);
}
.header__checkbox:checked ~ .filter {
  width: 100%;
  height: 100vh;
  visibility: visible;
  opacity: 0.4;
  top: 0;
  z-index: 399;
}
.filter {
  visibility: hidden;
  position: fixed;
  background-color: black;
  opacity: 0;
  transition: all 0.2s ease-in-out;
  z-index: -1;
  cursor: pointer;
} /* .header__icon */
.header__icon {
  width: 3rem;
  height: 0.2rem;
  align-items: center;
  background-color: black;
}
.header__icon::after,
.header__icon::before {
  content: '';
  display: inline-block;
  position: absolute;
  width: 3rem;
  height: 0.2rem;
  left: 50%;
  transition: 0.2s ease-in-out;
  background-color: black;
}
.header__icon::after {
  transform: translate(-50%, 0.9rem);
}
.header__icon::before {
  transform: translate(-50%, -0.9rem);
}
</style>
