export default {
  getUsers: async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_URL_BACKEND + "/usuarios"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  getRestaurantes: async () => {
    try {
      const response = await fetch(
        import.meta.env.VITE_URL_BACKEND + "/restaurantes"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  createRestaurant: async (newRestaurant) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_URL_BACKEND + "/restaurantes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newRestaurant),
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
  deleteRestaurant: async (id) => {
    try {
      const response = await fetch(
        import.meta.env.VITE_URL_BACKEND + `/restaurantes/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return error;
    }
  },
};
