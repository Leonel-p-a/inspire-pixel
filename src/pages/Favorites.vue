<script setup>
import CardsGrid from '../components/ui/CardsGrid.vue';
import { useFavorites } from '../composables/useFavorites';

const { favorites } = useFavorites();
</script>

<template>
    <section class="favorites-container">
        <h2>Seus favoritos</h2>

        <transition-group name="fade" tag="div" class="favorites-content">
            <CardsGrid
                v-if="favorites.length"
                :photos="favorites"
                key="list"
            />
            <p
                v-else
                key="empty"
            >
                Você ainda não favoritou nenhuma imagem.
            </p>
        </transition-group>
    </section>
</template>

<style scoped lang="scss">
.favorites-container {
    h2 {
        font-size: 3rem;
        font-weight: 400;
    }

    p {
        font-size: 1.6rem;
        padding-top: 2rem;
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
}
</style>