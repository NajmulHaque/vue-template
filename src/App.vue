<template>
  <div id="nav" class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container-fluid">
              <img onclick="window.location.href='/'"  class="navbar-brand" src="../public/images/shuttle-logo.png">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                <span><i class="fas fa-bars"></i></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <router-link to="/" class="nav-link">Home</router-link> 
                  </li>
                  <li class="nav-item">
                    <router-link to="/about" class="nav-link">About</router-link> 
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact" class="nav-link">Contact</router-link> 
                  </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item">
                    <router-link to="/login" class="nav-link">Login</router-link> 
                  </li>
                </ul>
            </div>
        </div>
    </nav>
  </div>
  <router-view/>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="api-data">
          <h3 class="pr-4 pl-5 pt-3 text-left">User List</h3>
            <ul v-for="post in users" :key="post.id" id="user-list" class="text-left d-flex my-4 border"> 
                <!-- <li><a v-bind:href="'/user/'+posts.id" class="border p-2">{{posts.name}}</a></li> -->
                <li><router-link :to="'/user/'+post.id" class="nav-link">{{post.id}} - {{post.name}}</router-link></li>
                <!-- <li><router-link :to="{name: 'User', params: {id: +post.id}}" class="nav-link">{{post.name}}</router-link></li> -->
            </ul>
        </div>
      </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
import UserAPI from "./config/UserAPI.js"

export default {
  data() {
    return {
      todos: null,
      users: [] 
    }
  },
  mounted() {
    UserAPI.index().then(function (response) {
      this.users  = response.data;
    }.bind(this));
  },
  created: async function () {
    this.loading = true;
    await axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res => {
      this.loading = false,
      this.posts = res.data;
    })

    .catch( err => {
      this.loading = false;
      this.error = err;
    })
    // await axios.get("https://jsonplaceholder.typicode.com/posts/1").then(result => {
    //   this.todos  = result.data;
    // });

    // let user = {
    //   userId:1,
    //   title: "najmul aut facere repellat provident occaecati excepturi optio reprehenderit",
    //   body: "najmul quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
    // }
    // await axios.post("https://jsonplaceholder.typicode.com/posts", user).then((result) => {
    //   console.log(result);
    // });
    // await axios.delete("https://jsonplaceholder.typicode.com/todos/1");
  }    
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 0;
  // padding: 30px;
  img {cursor: pointer; width: 10%; margin-right: 10%;}
  a {
    font-weight: bold;
    color: #2c3e50;
    padding-right: 50px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
ul{
  list-style-type: none;
}
</style>
