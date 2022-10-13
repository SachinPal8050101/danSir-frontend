export const setInLocalStorage = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    // Error retrieving data
    console.log("Somthing went wrong");
  }
};

export const getFromLocalStorage = (key) => {
  try {
    let token = localStorage.getItem(key);
    return token;
  } catch (error) {
    // Error retrieving data
    console.log("Somthing went wrong");
  }
};

export const removeFromLocalStorage = (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Error retrieving data
    console.log("Somthing went wrong");
  }
};
