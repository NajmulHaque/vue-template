<template>
  <div id="nav" class="container-fluid">
    <nav class="navbar navbar-expand-md navbar-light shadow-sm">
        <div class="container-fluid">
              <img onclick="window.location.href='/'"  class="navbar-brand" src="./assets/images/logo.png">
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
</template>

<script>
export default {
    name:navBar
}
</script>