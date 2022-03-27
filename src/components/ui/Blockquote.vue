<script setup lang="ts">
import { defineProps } from "vue";

defineProps<{
  text: string,
  person: string
}>();
</script>

<template>
  <blockquote>
    <p class="text">{{ text }}</p>
    <p class="caption">{{ person }}</p>
  </blockquote>
</template>

<style scoped>
  blockquote {
    --bq-border-color: var(--vt-c-divider-dark-2);
    --bq-background-color: var(--vt-c-white-mute);
  }

  @media (prefers-color-scheme: dark) {
    blockquote {
      --bq-border-color: var(--vt-c-white-mute);
      --bq-background-color: var(--vt-c-divider-dark-2);
    }
  }

  blockquote {
    margin: var(--gap-normal) 0;
    padding: var(--gap-normal) var(--gap-normal) var(--gap-small) var(--gap-large);
    border: 1px solid var(--bq-border-color);
    border-left-width: 5px;
    border-top-right-radius: var(--border-radius);
    border-bottom-right-radius: var(--border-radius);
    background-color: var(--bq-background-color);
  }

  blockquote .text {
    font-style: italic;
  }

  blockquote .caption {
    text-align: right;
  }
</style>