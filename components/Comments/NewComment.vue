<template>
    <section class="new-comment">
        <div class="container">
            <h2 class="title">New Comment</h2>
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
import AppButton from '@/components/UI/Controls/Button.vue'
import AppInput from '@/components/UI/Controls/Input.vue'
import AppTextArea from '@/components/UI/Controls/TextArea.vue'
export default {
    components: { AppButton,AppInput,AppTextArea },
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