<script setup>
import Card from './Card.vue';

defineProps(['photos']);
</script>

<template>
    <div class="cards-grid">
        <Card 
            v-for="photo in photos"
            :key="photo.id"
            :img="photo.download_url"
        />
    </div>
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

    .error-box {
        padding: 20px;
        background: #ffebeb;
        color: #b30000;
        border: 1px solid #b30000;
        border-radius: 8px;
        margin-bottom: 20px;

        p {
            font-size: 1.6rem;
        }
    }

    .cards-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        gap: 20px;
        justify-content: center;
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
}
</style>