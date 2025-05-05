// services/autocompleteService.ts
import useAxios from "../hooks/useAxios";

export const useAutocompleteService = () => {
  const { server } = useAxios();

  const fetchOptions = async (endpoint: string, query: string) => {
    const response = await server.get(endpoint, {
      params: { q: query }
    });
    return response.data;
  };

  return { fetchOptions };
};
