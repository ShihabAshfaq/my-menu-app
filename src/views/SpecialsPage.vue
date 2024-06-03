<template>
  <div class="specials-page container">
    <h1 class="text-center mt-4">Today's Specials</h1>
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(special, index) in specials" :key="index">
          <td>{{ special.name }}</td>
          <td>{{ special.description }}</td>
          <td><strong>{{ special.price }}</strong></td>
        </tr>
      </tbody>
    </table>
    <div class="admin-controls text-center mt-4">
      <router-link to="/manage-specials" class="btn btn-primary">Manage Specials</router-link>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'SpecialsPage',
  data() {
    return {
      specials: store.specials
    };
  },
  created() {
    store.fetchSpecials();
  }
};
</script>

<style scoped>
.specials-page {
  padding: 20px;
}
.table {
  margin-top: 10px;
}
.admin-controls {
  margin-top: 20px;
  text-align: center;
}
</style>
