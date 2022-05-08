<script setup lang="ts">
import ProfileItemComponent from '@/components/personal/ProfileItemComponent.vue';</script>

<template>
  <ProfileItemComponent
      image-src="aws-certified-dev.png"
      title="AWS Certified Developer – Associate"
      sub-title="Amazon Web Services (AWS), 2021"
      description="Certified developer associate for AWS, market leader in cloud services ☁️
        Proficiency in AWS service APIs, CLIs and SDKs. Using containers and CI/CD pipelines.
        Develop, deploy and debug cloud-based applications that follow AWS best practices."
      :web="{
        url: 'https://www.credly.com/badges/106108f6-0e5a-4336-b0b1-43d8abdf3804',
        label: 'Find me on Credly'
      }"
  />
</template>
