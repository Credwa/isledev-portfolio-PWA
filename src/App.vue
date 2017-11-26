<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header><nav-bar></nav-bar></header>
    <main class="gt-xs">
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
    <q-btn
    v-back-to-top.animate="{offset: 500, duration: 200}"
    round
    color="secondary"
    class="fixed-bottom-right animate-pop"
    style="margin: 0 15px 15px 0"
  >
  <q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]">
            <strong>Back To Top</strong>
    </q-tooltip>
  <q-icon name="keyboard_arrow_up" />
</q-btn>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { QBtn, QIcon, BackToTop, QTooltip } from "quasar";
export default {
  components: {
    "nav-bar": Navbar,
    QBtn,
    QIcon,
    QTooltip
  },
  directives: {
    BackToTop
  }
};
</script>

<style lang="stylus">
@import '~variables';

body {
  margin: 0;
  font-family:'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif
  overflow-x: hidden;
}

h1,h2,h3,h4,h5,h6,h7 {
  font-family: palatino
}

main {
  text-align: center;
}

header {
  margin: 0;
}

.slide-leave-active {
  transition: opacity 1s ease;
  opacity: 0;
  animation: slide-out 1s ease-out forwards;
}

.slide-leave {
  opacity: 1;
  transform: translateX(0);
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
}

@keyframes slide-out {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-30px);
  }
}

@keyframes slide-in {
  0% {
    transform: translateY(-30px);
  }

  100% {
    transform: translateY(0);
  }
}

@keyframes jiggle {
  48%, 62% {
    transform: scale(1, 1);
  }

  50% {
    transform: scale(1.1, 0.9);
  }

  56% {
    transform: scale(0.9, 1.1) translate(0, -5px);
  }

  59% {
    transform: scale(1, 1) translate(0, -3px);
  }
}
</style>
