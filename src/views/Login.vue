<script>
import { defineComponent, ref } from 'vue';
import { RouterLink } from "vue-router";
import axios from 'axios';

export default defineComponent({
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async loginUser() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', {
                    email: this.email,
                    password: this.password,
                });
                console.log(response.data);
            } catch (error) {
                console.error(error.response.data.message);
            }
        },
    },
});
</script>

<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="loginUser">
            <label>Email:</label>
            <input v-model="email" type="email" required />

            <label>Password:</label>
            <input v-model="password" type="password" required />

            <button type="submit">Login</button>
            <p>Don't have an account? <RouterLink to="/register">Register</RouterLink></p>
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

  h2 {
    text-align: center;
    color: #333;
  }

  label {
    display: block;
    margin-bottom: 8px;
    color: #000;
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
    background-color: #2196f3;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
  }

  p {
    text-align: center;
    margin-top: 16px;
    color: #666;
  }

  a {
    color: #2196f3;
    text-decoration: none;
    font-weight: bold;
  }
}

</style>

