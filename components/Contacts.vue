<template>
    <section class="contact">
        <div class="container">
            <h2 class="title">Contactc me!</h2>

            <!-- Message -->
            <Message v-if="message" :message="message"/>

            <form @submit.prevent="onSubmit" class="contact-form">
                <!-- name -->
                <AppInput v-model="user.name"  >Name:</AppInput>
                <!-- email -->
                <AppInput v-model="user.email" type="email" >Email:</AppInput>
                <!-- text -->
                <AppTextArea v-model="user.text" cols="30" rows="10">Text:</AppTextArea>

                <!-- buttons -->
                <div class="controls">
                    <AppButton class="btnWhite"> Submit</AppButton>
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
            user: {
                name: '',
                email: '',
                text: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.message = 'Submited'
            this.user.name = ''
            this.user.email = ''
            this.user.text = ''
            console.log(this.user)
        }
    }
}
</script>

<style lang="scss">
.contact{
    text-align: center;
    background-color: #4f68f4;
    color: #fff;
    .title{
       color: #fff; 
    }
    .contact-form{
        max-width: 600px;
        margin: 30px auto;
    }
    .controls{
        margin: 30px;
    }
}
</style>