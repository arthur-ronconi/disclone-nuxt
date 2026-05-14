<template #index>
  <NuxtLayout>
    <div class="flex items-center justify-center h-full">
      <Logo></Logo>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: "auth",
});
</script>

<style scoped></style>
