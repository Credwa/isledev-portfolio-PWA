<template>
<q-toolbar slot="footer" color="secondary">
    <q-toolbar-title>
      &copy;2017 Isledev
    </q-toolbar-title>
</q-toolbar>
</template>

<script>
import { QToolbar, QToolbarTitle } from "quasar";

export default {
  components: {
    QToolbar,
    QToolbarTitle
  }
};
</script>

<style lang="stylus" scoped>
@import '~variables';
</style>