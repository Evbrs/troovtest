<template>
  <div
    class="flex flex-col justify-center min-h-screen py-3 antialiased bg-gray-100 sm:py-9 lg:py-0"
  >
    <div class="relative py-3 mx-auto text-center sm:w-96">
      <span class="text-xl font-light">Formulaire de connexion</span>
      <div class="mt-4 text-left bg-gray-200 rounded-lg bg-white-shadow">
        <div class="h-2 bg-blue-400 rounded-t-md"></div>
        <div class="px-8 py-6">
          <label class="block font-semibold">Nom d'utilisateur</label>
          <input
            type="text"
            placeholder="Username"
            class="w-full h-5 px-3 py-5 mt-2 border rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <label class="block mt-3 font-semibold">Mot de passe</label>
          <input
            type="password"
            placeholder="Password"
            class="w-full h-5 px-3 py-5 mt-2 border rounded-md hover:outline-none focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div class="flex items-baseline justify-between">
            <button
              class="px-6 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
            >
              Se connecter
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
