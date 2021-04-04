<template>
  <div class="container">
      <div class="row">
          <div class="col-md-12">
              <div class="api-data text-left border">
                <p v-if="loading">loading...</p>
                <ul class="pt-3" v-if="post">
                    <li>
                        <p><strong>Id: </strong>{{post.id}}</p>
                    </li>
                    <li>
                        <p><strong>Name: </strong>{{post.name}}</p>
                    </li>
                    <li>
                        <p><strong>username: </strong>{{post.username}}</p>
                    </li>
                    <li>
                        <p><strong>address: </strong></p>
                        <ul>
                            <li><strong>street: </strong>{{post.address.street}}</li>
                            <li><strong>suite: </strong>{{post.address.suite}}</li>
                            <li><strong>city: </strong>{{post.address.city}}</li>
                            <li><strong>zipcode: </strong>{{post.address.zipcode}}</li>
                            <ul>
                                <li><strong>geo lat: </strong>{{post.address.geo.lat}}</li>
                                <li><strong>geo lng: </strong>{{post.address.geo.lng}}</li>
                            </ul>
                        </ul>
                    </li>
                    <li>
                        <p><strong>phone: </strong>{{post.phone}}</p>
                    </li>
                    <li>
                        <p><strong>website: </strong>{{post.website}}</p>
                    </li>
                    <li>
                        
                        <ul>
                            <li><p><strong>company name: </strong>{{post.company.name}}</p></li>
                            <li><p><strong>company catchPhrase: </strong>{{post.company.catchPhrase}}</p></li>
                            <li><p><strong>company bs: </strong>{{post.company.bs}}</p></li>
                        </ul>
                    </li>
                    <li>
                        <p><strong>website: </strong>{{post.website}}</p>
                    </li>
                </ul>
            </div>
            <p v-if="error">{{ error }}</p>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';
import App from '@/App.vue'

export default {
  data() {
    return {
      loading: false,
      post: null,
      error: "",
    }
  },
  created: async function (e) {
        this.loading = true;
        await axios.get("https://jsonplaceholder.typicode.com/users/" + this.$route.params.id)
        .then(res => {
            console.log(res);
        this.loading = false;
        this.post = res.data;
        })

        .catch( err => {
        this.loading = false;
        this.error = err;
        })
    }
}
</script>

<style scoped>
    .col-md-12{padding: 5% 0;}
</style>