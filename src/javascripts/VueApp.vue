<script>
export default {
  data: () => {
    console.log("akiotyan");
    return {
      message: "akiotyan2",
    };
  },
};
</script>

<template>
  <p>{{ message }}</p>
</template>

<style scoped>
p {
  color: green;
}
</style>
