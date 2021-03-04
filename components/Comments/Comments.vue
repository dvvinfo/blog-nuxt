<template>
    <section class="comments" v-if="comments">
        <div class="container">
            <h2 class="title">Comments:</h2>
            <div class="comment" v-for="comment in comments" :key="comment.name">
                <p class="comment__name">{{ comment.name }}</p>
                <p class="comment__text">{{ comment.text }}</p>
            </div>

        </div>
    </section>
</template>
,<script>
export default {
    props: {
        comments: {
            type: Array,
            default: null
        }
    }
}
</script>
<style lang="scss">
.comments{
    margin: 30px;
    text-align: center;
}
.comment{
    margin: 0 auto;
    max-width: 600px;
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
    background: #fff;
    .comment__name{
        margin-bottom: 12px;
        font-size: 24px;
        color: #5c4de7;
    }
}
</style>