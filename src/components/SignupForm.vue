<template>
    <div class="signup-form">
      <form @submit.prevent="validateForm">
        <div class="input-group">
          <label for="email" class="subtext">Email</label>
          <input type="email" id="email" placeholder="Email" v-model="email" required>
        </div>
        <div class="input-group">
          <label for="password" class="subtext">Password</label>
          <input type="password" id="password" placeholder="Password" v-model="password" required>
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
    <div v-if="validationMessage" class="validation-message">
        {{ validationMessage }}
      </div>
  </template>

<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      email: '',
      password: '',
      validationMessage: ''
    }
  },
  methods: {
    validateForm () {
      // Regular expression for the password validation
      const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*[0-9])(?=.*[_]).{8,14}$/
      if (!passwordRegex.test(this.password)) {
        this.validationMessage = 'Password is not valid.'
      } else {
        this.validationMessage = ''
        // Submit the form data
        this.submitForm()
      }
    },
    submitForm () {
      // Here you would handle the form submission, e.g., sending data to a server
      alert('Form submitted with email: ' + this.email + ' and password: ' + this.password)
    }
  }
}
</script>

  <style scoped>
  .signup-form {

    background-color: rgb(209, 255, 209);
    min-width: calc(5% + 60px);
    max-width: 330px;
    width: calc(60% + 30px);
    display: flex;
    justify-content: right;
    margin: auto;
    border-radius: 15px;
    height:200px;
    /* Add styles to match the design provided in the image */
  }
  div.input-group {
    display: flex;
    justify-content: space-between; /* Elements inside should be arranged horizontally with space in between */
    justify-content: right;
    padding: 15px 5px; /* Reduce horizontal padding to 5px and keep 10px vertical padding */

  }
  .subtext {
    font-size: x-large;
    padding-right: 10px;
  }

  .input-group label {
    display: block;
  }

  .input-group input {
    display: flex;
    width: 60%;
    max-width: 165px;
    padding: 0.5rem;
    border-radius: 15px;
  }

  button {
    border-radius: 10px;
    background-color: rgb(124, 150, 209);
    border: none;
    font-size: large;
    width: max-content;
    margin-top: 30px;
    /* Add button styles */
  }
  input{
    border: none;
  }
  .validation-message {
    color: red;
    margin-top: 1rem;
  }
  </style>
