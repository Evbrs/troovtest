<template>
  <NuxtLayout name="custom">
    <div></div>
  </NuxtLayout>
</template>

<script>
import axios from "axios";
export default {
  return: {
    objectDescription: null,
    place: null,
  },

  mounted() {
    axios.get("localhost:8080/objects").then((reponse) => {
      this.objectDescription = reponse.objectDescription;
      this.place = reponse.place;
      console.log(this.objectDescription + " " + this.place);
    });
  },
};
</script>

<style></style>
