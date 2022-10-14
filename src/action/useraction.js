const userCreateAccount = (data) => {
    return {
        type: "CREAT_USER_DATA",
        payload: data
    }
}

export default {
    userCreateAccount
}