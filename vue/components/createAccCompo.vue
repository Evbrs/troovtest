<template>
  <div
    class="flex flex-col justify-center min-h-screen py-3 antialiased bg-gray-100 sm:py-9"
  >
    <div class="relative py-3 mx-auto text-center sm:w-96">
      <span class="text-xl font-light">Formulaire de création de compte</span>
      <div class="mt-4 text-left bg-gray-200 rounded-lg bg-white-shadow">
        <div class="h-2 bg-blue-400 rounded-t-md"></div>
        <div class="px-8 py-6">
          <label class="block font-semibold">Nom d'utilisateur</label>
          <input
            type="text"
            placeholder="Username"
            class="w-full h-5 px-3 py-5 mt-2 border rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            v-model="User.username"
          />
          <label class="block mt-3 font-semibold">Email</label>
          <input
            type="email"
            placeholder="Email"
            class="w-full h-5 px-3 py-5 mt-2 border rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            v-model="User.email"
          />
          <label class="block mt-3 font-semibold">Mot de passe</label>
          <input
            type="password"
            placeholder="Password"
            class="w-full h-5 px-3 py-5 mt-2 border rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-500"
            v-model="User.password"
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
      User: { username: "", email: "", password: "" },
    };
  },
  methods: {
    postAPI() {
      var newUser = {
        username: this.User.username,
        email: this.User.email,
        password: this.User.password,
      };
      axios
        .post("http://localhost:8080/users/", newUser)
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
