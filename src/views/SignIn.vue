<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import helper from '../helper.js'

let username = ref("")
let password = ref("")

let router = useRouter()

async function signIn(){
    let signInReq = await fetch('http://localhost:8081/signIn', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            password: password.value
        })
    })
    let signInResp = await signInReq.json()
    if(signInResp.status == "OK"){
        helper.setUserOnDevice(signInResp.username, signInResp.password)
        //window.location.href = "home.html"
        router.replace({name: 'Home'})
    }
    alert(`${signInResp.status}\n${signInResp.ERROR ? signInResp.ERROR : ''}`)
}

function SignUpClick(){
    router.replace({name:"SignUp"})
}

</script>
<template>
    <div id="mainDiv">
        <h1>Sign In</h1>
        <div>
            <label>Username:</label>
            <input type="text" v-model="username"/>
            <label>Password:</label>
            <input type="password" v-model="password"/>
            <button @click="signIn">Sign In</button>
        </div>
        <button @click="SignUpClick">Sign Up</button>
    </div>
</template>
<style scoped>
#mainDiv{
    display: flex;
    height: 100vh;
    flex-direction: column;
    background-color: rgb(43, 50, 69);
}
#mainDiv > h1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    text-align:center;
    font-weight: 200;
    padding: 2rem 0rem;
}
#mainDiv > div{
    height: fit-content;
    width: 60%;
    margin-left: 20%;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
}
#mainDiv > div > label{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    padding: 0.3rem;
    font-weight: 100;
    font-size: medium;
    align-self: center;
    text-align: left;
    width: 90%;
}
#mainDiv > div > input{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: black;
    padding: 0.3rem;
    width: 90%;
    font-weight: 100;
    align-self: center;
    font-size: medium;
}
#mainDiv > div > button{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    background-color: green;
    padding: 0.3rem;
    border: none;
    width: 92%;
    margin: 1rem 0rem;
    font-weight: 100;
    align-self: center;
    font-size: medium;
}

button{
    border: 1px solid gray;
    align-self: center;
    color: white;
    padding: 0.5rem;
    background-color: transparent;
    margin-top: 5rem;
}
</style>