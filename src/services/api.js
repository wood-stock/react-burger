export const checkResponse = (response) => {
  return response.ok ? response.json() : Promise.reject(response);
};
export const url = 'https://norma.nomoreparties.space/api/';
