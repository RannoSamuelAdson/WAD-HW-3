<template>
    <footer>
        <p>Copyright by the Boring Company</p>
        <p>Contact us: rannosamuel1@gmail.com</p>

    </footer>
  </template>
<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: darkgray;
  text-align: center;

}

  </style>
