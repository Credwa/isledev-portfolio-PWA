<template>
  <div id='about' >

    <h1 style="color: black">About Isledev</h1>
    <h4 style="color: #31CCEC">What I Do</h4>
    <div class="about-info" v-scroll-reveal.reset>
      <!-- <h3 style="font-family:Fjord" >DESIGN. INNOVATION. <br>CREATIVITY. TECHNOLOGY.</h3>
      <h5>I build Web Applications, Progessive Web Applications, Mobile Applications (hybrid and native).</h5>
      <p class="about-text thin-paragraph"><br>The work I provide is of highest quality, fully responsive, and tested in a wide range of devices. I take great care to ensure each project is well-documented and easily maintainable so you can enhance an application as it grows. </p> -->
    <q-card v-for="idea in ideas" :key="idea.title" class="about-card" v-scroll-reveal.reset >
      <q-card-title>
        <h3>{{ idea.title }}</h3>
      </q-card-title>
      <q-card-main>
          <li v-for="info in idea.info" :key ="info[0]" style="list-style:none" > <p  class="aboutInfo">{{info}}</p> </li>
      </q-card-main>
    </q-card>
    </div>
  </div>
</template>

<script>
import { QCard, QCardTitle, QCardMain, QCardSeparator } from "quasar";
export default {
  components: {
    QCard,
    QCardTitle,
    QCardMain,
    QCardSeparator
  },
  data() {
    return {
      ideas: [
        {
          title: "DESIGN",
          info: [
            "Cutting Edge User Interface Design",
            "Best User Experience",
            "Responsive Designs"
          ]
        },
        {
          title: "INNOVATION",
          info: [
            "Revolution Your Business",
            "From Idea to a Valuable Service",
            "Dynamic and Continuous Innovation"
          ]
        },
        {
          title: "CREATIVITY",
          info: ["Unique Designs", "Custom Built Applications"]
        },
        {
          title: "TECHNOLOGY",
          info: [
            "Lastest Technology and Methodologies",
            "Mobile Applications",
            "Web Applications",
            "Progressive Web Applicaitons"
          ]
        }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="stylus" scoped>
@import '~variables';

#about {
  min-height: 100vh;
  background: #ECEFF1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
}

.about-bitmoji {
  background-image: url('~assets/aboutBitmoji.png');
  background-repeat: no-repeat;
  align-self: flex-end;
  height: 100vh;
  width: 30vw;
  background-size: 100% 100%;
  transition: background-image 0.2s ease-in;

  &:hover {
    animation: jiggle 2s ease-in infinite;
  }

  &:active {
    background-image: url('~assets/goodDayBM.png');
    transition: background-image 0.4s ease-in;
  }
}

.about-info {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
}

.about-text {
  align-self: center;
  width: 50vw;
  margin-top: 1.5rem;
  font-size: 1.2em;
  font-family: Fjord;
}

.about-card {
  width: 20vw;
  transition: background-color 0.4s ease-in, transform 0.4s ease-out;
  display inline-flexbox
  justify-content center
  align-items center
  align-content center
  &:hover {
    background-color: $secondary;
    transform: scale(1.05);
    transition: background-color 0.4s ease-in, transform 0.4s ease-out;
    animation: jiggle 2s ease-in infinite;
  }

  .aboutInfo {
    margin: auto;
    margin-top 2vh
  }
}

@media screen and (max-width: 920px) {
  .about-card {
    min-width: 80vw;
    transition: background-color 0.4s ease-in, transform 0.4s ease-out;

    &:hover {
      background-color: $secondary;
      transform: scale(1.05);
      transition: background-color 0.4s ease-in, transform 0.4s ease-out;
      animation: jiggle 2s ease-in infinite;
    }
  }
}
</style>
