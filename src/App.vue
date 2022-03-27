<script setup lang="ts">
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
</script>

<template>
  <div class="app-root">
    <Header />
    <Main />
  </div>
</template>

<style>
@import "./assets/styles/variables.css";
@import "./assets/styles/base.css";

.app-root {
  height: 100vh;
  min-width: var(--app-min-width);
  padding: var(--gap-small);
}

@media (min-width: 1200px) {
  .app-root {
    display: grid;
    grid-template-columns: minmax(250px, 350px) minmax(auto, 60em);
    justify-content: center;
    gap: var(--gap-large);
    padding: var(--gap-large);
  }
}
</style>
