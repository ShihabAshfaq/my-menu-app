<template>
  <div class="login-page container">
    <h2 class="text-center mt-4">Login</h2>
    <form @submit.prevent="login" class="login-form mt-4">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
      <p class="text-danger mt-3" v-if="errorMessage">{{ errorMessage }}</p>
      <router-link to="/register" class="d-block text-center mt-3">Register as a new user</router-link>
    </form>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        localStorage.setItem('loggedIn', 'true');
        const redirectPath = this.$route.query.redirect || '/';
        this.$router.push(redirectPath);
      } catch (error) {
        this.errorMessage = 'Invalid email or password';
      }
    }
  }
};
</script>

<style scoped>
.login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}
.login-form {
  display: flex;
  flex-direction: column;
}
.login-form .form-label {
  font-weight: bold;
}
.btn-primary {
  margin-top: 10px;
}
.text-danger {
  text-align: center;
}
</style>
