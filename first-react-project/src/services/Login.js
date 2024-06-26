export const LoginService = async (username, password, path) => {
  try {
    const response = await fetch(`${path}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

