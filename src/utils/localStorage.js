export const getStoredData = (key) => {
    return JSON.parse(localStorage.getItem(key)) || [];
  };
  
  export const setStoredData = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
  };