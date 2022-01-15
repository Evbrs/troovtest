<template>
  <NuxtLayout name="custom">
    <login-compo />
  </NuxtLayout>
</template>

<script>
import { defineComponent } from "vue";
import loginCompo from "../components/loginCompo.vue";
export default defineComponent({
  components: { loginCompo },
});
</script>

<style></style>
