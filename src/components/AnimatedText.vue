<script setup>
import { defineProps } from 'vue';

defineProps({
  text: String
});
</script>

<template>
  <div class="fancy-text">
    <h1 class="animated-text">{{ text }}</h1>
  </div>
</template>

<style scoped>
.fancy-text {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white; /* Text color */
  overflow: hidden;
}

.animated-text {
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  animation: fadeIn 2s ease-out, slideIn 2s ease-out;
  /* You can add more animations here */
}

/* Keyframe animations */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
