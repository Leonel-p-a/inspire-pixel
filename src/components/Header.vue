<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';
import Logo from '../assets/logo.png';
import Menu from '../assets/icon-menu-mobile.png';

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
}

const closeMenu = () => {
    isMenuOpen.value = false
}
</script>

<template>
    <header class="header">
        <img :src="Logo" alt="Logo da marca" class="logo">

        <nav class="navbar">
            <div>
                <Icon icon="material-symbols:search" class="icon search-icon" />
            </div>

            <div @click="toggleMenu">
                <img :src="Menu" alt="Open menu" class="menu">
            </div>

            <div class="nav-content" :class="{ 'nav-content--open': isMenuOpen }">
                <ul class="nav-list">
                    <li>
                        <a @click="closeMenu" href="">Início</a>
                    </li>
                    <li>
                        <a @click="closeMenu" href="">Galeria</a>
                    </li>
                    <li>
                        <a @click="closeMenu" href="">Favoritos</a>
                    </li>
                </ul>
                <div class="">
                    <a href="">
                        <Icon icon="material-symbols:person" class="icon user-icon" />
                    </a>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;

    .logo {
        width: 57px;
        height: fit-content;
        cursor: pointer;
    }

    .navbar {
        display: flex;
        align-items: center;
        gap: 5rem;

        a {
            color: $tertiary-color;
        }

        .menu {
            cursor: pointer;
        }

        .icon {
            font-size: 3rem;
            cursor: pointer;
        }

        .search-icon {
            color: $tertiary-color;
        }

        .nav-content {
            align-items: center;
            display: none;

            &--open {
                display: flex;
            }

            .user-icon {
                color: $secondary-color;
            }

            .nav-list {
                display: flex;
                flex-direction: column;
            }
        }
    }
}

@media (min-width: 768px) {
    .header {
        .navbar {
            gap: 3rem;

            .menu {
                display: none;
            }

            .nav-content {
                display: flex;
                gap: 5rem;

                .nav-list {
                    flex-direction: row;
                    gap: 4rem;

                    a {
                        font-size: 2rem;
                    }

                    li {
                        position: relative;
                    }

                    li::before {
                        content: '';
                        position: absolute;
                        bottom: -.5rem;
                        height: 0.2rem;
                        width: 100%;
                        background: linear-gradient(90deg,
                            transparent 0%,
                            $secondary-color 50%,
                            transparent 100%
                        );

                        border-radius: 1rem;
                        transform: scaleX(0);
                        transition: transform 0.4s ease;
                    }

                    li:hover::before {
                        transform: scaleX(1);
                        animation: scan 1.2s infinite;
                    }

                    @keyframes scan {
                        0% {
                            background-position: -100% 0;
                        }

                        100% {
                            background-position: 200% 0;
                        }
                    }
                }
            }
        }
    }
}
</style>