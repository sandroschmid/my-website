<script setup lang="ts">
import { defineProps, computed } from "vue";

const props = defineProps<{
  href: string,
  external: boolean
}>();

const linkTarget = computed(() => props.external ? '_blank' : '')
</script>

<template>
  <a :href="href" :target="linkTarget">
    <slot />
  </a>
</template>

<style scoped>
  a,
  a:visited,
  a:focus {
    cursor: pointer;
    color: var(--color-link);
  }
</style>