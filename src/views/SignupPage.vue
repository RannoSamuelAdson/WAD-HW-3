<template>
    <Header />
    <div class="filling">
      <SignupForm />
    </div>
    <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SignupForm from '@/components/SignupForm.vue'

export default {
  name: 'SignUpView',
  components: {
    Header,
    Footer,
    SignupForm
  }
}
</script>

<style>
.filling {
  padding-top: 30px;
  background-color: rgb(158, 158, 158); /* Use background-color, not fill */
  height: calc(100vh - 180px); /* Calculate the height based on the viewport height minus the heights of header and footer */
  width: calc(100% + 55px);

}
</style>
