<template>
  <my-button @click="$router.push(`/posts`)">К списку постов</my-button>
  <h1>Пост с id {{ $route.params.id }}</h1>
</template>

<script>
  export default {

  }
</script>

<style>

</style>