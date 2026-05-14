<template>
  <div class="grow">
    <form
      @submit.prevent=""
      class="bg-zinc-700 w-115 rounded-lg p-8 flex flex-col gap-4"
      :value="value"
      name="login-form"
    >
      <p class="text-center font-bold text-2xl">Criar uma conta</p>
      <Input
        name="email"
        label="E-mail"
        type="email"
        placeholder="Seu e-mail"
        required
        autocomplete="new-email"
        :show-placeholder="false"
        @input="(event) => (value.email = event)"
      />
      <Input
        name="display-name"
        label="Nome exibido"
        type="text"
        placeholder="Seu nome exibido"
        autocomplete="new-display-name"
        :show-placeholder="false"
        @input="(event) => (value.displayName = event)"
      />
      <Input
        name="username"
        label="Nome de usuário"
        type="text"
        placeholder="Seu nome de usuário"
        required
        autocomplete="new-username"
        :show-placeholder="false"
        @input="(event) => (value.username = event)"
      />
      <Input
        name="password"
        label="Senha"
        placeholder="Seu senha"
        type="password"
        required
        autocomplete="new-password"
        :show-placeholder="false"
        @input="(event) => (value.password = event)"
      />
      <fieldset name="date-of-birth">
        <legend>Data de nascimento <span class="text-red-300">*</span></legend>
        <div class="flex items-center justify-center gap-2">
          <Select
            name="day-of-birth"
            label="Dia"
            inlaid_label
            :options="days"
            @change="value.date_of_birth.day = $event"
          />
          <Select
            name="month-of-birth"
            label="Mês"
            inlaid_label
            :options="months"
            @change="value.date_of_birth.month = $event"
          />
          <Select
            name="year-of-birth"
            label="Ano"
            inlaid_label
            :options="years"
            @change="value.date_of_birth.year = $event"
          />
        </div>
      </fieldset>
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
          >Já tem uma conta? Clique aqui
        </a>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { v4 } from "uuid";
import type { SelectOptions } from "../select.vue";

const router = useRouter();

type FormSchema = {
  email: string;
  displayName: string;
  username: string;
  password: string;
  date_of_birth: {
    day: number;
    month: number;
    year: number;
  };
};
const value = ref<FormSchema>({
  email: "",
  displayName: "",
  username: "",
  password: "",
  date_of_birth: {
    day: -1,
    month: -1,
    year: -1,
  },
});

const days: SelectOptions[] = [];
const months: SelectOptions[] = [
  { value: 1, label: "Janeiro", uniqueKey: v4() },
  { value: 2, label: "Fevereiro", uniqueKey: v4() },
  { value: 3, label: "Março", uniqueKey: v4() },
  { value: 4, label: "Abril", uniqueKey: v4() },
  { value: 5, label: "Maio", uniqueKey: v4() },
  { value: 6, label: "Junho", uniqueKey: v4() },
  { value: 7, label: "Julho", uniqueKey: v4() },
  { value: 8, label: "Agosto", uniqueKey: v4() },
  { value: 9, label: "Setembro", uniqueKey: v4() },
  { value: 10, label: "Outubro", uniqueKey: v4() },
  { value: 11, label: "Novembro", uniqueKey: v4() },
  { value: 12, label: "Dezembro", uniqueKey: v4() },
];
const years: SelectOptions[] = [];

// fills days array
for (let i = 1; i <= 31; i++) {
  days.push({
    value: i,
    label: i.toString(),
    uniqueKey: v4(),
  });
}

// fills years array
const current_year = new Date().getFullYear();
for (let i = current_year - 100; i <= current_year; i++) {
  years.push({
    value: i,
    label: i.toString(),
    uniqueKey: v4(),
  });
}
</script>

<style scoped></style>
