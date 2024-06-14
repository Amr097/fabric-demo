<script setup>
import AddressIcon from '@/components/icons/EmailIcon.vue'
import EmailIcon from '@/components/icons/EmailIcon.vue'
import LinkedinIcon from '@/components/icons/LinkedinIcon.vue'
import FacebookIcon from '@/components/icons/FacebookIcon.vue'
import TelegramIcon from '@/components/icons/TelegramIcon.vue'
import TwitterIcon from '@/components/icons/TwitterIcon.vue'
</script>
<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="flex-column">
        <div class="footer__top">
          <img :src="`/images/vue.png`" alt="" class="image" />
          <p class="footer__p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati impedit, maiores
            maxime eum, iusto laborum ad voluptas at suscipit quos quam enim qui dolorum autem
            tenetur iure asperiores ab debitis!
          </p>
        </div>
        <div class="footer__mid">
          <ul role="list" aria-label="company addresses">
            <li role="listitem" class="footer__p flex-center">
              <address-icon class="icon-1" /> Adress1
            </li>
            <li role="listitem" class="footer__p flex-center">
              <address-icon class="icon-1" /> Adress2
            </li>
          </ul>
        </div>
        <div class="flex-column">
          <ul role="list" aria-label="company emails">
            <li role="listitem" class="footer__p flex-center">
              <email-icon class="icon-1" /> Wmail
            </li>
            <li role="listitem" class="footer__p flex-center">
              <email-icon class="icon-1" /> Email
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer__end">
      <div class="copyright">
        <p class="copyright__p">lorem © 2024 All Rights Reserved.</p>
      </div>
      <ul class="links__list" role="list" aria-label="termsofuseandprivacypolicy">
        <li class="relative" role="listitem">
          <label for="terms-popup" class="popup-label"> Terms of Use</label>
        </li>
        <li><label for="privacy-popup" class="popup-label"> Privacy Policy</label></li>
      </ul>
      <ul class="socials-list" aria-label="socialmedialinks">
        <li>
          <a target="_blank" href="/" aria-label="linkedin"><LinkedinIcon class="icon-2" /></a>
        </li>
        <li>
          <a target="_blank" href="/" aria-label="X/twitter"><TwitterIcon class="icon-2" /></a>
        </li>
        <li>
          <a target="_blank" href="/" aria-label="facebook"><FacebookIcon class="icon-2" /></a>
        </li>
        <li>
          <a target="_blank" href="/" aria-label="telegramchannel"
            ><TelegramIcon class="icon-2"
          /></a>
        </li>
      </ul>
    </div>
  </footer>
</template>
<style lang="postcss" scoped>
.footer {
  background-color: black;
  color: white;
  bottom: 0;
  width: 100%;
  padding: 7.5rem;
  padding-bottom: 5rem;
  padding-top: 0;
  background-size: cover;
  @media screen and (max-width: 56.4375em) {
    margin-top: 0rem;
    padding: 0 2.5rem 2.5rem 2.5rem;
  }
}
.footer__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 10rem 0 5rem 0;
  @media screen and (max-width: 46.4375em) {
    padding: 10rem 0 5rem 0;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.footer__top {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer__p {
  grid-column: 1;
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 2.7rem; /* 150% */
  @media screen and (max-width: 46.4375em) {
    font-size: 1.65rem;
  }
}

.footer__mid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer__end {
  grid-template-columns: repeat(3, max-content);
  display: grid;
  padding-top: 5rem;
  align-items: center;
  border-top: 1px solid;
  justify-content: space-between;
  @media screen and (max-width: 43.75em) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
  }
}
.footer__links {
  grid-row: 1 / span 2;
  grid-column: 2 / span 1;
  width: max-content;
  justify-self: center;
  @media screen and (max-width: 46.4375em) {
    grid-column: 1 / span 1;
    grid-row: 3 / span 2;
    justify-self: start;
  }
}
.links__list {
  color: white;
  display: flex;
  gap: 0.8rem;
  align-items: center;
  justify-content: center;
  font-size: 1.4rem;
  @media screen and (max-width: 43.75em) {
    justify-content: start;
  }
}
.footer__links li a {
  transition: color 0.25s ease-in-out;
}
.copyright {
  width: 100%;
  display: flex;
  gap: 1rem;
}
.copyright__p {
  font-size: 1.7rem;
  font-weight: 400;
  grid-column: 1 / span 2;
  @media screen and (max-width: 43.75em) {
    font-size: 1.6rem;
  }
}
.image {
  width: 15rem;
}
.flex-column {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.flex-center {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.popup-label:hover {
  color: #d62828;
  cursor: pointer;
  transition: color 150ms;
}
.relative {
  position: relative;
}
.icon-1 {
  width: 1.3rem;
  height: 1.3rem;
  fill: white;
}
.icon-2 {
  width: 2.5rem;
  height: 2.5rem;
  fill: #d62828;
}
.icon-2:hover {
  fill: #d40f0f;
}
.socials-list {
  display: flex;
  align-items: flex-end;
  gap: 1.2rem;
  margin-left: auto;
}
</style>
