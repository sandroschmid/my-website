<script setup lang="ts">
import Blockquote from "../ui/Blockquote.vue";
</script>

<template>
  <section class="profile">
    <h2>Hello, World!</h2>
    <p>
      I am a Senior Software Engineer at Dynatrace's R&amp;D headquarters in Linz, Austria.
      My current tech-stack is focused on full-stack web engineering and various AWS products.
      Other than nerding around, I enjoy the Austrian alps and the occasional trip abroad.
    </p>
    <Blockquote 
      text="There are only two hard things in Computer Science: cache invalidation and naming things." 
      person="Phil Karton"
    />
  </section>
</template>

<style scoped>
  .profile {
    display: flex;
    flex-direction: column;
    gap: var(--gap-normal);
  }
</style>