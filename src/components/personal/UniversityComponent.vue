<script setup lang="ts">
import ProfileItemComponent from '@/components/personal/ProfileItemComponent.vue';</script>

<template>
  <ProfileItemComponent
      image-src="fhooe.png"
      title="Human Centered Computing, MSc"
      sub-title="University of Applied Sciences Upper Austria, Hagenberg (2018-2020)"
      description="Human-machine interfaces and -interaction 🤖; a nice mix of Engineering,
        UX and human sciences, such as psychology 🧑‍⚕️.
        Thesis about interactive network visualization of n-dimensional data using network traffic
        log data from AWS VPC Flow Logs."
      :web="{
        url: 'https://www.fh-ooe.at/en/hagenberg-campus/studiengaenge/master/human-centered-computing/',
        label: 'fh-ooe.at/hcc'
      }"
  />
  <ProfileItemComponent
      image-src="fhooe.png"
      title="Software Engineering, BSc"
      sub-title="University of Applied Sciences Upper Austria, Hagenberg (2015-2018)"
      description="Like computer science but for coders 🧑‍💻; software development management,
        plenty of programming languages, algorithms and data engineering.
        Thesis about PWAs, focus on normalization with IndexedDB."
      :web="{
        url: 'https://www.fh-ooe.at/en/hagenberg-campus/studiengaenge/bachelor/software-engineering/',
        label: 'fh-ooe.at/se'
      }"
  />
</template>
