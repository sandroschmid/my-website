<script setup lang="ts">
import ProfileItemComponent from '@/components/personal/ProfileItemComponent.vue';</script>

<template>
  <section class="profile">
    <h2>Hello, World!</h2>
    <p>
      I am a Senior Software Engineer at Dynatrace's R&amp;D headquarters in
      Linz, Austria. My current tech-stack is focused on full-stack web
      engineering and various AWS products. Other than nerding around, I enjoy
      the Austrian alps and the occasional trip abroad.
    </p>
    <!--    <Blockquote-->
    <!--        text="There are only two hard things in Computer Science: cache invalidation and naming things."-->
    <!--        person="Phil Karton"-->
    <!--    />-->
  </section>
  <section>
    <ProfileItemComponent
        imageSrc="dynatrace.jpeg"
        title="Dynatrace"
        sub-title="Senior Software Engineer"
        description="Working on web-apps and tooling to (semi-)automate internal processes;
        support release processes and enable shift-left of operations.
        Primary tech-stack: Java, Spring Boot, Angular, custom authorization library."
    />
    <ProfileItemComponent
        title="Human Centered Computing, MSc"
        sub-title="University of Applied Sciences Upper Austria, Hagenberg"
        description="Human-machine interfaces and -interaction; a nice mix of Engineering,
        UX and human sciences, such as psychology.
        Thesis about network visualization of n-dimensional data."
    />
    <ProfileItemComponent
        title="Software Engineering, BSc"
        sub-title="University of Applied Sciences Upper Austria, Hagenberg"
        description="Like computer science but for coders; software development management,
        plenty of programming languages, algorithms and data engineering.
        Thesis about PWAs, focus on normalization with IndexedDB."
    />
  </section>
</template>

<style scoped>
.profile {
  display: flex;
  flex-direction: column;
  gap: var(--gap-normal);
}

h3 {
  margin-bottom: var(--gap-normal);
}
</style>
