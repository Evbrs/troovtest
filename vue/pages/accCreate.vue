<template>
  <NuxtLayout name="custom">
    <create-acc-compo />
  </NuxtLayout>
</template>

<script>
import { defineComponent } from "vue";
import createAccCompo from "../components/createAccCompo.vue";

export default defineComponent({
  components: { createAccCompo },
});
</script>

<style></style>
