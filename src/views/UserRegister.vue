<template>
  <div class="register-page container">
    <h2 class="text-center mt-4">Register</h2>
    <form @submit.prevent="register" class="register-form mt-4">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input type="email" v-model="email" class="form-control" id="email" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" required>
      </div>
      <div class="mb-3">
        <label for="confirmPassword" class="form-label">Confirm Password</label>
        <input type="password" v-model="confirmPassword" class="form-control" id="confirmPassword" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Register</button>
      <p class="text-danger mt-3" v-if="errorMessage">{{ errorMessage }}</p>
      <router-link to="/user-login" class="d-block text-center mt-3">Already have an account? Login here</router-link>
    </form>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export default {
  name: 'UserRegister',
  data() {
    return {
      email: '',
      password: '',
      confirmPassword: '',
      errorMessage: ''
    };
  },
  methods: {
    async register() {
      if (this.password !== this.confirmPassword) {
        this.errorMessage = 'Passwords do not match';
        return;
      }
      if (!this.validateEmail(this.email)) {
        this.errorMessage = 'Invalid email format';
        return;
      }
      if (!this.validatePassword(this.password)) {
        this.errorMessage = 'Password must be at least 6 characters long';
        return;
      }
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/user-login');
      } catch (error) {
        this.errorMessage = 'Failed to register. The email might already be in use.';
      }
    },
    validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    },
    validatePassword(password) {
      return password.length >= 6;
    }
  }
};
</script>

<style scoped>
.register-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}
.register-form {
  display: flex;
  flex-direction: column;
}
.register-form .form-label {
  font-weight: bold;
}
.btn-primary {
  margin-top: 10px;
}
.text-danger {
  text-align: center;
}
</style>
