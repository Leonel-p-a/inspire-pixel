<script setup>
import { ref } from 'vue';
import { Icon } from '@iconify/vue';

defineProps(['img']);

const favorite = ref(false);

const handleHeartColor = () => {
    favorite.value = !favorite.value;
}
</script>

<template>
    <div class="card">
        <button @click="handleHeartColor">            
            <Icon v-if="favorite" icon="material-symbols:favorite" class="favorite-icon favorite" />
            <Icon v-else icon="material-symbols:favorite" class="favorite-icon" />
        </button>
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

    .favorite {
        color: #ff0000;
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

    &:hover {
        filter: brightness(0.9);
    }
}
</style>