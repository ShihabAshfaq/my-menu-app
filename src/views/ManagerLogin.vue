<template>
  <div class="manager-login-page container">
    <h2 class="text-center mt-4">Manager Login</h2>
    <form @submit.prevent="login" class="manager-login-form mt-4">
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input type="text" v-model="username" class="form-control" id="username" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" class="form-control" id="password" required>
      </div>
      <button type="submit" class="btn btn-primary w-100">Login</button>
      <p class="text-danger mt-3" v-if="errorMessage">{{ errorMessage }}</p>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ManagerLogin',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      if (this.username === 'shihab' && this.password === '1234') {
        localStorage.setItem('managerLoggedIn', 'true');
        const redirectPath = this.$route.query.redirect || '/';
        this.$router.push(redirectPath);
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    }
  }
};
</script>

<style scoped>
.manager-login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #fff;
}
.manager-login-form {
  display: flex;
  flex-direction: column;
}
.manager-login-form .form-label {
  font-weight: bold;
}
.btn-primary {
  margin-top: 10px;
}
.text-danger {
  text-align: center;
}
</style>
