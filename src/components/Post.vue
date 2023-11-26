<template>
        <div class="post">
            <header class="post_header">
                <img class="profile_img" src="@/assets/logo.png">
          <p>{{ post.time }}</p>
            </header>
            <div class="post_content">
                <img v-if=post.imageName :src="post.imageName" alt="post image">
          <p>{{ post.postContent }}</p>
          <img @click="likePost(post)" class="profile_img" src="@/assets/like-button.png">
          <span class="likes-count">{{ post.likes }} likes</span>
            </div>
        </div>
</template>
<script>
export default {
  name: 'PostContent',
  computed: {
    posts () {
      return this.$store.state.posts
    }
  },
  props: {
    post: {
    }
  },
  methods: {
    likePost (post) {
      this.$store.commit('setLikes', { postId: post.id, likes: post.likes + 1 })
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

.likes-count {
  margin-left: 5px;
  font-weight: bold;
}

.post_content {
    padding-bottom: 1rem;

}

.post {
    flex-direction: column;
    margin: 0.5rem;
    background-color: lightgray;
    padding-left: 1rem;
    padding-right: 1rem;
    border-radius: 1rem;
}

.profile_img {
    width: 2rem;
    height: 2rem;
    padding: 0.25rem;
    margin-left: 0px;
}

.post_header {
    display: flex;
    flex-direction: row;
}

.post_header p:last-child {
    margin-left: auto;
}

.post img {
    max-width: 100%;
    max-height: 100%;
}
</style>
