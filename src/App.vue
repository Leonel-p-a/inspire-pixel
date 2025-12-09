<script setup>
import { useTheme } from './composables/usetheme';
import Footer from './components/layouts/Footer.vue';
import Header from './components/layouts/Header.vue';

const { themeClass } = useTheme();
</script>

<template>
  <div :class="themeClass">
    <Header class="container lg:px-8" />
    <RouterView class="container lg:px-8 pt-20" />
    <Footer class="container pt-20 lg:px-8" />
  </div>
</template>

<style scoped></style>
