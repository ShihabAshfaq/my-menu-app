<template>
  <div class="suggestions-page container">
    <h1 class="text-center mt-4">Suggestions</h1>
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(suggestion, index) in suggestions" :key="index">
          <td>{{ suggestion.title }}</td>
          <td>{{ suggestion.description }}</td>
        </tr>
      </tbody>
    </table>
    <div class="admin-controls text-center mt-4">
      <router-link to="/manage-suggestions" class="btn btn-primary">Manage Suggestions</router-link>
    </div>
    <div v-if="isUserLoggedIn" class="user-logout text-center mt-4">
      <button @click="userLogout" class="btn btn-danger">User Logout</button>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'SuggestionsPage',
  data() {
    return {
      suggestions: store.suggestions
    };
  },
  created() {
    store.fetchSuggestions();
  },
  computed: {
    isUserLoggedIn() {
      return localStorage.getItem('loggedIn') === 'true';
    }
  },
  methods: {
    userLogout() {
      localStorage.removeItem('loggedIn');
      this.$router.push('/');
    }
  }
};
</script>

<style scoped>
.suggestions-page {
  padding: 20px;
}
.table {
  margin-top: 10px;
}
.admin-controls {
  margin-top: 20px;
  text-align: center;
}
.user-logout {
  margin-top: 20px;
  text-align: center;
}
</style>
