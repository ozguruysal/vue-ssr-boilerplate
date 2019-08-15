<template>
  <div class="home">
    <img src="../assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <p>This app is server side rendered!</p>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
.home {
  padding-top: 4rem;
  text-align: center;
}

h1 {
  color: $black;
}

p {
  font-size: 1.5rem;
  font-weight: 300;
}
</style>
