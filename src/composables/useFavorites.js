import { ref, watch, onMounted } from "vue";

const favorites = ref([]);

export function useFavorites() {

  const toggleFavorite = (photo) => {
    const exists = favorites.value.find(p => p.id === photo.id);
    if (exists) {
      favorites.value = favorites.value.filter(p => p.id !== photo.id);
    } else {
      favorites.value.push(photo);
    }
  };

  watch(
    favorites,
    (newVal) => {
      localStorage.setItem("favorites", JSON.stringify(newVal));
    },
    { deep: true }
  );

  onMounted(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      favorites.value = JSON.parse(saved);
    }
  });

  return { favorites, toggleFavorite };
}
