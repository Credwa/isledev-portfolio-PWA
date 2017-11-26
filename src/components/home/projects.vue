<template>
    <div id="projects">
        <h1 v-scroll-reveal.reset>Projects</h1>
        <div >
            <a v-for="project in projects" :key="project.title" :href="project.link" target="_blank" v-scroll-reveal.reset >
                <q-card inline class="project">
                <q-card-title class="projectTitle">
                    {{project.title}}
                </q-card-title>
                <q-card-main class="projectInfo">
                    {{project.info}}
                </q-card-main>
            </q-card>
            </a>
        </div>
    </div>
</div>

</template>

<script>
import { QTooltip, QCard, QCardTitle, QCardMedia, QCardMain } from "quasar";

export default {
  components: {
    QTooltip,
    QCard,
    QCardTitle,
    QCardMedia,
    QCardMain
  },
  data() {
    return {
      projects: [
        {
          title: "Todo App",
          link: 'https://secret-eyrie-85925.herokuapp.com/',
          github: 'https://github.com/Credwa/node-mongo-test-api',
          info:
            "FullStack Todo Application using Nodejs, MongoDB, Express, VueJS"
        },
        {
          title: "Chat App",
          link: 'https://shielded-wave-68392.herokuapp.com/',
          github: 'https://github.com/Credwa/nodejs-chat-app',
          info: "FullStack Application using websockets, vuejs, nodejs"
        },
        {
            title: 'Elemental',
            link: 'https://github.com/Credwa/Elemental',
            info: 'C++ application with QT for GUI.'
        },
        {
            title: 'Ribbit',
            link: 'https://github.com/Credwa/Ribbit',
            info: 'Mobile Android Messaging App'
        },
        {
            title: 'IntStory',
            link: 'https://github.com/Credwa/InteractiveStory',
            info: 'Mobile Android App Which tells an interactive story'
        },
        {
            title: 'DiscordBot',
            link: 'https://github.com/Credwa/DiscordBot',
            info: 'Bot for discord server to handle some automation'
        }
      ]
    };
  },
  methods: {
  }
};
</script>

<style lang="stylus" scoped>
@import '~variables';

#projects {
    min-height: 100vh;
    background: #ECEFF1;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100vw;
    flex-wrap: wrap;
}

.project {
    min-height: 25vh;
    width: 40vh;
    display: flex;
    transition: background-color 0.4s ease-in, transform 0.4s ease-out;
    color: black;

    .projectTitle {
        color: #0277BD;
    }

    .projectInfo {
        wrap: wrap;
        max-width: 25vw;
    }

    &:hover {
        background-color: rgba(0, 60, 0, 0.5);
        transform: scale(1.05);
        transition: background-color 0.4s ease-in, transform 0.4s ease-out;
        animation: jiggle 2s ease-in infinite;
    }
}
</style>
