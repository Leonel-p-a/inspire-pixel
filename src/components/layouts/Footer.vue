<script setup>
import Facebook from '../../assets/icons/Facebook.svg';
import Linkedin from '../../assets/icons/Linkedin.svg';
import Instagram from '../../assets/icons/Instagram.svg';
import Twitter from '../../assets/icons/Twitter.svg';
</script>

<template>
    <footer class="footer">
        <section class="footer-content">
            <div class="newsletter">
                <h2>Assine nossa newsletter</h2>
                <input type="text" placeholder="Seu e-mail">
                <button>Inscrever-se</button>
            </div>
            <div class="contact-about-container">
                <div class="contact">
                    <h2>Contato</h2>
                    <span>contato@inspiralens.com</span>
                    <span>Central de ajuda</span>
                    <span>Rio de Janeiro - Brasil</span>
                </div>
                <div class="about">
                    <h2>Sobre</h2>
                    <span>Políticas</span>
                    <span>Políticas de privacidade</span>
                    <span>Blog</span>
                </div>
            </div>
        </section>

        <section class="footer-social-network-icons">
            <img :src="Facebook" alt="Logo do Facebook">
            <img :src="Linkedin" alt="Logo do Linkedin">
            <img :src="Instagram" alt="Logo do Instagram">
            <img :src="Twitter" alt="Logo do Twitter">
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use "@/assets/styles/_variables.scss" as vars;

.footer {
    display: flex;
    flex-direction: column;

    font-family: vars.$primary-font;

    .footer-content {
        display: flex;
        flex-direction: column;

        text-align: center;

        h2 {
            font-size: 1.8rem;
            color: vars.$tertiary-color;
        }

        span {
            font-size: 1.6rem;
            cursor: pointer;

            &:hover {
                text-decoration: underline;
            }
        }

        .newsletter {
            display: flex;
            flex-direction: column;
            align-items: center;

            margin-bottom: 2.5rem;

            h2 {
                margin-bottom: 1.5rem;
            }

            input {
                width: 100%;
                max-width: 250px;

                border: none;
                border-radius: 5px;

                padding: 10px;

                background-color: #E6E6E63B;

                margin-bottom: 1rem;
            }

            button {
                padding: 8px 10px;

                border-radius: 5px;

                font-weight: bold;
                color: #FFFFFF;
                background-color: vars.$secondary-color;

                &:hover {
                    background-color: #e1306bd3;
                }
            }
        }

        .contact-about-container {
            display: flex;
            flex-direction: column;

            .contact {
                display: flex;
                flex-direction: column;
                gap: 10px;

                margin-bottom: 2.5rem;
            }

            .about {
                display: flex;
                flex-direction: column;
                gap: 10px;

                padding-bottom: 2.5rem;
            }
        }
    }

    .footer-social-network-icons {
        display: none;
    }
}

@media (min-width: 738px) {
    .footer {
        .footer-content {
            flex-direction: row-reverse;
            justify-content: space-between;

            text-align: left;

            .newsletter {
                align-items: flex-start;
            }

            .contact-about-container {
                flex-direction: row;
                gap: 5rem;
            }
        }

        .footer-social-network-icons {
            display: flex;
            justify-content: center;
            gap: 1.5rem;

            padding-bottom: 3rem;

            img {
                cursor: pointer;
            }
        }
    }
}

@media (min-width: 1024px) {
    .footer {
        .footer-content {
            .newsletter {
                input {
                    width: 400px;
                    min-width: 200px;
                    max-width: 100%;
                }
            }
        }
    }
}

.dark-mode {
    .footer {
        h2, span {
            color: #FFFFFF;
        }

        input {
            color: #FFFFFF;
        }

        .footer-social-network-icons {
            display: none;
        }
    }
}

</style>