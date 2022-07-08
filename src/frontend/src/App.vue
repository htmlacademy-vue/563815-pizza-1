<script>
export default {
  name: "App",
  computed: {
    layout() {
      const layout = this.$route.meta.layout;
      return () => import(`@/layouts/${layout}.vue`);
    },
  },
};
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss">
@import "~@/assets/scss/app";
</style>
