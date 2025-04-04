const API_URL = import.meta.env.VITE_API_URL; // Para Vite
// const API_URL = process.env.REACT_APP_API_URL; // Para Create React App

export const fetchAlgorithms = async () => {
  try {
    const response = await fetch(`${API_URL}/algorithms`);
    if (!response.ok) {
      throw new Error("Erro ao buscar os algoritmos");
    }
    return await response.json();
  } catch (error) {
    console.error("Erro na requisição:", error);
    return [];
  }
};
