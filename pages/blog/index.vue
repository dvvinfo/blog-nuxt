<template>
<div class="wrapper-content wrapper-content--fixed">
  <Intro title="My posts:"/>
  <PostList :posts="posts"/>
  </div>
</template>

<script>
export default {
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
