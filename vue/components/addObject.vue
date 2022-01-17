<template>
  <div
    class="flex flex-col justify-center h-full min-h-full py-3 antialiased bg-gray-100 sm:py-5"
  >
    <div class="relative py-3 mx-auto text-center sm:w-96">
      <span class="text-xl font-light">Ajouter un objet</span>
      <div class="mt-4 text-left bg-gray-200 rounded-lg bg-white-shadow">
        <div class="h-2 bg-blue-400 rounded-t-md"></div>
        <div class="px-8 py-6">
          <label class="block font-semibold">Type d'objet</label>
          <input
            type="text"
            placeholder="Type de l'objet"
            class="w-full h-5 px-3 py-5 mt-2 border rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            v-model="Item.objectDescription"
          />
          <label class="block mt-3 font-semibold"
            >Lieu où vous l'avez trouvé</label
          >
          <input
            type="text"
            placeholder="Lieu"
            class="w-full h-5 px-3 py-5 mt-2 border rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            v-model="Item.place"
          />
          <div class="flex items-baseline justify-between">
            <button
              class="px-6 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
              @click="postAPI()"
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      Item: { objectDescription: "", place: "" },
    };
  },
  methods: {
    postAPI() {
      var newItem = {
        objectDescription: this.Item.objectDescription,
        place: this.Item.place,
      };
      axios
        .post("http://localhost:8080/objects/", newItem)
        .then((reponse) => {
          console.log(reponse);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
