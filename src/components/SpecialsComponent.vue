<template>
  <div class="manage-specials-page container">
    <h1 class="text-center mt-4">Manage Specials</h1>
    <div class="admin-controls text-center mb-4">
      <button @click="toggleAddSpecial" class="btn btn-primary">Add Special</button>
      <div v-if="showAddSpecialForm" class="add-special-form mt-3">
        <input v-model="newSpecial.name" placeholder="Name" class="form-control mb-2" />
        <textarea v-model="newSpecial.description" placeholder="Description" class="form-control mb-2"></textarea>
        <input v-model="newSpecial.price" placeholder="Price" class="form-control mb-2" />
        <button @click="addSpecial" class="btn btn-success">Submit</button>
      </div>
    </div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(special, index) in store.specials" :key="index">
          <td>{{ special.name }}</td>
          <td>{{ special.description }}</td>
          <td><strong>{{ special.price }}</strong></td>
          <td>
            <button @click="editSpecial(index)" class="btn btn-warning btn-sm">Edit</button>
            <button @click="deleteSpecial(index)" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
        <tr v-if="isEditingSpecial" :key="'edit-' + editingSpecialIndex">
          <td><input v-model="editSpecialForm.name" placeholder="Name" class="form-control" /></td>
          <td><textarea v-model="editSpecialForm.description" placeholder="Description" class="form-control"></textarea></td>
          <td><input v-model="editSpecialForm.price" placeholder="Price" class="form-control" /></td>
          <td><button @click="updateSpecial(editingSpecialIndex)" class="btn btn-success btn-sm">Update</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import store from '../store';

export default {
  name: 'SpecialsComponent',
  data() {
    return {
      store,
      newSpecial: { name: '', description: '', price: '' },
      showAddSpecialForm: false,
      editingSpecialIndex: null,
      editSpecialForm: { name: '', description: '', price: '' }
    };
  },
  created() {
    this.store.fetchSpecials();
  },
  computed: {
    isEditingSpecial() {
      return this.editingSpecialIndex !== null;
    }
  },
  methods: {
    toggleAddSpecial() {
      this.showAddSpecialForm = !this.showAddSpecialForm;
    },
    addSpecial() {
      if (this.newSpecial.name && this.newSpecial.description && this.newSpecial.price) {
        store.addSpecial({ ...this.newSpecial });
        this.newSpecial = { name: '', description: '', price: '' };
        this.showAddSpecialForm = false;
      }
    },
    deleteSpecial(index) {
      store.deleteSpecial(index);
    },
    editSpecial(index) {
      this.editingSpecialIndex = index;
      this.editSpecialForm = { ...store.specials[index] };
    },
    updateSpecial(index) {
      if (this.editSpecialForm.name && this.editSpecialForm.description && this.editSpecialForm.price) {
        store.updateSpecial(index, { ...this.editSpecialForm });
        this.editingSpecialIndex = null;
        this.editSpecialForm = { name: '', description: '', price: '' };
      }
    }
  }
};
</script>

<style scoped>
.manage-specials-page {
  padding: 20px;
}
.admin-controls {
  margin-bottom: 20px;
}
.add-special-form, .edit-special-form {
  margin-top: 10px;
}
.add-special-form input,
.add-special-form textarea,
.edit-special-form input,
.edit-special-form textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
.add-special-form button,
.edit-special-form button {
  padding: 10px 20px;
}
</style>
