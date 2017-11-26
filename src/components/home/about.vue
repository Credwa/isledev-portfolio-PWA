<template>
  <div id='about' >
    <div class="about-info" v-scroll-reveal.reset>
      <h3 style="font-family:Fjord" >DESIGN. INNOVATION. <br>CREATIVITY. TECHNOLOGY.</h3>
      <h5>I build Web Applications, Progessive Web Applications, Mobile Applications (hybrid and native).</h5>
      <p class="about-text thin-paragraph"><br>The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance an application as it grows. </p>
    </div>
    <div class="about-bitmoji"  v-scroll-reveal.reset></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
#about
  min-height 100vh
  max-height 120vh
  background #ECEFF1
  display flex
  flex-direction column
  justify-content center
  align-items center
  width: 100vw

.about-bitmoji
  background-image: url('~assets/aboutBitmoji.png');
  background-repeat no-repeat
  align-self flex-end
  height 100vh
  width 30vw
  background-size 100% 100%
  transition: background-image 0.2s ease-in;
  &:hover
    animation: jiggle 2s ease-in infinite
  &:active
    background-image: url('~assets/goodDayBM.png');
    transition: background-image 0.4s ease-in

h1,h2,h3,h4,h5
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif

.about-info
  display flex
  flex-direction column
  margin-top 5vh

.about-text
  align-self center
  width 50vw
  margin-top 1.5rem
  font-size 1.2em
  font-family: Fjord
</style>
