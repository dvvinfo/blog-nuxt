<template>
    <section class="new-post">
        <div class="container">
            <form @submit.prevent>
                <AppInput v-model="post.title"> Title:</AppInput>
                <AppInput v-model="post.descr"> Descr:</AppInput>
                <AppInput v-model="post.img"> Img link:</AppInput>
                <AppTextArea v-model="post.content"> Content:</AppTextArea>
                <!-- buttons -->
                <div class="conrols">
                    <AppButton class="btnDanger" @click="cancel">Cancel</AppButton>
                    <AppButton @click="onSubmit">Save</AppButton>
                </div>
            </form>
        </div>
    </section>
</template>
<script>
export default {
    data () {
        return {
            post: {
                title: '',
                descr: '',
                img: '',
                content: ''
            }
        }
    },
    methods: {
        onSubmit () {
            this.$emit('submit', this.post)
        },
        cancel () {
            this.$router.push('/admin/')
        }
    }
}
</script>
<style lang="scss" scoped>
.conrols{
    text-align: center;
    margin: 20px auto;
}
</style>