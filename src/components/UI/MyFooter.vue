<template>
  <footer class="footer">
    <p class="footer__text">За основу взят
      <a class="footer__link" target="_blank" href="https://www.youtube.com/watch?v=XzLuMtDelGk">Vue 3 фундаментальный курс от А до Я</a> от
      <a class="footer__link" target="_blank" href="https://www.youtube.com/@UlbiTV">ULBITV</a></p>
  </footer>
</template>

<script>
  export default {
    name: 'my-footer',
  }
</script>

<style>
  .footer__text {
    color: #B68C90;
    font-size: 18px;
    cursor: default;
  }

  .footer__link {
    color: #B68C90;
    text-decoration: none;
  }

  .footer__link:hover {
    cursor: pointer;
    color: #F49569;
  }
</style>