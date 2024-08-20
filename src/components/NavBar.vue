<script setup>
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <ul class="navbar-menu">
        <li><router-link to="/"><div class="menu-item">Home</div></router-link></li>
        <li><router-link to="/about"><div class="menu-item">About</div></router-link></li>
        <li><router-link to="/projects"><div class="menu-item">Projects</div></router-link></li>
        <li><router-link to="/throwing"><div class="menu-item">Throwing</div></router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0; 
  left: 0;
  width: 100%;
  backdrop-filter: blur(10px); 
  z-index: 1000; 
  display: flex;
  justify-content: center; 
  padding: 0 20px; 
}

.navbar-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px; 
  height: 60px; 
}

.navbar-menu {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.navbar-menu li {
  margin-left: 20px; 
}

.navbar-menu a {
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
}

.menu-item{
  height: 35px; 
  font-size: 25px;
  transition: background-color 0.3s ease;
  padding: 5px; 
  border-radius: 4px;
}

.menu-item:hover{
  background-color: #374785;
}
</style> 
