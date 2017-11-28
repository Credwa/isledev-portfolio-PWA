<template>
  <div id="home">
    <section id="intro">
      <div class="bitM"  v-scroll-reveal.reset>
      </div>
      <div  v-scroll-reveal.reset>
      <h2 style="color: white">Craig Edwards</h2>
      <h3 style="color: white" class="gt-xs">Full-Stack Software Engineer</h3>
      <h5 style="color: white" class="xs">Full-Stack Software Engineer</h5>
      <a class="downButton" v-scroll-to="'#about'"><q-icon name="keyboard_arrow_down" /></a>
      </div>
      <div class="leftStyleAb shadow-4"></div>
      <div class="rightStyleAb shadow-4"></div>
      <div class="leftStyleSk shadow-4"></div>
      <div class="rightStyleSk shadow-4"></div>
      <div class="leftStylePr"></div>
      <div class="rightStylePr "></div>
      <div class="xs">
        <div class="leftStyleMob"></div>
        <div class="rightStyleMob"></div>
      </div>

    </section>
    <about></about>
    <skills></skills>
    <projects></projects>
    <contact></contact>
    <footerr></footerr>
  </div>
</template>

<script>
import about from "./home/about";
import skills from "./home/skills";
import projects from "./home/projects";
import contact from "./home/contact";
import footerr from "./footer";
import { QBtn, QIcon } from "quasar";

export default {
  components: {
    about,
    skills,
    projects,
    contact,
    footerr,
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
  width: 100vw;
}

.downbtn {
  margin-top: 2em;
}

#intro {
  display: flex;
  flex-direction: column;
  background-size: 100% 100%;
  resize: both;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('~assets/beachimage.jpg');
  height: 100vh;
  width: 100vw;
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
  border-radius: 100vw;
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
  font-size: 7rem;
  color: $secondary;
  border: none;
  margin-bottom: 0px;
  margin-top: 2rem;

  &:hover {
    color: grey;
    transform: scale(1.5);
    transition: transform 0.2s ease-in, color 0.2s ease-in;
  }
}
</style>
