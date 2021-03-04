<template>
    <div class="wrapper-content wrapper-content--fixed">
        <post :post="post"/>
        <comments :comments="comments"/>
        <newComment/>
        
  </div>
</template>

<script>
import post from '@/components/Blog/Post.vue'
import newComment from '@/components/Comments/newComment.vue'
import comments from '@/components/Comments/Comments.vue'
export default {
    components: {post, comments, newComment },
    data () {
        return {
            post: {
                id: 1,
                title: '1 post',
                descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                img: 'https://img1.goodfon.ru/original/800x480/8/1f/bugatti-veyron-super-sport-5255.jpg'

                },
            comments: [
                {
                    name: 'Alex',
                    text: 'Lorem ipsum dolor sit amet'
                },
                {
                    name: 'John',
                    text: 'Lorem ipsum dolor sit amet'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
.post {
    max-width: 900px;
    margin: 0 auto;
}
.post-header {
    text-align: center;
    margin-bottom: 30px;
    img{
        max-width: 400px;
        margin-bottom: 20px;
    }
    p{
        color: #999;
    }
    .post-body{
        text-align: left;
    }
}
</style>