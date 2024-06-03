<template>
  <div class="manage-suggestions-page container">
    <h1 class="text-center mt-4">Manage Suggestions</h1>
    <div class="admin-controls text-center mb-4">
      <button @click="toggleAddSuggestion" class="btn btn-primary">Add Suggestion</button>
      <div v-if="showAddSuggestionForm" class="add-suggestion-form mt-3">
        <input v-model="newSuggestion.title" placeholder="Title" class="form-control mb-2" />
        <textarea v-model="newSuggestion.description" placeholder="Description" class="form-control mb-2"></textarea>
        <button @click="addSuggestion" class="btn btn-success">Submit</button>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(suggestion, index) in store.suggestions" :key="index">
          <td>{{ suggestion.title }}</td>
          <td>{{ suggestion.description }}</td>
          <td>
            <button @click="editSuggestion(index)" class="btn btn-warning btn-sm">Edit</button>
            <button @click="deleteSuggestion(index)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
        <tr v-if="isEditingSuggestion" :key="'edit-' + editingSuggestionIndex">
          <td><input v-model="editSuggestionForm.title" placeholder="Title" class="form-control" /></td>
          <td><textarea v-model="editSuggestionForm.description" placeholder="Description" class="form-control"></textarea></td>
          <td><button @click="updateSuggestion(editingSuggestionIndex)" class="btn btn-success btn-sm">Update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'SuggestionComponent',
  data() {
    return {
      store,
      newSuggestion: { title: '', description: '' },
      showAddSuggestionForm: false,
      editingSuggestionIndex: null,
      editSuggestionForm: { title: '', description: '' }
    };
  },
  created() {
    this.store.fetchSuggestions();
  },
  computed: {
    isEditingSuggestion() {
      return this.editingSuggestionIndex !== null;
    }
  },
  methods: {
    toggleAddSuggestion() {
      this.showAddSuggestionForm = !this.showAddSuggestionForm;
    },
    addSuggestion() {
      if (this.newSuggestion.title && this.newSuggestion.description) {
        store.addSuggestion({ ...this.newSuggestion });
        this.newSuggestion = { title: '', description: '' };
        this.showAddSuggestionForm = false;
      }
    },
    deleteSuggestion(index) {
      store.deleteSuggestion(index);
    },
    editSuggestion(index) {
      this.editingSuggestionIndex = index;
      this.editSuggestionForm = { ...store.suggestions[index] };
    },
    updateSuggestion(index) {
      if (this.editSuggestionForm.title && this.editSuggestionForm.description) {
        store.updateSuggestion(index, { ...this.editSuggestionForm });
        this.editingSuggestionIndex = null;
        this.editSuggestionForm = { title: '', description: '' };
      }
    }
  }
};
</script>

<style scoped>
.manage-suggestions-page {
  padding: 20px;
}
.admin-controls {
  margin-bottom: 20px;
}
.add-suggestion-form, .edit-suggestion-form {
  margin-top: 10px;
}
.add-suggestion-form input,
.add-suggestion-form textarea,
.edit-suggestion-form input,
.edit-suggestion-form textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.add-suggestion-form button,
.edit-suggestion-form button {
  padding: 10px 20px;
}
</style>
