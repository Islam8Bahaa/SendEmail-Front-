<script>
import { defineComponent, ref } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };
  },
  methods: {
    async registerUser() {
      try {
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation,
        });
        this.$router.push({ name: 'verification' });
      } catch (error) {
        console.error(error.response.data.errors);
      }
    },
  },
});
</script>

<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="registerUser">
      <label>Name:</label>
      <input v-model="name" type="text" required />

      <label>Email:</label>
      <input v-model="email" type="email" required />

      <label>Password:</label>
      <input v-model="password" type="password" required />

      <label>Confirm Password:</label>
      <input v-model="password_confirmation" type="password" required />

      <button type="submit">Register</button>
    </form>
  </div>
</template>


<style scoped lang="scss">
form {
  max-width: 400px;
  margin: auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  label {
    color: #000;
    display: block;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    background-color: #4caf50;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>



