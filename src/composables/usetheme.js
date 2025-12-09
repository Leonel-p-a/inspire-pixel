// src/composables/useTheme.js
import { ref, computed, watch, onMounted } from 'vue';

const THEME_KEY = 'app_theme';
const theme = ref('light');

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark');

  const themeClass = computed(() => (isDark.value ? 'dark-mode' : 'light-mode'));

  const toggleIcon = computed(() =>
    theme.value === 'light'
      ? '/src/assets/icons/mdi--toggle-switch-off-outline.svg'
      : '/src/assets/icons/mdi--toggle-switch.svg'
  );

  function toggleTheme() {
    theme.value = isDark.value ? 'light' : 'dark';
  }

  function setTheme(value) {
    if (value === 'light' || value === 'dark') theme.value = value;
  }

  watch(theme, (newVal) => {
    try {
      localStorage.setItem(THEME_KEY, newVal);
    } catch (e) {

    }
  });

  onMounted(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY);
      if (saved === 'light' || saved === 'dark') {
        theme.value = saved;
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme.value = prefersDark ? 'dark' : 'light';
      }
    } catch (e) {
      
    }
  });

  return {
    theme,
    isDark,
    themeClass,
    toggleIcon,
    toggleTheme,
    setTheme,
  };
}
