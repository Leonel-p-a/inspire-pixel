<script setup>
import Card from './Card.vue';

defineProps(['photos']);
</script>

<template>
        <transition-group
        name="fade"
        tag="div"
        class="cards-grid"
    >
        <Card
            v-for="photo in photos"
            :key="photo.id"
            :photo="photo"
        />
    </transition-group>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 20px;
    justify-content: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: all .4s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateY(10px);
}

@media (min-width: 640px) {
    .cards-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 768px) {
    .cards-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
}

@media (min-width: 1024px) {
    .cards-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>