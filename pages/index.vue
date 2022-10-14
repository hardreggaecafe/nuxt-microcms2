<template>
  <div>
    <div v-for="item in items">
      <nuxt-link :to="'careers/' + item.id">
        <h2>
          {{ item.name }}
        </h2>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      items: []
    };
  },
  async asyncData({$axios}) {
    const data = await $axios.$get(
      "https://baseball-lottery.microcms.io/api/v1/careers",
      {
        headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
      }
    );
    return {
      items: data.contents
    };
  }
};
</script>
