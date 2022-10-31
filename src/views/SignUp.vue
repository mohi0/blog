<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import helper from '../helper.js'

let username = ref("")
let password = ref("")
let email = ref("")
let confirmPassword = ref("")

let router = useRouter()

async function signUp(){
    if(!validateData()){
        return 
    }
    let signUpReq = await fetch('http://localhost:8081/signUp', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username.value,
            email: email.value,
            password: password.value
        })
    })
    let signUpResp = await signUpReq.json()
    console.log("SignUp resp ", signUpResp)
    if(signUpResp.status == "OK"){
        helper.setUserOnDevice(signUpResp.username, signUpResp.password)
        router.replace({name: 'Home'})
    }else{
        alert(signUpResp.ERROR)
    }
}
function validateData(){
    if(username.value.replace("\\s", "") == ""){
        alert('username cannot be blank')
        return false
    }else if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        alert('improper email ID')
        return true 
    }else if(password.value.replace("\\s", "") == ""){
        alert('password cannot be blank')
        return false
    }else if(confirmPassword.value.replace("\\s", "") == ""){
        alert('confirm password cannot be blank')
        return false
    }else if(password.value != confirmPassword.value){
        alert('both the passwords should match')
        return false
    }else{
        return true
    }
}

function SignInClick(){
    router.replace({name: 'SignIn'})
}

</script>
<template>
    <div id="mainDiv">
        <h1>Sign Up</h1>
        <div>
            <label>Username:</label>
            <input type="text" v-model="username"/>
            <label>Email:</label>
            <input type="text" v-model="email"/>
            <label>Password:</label>
            <input type="password" v-model="password"/>
            <label>Confirm Password:</label>
            <input type="password" v-model="confirmPassword"/>
            <button @click="signUp">Sign Up</button>
        </div>
        <button @click="SignInClick">Sign In</button>
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