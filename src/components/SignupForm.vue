<template>
    <div class="signup-form">
      <form @submit.prevent="validateForm">
        <div class="input-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required>
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">Signup</button>
      </form>
      <div v-if="validationMessage" class="validation-message">
        {{ validationMessage }}
      </div>
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
        this.validationMessage = 'Password is not valid. It should be 8-14 characters long, include at least one uppercase letter, at least two lowercase letters, at least one number, start with an uppercase letter, and include an underscore.'
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
    padding-top: 30px;
    background-color: rgb(209, 255, 209);
    min-width: calc(10% + 40px);
    width: 30%;
    display: flex;
    justify-content: right;
    margin: auto
    /* Add styles to match the design provided in the image */
  }

  .input-group {
    margin-bottom: 1rem;

  }

  .input-group label {
    display: block;
  }

  .input-group input {
    min-width: 10%;
    padding: 0.5rem;
    border-radius: 15px;
  }

  button {
    border-radius: 10px;
    background-color: rgb(124, 150, 209);
    border: none;
    font-size: large;
    width: max-content;

    /* Add button styles */
  }

  .validation-message {
    color: red;
    margin-top: 1rem;
  }
  </style>
