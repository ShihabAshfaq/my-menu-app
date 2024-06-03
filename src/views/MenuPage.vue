<template>
    <div>
      <NavbarComponent />
      <div class="container">
        <h1>Menu</h1>
        <div>
          <h2>Main Dishes</h2>
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in paginatedMainDishes" :key="index">
              <div class="card custom-card">
                <img :src="item.image" class="card-img-top" :alt="item.title">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <PaginationComponent :currentPage="currentPage.mainDishes" :totalItems="mainDishes.length" :itemsPerPage="itemsPerPage" @changePage="changePage('mainDishes', $event)"/>
        </div>
        
        <div>
          <h2>Drinks</h2>
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in paginatedDrinks" :key="index">
              <div class="card custom-card">
                <img :src="item.image" class="card-img-top" :alt="item.title">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <PaginationComponent :currentPage="currentPage.drinks" :totalItems="drinks.length" :itemsPerPage="itemsPerPage" @changePage="changePage('drinks', $event)"/>
        </div>
        
        <div>
          <h2>Appetizers</h2>
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in paginatedAppetizers" :key="index">
              <div class="card custom-card">
                <img :src="item.image" class="card-img-top" :alt="item.title">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <PaginationComponent :currentPage="currentPage.appetizers" :totalItems="appetizers.length" :itemsPerPage="itemsPerPage" @changePage="changePage('appetizers', $event)"/>
        </div>
        
        <div>
          <h2>Desserts</h2>
          <div class="row">
            <div class="col-md-4" v-for="(item, index) in paginatedDesserts" :key="index">
              <div class="card custom-card">
                <img :src="item.image" class="card-img-top" :alt="item.title">
                <div class="card-body">
                  <h5 class="card-title">{{ item.title }}</h5>
                  <p class="card-text">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <PaginationComponent :currentPage="currentPage.desserts" :totalItems="desserts.length" :itemsPerPage="itemsPerPage" @changePage="changePage('desserts', $event)"/>
        </div>
      </div>
      <FooterComponent />
    </div>
  </template>
  
  <script>
  import PaginationComponent from '../components/PaginationComponent.vue';
  
  export default {
    name: 'MenuPage',
    components: {
      PaginationComponent
    },
    data() {
      return {
        mainDishes: [],
        drinks: [],
        appetizers: [],
        desserts: [],
        currentPage: {
          mainDishes: 1,
          drinks: 1,
          appetizers: 1,
          desserts: 1
        },
        itemsPerPage: 6
      };
    },
    created() {
      this.fetchMenuItems('burger');
      this.fetchMenuItems('pasta');
      this.fetchMenuItems('pizza');
      this.fetchMenuItems('drink');
      this.fetchMenuItems('appetizer');
      this.fetchMenuItems('dessert');
    },
    methods: {
      async fetchMenuItems(category) {
        const apiKey = '536568bc96434680a27bbf88e12badbf'; // Replace with your actual Spoonacular API key
        const endpoint = `https://api.spoonacular.com/food/menuItems/search?apiKey=${apiKey}&query=${category}&number=50`;
  
        try {
          const response = await fetch(endpoint, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json'
            }
          });
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          if (category === 'burger' || category === 'pasta' || category === 'pizza') {
            this.mainDishes = [...this.mainDishes, ...data.menuItems];
          } else {
            this[category + 's'] = data.menuItems;
          }
          console.log(`Fetched ${category}:`, this[category + 's']); // Debugging line
        } catch (error) {
          console.error('Error fetching menu items:', error);
          if (error.message.includes('402')) {
            alert('API limit reached or payment required. Please check your Spoonacular API account.');
          }
        }
      },
      changePage(category, page) {
        this.currentPage[category] = page;
      }
    },
    computed: {
      paginatedMainDishes() {
        const start = (this.currentPage.mainDishes - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.mainDishes.slice(start, end);
      },
      paginatedDrinks() {
        const start = (this.currentPage.drinks - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.drinks.slice(start, end);
      },
      paginatedAppetizers() {
        const start = (this.currentPage.appetizers - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.appetizers.slice(start, end);
      },
      paginatedDesserts() {
        const start = (this.currentPage.desserts - 1) * this.itemsPerPage;
        const end = start + this.itemsPerPage;
        return this.desserts.slice(start, end);
      }
    }
  };
  </script>
  
  <style scoped>
  .card.custom-card {
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .card.custom-card:hover {
    transform: scale(1.05);
  }
  
  .card-img-top {
    height: 200px;
    object-fit: cover;
  }
  
  .card-body {
    text-align: center;
  }
  
  .pagination {
    justify-content: center;
    margin-top: 20px;
  }
  </style>
  