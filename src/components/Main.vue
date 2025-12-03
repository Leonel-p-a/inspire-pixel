<script setup>
import Card from './Card.vue';
</script>

<template>
    <section class="cards-container">
        <h2>Inspire-se</h2>

        <div class="cards-grid">
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
            <Card img="https://wallpapers.com/images/featured/fundo-de-paisagem-natural-n1kwq7ikw7uu0jgx.jpg" />
        </div>
    </section>
</template>

<style scoped lang="scss">
.cards-container {
    
    h2 {
        font-size: 3rem;
        font-weight: 400;
        margin-bottom: 25px;
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