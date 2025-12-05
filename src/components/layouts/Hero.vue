<script setup>
import Photographer from '../../assets/images/photographer.png'
</script>

<template>
    <section class="hero-container">
        <div class="hero-image">
            <img :src="Photographer" alt="Imagem de uma fotógrafa">
        </div>

        <div class="hero-content">
            <h1>
                Onde a paisagem vira <span>inspiração</span>.
            </h1>
            <p>
                Explore paisagens, cores e luzes que inspiram novas histórias através da fotografia.
            </p>
        </div>
    </section>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    width: 100%;

    text-align: center;

    font-family: vars.$primary-font;
    color: vars.$tertiary-color;

    .hero-image {
        img {
            padding: 2rem;
            max-width: 100%;
            height: auto;
        }
    }

    .hero-content {
        max-width: 100%;

        h1 {
            font-size: clamp(3rem, 10vw, 3.5rem);
            line-height: 1.2;
            margin-bottom: 0.5rem;

            @media (min-width: 480px) {
                font-size: clamp(1.8rem, 8vw, 3rem);
            }

            span {
                color: vars.$secondary-color;
                font-size: clamp(3.5rem, 12vw, 4.5rem);
                font-weight: bold;
            }
        }

        p {
            font-size: clamp(1.4rem, 4vw, 1.6rem);
            margin-top: 1rem;
            margin-left: auto;
            margin-right: auto;
        }
    }
}

@media (min-width: 768px) {
    .hero-container {
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
        gap: 3rem;
        text-align: left;

        .hero-image {
            flex: 0 0 auto;
            width: 40%;

            img {
                padding: 0;
                justify-self: end;
            }
        }

        .hero-content {
            flex: 1;
            width: 60%;
            max-width: 600px;

            h1 {
                font-size: clamp(2.5rem, 5vw, 4rem);
                line-height: 1.1;

                span {
                    font-size: 1.5em;
                }
            }

            p {
                font-size: clamp(1.2rem, 2vw, 1.6rem);
                line-height: 1.5;
                max-width: 100%;
                margin-top: 1.5rem;
                margin-left: 0;
                margin-right: 0;
            }
        }
    }
}

@media (min-width: 1024px) {
    .hero-container {
        gap: 4rem;

        .hero-content {
            h1 {
                font-size: clamp(3rem, 4vw, 5rem);

                span {
                    font-size: 1.5em;
                }
            }

            p {
                font-size: clamp(1.4rem, 1.8vw, 1.8rem);
                margin-top: 2rem;
                max-width: 90%;
            }
        }
    }
}

@media (min-width: 1280px) {
    .hero-container {
        .hero-content {
            h1 {
                font-size: 6rem;

                span {
                    font-size: 8rem;
                }
            }

            p {
                font-size: 1.8rem;
                max-width: 85%;
            }
        }
    }
}

@media (min-width: 1536px) {
    .hero-container {
        .hero-content {
            h1 {
                font-size: 6rem;

                span {
                    font-size: 8rem;
                }
            }

            p {
                font-size: 2rem;
            }
        }
    }
}
</style>