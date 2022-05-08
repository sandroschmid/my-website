<script setup lang="ts">
import LinkComponent from '@/components/ui/LinkComponent.vue';
import { defineProps } from 'vue';

defineProps<{
  imageSrc?: string;
  title: string;
  subTitle: string;
  description: string;
  web?: { url: string, label: string };
}>();
</script>

<template>
  <div class="profile-item">
    <img v-if="imageSrc" :src="imageSrc" :alt="title">
    <div class="profile-item-body">
      <div class="title">{{ title }}</div>
      <div class="sub-title">{{ subTitle }}</div>
      <div class="description">{{ description }}</div>
      <LinkComponent v-if="web" :href="web.url" :external="true">{{ web.label }}</LinkComponent>
    </div>
  </div>
</template>

<style scoped>
.profile-item {
  display: flex;
  flex-direction: column;
  gap: var(--gap-normal);
  text-align: justify;
}

.profile-item + .profile-item {
  margin-top: var(--gap-large);
}

img {
  --profile-img-size: 4rem;
  width: var(--profile-img-size);
  height: var(--profile-img-size);
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

@media (min-width: 1200px) {
  .profile-item {
    flex-direction: row;
  }

  .profile-item:nth-of-type(even) {
    flex-direction: row-reverse;
    text-align: right;
  }
}

@media print {
  img {
    --profile-img-size: 3rem;
  }
}
</style>
