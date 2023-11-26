<template>
    <div class="flex_container_row">
        <div class="sidebar"></div>
            <div id="vertical_content">
            <Post v-for="post in posts" :key="post.id" :post="post" />
        <div class="reset-likes">
      <button @click="resetLikes()">Reset Likes</button>
    </div>
      </div>
     <div class="sidebar"></div>
    </div>
</template>
<script>
import Post from './Post.vue'
export default {
  name: 'PostContent',
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  components: {
    Post
  },
  methods: {
    likePost (post) {
      this.$store.commit('setLikes', { postId: post.id, likes: post.likes + 1 })
    },
    resetLikes () {
      this.$store.dispatch('resetLikes')
    }
  }
}
</script>
<style scoped>
@media (max-width: 500px) {
    #vertical_content {
        min-width: 100%;
    }

}
.sidebar {
    flex-grow: 2;
    background-color: darkgray;
    margin-top: 10px;
    /* Add 15 pixels of margin on top */
}

.flex_container_row {
    display: flex;
    flex-direction: row;
  width: 100%;
}

#vertical_content {
    flex-grow: 7;
    max-width: 60%;
    align-items: center;
}
</style>
