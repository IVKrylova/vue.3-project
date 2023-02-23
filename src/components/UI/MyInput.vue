<template>
  <input
    class="input"
    type="text"
    :value="modelValue" @input="updateInput"
  >
</template>

<script>
  export default {
    name: 'my-input',
    props: {
      modelValue: [String, Number],
    },
    methods: {
      updateInput(evt) {
        this.$emit('update:modelValue', evt.target.value);
      }
    }
  }
</script>

<style>
  .input {
    max-width: 300px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid green;
  }
</style>