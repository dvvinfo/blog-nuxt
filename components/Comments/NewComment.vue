<template>
    <section class="new-comment">
        <div class="container">
            <h2 class="title">New Comment</h2>
            <form @submit.prevent="onSubmit" class="contact-form">
                <label >Name:</label>
                <input v-model="comment.name" type="text" >
                <label >Text:</label>
                <textarea v-model="comment.text" cols="30" rows="10"></textarea>

                <!-- buttons -->
                <div class="controls">
                    <button class="btn btnPrimary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            console.log(this.comment)
        }
    }
}
</script>

<style lang="scss">
.new-comment{
    text-align: center;
    
    .contact-form{
        max-width: 600px;
        margin: 30px auto;
    }
    .controls{
        margin: 30px;
    }
}
</style>