<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'my-button',
  }
</script>

<style>
  .button {
    box-sizing: border-box;
    border: 1px solid green;
    background-color: transparent;
    padding: 10px;
    cursor: pointer;
    color: green;
  }
</style>