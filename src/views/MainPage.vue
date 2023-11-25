<template>
  <Header />
  <post-content />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PostContent from '@/components/PostContent.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    PostContent
  }
}
</script>

<style scoped>
body {
  padding:0px;
}
</style>>
