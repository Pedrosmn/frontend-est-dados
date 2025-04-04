const API_URL = import.meta.env.VITE_API_URL; // Substitua pela URL do Render

export const fetchAlgorithms = async () => {
    try {
        const response = await fetch(`${API_URL}/algorithms`);
        if (!response.ok) {
            throw new Error("Erro ao buscar os algoritmos");
        }
        return await response.json();
    } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        return [];
    }
};
