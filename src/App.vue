<template>
  <div class="page">
    <my-header />
    <router-view></router-view>
    <my-footer />
  </div>
</template>

<script>

</script>

<style>
  .page {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #606582;
    min-height: 100vh;
    padding: 0 30px;
  }
</style>