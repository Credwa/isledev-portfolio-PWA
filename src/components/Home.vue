<template>
  <div id="home">
    <section id="intro">
      <div class="bitM">
      </div>
      <h3>Craig Edwards</h3>
      <h5>Software Engineer</h5>
      <q-btn round class="downbtn" color="secondary">
        <q-icon name="keyboard_arrow_down"/>
      </q-btn>
    </section>
    <about></about>
  </div>
</template>

<script>
import About from "./home/about";
import { QBtn, QIcon } from 'quasar';

export default {
  components: {
    about: About,
    QBtn,
    QIcon
  },
  data() {
    return {};
  }
};
</script>

<style lang="stylus" scoped>
@import '~variables';

#home
  display: flex
  flex-direction column
  justify-content center

.downbtn
  margin-top 2em

#intro {
  display: flex;
  flex-direction column
  background-size: 100% 100%;
  resize: both;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('~assets/beachImage.jpeg');
  height: 100vh;
  justify-content: center;
  align-items: center;
  color: #EEEEEE
}

.bitM {
  background-size: 100% 100%;
  background-image: url('~assets/bitmoji.png');
  background-color: rgba(30, 30, 30, 0.7);
  height: 30vh;
  width: 30vh;
  border-radius: 100px;
  transition: background-image 0.2s ease-in;
}

.bitM:hover {
  background-color: rgba(0, 0, 0, 0.5);
  animation: jiggle 1s ease-in infinite;
}

.bitM:active {
  background-image: url('~assets/bitmoji-click.png');
  transition: background-image 0.4s ease-in;
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
