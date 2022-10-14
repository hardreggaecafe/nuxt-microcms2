<template>
  <div>
    <h2>{{ item.title }}</h2>
    <div v-html="$md.render(item.body)"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData(context) {
    const data = await context.$axios.$get(
      `https://baseball-lottery.microcms.io/api/v1/posts/${context.params.id}`,
      {
        headers: { "X-MICROCMS-API-KEY": process.env.API_KEY }
      }
    );
    return {
      item: data
    };
  }
};
</script>
