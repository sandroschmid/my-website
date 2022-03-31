<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  imageSrc?: string;
  title: string;
  subTitle: string;
  description: string;
}>();
</script>

<template>
  <div class="profile-item">
    <img v-if="imageSrc" :src="imageSrc" :alt="title">
    <div class="profile-item-body">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
      <div class="description">{{ description }}</div>
    </div>
  </div>
</template>

<style scoped>
.profile-item {
  display: flex;
  gap: var(--gap-normal);
  padding: 0 var(--gap-large);
  text-align: justify;
}

.profile-item + .profile-item {
  margin-top: var(--gap-large);
}

.profile-item:nth-of-type(2) {
  flex-direction: row-reverse;
  text-align: right;
}

img {
  --profile-img-size: 4rem;
  width: var(--profile-img-size);
  height: var(--profile-img-size);
  border-radius: 50%;
}

.profile-item-body {
  display: flex;
  flex-direction: column;
  max-width: 35em;
}

.title {
  font-size: 1.1rem;
  font-weight: bold;
}

.description {
  margin-top: var(--gap-small);
}
</style>
