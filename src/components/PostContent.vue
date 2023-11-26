<template>
  <div class="flex_container_row">
    <div class="sidebar"></div>

    <div id="vertical_content">
      <div class="post" v-for="post in posts" :key="post.id">
        <header class="post_header">
          <img class="profile_img" src="@/assets/logo.png">
          <p>{{ post.time }}</p>
        </header>
        <div class="post_content">
          <p>{{ post.postContent }}</p>
          <img @click="likePost(post)" class="profile_img" src="@/assets/like-button.png">
          <span class="likes-count">{{ post.likes }} likes</span>
        </div>
      </div>
      <div class="reset-likes">
      <button @click="resetLikes()">Reset Likes</button>
    </div>
    </div>
    <div class="sidebar"></div>
  </div>
</template>
<script>
export default {
  name: 'PostContent',
  data: function () {
    return {
    }
  },

  computed: {
    posts () {
      return this.$store.state.posts
    }
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

.likes-count {
  margin-left: 5px;
  font-weight: bold;
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

.interaction_button {
  height: 2rem;
  width: 2rem;
  margin: .5rem;
}
</style>
