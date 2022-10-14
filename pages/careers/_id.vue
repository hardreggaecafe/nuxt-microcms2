<template>
  <div>
    <h2>キャリア</h2>
    <div v-for="item in items">
      <nuxt-link :to="'posts/' + item.id">
        <h2>
          {{ item.title }}
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

  async asyncData(context) {
    const data = await context.$axios.$get(
      `https://baseball-lottery.microcms.io/api/v1/posts?filters=careers[equals]${context.params.id}`,
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
