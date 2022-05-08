<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  slideKey: {
    type: String,
    validator(value: string) {
      return value.length > 0;
    },
  },
  title: {
    type: String,
    default: '',
  },
  subTitle: {
    type: String,
    default: '',
  },
});
</script>

<template>
  <div :id="slideKey" class="slide">
    <div v-if="title?.length > 0 || subTitle?.length > 0" class="slide-header">
      <h3 v-if="title?.length > 0" class="slide-title">{{ title }}</h3>
      <div v-if="subTitle?.length > 0" class="slide-subtitle">{{ subTitle }}</div>
    </div>
    <div class="slide-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
@import "../../assets/variables.css";

.slide {
  display: flex;
  flex-direction: column;
  padding: var(--gap-large);
  max-width: 50em;
  margin: 0 auto;
}

.slide + .slide {
  margin-top: var(--gap-large);
}

.slide-header {
  margin-bottom: var(--gap-large);
  padding-bottom: var(--gap-small);
  border-bottom: 1px solid var(--color-border);
}

.slide-title {
  font-weight: normal;
}

.slide-subtitle {
  font-size: smaller;
}

@media (min-height: 910px) {
  .slide {
    block-size: 100vh;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    max-width: 50em;
  }

  .slide + .slide {
    margin-top: 0;
  }

  .slide:not(:last-of-type)::after {
    display: block;
    content: '⬇️';
    margin-top: var(--gap-small);
    text-align: center;
  }

  .slide-content {
    flex: 1 0 auto;
  }
}

@media (min-height: 910px) and (min-width: 1200px) {
  .slide-content {
    display: grid;
    place-items: center;
  }
}

@media print {
  .slide {
    page-break-before: always;
    page-break-inside: avoid;
    page-break-after: always;
  }

  .slide + .slide {
    margin-top: 0;
  }
}
</style>
