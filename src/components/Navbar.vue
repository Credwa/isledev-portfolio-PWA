<template>

<div>
  <nav :class="{ 'shadow-3': scrolled, navscroll: scrolled}" class="gt-xs">
    <router-link :to="{ path: '/',}" class="home-icon" v-scroll-to="'#intro'"><q-icon name="home" /></router-link>
    <router-link :to="{ path: '/',}" v-scroll-to="'#about'">About</router-link>
    <router-link :to="{ path: '/',}" v-scroll-to="'#skills'">Skills</router-link>
    <router-link :to="{ path: '/',}" v-scroll-to="'#projects'">Projects</router-link>
    <router-link :to="{ path: '/',}" v-scroll-to="'#contact'">Contact</router-link>
    <router-link to="/blog">Blog</router-link>
  </nav>
  <div v-if="windowWidth <= 576">
    <q-layout
    ref="layout"
    :view="layoutStore.view"
    :right-breakpoint="layoutStore.rightBreakpoint"
    :reveal="layoutStore.reveal"

  >
    <q-toolbar slot="header" color="secondary">
      <q-toolbar-title>
        Isledev
        <span slot="subtitle">Software Engineering</span>
      </q-toolbar-title>
      <q-btn flat @click="$refs.layout.toggleRight()">
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>

    <q-scroll-area slot="right" style="width: 100%; height: 100%">
      <q-list-header>Menu</q-list-header>
      <div v-if="layoutStore.rightScroll" style="padding: 25px 16px 16px;" class="mobLayout">
        <a class="home-icon" style="color: #26a69a" v-scroll-to="'#intro'"><q-icon name="home" @click="$refs.layout.toggleRight()"/></a>
        <a v-scroll-to="'#about'" style="color: #26a69a; border-bottom: 1px solid $secondary; text-decoration: underline;" @click="$refs.layout.toggleRight()">About</a>
        <a v-scroll-to="'#skills'" style="color: #26a69a; border-bottom: 1px solid $secondary; text-decoration: underline;" @click="$refs.layout.toggleRight()">Skills</a>
        <a v-scroll-to="'#projects'" style="color: #26a69a; border-bottom: 1px solid $secondary; text-decoration: underline;" @click="$refs.layout.toggleRight()">Projects</a>
        <a v-scroll-to="'#contact'" style="color: #26a69a; border-bottom: 1px solid $secondary; text-decoration: underline;" @click="$refs.layout.toggleRight()">Contact</a>
        <router-link to="/blog" style="color: #26a69a; border-bottom: 1px solid $secondary; text-decoration: underline;" @click="$refs.layout.toggleRight()" tag="a">Blog</router-link>
      </div>
    </q-scroll-area>
  <router-view />
  </q-layout>
  </div>
</div>


</template>

<script>
import layoutStore from "./layout-store";
import {
  QIcon,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QSlideTransition,
  QLayout,
  QSearch,
  QTabs,
  QRouteTab,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea
} from "quasar";
export default {
  components: {
    QIcon,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QSlideTransition,
    QLayout,
    QSearch,
    QTabs,
    QRouteTab,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea
  },
  data() {
    return {
      scrolled: false,
      menuOpen: false,
      layoutStore,
      windowWidth: 0,
      windowHeight: 0
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
      this.menuOpen = !this.menuOpen;
    },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
    }
  },
  mounted() {
    this.$nextTick(function() {
      window.addEventListener("resize", this.getWindowWidth);

      this.getWindowWidth();
    });
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="stylus" scoped>
@import '~variables';

nav {
  z-index: 1300;
  position: fixed;
  margin: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-end;
  width: 99vw;
  height: $navheight;
  margin-bottom: $navheight;
  font-size: 1.5em;
  transition: height 0.4s ease-out, background-color 0.4s ease-out, font-size 0.4s ease-out;
}

a {
  color: #ECEFF1;
  margin: 1em;
  text-decoration: none;
  transition: color 0.5s ease-out;
  font-family: raleway;
}

a:hover {
  color: $secondary;
  font-size: 1.25em;
  border-bottom: 1px solid $secondary;
  transition: color 0.5s ease-out, font-size 0.2s ease-in, border-bottom 0.2s ease-in;
}

.navscroll {
  background-color: $primary;
  height: $navheight - 1vh;
  font-size: 1.2em;
  transition: height 0.4s ease-in, background-color 0.4s ease-in, font-size 0.4s ease-in;
}

@media screen and (max-width: 920px) {
  nav {
    justify-content: center;

    a {
      color: red
    }
  }
}

.mobLayout {
  display: flex;
  flex-direction: column;
}
</style>
