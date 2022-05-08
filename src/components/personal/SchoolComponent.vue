<script setup lang="ts">
import ProfileItemComponent from '@/components/personal/ProfileItemComponent.vue';</script>

<template>
  <ProfileItemComponent
      image-src="hak-hwi.png"
      title="Handelsakademie, Digital Business"
      sub-title="Business academy, Bregenz, Austria (2010-2015)"
      description="School on commerce and business- and information systems.
        Basics on operating businesses, desktop and web programming, networking, web and media design.
        This is where I fell in love with programming 💖"
      :web="{
        url: 'https://www.hak-bregenz.ac.at/hwi-allgemein/',
        label: 'hak-bregenz.ac.at (German only)'
      }"
  />
</template>
