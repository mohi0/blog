<script setup>
</script>
<template>
    <div id="mainDivNav">
        <nav>
        <h1>MicroBlog</h1>
        <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>About</li>
        </ul>
        </nav>
    </div>
</template>
<style scoped>

#mainDivNav{
  display: flex;
  flex: 1;
  background-color: antiquewhite;
  flex-direction: row;
  height: 100vh;
}
nav{
  flex: 1;
  background-color: rgb(41, 41, 41);
  display: flex;
  flex-direction: column;
}
nav > h1{
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 200;
  font-size: 2rem;
  padding: 0.3rem 2rem;
  color: white;
}
nav > ul {
  cursor: pointer;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: white;
  font-size: 1.5rem;
  padding: 0.3rem 1rem;
  list-style-type: none;
}
nav > ul > li{
  padding: 0.3rem 1rem;
}
</style>