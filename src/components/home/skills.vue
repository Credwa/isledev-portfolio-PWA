<template>
  <div id="skills">
    <h1 style="color: black">Skills</h1>
    <h4  style="color: #31CCEC" class="gt-xs" v-scroll-reveal.reset>{{skills[loadedComp].title}}</h4>
    <div class="skills-list shadow-6" v-touch-swipe.horizontal="userHasSwiped" v-scroll-reveal.reset>
      <a class="navArrow">
        <q-icon name="keyboard_arrow_left" @click="decrementList"/>
      </a>

      <div v-for="skill in currentLoadedSkills" :key="skill.name">
        <q-slide-transition appear>
        <skill :cSkill="skill"> </skill>
        </q-slide-transition>
      </div>

      <a class="navArrow" @click="incrementList">
        <q-icon name="keyboard_arrow_right" />
      </a>
    </div>
  </div>
</template>

<script>
import skill from "./skills/skill";
import { QIcon, TouchSwipe, QSlideTransition } from "quasar";
export default {
  components: {
    skill,
    QIcon,
    QSlideTransition
  },
  directives: {
    TouchSwipe
  },
  data() {
    return {
      loaded: 0,
      skills: [
        {
          title: "Favorite Stack",
          list: [
            {
              name: "VueJS",
              image: "Vue_logo"
            },
            {
              name: "ExpressJS",
              image: "express_logo"
            },
            {
              name: "MongoDB",
              image: "mongodb_logo"
            },
            {
              name: "NodeJS",
              image: "node_logo"
            }
          ]
        },
        {
          title: "More Skills",
          list: [
            {
              name: "Angular",
              image: "angular_logo"
            },
            {
              name: "Java",
              image: "java-logo"
            },
            {
              name: "Spring",
              image: "spring_logo"
            },
            {
              name: "MySQL",
              image: "mysql_logo"
            }
          ]
        },
        {
          title: "Some Extra Tools...",
          list: [
            {
              name: "Git",
              image: "git_logo"
            },
            {
              name: "Quasar",
              image: "quasar_logo"
            },
            {
              name: "Wordpress",
              image: "WordPress_logo"
            },
            {
              name: "npm",
              image: "npm_logo"
            }
          ]
        }
      ]
    };
  },
  methods: {
    userHasSwiped(e) {
      if (e.direction === "right") {
        this.decrementList();
      }
      else if (e.direction === "left") {
        this.incrementList();
      }
    },
    incrementList() {
      this.loaded++;
    },
    decrementList() {
      this.loaded--;
    }
  },
  computed: {
    currentLoadedSkills() {
      return this.skills[this.loadedComp].list;
    },
    getNumberofSkillLists() {
      return this.skills.length;
    },
    loadedComp() {
      // reset to 0 if loaded more than 2
      this.loaded = this.loaded >= 3 ? 0 : this.loaded;

      // go to last list if loaded less than 0
      this.loaded = this.loaded <= -1 ? 2 : this.loaded;
      return this.loaded;
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~variables';

#skills {
  height: 100vh;
  background: white
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw
}

.skills-list {
  background-color: $secondary;
  opacity: 0.7;
  width: 100vw;
  height: 40vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-around;
}

.navArrow {
  font-size: 4rem;
  color: black;

  &:hover {
    color: $primary;
    transform: scale(1.2);
    transition color .3s ease-out, transform .3s ease-in
  }
}
</style>
