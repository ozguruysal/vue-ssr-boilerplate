<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script>
const DefaultLayout = () =>
  import(/* webpackChunkName: "layout-default" */ "@/layouts/DefaultLayout.vue");
const BlankLayout = () =>
  import(/* webpackChunkName: "layout-blank" */ "@/layouts/BlankLayout.vue");

export default {
  name: "App",

  // Inject meta tags using "vue-meta" plugin. See https://vue-meta.nuxtjs.org/
  metaInfo() {
    return {
      title: "Vue SSR Boilerplate",
      titleTemplate: "%s | Özgür Uysal",

      meta: [
        {
          vmid: "description",
          name: "description",
          content: "Minimal starter package for Vue.js server side rendering.",
        },
      ],
    };
  },

  components: {
    DefaultLayout,
    BlankLayout,
  },

  computed: {
    layout() {
      return this.$route.meta.layout || "DefaultLayout";
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
