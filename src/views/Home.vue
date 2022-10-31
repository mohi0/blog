<script setup>
import {ref, onMounted} from 'vue'
import NavBar from '../components/NavBar.vue';
import helper from '../helper';

let posts = ref([])

let isSignedIn = ref(false)

async function fetchRandomPosts(){
    let randomPostsReq = await fetch('http://localhost:8081/randomPosts', {
        method: 'POST',
        body: JSON.stringify({})
    })
    let randomPostsResp = await randomPostsReq.json()
    if(randomPostsResp.status == "OK"){
        console.log(randomPostsResp.posts)
        posts.value = randomPostsResp.posts
    }
}

onMounted(() => {
    fetchRandomPosts()
    helper.getUserOnDevice() ? (isSignedIn.value = true) : (isSignedIn.value = false) 
    console.log("user on device ", helper.setUserOnDevice())
})

</script>
<template>
    <section id="mainSection">
    <NavBar/>
    <div id="mainDiv">
        <nav>
            <h1>Home</h1>
        </nav>
        <section id="postSection">
            <div v-for="(post, index) in posts" class="post">
                <div class="headerDivPost">
                    <h1>{{post.authorUsername}}</h1>
                    <h2>{{post.authorUsername}}</h2>
                </div>
                <div class="bodyDivPost">
                    <p>{{post.content}}</p>
                    <h1>{{post.dateTime}}</h1>
                </div>
                <div class="optionsDivPost">
                    <button>Like</button>
                    <button>Commentt</button>
                    <button>Options</button>
                </div>
                <div class="commentDivPost">
                    <input type="text"/>
                </div>
            </div>
        </section>
    </div>
    </section>
</template>
<style scoped>
#mainSection{
    display: flex;
    flex-direction: row;
}
#mainDiv{
    display: flex;
    flex-direction: column;
    flex: 4;
}
#mainDiv > nav{
    background-color: rgb(41, 41, 41);
    flex-direction: row;
    flex: 1;
}
#mainDiv > nav > h1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: white;
    justify-self: center;
    padding: 0.3rem 0.6rem;
    font-weight: 200;
}
#postSection{
    flex: 16;
    background-color: rgb(64, 64, 64);
    display: flex;
    flex-direction: column;
}

.post{
    width: 98%;
    height: fit-content;
    background-color: black;
    display: flex;
    flex-direction: column;
    align-self:center;
    margin: 0.5rem 0rem;
}
.headerDivPost{
    display: flex;
    flex-direction: column;
}
.headerDivPost > h1{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 1rem;
    padding: 0.1rem 0.8rem;
    padding-top: 1rem;
    color: white;
}
.headerDivPost > h2{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 0.8rem;
    padding: 0.2rem 0.8rem;
    color: rgb(126, 126, 126);
}
.bodyDivPost{
    display: flex;
    flex-direction: column;
    height: fit-content;
}
.bodyDivPost > p{
    padding: 0.2rem 1rem;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 200;
    font-size: medium;
}
.bodyDivPost > h1{
    padding: 0.8rem 1rem;
    color: grey;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 200;
    font-size: small;
}
.optionsDivPost{
    height: fit-content;
}
.optionsDivPost{
    display: flex;
    flex-direction: row;
}
.optionsDivPost > button{
    border: 1px solid grey;
    padding: 0.5rem;
    margin: 0.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    color: grey;
    width: fit-content;
    background-color: transparent;
    margin-left: 1rem;
}
.commentDivPost{
    display:flex;
    flex-direction: column;
    background-color: rgb(42, 37, 37);
}
.commentDivPost > input{
    background-color: black;
    width: 94%;
    margin: 0.6rem 2%;
    border: 1px solid grey;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 100;
    font-size: 0.8rem;
    padding: 0.6rem;
    outline: none;
}
</style>