<script setup>
import CardsGrid from '../components/ui/CardsGrid.vue';
import { useFavorites } from '../composables/useFavorites';

const { favorites } = useFavorites();
</script>

<template>
    <section class="favorites-container">
        <h2>Seus favoritos</h2>

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
    </section>
</template>

<style scoped lang="scss">
.favorites-container {
    h2 {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 25px;
    }

    p {
        font-size: 1.6rem;
        padding-top: 2rem;
    }
}
</style>