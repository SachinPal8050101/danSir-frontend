const userCreateAccount = (data) => {
    return {
        type: "CREAT_USER_DATA",
        payload: data
    }
}

const userTotalAmountIs = (data) => {
    return {
        type: "USER_TOTAL_AMOUNT",
        payload: data
    }
}

const amountAddedSuccess = (data) => {
    return {
        type: "AMOUNT_ADDED_USER",
        payload: data
    }
}

const setIsAdminInRedux = (data) => {
    return {
        type: "SET_IS_ADMIN",
        payload: data
    }
}

export default {
    userCreateAccount,
    userTotalAmountIs,
    amountAddedSuccess,
    setIsAdminInRedux,
}