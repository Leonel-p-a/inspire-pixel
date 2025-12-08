<script setup>
import Footer from './components/layouts/Footer.vue';
import Header from './components/layouts/Header.vue';
</script>

<template>
  <Header class="container lg:px-8" />
  <RouterView class="container lg:px-8" />
  <Footer class="container pt-20 lg:px-8" />
</template>

<style scoped></style>
