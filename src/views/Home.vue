<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12 p-0">
      <div class="home d-flex justify-content-center align-items-center">
        <h1>Welcome to The System !</h1>
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>
  h1{
    color: #fff;
  }
  .home{
    background-image: url('../assets/images/home3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 571px;
    min-height: 100%;
  }
</style>
