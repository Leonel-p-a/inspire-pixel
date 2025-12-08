<script setup>
import { ref } from "vue";
import { Icon } from '@iconify/vue';
import Logo from '../../assets/images/logo.png';
import Menu from '../../assets/icons/icon-menu-mobile.png';

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
                        <RouterLink to="/">Home</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/gallery">Galeria</RouterLink>
                    </li>
                    <li>
                        <RouterLink to="/favorites">Favoritos</RouterLink>
                    </li>
                </ul>
                <div class="">
                    <a href="#">
                        <Icon @click="closeMenu" icon="material-symbols:person" class="icon user-icon" />
                    </a>
                </div>
                <div class="close-button-container">
                    <button @click="closeMenu">
                        <Icon icon="material-symbols:close" class="icon close-icon" />
                    </button>
                </div>
            </div>
        </nav>

        <div v-if="isMenuOpen" @click="closeMenu" class="overlay"></div>
    </header>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 100px;

    font-family: vars.$primary-font;

    .logo {
        width: 57px;
        height: fit-content;
        cursor: pointer;
    }

    .navbar {
        display: flex;
        align-items: center;
        gap: 2.5rem;

        a {
            color: vars.$tertiary-color;
        }

        .menu {
            width: 4rem;
            cursor: pointer;
        }

        .icon {
            font-size: 3rem;
            cursor: pointer;
        }

        .search-icon {
            color: vars.$tertiary-color;
        }

        .nav-content {
            position: fixed;
            top: 0;
            right: 0;

            transform: translateX(100%);

            width: 70vw;
            height: 100vh;

            padding: 1.5rem;
            background-color: vars.$primary-color;

            z-index: 999;

            display: flex;
            flex-direction: column-reverse;
            justify-content: flex-end;
            align-items: flex-start;
            gap: 2rem;

            opacity: 0;
            transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease;

            &--open {
                transform: translateX(0);
                opacity: 1;

                .nav-list {
                    li {
                        animation: slideIn 0.3s ease forwards;

                        &:nth-child(1) {
                            animation-delay: 0.1s;
                        }

                        &:nth-child(2) {
                            animation-delay: 0.2s;
                        }

                        &:nth-child(3) {
                            animation-delay: 0.3s;
                        }
                    }

                    .user-icon {
                        animation: fadeIn 0.4s ease 0.4s forwards;
                        opacity: 0;
                    }

                    .close-icon {
                        animation: fadeIn 0.3s ease 0.2s forwards;
                        opacity: 0;
                    }
                }
            }

            .user-icon {
                color: vars.$secondary-color;
            }

            .close-icon {
                color: vars.$secondary-color;

                position: absolute;
                top: 0;
                right: 0;
                margin: 2rem;

                border: 1px solid #e1306b67;
            }

            .nav-list {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                font-size: 2rem;

                li {
                    opacity: 0;
                }
            }
        }
    }

    .overlay {
        width: 100vw;
        height: 100vh;

        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(2px);

        z-index: 998;

        position: fixed;
        top: 0;
        left: 0;

        animation: fadeIn 0.3s ease;

        &.fade-out {
            animation: fadeOut 0.3s ease;
        }
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}

@keyframes fadeOut {
    from {
        opacity: 1;
    }

    to {
        opacity: 0;
    }
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@media (max-width: 200px) {
    .header {
        .navbar {
            gap: 0;
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
                position: static;
                transform: none;
                opacity: 1;
                width: auto;
                height: auto;
                padding: 0;
                background-color: transparent;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;
                gap: 5rem;

                .nav-list {
                    flex-direction: row;
                    gap: 4rem;

                    a {
                        font-size: 2rem;
                    }

                    li {
                        position: relative;
                        transform: none;
                        animation: none;
                        opacity: 1;
                    }

                    li::before {
                        content: '';
                        position: absolute;
                        bottom: -.5rem;
                        height: 0.2rem;
                        width: 100%;
                        background: linear-gradient(90deg,
                                transparent 0%,
                                vars.$secondary-color 50%,
                                transparent 100%);

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

                .close-button-container {
                    display: none;
                }
            }
        }
    }
}
</style>