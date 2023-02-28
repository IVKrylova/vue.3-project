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
    width: 500px;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #F9CFB6;
    background-color: transparent;
    padding: 20px;
  }

  .input::placeholder {
    color: #F9CFB6;
  }
</style>