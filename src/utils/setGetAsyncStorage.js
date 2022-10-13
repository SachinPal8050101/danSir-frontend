export const  setInLocalStorage = async (key , value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // Error retrieving data
       console.log('Somthing went wrong')
    }
 };

 export const  getFromLocalStorage = async (key) => {
  try {
    localStorage.getItem(key, JSON.stringify(key));
  } catch (error) {
    // Error retrieving data
     console.log('Somthing went wrong')
  }
};

export const  removeFromLocalStorage = async (key) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    // Error retrieving data
     console.log('Somthing went wrong')
  }
};







