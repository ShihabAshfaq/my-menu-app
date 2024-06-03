<template>
  <div class="manage-events-page container">
    <h1 class="text-center mt-4">Manage Events</h1>
    <div class="admin-controls text-center mb-4">
      <button @click="toggleAddEvent" class="btn btn-primary">Add Event</button>
      <div v-if="showAddEventForm" class="add-event-form mt-3">
        <input v-model="newEvent.date" placeholder="Date (YYYY-MM-DD)" class="form-control mb-2" />
        <input v-model="newEvent.title" placeholder="Title" class="form-control mb-2" />
        <textarea v-model="newEvent.description" placeholder="Description" class="form-control mb-2"></textarea>
        <button @click="addEvent" class="btn btn-success">Submit</button>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(event, index) in store.events" :key="index">
          <td>{{ event.date }}</td>
          <td>{{ event.title }}</td>
          <td>{{ event.description }}</td>
          <td>
            <button @click="editEvent(index)" class="btn btn-warning btn-sm">Edit</button>
            <button @click="deleteEvent(index)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
        <tr v-if="isEditingEvent" :key="'edit-' + editingEventIndex">
          <td><input v-model="editEventForm.date" placeholder="Date (YYYY-MM-DD)" class="form-control" /></td>
          <td><input v-model="editEventForm.title" placeholder="Title" class="form-control" /></td>
          <td><textarea v-model="editEventForm.description" placeholder="Description" class="form-control"></textarea></td>
          <td><button @click="updateEvent(editingEventIndex)" class="btn btn-success btn-sm">Update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'EventsComponent',
  data() {
    return {
      store,
      newEvent: { date: '', title: '', description: '' },
      showAddEventForm: false,
      editingEventIndex: null,
      editEventForm: { date: '', title: '', description: '' }
    };
  },
  created() {
    this.store.fetchEvents();
  },
  computed: {
    isEditingEvent() {
      return this.editingEventIndex !== null;
    }
  },
  methods: {
    toggleAddEvent() {
      this.showAddEventForm = !this.showAddEventForm;
    },
    addEvent() {
      if (this.newEvent.date && this.newEvent.title && this.newEvent.description) {
        store.addEvent({ ...this.newEvent });
        this.newEvent = { date: '', title: '', description: '' };
        this.showAddEventForm = false;
      }
    },
    deleteEvent(index) {
      store.deleteEvent(index);
    },
    editEvent(index) {
      this.editingEventIndex = index;
      this.editEventForm = { ...store.events[index] };
    },
    updateEvent(index) {
      if (this.editEventForm.date && this.editEventForm.title && this.editEventForm.description) {
        store.updateEvent(index, { ...this.editEventForm });
        this.editingEventIndex = null;
        this.editEventForm = { date: '', title: '', description: '' };
      }
    }
  }
};
</script>

<style scoped>
.manage-events-page {
  padding: 20px;
}
.admin-controls {
  margin-bottom: 20px;
}
.add-event-form, .edit-event-form {
  margin-top: 10px;
}
.add-event-form input,
.add-event-form textarea,
.edit-event-form input,
.edit-event-form textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.add-event-form button,
.edit-event-form button {
  padding: 10px 20px;
}
</style>
