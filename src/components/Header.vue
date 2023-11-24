<template>
  <nav>

    <div class="flex_container_row">
      <router-link to="/">Main Page</router-link>
            <p>|</p>
      <router-link to="/signup">Signup Page</router-link>
    </div>

  </nav>
</template>
<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

nav {
    width: 100%;
    display:flex;
    background-color: darkgray;
    justify-content: center;
    margin-bottom: 10px;

}
.flex_container_row{
    display: flex;
    flex-direction: row;
    width:100%;
    justify-content: center;
}
nav a {
    margin: 0 10px; /* Optional: add some space between the links */
}

/* If you want the "|" to be part of the layout with spacing, you might consider the following: */
p {
    margin: 0 10px; /* Add margin around the <p> to space out the separator */
}

</style>
