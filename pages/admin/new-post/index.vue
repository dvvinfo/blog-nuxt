<template>
    <newPostForm @submit="onSubmit" />
</template>
<script>
import newPostForm from '@/components/Admin/NewPostForm.vue'
export default {
    components: { newPostForm },
    layout: 'admin',
    methods: {
       onSubmit (post) {
           console.log('Post Added')
           console.log(post)
       }
    }
}
</script>