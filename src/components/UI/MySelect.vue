<template>
  <select class="select" :value="modelValue" @change="changeOption">
    <option disabled value="">Выберите из списка</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'my-select',
    props: {
      modelValue: {
        type: String,
      },
      options: {
        type: Array,
        default: () => [],
      }
    },
    methods: {
      changeOption(evt) {
        this.$emit('update:modelValue', evt.target.value)
      }
    }
  }
</script>

<style>
  .select {
    max-width: 250px;
    width: 100%;
    background-color: transparent;
    color: #F9CFB6;
    padding: 20px;
  }
</style>