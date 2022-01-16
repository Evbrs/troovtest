<template>
  <NuxtLayout name="custom" class="lg:h-screen lg:pb-16">
    <div
      class="flex flex-col justify-center text-lg text-center bg-gray-100 h-36 sm:py-9"
    >
      <div
        class="flex flex-col justify-center w-3/6 mx-auto border-2 border-gray-300 h-36 bg-gray-200/90 rounded-3xl"
      >
        <p class="text-xl font-semibold text-blue-500">
          Bienvenue sur le test technique de Troov.com
        </p>
        <p>Si vous avez trouvé un objet vous pouvez l'ajouter ci-dessous</p>
      </div>
    </div>
    <add-object />
    <div class="bg-gray-100 h-72 md:h-96"></div>
  </NuxtLayout>
</template>

<script>
import { defineComponent } from "vue";
import addObject from "../components/addObject.vue";
export default defineComponent({
  components: { addObject },
});
</script>

<style></style>
