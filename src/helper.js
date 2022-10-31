let helper = {
    url: "http://localhost:8081",
    getUserOnDevice(){
        let userOnDevice = {
            username: localStorage.getItem("CURRENT_USERNAME"),
            password_hash: localStorage.getItem("CURRENT_USER_PASSWORD_HASH")
        }
        return userOnDevice
    },
    setUserOnDevice(username, passwordHash){
        localStorage.setItem("CURRENT_USERNAME", username)
        localStorage.setItem("CURRENT_USER_PASSWORD_HASH", passwordHash)
    },
    async apiJsonRequest(endPoint, bodyObj){
        return await (await fetch(this.url + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObj)
        })).json()
    },
    async apiBlobReq(endPoint, bodyObj){
        return await (await fetch(this.url + endPoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyObj)
        })).blob()
    }
}

export default helper