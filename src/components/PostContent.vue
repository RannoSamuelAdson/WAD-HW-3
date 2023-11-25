<template>
    <div class="flex_container_row">
        <div class="sidebar"></div>

          <div id="vertical_content">
        <div class="post" v-for="post in posts" :key="post.id">
            <header class="post_header">
                <img class="profile_img" src="@/assets/logo.png">
                <p>{{post.time}}</p>
            </header>
            <div class="post_content">

                <p>{{post.postContent}}</p>
                <img class="profile_img" src="@/assets/like-button.png">
            </div>
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
      posts: this.$store.state.posts
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
.flex_container_row{
    display: flex;
    flex-direction: row;
    width:100%;
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
}</style>
