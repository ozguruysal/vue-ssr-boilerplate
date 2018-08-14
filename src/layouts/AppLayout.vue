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
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default {
  name: "AppLayout",

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
