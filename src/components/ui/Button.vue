<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  variant: {
    type: String,
    default: 'secondary',
    validator(value: string) {
      return ['primary', 'secondary'].includes(value);
    }
  }
});
</script>

<template>
  <button type="button" :class="variant">
    <slot></slot>
  </button>
</template>

<style scoped>
  button {
    padding: var(--gap-tiny) var(--gap-normal);
    border: 1px solid;
    border-radius: var(--border-radius);
    text-decoration: none;
  }

  button.primary {
    background: var(--color-primary);
    border-color: var(--color-primary);
    color: var(--color-primary-text);
  }

  button.secondary {
    background: none;
    border-color: var(--color-secondary);
    color: var(--color-secondary);
  }

  button:hover {
    cursor: pointer;
    border-color: var(--border-secondary-light);
  }

  button.primary:hover {
    background-color: var(--color-primary-light);
    border-color: var(--color-primary-light);
  }

  button.secondary:hover {
    background-color: var(--vt-c-background-mute);
    border-color: var(--color-secondary-light);
  }
</style>