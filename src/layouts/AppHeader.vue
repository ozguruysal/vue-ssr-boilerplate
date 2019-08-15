<template>
  <header class="site-header">
    <div class="site-header-content container">

      <div class="site-logo">
        <router-link to="/">Vue SSR</router-link>
      </div>

      <nav class="site-nav">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/blank">Blank Layout</router-link></li>
        </ul>
      </nav>

    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>
