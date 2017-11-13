<template>
  <div id='about'>

    <div class="about-info">
      <h3>Hi, I'm Craig</h3>
      <h5>I'm a Full Stack Software Engineer based in NYC</h5>
      <p class="about-text thin-paragraph">I build Web Applications, Progessive Web Applications, Mobile Applications (hybrid and native). I am currently {{ getAge() }} years old. <br><br>The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance an application as it grows. </p>
    </div>
    <div class="about-bitmoji"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  methods: {
    getAge() {
      let birthdate = new Date("09-19-1996"),
        today = new Date(),
        age = today.getFullYear() - birthdate.getFullYear(),
        m = today.getMonth() - birthdate.getMonth();

      if ((m < 0) || (m === 0 && today.getDate() < birthdate.getDate())) {
        age--;
      }
      return age;
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~variables'
#about
  height 100vh
  background #424242
  display flex
  flex-direction column
  justify-content center
  align-items center
  color white

.about-bitmoji
  background-image: url('~assets/aboutBitmoji.png');
  background-repeat no-repeat
  align-self flex-end
  height 100vh
  width 30vw
  background-size 100% 100%
  transition: background-image 0.2s ease-in;
  &:hover
    animation: jiggle 2s ease-in infinite;
  &:active
    background-image: url('~assets/goodDayBM.png');
    transition: background-image 0.4s ease-in;

.about-info
  display flex
  flex-direction column
  margin-top 5vh

.about-text
  align-self flex-start
  width 50vw
  margin-top 1.5rem
</style>
