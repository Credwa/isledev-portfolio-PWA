<template>
  <div id="home">
    <section id="intro">
      <div class="bitM">
      </div>
      <h3>Craig Edwards</h3>
      <h5>Software Engineer</h5>
      <a class="downButton"><q-icon name="keyboard_arrow_down" /></a>
    </section>
    <about></about>
    <skills></skills>
  </div>
</template>

<script>
import about from "./home/about";
import skills from "./home/skills";
import { QBtn, QIcon } from "quasar";

export default {
  components: {
    about,
    skills,
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

#home {
  display: flex;
  flex-direction: column;
  justify-content: center;

}

.downbtn {
  margin-top: 2em;
}

#intro {
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  resize: both;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('~assets/beachImage.jpeg');
  height: 100vh;
  width: 100vw
  justify-content: center;
  align-items: center;
  color: #EEEEEE;
}

.bitM {
  background-size: 100% 100%;
  background-image: url('~assets/bitmoji.png');
  background-color: rgba(30, 30, 30, 0.7);
  height: 30vh;
  width: 30vh;
  border-radius: 100px;
  transition: background-image 0.2s ease-in;
  animation: jiggle 3s ease-in infinite;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    animation: jiggle 1s ease-in infinite;
  }

  &:active {
    background-image: url('~assets/bitmoji-click.png');
    transition: background-image 0.4s ease-in;
  }
}

.downButton {
  font-size: 4rem;
  color: $info;
  border: none;
  margin-bottom: 0px;
  margin-top: 2rem;

  &:hover {
    color: grey;
    transform: scale(1.5)
    transition: transform 0.2s ease-in, color 0.2s ease-in;
  }
}
</style>
