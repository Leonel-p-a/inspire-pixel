async function fetchPhotos() {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=3&limit=40');

        if (!response.ok) {
            throw {
                status: response.status,
                message: response.statusText || "Erro desconhecido"
            };
        }

        const data = await response.json();
        return data;
    } catch (error) {
        errorMessage.value = `Erro ${error.status}: ${error.message}`;
    }
}

export { fetchPhotos };