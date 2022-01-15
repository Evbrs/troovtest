<template>
  <div class="">
    <header class="w-full h-16 text-black align-middle bg-blue-400">
      <nav class="flex justify-between py-3 pl-6 pr-8">
        <nuxt-link to="/" class="pb-3 text-3xl font-bold text-white"
          >Troov.com</nuxt-link
        >
        <div class="flex justify-around w-3/4 pt-2 pl-5 text-xl">
          <nuxt-link to="/listobject" class="font-medium hover:text-white"
            >Liste des Objets</nuxt-link
          >
          <nuxt-link to="/acccreate" class="font-medium hover:text-white"
            >Créer un compte</nuxt-link
          >
          <nuxt-link to="/acclogin" class="font-medium hover:text-white"
            >Connectez-vous</nuxt-link
          >
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer
      class="pb-3 text-center bg-gray-100 border border-t-3 border-t-gray-200"
    >
      <p>Test Technique Troov.com &copy; {{ new Date().getFullYear() }}</p>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
