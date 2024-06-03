<template>
  <div class="about-us-page container">
    <h1 class="text-center mt-4">About Us</h1>
    <div class="about-section mt-4">
      <div class="about-content">
        <h2>Welcome to Restaurant Name</h2>
        <p>
          Welcome to Restaurant Name, where we are dedicated to providing you with an exceptional dining experience. Our restaurant
          offers a wide variety of gourmet dishes, fine wines, and delectable desserts, all prepared with the freshest ingredients
          by our talented chefs. Whether you're here for a special occasion or just a casual meal, we strive to make every visit
          memorable.
        </p>
        <h2>Our Mission</h2>
        <p>
          Our mission is to create a welcoming environment where guests can enjoy high-quality food and excellent service. We are
          committed to sustainability and source our ingredients from local farmers and suppliers whenever possible.
        </p>
        <h2>Our History</h2>
        <p>
          Restaurant Name was founded in 2000 by our head chef and owner, John Doe, with the vision of creating a place where people
          could come together to enjoy great food and company. Over the years, we have grown and evolved, but our dedication to
          quality and hospitality remains the same.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutUsPage'
};
</script>

<style scoped>
.about-us-page {
  padding: 20px;
}
.about-section {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.about-content {
  max-width: 800px;
  text-align: left;
  margin-top: 20px;
}
h1, h2 {
  color: #333;
}
p {
  line-height: 1.6;
  color: #666;
}
</style>
