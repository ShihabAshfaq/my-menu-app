<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/">Hell's Kitchen</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/menu">Menu</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/events">Events</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/specials">Specials</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/suggestions">Suggestions</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About Us</router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item" v-if="!isManagerLoggedIn">
            <router-link class="nav-link" to="/manager-login">Manager Login</router-link>
          </li>
          <li class="nav-item" v-if="isManagerLoggedIn">
            <a class="nav-link" @click="managerLogout">Manager Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
  computed: {
    isManagerLoggedIn() {
      return localStorage.getItem('managerLoggedIn') === 'true';
    }
  },
  methods: {
    managerLogout() {
      localStorage.removeItem('managerLoggedIn');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
</style>
