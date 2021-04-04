<template>
    <div class="list-item" :class="{ done: isDone }">
        <input type="checkbox" class="checkbox" :id="idComputed" @change="onTaskStatusChange" :checked="isDone">
        <label :for="idComputed" class="mr-3"></label>
        <span class="text">
            {{task}}
        </span>
        <span class="icon-delete" @click="onTaskDelete"></span>
        
    </div>
</template>

<script>
export default {
    name: "ListItem",
        props: {
            id: {
                type: Number,
                default: 0
            },
            task: {
                type: String,
                default: ""
            },
            isDone: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            idComputed() {
                return `item-${this.id}`
            }
        },
        methods: {
            /**
             * Event: on task status changed
             */
            onTaskStatusChange(e) {
                const checked = e.target.checked
                this.$emit("eventTaskStatusChange", this.id, checked)
            },

            /**
             * Event: on task deleted
             */
            onTaskDelete(e) {
                this.$emit("eventTaskDelete", this.id)
            }
        }
}
</script>

<style scoped>
    .text{ color: #fff; text-transform: capitalize;}
</style>