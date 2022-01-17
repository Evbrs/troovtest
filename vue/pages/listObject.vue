<template>
  <NuxtLayout name="custom">
    <div>
      <h1
        class="flex flex-col justify-center w-full py-10 text-5xl text-center"
      >
        Event Listing
      </h1>
      <ul
        class="grid w-2/3 grid-flow-row grid-cols-3 mx-auto gap-x-3 gap-y-2 auto-rows-fr"
      >
        <template v-for="event in events" :key="event.id">
          <li
            class="block mb-5 font-medium text-center text-white bg-blue-300 border-2 border-blue-500 rounded-xl"
          >
            {{ event.objectDescription + " - " + event.place }}
          </li>
        </template>
      </ul>
    </div>
  </NuxtLayout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      events: [],
    };
  },
  created() {
    return axios
      .get("http://localhost:8080/objects")
      .then((response) => {
        this.events = response.data;
        console.log(this.events);

        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style></style>
