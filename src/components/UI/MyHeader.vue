<template>
  <header class="header">
    <nav class="menu">
      <ul class="menu__list">
        <li>
          <my-button @click="$router.push(`/posts`)">К списку постов</my-button>
        </li>
        <li>
          <my-button @click="$router.push('/')">На главную</my-button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'my-header',
  }
</script>

<style>
  .menu__list {
    padding: 0;
    margin: 50px;
    list-style-type: none;
    display: flex;
    column-gap: 50px;
  }
</style>