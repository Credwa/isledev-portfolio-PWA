<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <header><nav-bar></nav-bar></header>
    <main>
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: {
    "nav-bar": Navbar
  }
};
</script>

<style lang="stylus">
@import '~variables';

body {
  margin: 0;
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
</style>
