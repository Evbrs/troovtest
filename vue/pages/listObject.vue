<template>
  <NuxtLayout name="custom">
    <div>
      <h1>Event Listing</h1>
      <ul
        v-for="event in events"
        :key="event.id"
        :event="event"
        class="flex flex-col justify-center w-1/2 mx-auto mb-8 text-center border-2 border-blue-300 rounded-xl"
      >
        <li>{{ event.objectDescription }}</li>
        <li>{{ event.place }}</li>
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
