import axios from "axios"

export function getHeader() {
    let header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    };
    return header;
  }

export function createAccountApi(payload,successCallback,failCallback) {
    return axios
    .post(`${process.env.REACT_APP_CONFIG_URL}/api/v1/create_user`, payload, {
      headers: getHeader(),
    })
    .then((resp) => {
       console.log('resp====>>>>',resp)
       successCallback()
    })
    .catch((ex) => {
        console.log('errrr--->>>>',ex)
        failCallback(ex)
    });
}