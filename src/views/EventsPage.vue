<template>
  <div class="events-page container">
    <h1 class="text-center mt-4">Upcoming Events</h1>
    <table class="table table-striped mt-4">
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in store.events" :key="index">
          <td>{{ event.date }}</td>
          <td>{{ event.title }}</td>
          <td>{{ event.description }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="isAuthorized" class="manage-link">
      <router-link to="/manage-events" class="btn btn-primary">Manage Events</router-link>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'EventsPage',
  data() {
    return {
      store,
      isAuthorized: true // This will be dynamic based on actual authentication
    };
  }
};
</script>

<style scoped>
.events-page {
  padding: 20px;
}
.manage-link {
  margin-top: 20px;
  text-align: center;
}
.table {
  margin-top: 10px;
}
</style>
