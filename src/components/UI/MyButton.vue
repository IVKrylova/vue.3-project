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
    border: 1px solid #F9CFB6;
    background-color: transparent;
    padding: 20px;
    cursor: pointer;
    color: #F9CFB6;
    width: 250px;
  }

  .button:hover {
    color: #F49569;
    border: 1px solid #F49569;
  }
</style>