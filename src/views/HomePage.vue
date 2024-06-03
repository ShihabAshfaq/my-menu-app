<template>
  <div class="content-container container">
    <h1 class="text-center mt-4">Welcome to Our Restaurant</h1>
    <div class="restaurant-intro mt-4">
      <p class="restaurant-description">
        Welcome to our restaurant! We are delighted to offer you a unique dining experience with our exquisite menu,
        warm ambiance, and exceptional service. Whether you're here for a special occasion or just a casual meal, we
        strive to make every visit memorable. Enjoy our selection of gourmet dishes, fine wines, and delectable
        desserts.
      </p>
    </div>
    <div class="preview-sections mt-4">
      <div class="events-preview mb-4">
        <h2>Upcoming Events</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Date</th>
              <th>Title</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(event, index) in store.events.slice(0, 3)" :key="index">
              <td>{{ event.date }}</td>
              <td>{{ event.title }}</td>
              <td>{{ event.description }}</td>
            </tr>
          </tbody>
        </table>
        <router-link to="/events" class="btn btn-primary">View All Events</router-link>
      </div>
      <div class="specials-preview mb-4">
        <h2>Today's Specials</h2>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(special, index) in store.specials.slice(0, 3)" :key="index">
              <td>{{ special.name }}</td>
              <td>{{ special.description }}</td>
              <td><strong>{{ special.price }}</strong></td>
            </tr>
          </tbody>
        </table>
        <router-link to="/specials" class="btn btn-primary">View All Specials</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'HomePage',
  data() {
    return {
      store
    };
  },
  created() {
    this.store.fetchEvents();
    this.store.fetchSpecials();
  }
};
</script>

<style scoped>
.content-container {
  text-align: center;
  padding: 20px;
}
.restaurant-intro {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}
.restaurant-description {
  max-width: 800px;
  text-align: center;
}
.preview-sections {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
.events-preview, .specials-preview {
  width: 100%;
  margin-bottom: 20px;
}
.table {
  margin-top: 10px;
}
.btn-primary {
  margin-top: 10px;
}
</style>
