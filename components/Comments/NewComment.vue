<template>
    <section class="new-comment">
        <div class="container">
            <h2 class="title">New Comment</h2>
            <!-- message -->
            <Message v-if="message" :message="message"/>
            <form @submit.prevent="onSubmit" class="contact-form">
                <!-- name -->
                <AppInput v-model="comment.name">Name:</AppInput>
                <!-- textarea -->
                <AppTextArea v-model="comment.text" cols="30" rows="10">Text:</AppTextArea>

                <!-- buttons -->
                <div class="controls">
                     <AppButton > Submit</AppButton>
                </div>
            </form>
        </div>
    </section>
</template>
<script>

export default {
    data () {
        return {
            message: null,
            comment: {
                name: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.message='Submited'
            this.comment.name = ''
            this.comment.text = ''
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