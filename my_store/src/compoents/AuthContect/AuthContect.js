export const saveAccesTokenTolS = (access_token) => {
  localStorage.setItem("access_token", access_token);
};

export const clearAccesTokenForm = () => {
  localStorage.removeItem("access_token");
};

export const getAccesToken = () => localStorage.getItem("access_token") || "";
