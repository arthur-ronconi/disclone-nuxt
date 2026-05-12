<template>
  <div
    class="overflow-hidden h-screen w-screen flex items-center justify-center"
  >
    <div
      class="bg-[url(/assets/img/auth-bg-low.jpg)] fixed blur scale-110 h-full w-full overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat"
    ></div>
    <div
      class="relative z-10 h-full w-full flex flex-col items-center justify-center"
    >
      <AuthHeader></AuthHeader>
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
