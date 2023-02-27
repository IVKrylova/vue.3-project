<template>
  <ul class="pagination">
    <li
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      class="page"
      :class="{
        'page_current': page === pageNumber,
      }"
      @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </li>
  </ul>
</template>

<script>
  export default {
    props: {
      totalPages: {
        type: Number,
      },
      page: {
        type: Number,
      }
    },
  }
</script>

<style>
  .pagination {
    display: flex;
    column-gap: 15px;
    list-style-type: none;
    padding: 0;
    margin: 20px;
  }

  .page {
    cursor: pointer;
  }

  .page_current {
    color: green;
    font-weight: bold;
    text-decoration: underline;
  }
</style>