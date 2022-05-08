<script setup lang="ts">
import ProfileItemComponent from '@/components/personal/ProfileItemComponent.vue';</script>

<template>
  <ProfileItemComponent
      imageSrc="dynatrace.png"
      title="Dynatrace"
      sub-title="Senior Software Engineer, since 2018"
      description="Working on web-apps and tooling to (semi-)automate internal processes;
        support release processes and enable shift-left of operations. Also, enable our own developers
        with some custom-built backend and UI-component libraries.
        Primary tech-stack: Java, Spring Boot, Angular, custom authorization library."
      :web="{ url: 'https://www.dynatrace.com/', label: 'dynatrace.com' }"
  />
  <ProfileItemComponent
      imageSrc="fusonic.png"
      title="Fusonic"
      sub-title="Web Developer, 2016 - 2018"
      description="Kicking my professional career of with some oldies: PHP development using the Symfony framework.
        Of course, a backend is incomplete without a nice Angular UI. These nifty PWAs had full offline support,
        enabling customers doing their work in the field and only later, once back in the office, upload their reports."
      :web="{ url: 'https://www.fusonic.net/', label: 'fusonic.net' }"
  />
</template>
