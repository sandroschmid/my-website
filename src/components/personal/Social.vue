<script setup lang="ts">
import Button from "../ui/Button.vue";
import Link from "../ui/Link.vue";
</script>

<template>
  <div class="social">
    <Link href="https://www.linkedin.com/in/sandro-schmid/" external>
      <Button>LinkedIn</Button>
    </Link>
    <Link href="https://stackoverflow.com/users/3863059/sschmid" external>
      <Button>StackOverflow</Button>
    </Link>
    <Link href="https://github.com/sandroschmid" external>
      <Button>GitHub</Button>
    </Link>
  </div>
</template>

<style scoped>
  .social {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: var(--gap-small);
  }

  Button {
    width: 100%;
  }
</style>