<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-md-12">
      <div class="home pt-5">
        <h1>Welcome to The System !</h1>
        <div class="row justify-content-center pt-3">
          <div class="col-md-4">
            <TodoInput @eventAddNewTask="onAddNewTask"/>
            <ul class="list mt-3">
              <ListItem v-for="item in itemList" :key="item.id" :isDone="item.IsDone" :task="item.task" :id="item.id" @eventTaskStatusChange="onTaskStatusChange" @eventTaskDelete="onTaskDelete"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
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
// @ is an alias to /src
import TodoInput from '@/components/todos/TodoInput.vue'
import ListItem from '@/components/todos/ListItem.vue'
import UserAPI from "@/config/UserAPI.js"

export default {
  name: 'Home',
  data() {
    return {
      itemList: [],
      users: []
    }
  },
  mounted() {
    UserAPI.index().then(function (response) {
      this.users  = response.data;
    }.bind(this));
  },
  components: {
    TodoInput,
    ListItem
  },
  // created: async function () {
  //   this.loading = true;
  //   await axios.get("https://jsonplaceholder.typicode.com/users")
  //   .then(res => {
  //     this.loading = false,
  //     this.posts = res.data;
  //   })

  //   .catch( err => {
  //     this.loading = false;
  //     this.error = err;
  //   })
  // },
  methods: {

    onAddNewTask(taskName){
      const task = {
        id: (new Date()).getTime(),
        task: taskName,
        isDone:false
      }
      this.itemList.push(task)
    },

            /**
             * Event: on task status changed
             */
            onTaskStatusChange(id, checked) {
                console.log(id, checked)

                let item = this.itemList.find(i => i.id == id)
                if (item) {
                    item.isDone = checked
                }
                
                console.log(this.itemList)
            },

            /**
             * Event: on task deleted
             */
            onTaskDelete(id) {
                console.log(id)

                let index = this.itemList.findIndex(i => i.id == id)
                if (index > -1) {
                    this.itemList.splice(index, 1)
                }

                console.log(this.itemList)
            },

            /**
             * Load item list from local storage
             */
            loadItemList() {
                this.itemList = JSON.parse(localStorage.getItem("VuejsTodo")) || []

                console.log("this.itemList =", this.itemList)
            },

            /**
             * Update the item list to local storage
             */
            updateItemList() {
                localStorage.setItem("VuejsTodo", JSON.stringify(this.itemList))
            }
    
  },
        mounted() {
            // Load item list from local storage
            this.loadItemList()
        },
        watch: {
            itemList: {
                handler(value) {
                    console.log("item changed")

                    // save to localStorage
                    this.updateItemList()
                },
                deep: true
            }
        }
}
</script>

<style scoped>
  h1{
    color: #fff;
  }
  .home{
    background-image: url('../../public/images/home3.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    height: 250px;
    width: 100%;
  }
</style>
