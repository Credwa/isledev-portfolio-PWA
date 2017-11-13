<template>
<div>
  <div id="skill" class="gt-xs">
    <img :src="getImgUrl(cSkill.image)" alt="cSkill.name"/>
    <q-tooltip anchor="bottom middle" self="bottom left" :offset="[10, 10]">
            <strong>{{cSkill.name}}</strong>
    </q-tooltip>
  </div>
    <div id="skillMob" class="xs">
    <img :src="getImgUrl(cSkill.image)" alt="cSkill.name"/>
    <q-tooltip anchor="bottom middle" self="bottom left" :offset="[10, 10]">
            <strong>{{cSkill.name}}</strong>
    </q-tooltip>
  </div>
</div>

</template>

<script>
import { QTooltip } from "quasar";

export default {
  components: {
    QTooltip
  },
  props: ["cSkill"],
  data() {
    return {
      link: this.cSkill.image
    };
  },
  methods: {
    getImgUrl(pic) {
      let images = require.context("../../../assets/", false, /\.png$/);
      return images("./" + pic + ".png");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~variables';

#skill {
  height: 40%;
  width: 10%;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  &:hover {
    animation: jiggle 1s ease-in infinite;
  }
}

#skillMob {
  img {
    height: 4em;
  }
}
</style>
