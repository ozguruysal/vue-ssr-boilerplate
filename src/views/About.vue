<template>
  <div class="about">
    <h1>This is an about page with dummy content</h1>

    <p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora,
      est at deserunt illum molestiae consequatur sunt. Ipsa tenetur vel
      culpa, ex quasi repellendus voluptate quae, eos, ipsum debitis quam eligendi.
    </p>
  </div>
</template>

<script>
export default {
  name: "About",

  metaInfo() {
    return {
      title: "About",
    };
  },
};
</script>

<style lang="scss" scoped>
h1 {
  font-weight: 300;
}

p {
  color: $gray-600;
}
</style>
