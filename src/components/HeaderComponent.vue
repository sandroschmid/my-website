<script setup lang="ts">
import Avatar from './personal/AvatarComponent.vue';
import Social from './personal/SocialComponent.vue';
import TickTackToe from './ui/TickTackToeComponent.vue';</script>

<template>
  <header>
    <Avatar />
    <h1>Sandro 🤓 Schmid</h1>
    <div class="caption">
      <p>
        ✨software-engineering ✨angular ✨aws ✨java ✨spring-boot ✨frontend
        ✨auth
      </p>
      <p>🌍 Linz, Austria 🇦🇹</p>
    </div>
    <Social />
    <div class="spacer"></div>
    <TickTackToe />
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

.spacer {
  flex: 1;
  margin-top: var(--gap-large);
}

@media (min-width: 1200px) {
  h1 {
    margin: var(--gap-large) 0 var(--gap-normal);
  }
}
</style>
