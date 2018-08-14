<template>
    <footer class="site-footer">
        <p>&copy; {{ currentYear }} &middot; <a href="https://ozguruys.al">Özgür Uysal</a></p>
    </footer>
</template>

<script>
export default {
  name: "AppFooter",

  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

