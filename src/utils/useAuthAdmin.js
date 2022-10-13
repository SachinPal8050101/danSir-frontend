import { getFromLocalStorage } from "./setGetAsyncStorage";

const useAuthAdmin = () => {
  let token = getFromLocalStorage("Token");
  return token;
};
export default useAuthAdmin;
