<template>
<div class="wrapper-content wrapper-content--fixed">
  <promo/>
  <intro title="My last posts:"/>
  <postList :posts="posts"/>
  <contacts/>
  </div>
</template>

<script>
import promo from '@/components/Promo.vue'
import intro from '@/components/UI/Intro.vue'
import postList from '@/components/Blog/PostList.vue'
import contacts from '@/components/Contacts.vue'
export default {
  components: {
    promo,
    intro,
    postList,
    contacts
  },
  data () {
    return {
      posts: [
        {
          id: 1,
          title: '1 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: 'https://img1.goodfon.ru/original/800x480/8/1f/bugatti-veyron-super-sport-5255.jpg'
        },
        {
          id: 2,
          title: '2 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: 'https://avatars.mds.yandex.net/get-pdb/33827/203472834-mclaren-mp4-12c-1458130241.5/s1200?webp=false'
        },
        {
          id: 3,
          title: '3 post',
          descr: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: 'https://avatars.mds.yandex.net/get-pdb/33827/203472834-mclaren-mp4-12c-1458130241.5/s1200?webp=false'
        },
      ]
    }
  }
}
</script>

<style>


</style>
