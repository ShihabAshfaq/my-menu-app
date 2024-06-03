<template>
    <nav>
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: currentPage === 1 }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage - 1)">Previous</a>
        </li>
        <li
          class="page-item"
          v-for="page in visiblePages"
          :key="page"
          :class="{ active: currentPage === page }"
        >
          <a class="page-link" href="#" @click.prevent="changePage(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: currentPage === totalPages }">
          <a class="page-link" href="#" @click.prevent="changePage(currentPage + 1)">Next</a>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'PaginationComponent',
    props: {
      currentPage: {
        type: Number,
        required: true
      },
      totalItems: {
        type: Number,
        required: true
      },
      itemsPerPage: {
        type: Number,
        required: true
      }
    },
    computed: {
      totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
      },
      visiblePages() {
        const pages = [];
        const maxVisible = 9;
        const halfVisible = Math.floor(maxVisible / 2);
  
        let startPage = this.currentPage - halfVisible;
        let endPage = this.currentPage + halfVisible;
  
        if (startPage < 1) {
          startPage = 1;
          endPage = Math.min(maxVisible, this.totalPages);
        }
  
        if (endPage > this.totalPages) {
          endPage = this.totalPages;
          startPage = Math.max(1, this.totalPages - maxVisible + 1);
        }
  
        for (let i = startPage; i <= endPage; i++) {
          pages.push(i);
        }
  
        return pages;
      }
    },
    methods: {
      changePage(page) {
        if (page < 1 || page > this.totalPages) return;
        this.$emit('changePage', page);
      }
    }
  };
  </script>
  
  <style scoped>
  .pagination {
    justify-content: center;
  }
  </style>
  