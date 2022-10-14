import { getFromLocalStorage } from "./setGetAsyncStorage";

const useAuth = ()=>{
    let token = getFromLocalStorage("Token");
  return token;
}
export default useAuth;