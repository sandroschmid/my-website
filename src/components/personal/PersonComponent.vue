<script setup lang="ts">
import Link from '../ui/LinkComponent.vue';</script>

<template>
  <div class="profile">
    <h2>Hello, World!</h2>
    <p>
      I am a Senior Software Engineer at Dynatrace's R&amp;D headquarters in
      Linz, Austria. My current tech-stack is focused on full-stack web
      engineering and various AWS products. Other than nerding around, I enjoy
      the Austrian alps and the occasional trip abroad.
    </p>
    <p>
      Feel free to drop me a message on
      <Link href="https://www.linkedin.com/in/sandro-schmid/" external>LinkedIn</Link>
      🤓
    </p>
    <!--    <Blockquote-->
    <!--        text="There are only two hard things in Computer Science: cache invalidation and naming things."-->
    <!--        person="Phil Karton"-->
    <!--    />-->
  </div>
</template>

<style scoped>
.profile {
  display: flex;
  place-items: center;
  flex-direction: column;
  gap: var(--gap-normal);
}

h3 {
  margin-bottom: var(--gap-normal);
}
</style>
