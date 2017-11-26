<template>

<div>
  <nav :class="{ 'shadow-3': scrolled, navscroll: scrolled}" class="gt-xs">
    <router-link :to="{ path: '/', hash: 'intro'}" class="home-icon" v-scroll-to="'#intro'"><q-icon name="home" /></router-link>
    <router-link :to="{ path: '/', hash: 'about'}" v-scroll-to="'#about'">About</router-link>
    <router-link :to="{ path: '/', hash: 'skills'}" v-scroll-to="'#skills'">Skills</router-link>
    <router-link :to="{ path: '/', hash: 'projects'}" v-scroll-to="'#projects'">Projects</router-link>
    <router-link :to="{ path: '/', hash: 'contact'}" v-scroll-to="'#contact'">Contact</router-link>
    <router-link to="/blog">Blog</router-link>
  </nav>
  <q-layout
    ref="layout"
    :view="layoutStore.view"
    :right-breakpoint="layoutStore.rightBreakpoint"
    :reveal="layoutStore.reveal"
    class="lt-sm"
  >
    <q-toolbar slot="header" color="secondary" class="lt-sm">
      <q-toolbar-title>
        Isledev
        <span slot="subtitle">Software Engineering</span>
      </q-toolbar-title>
      <q-btn flat @click="$refs.layout.toggleRight()">
        <q-icon name="menu" />
      </q-btn>
    </q-toolbar>

    <q-scroll-area slot="right" style="width: 100%; height: 100%">
      <q-list-header>Slide to Close</q-list-header>
      <div v-if="layoutStore.rightScroll" style="padding: 25px 16px 16px;" class="mobLayout">
        <router-link :to="{ path: '/', hash: 'intro'}"class="home-icon" v-scroll-to="'#intro'"><q-icon name="home" /></router-link>
        <router-link :to="{ path: '/', hash: 'about'}" @click="layoutStore.rightScroll = !layoutStore.RightScroll" v-scroll-to="'#about'">About</router-link>
        <router-link :to="{ path: '/', hash: 'skills'}" v-scroll-to="'#skills'">Skills</router-link>
        <router-link :to="{ path: '/', hash: 'projects'}" v-scroll-to="'#projects'">Projects</router-link>
        <router-link :to="{ path: '/', hash: 'contact'}"v-scroll-to="'#contact'">Contact</router-link>
        <router-link to="/blog">Blog</router-link>
      </div>
    </q-scroll-area>

  <router-view />
  </q-layout>

</div>


</template>

<script>
import layoutStore from './layout-store'
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
      layoutStore
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

<style lang="stylus" scoped>
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
  width: 99vw;
  height: $navheight;
  margin-bottom: $navheight;
  font-size: 1.5em;
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
  color: #26a69a;
  font-size: 1.25em;
  border-bottom-color: $info;
}

.navscroll {
  background-color: rgba(0, 0, 0, 0.7);
  height: $navheight - 1vh;
  font-size: 1.2em;
  transition: height 0.4s ease-in, background-color 0.4s ease-in, font-size 0.4s ease-in;
}

@media screen and (max-width: 920px) {
  nav {
    justify-content: center;
  }
}

.mobLayout {
  display flex
  flex-direction column
}
</style>
