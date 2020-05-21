<template>
  <div class="wrapper">
    <app-header />

    <div class="content container">
      <slot />
    </div>

    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./AppHeader.vue";
import AppFooter from "./AppFooter.vue";

export default {
  name: "DefaultLayout",

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
