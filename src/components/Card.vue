<script setup>
defineProps(['img']);
import { Icon } from '@iconify/vue';
</script>

<template>
    <div class="card">
        <Icon icon="material-symbols:favorite" class="favorite-icon" />
        <img class="image" :src="img" alt="">
    </div>
</template>

<style scoped lang="scss">
@use "@/styles/_variables.scss" as vars;

.card {
    position: relative;
    width: 100%;
    padding-bottom: 169.5%;

    .favorite-icon {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 30px;
        color: vars.$primary-color;
        cursor: pointer;
        z-index: 2;
    }

    .image {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
        cursor: pointer;
    }
}
</style>