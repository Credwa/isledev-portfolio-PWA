<template>

<div>
  <nav :class="{ 'shadow-3': scrolled, navscroll: scrolled}" class="gt-xs">
    <router-link :to="{hash: 'intro'}" class="home-icon"><q-icon name="home" /></router-link>
    <router-link :to="{hash: 'about'}">About</router-link>
    <router-link :to="{hash: 'skills'}">Skills</router-link>
    <router-link :to="{hash: 'projects'}">Projects</router-link>
    <router-link :to="{hash: 'contact'}">Contact</router-link>
    <router-link to="/blog">Blog</router-link>
  </nav>
      <q-toolbar :class="{ 'shadow-3': scrolled, mininavscroll: scrolled}" class="lt-sm mininav">
        <q-toolbar-title>
          <router-link :to="{hash: 'intro'}">Isledev</router-link>
        </q-toolbar-title>
        <q-btn flat><q-icon name="menu" style="font-size:1.5em" @click="toggleMenu"/></q-btn>
                <q-slide-transition>
            <div v-show="menuOpen" class="mobileMenu lt-sm">
            <router-link :to="{hash: 'about'}" @click="menuItemClicked">About</router-link>
            <router-link :to="{hash: 'skills'}" @click="menuItemClicked">Skills</router-link>
            <router-link :to="{hash: 'projects'}" @click="menuItemClicked">Projects</router-link>
            <router-link :to="{hash: 'contact'}" @click="menuItemClicked">Contact</router-link>
            <router-link to="/blog" @click="menuItemClicked">Blog</router-link>
        </div>
      </q-slide-transition>
      </q-toolbar>


</div>

</template>

<script>
import { QIcon, QToolbar, QToolbarTitle, QBtn, QSlideTransition } from "quasar";
export default {
  components: {
    QIcon,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QSlideTransition
  },
  data() {
    return {
      scrolled: false,
      menuOpen: false
    };
  },
  methods: {
    handleScroll() {
      this.scrolled = window.scrollY > 50;
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    menuItemClicked() {
      this.menuOpen = false;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus">
@import '~variables';

nav {
  z-index: 1000;
  position: fixed;
  margin: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  width: 100vw;
  height: $navheight;
  margin-bottom: $navheight;
  transition: height 0.4s ease-out, background-color 0.4s ease-out, font-size 0.4s ease-out;
}

a {
  color: grey;
  margin: 1em;
  border-bottom: 1px solid $info;
  text-decoration: none;
  transition: color 0.5s ease-out;
  font-family: raleway;
}

a:hover {
  color: white;
  font-size: 1.05em;
  border-bottom-color: $info;
}

.navscroll {
  background-color: rgba(0, 0, 0, 0.7);
  height: $navheight - 1vh;
  font-size: 0.8em;
  transition: height 0.4s ease-in, background-color 0.4s ease-in, font-size 0.4s ease-in;
}

@media screen and (max-width: 920px) {
  nav {
    justify-content: center;
  }
}

.mininav {
  z-index: 1000;
  position: fixed;
  margin: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}

.mininavscroll {
  background-color: black;
  font-size: 1.3em;
  transition: background-color 0.4s ease-out, font-size 0.4s ease-out;
}

.mobileMenu {
  margin-top: $navheight
  display flex
  flex-direction column
  justify-content center
}

</style>
