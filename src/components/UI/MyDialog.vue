<template>
  <section class="dialog" v-if="show" @click.stop="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  import toggleMixin from '@/mixins/toggleMixin';

  export default {
    name: 'my-dialog',
    mixins: [toggleMixin],
  }
</script>

<style>
  .dialog {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgb(0, 0, 0, .5);
    display: flex;
    position: fixed;
  }

  .dialog__content {
    margin: auto;
    background-color: #fff;
    border-radius: 12px;
    max-width: 600px;
    width: 100%;
    background-color: #92A9C9;
  }
</style>