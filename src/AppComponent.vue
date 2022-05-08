<script setup lang="ts">
import TickTackToeComponent from '@/components/ui/TickTackToeComponent.vue';
import Header from './components/HeaderComponent.vue';
import Certifications from './components/personal/CertificationsComponent.vue';
import Professional from './components/personal/ProfessionalComponent.vue';
import School from './components/personal/SchoolComponent.vue';
import University from './components/personal/UniversityComponent.vue';
import Slide from './components/ui/SlideComponent.vue';</script>

<template>
  <Slide slide-key="header">
    <Header />
  </Slide>
  <Slide
      slide-key="work"
      title="My professional career 🚀"
      sub-title="Using state-of-the-art tech to build awesome products with passionate, knowledgeable people. Every day."
  >
    <Professional />
  </Slide>
  <Slide
      slide-key="certifications"
      title="Life long learning 🤓"
      sub-title="Luckily, learning never stops. Learning is a key motivator for many. It definitely is for me.
        Many more certifications and other learning challenges will come 🤞"
  >
    <Certifications />
  </Slide>
  <Slide
      slide-key="university"
      title="University 🎓"
      sub-title="School taught me programming, now it was time for proper software engineering."
  >
    <University />
  </Slide>
  <Slide slide-key="school" title="School 🏫" sub-title="Where it all began&hellip;">
    <School />
  </Slide>
  <Slide slide-key="games">
    <TickTackToeComponent />
  </Slide>
</template>

<style>
@import "./assets/variables.css";
@import "./assets/base.css";

@media print {
  #games {
    display: none;
  }
}
</style>
