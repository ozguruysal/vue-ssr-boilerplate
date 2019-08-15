<template>
  <div class="blank-page">
    <h1>A Page With Blank Layout</h1>

    <p>Uses "Blank Layout" which has no header or footer. Layout is defined in
      route meta object. See <code>"/router/routes.js"</code></p>

    <p><router-link :to="{ name: 'Home' }">Back to Home</router-link></p>
  </div>
</template>

<script>
export default {
  name: "BlankPage",
}
</script>

<style lang="scss" scoped>
.blank-page {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
}
</style>
