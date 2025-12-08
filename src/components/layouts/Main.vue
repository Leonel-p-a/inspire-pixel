<script setup>
import { ref, onMounted } from 'vue';
import CardsGrid from '../ui/CardsGrid.vue';
import { fetchPhotos } from '../../services/photos';

const photos = ref([]);
const errorMessage = ref(null);

onMounted(async () => {
    photos.value = await fetchPhotos();
});
</script>

<template>
    <section class="cards-container">
        <h2>Inspire-se</h2>

        <div v-if="errorMessage" class="error-box">
            <h2>{{ errorMessage }}</h2>
            <p>Tente novamente mais tarde.</p>
        </div>

        <CardsGrid :photos="photos" />
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.cards-container {
    h2 {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 25px;
        font-family: vars.$primary-font;
    }
}
</style>