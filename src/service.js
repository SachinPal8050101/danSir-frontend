import axios from "axios"

export function getHeader() {
    let header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return header;
  }

export function createAccountApi() {
    return axios
    .post(`${process.env.REACT_APP_CONFIG_URL}/api/v1/get_user_data`, {
        employee_id: "6346eeb095f1c6ed0a96be8a"
    }, {
      headers: getHeader(),
    })
    .then((resp) => {
       console.log('resp====>>>>',resp)
    })
    .catch((ex) => {
        console.log('errrr--->>>>',ex)
    });
}