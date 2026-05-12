<template>
  <div class="grow">
    <form
      @submit.prevent=""
      class="bg-zinc-700 w-115 rounded-lg p-8 flex flex-col gap-8"
    >
      <p class="text-center font-bold text-2xl">Criar uma conta</p>
      <div class="flex flex-col gap-4.75">
        <button
          type="submit"
          class="h-10 bg-indigo-500 w-full rounded-md hover:bg-indigo-600 transition-all font-semibold"
        >
          Criar conta
        </button>
        <a
          href="#"
          class="text-xs text-indigo-300"
          >Já tem uma conta? Clique aqui</a
        >
      </div>
    </form>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
