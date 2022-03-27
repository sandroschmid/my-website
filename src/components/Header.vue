<script setup lang="ts">
import Avatar from "./personal/Avatar.vue";
import Social from "./personal/Social.vue";
</script>

<template>
  <header>
    <Avatar />
    <h1>Sandro Schmid</h1>
    <div class="caption">
      <p>#software-engineering #angular #aws #java #spring-boot #frontend #auth</p>
      <p>Linz, Austria</p>
    </div>
    <Social />
  </header>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-normal);
    padding: var(--gap-normal);
    text-align: center;
  }
</style>