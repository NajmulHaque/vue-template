<template>
    <div class="container form pt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header text-center"> User Login</div>
                    <div class="card-body">
                        <form @submit.prevent="login">

                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail Address</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" name="email" v-model="email" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" name="password" v-model="password" required>
                                </div>
                            </div>  

                            <div class="form-group row mb-0">
                                <div class="col-md-10 offset-md-4">
                                    <button class="btn btn-primary" type="submit">
                                        Login
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return {
            email: 'ss@gmail.com',
            password: 'swffdfhbs',
        }
    },
    methods: {
        async handleSubmit(){
            const response = await axios.post('login', {
                email:   this.email,
                password:  this.password
            });

            console.log(response);
        },
         login: function () {
            const { name, password } = this
            this.$store.dispatch(AUTH_REQUEST, { name, password }).then(() => {
                this.$router.push('/')
            })
        }
    },
}
</script>

<style scoped>
    button{ text-align: right;}
</style>