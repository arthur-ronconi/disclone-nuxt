<template>
  <div class="flex flex-col gap-2 w-full">
    <div class="flex items-center justify-start relative">
      <label
        :for="name"
        :class="{ 'absolute z-10 translate-y-7 pl-3 opacity-50': inlaid_label }"
        v-show="show_label"
      >
        {{ label }}
      </label>
    </div>
    <div class="relative">
      <div
        :name="name"
        :id="name"
        class="input relative flex flex-col justify-center"
        @click="collapsed = !collapsed"
      >
        {{ selected_value?.label }}
        <div class="absolute h-full w-full flex items-center justify-end">
          <div class="translate-y-0.5 -translate-x-4">
            <Icon
              name="material-symbols:keyboard-arrow-down-rounded"
              v-if="collapsed"
            ></Icon>
            <Icon
              name="material-symbols:keyboard-arrow-up-rounded"
              v-else
            ></Icon>
          </div>
        </div>
      </div>
      <ul
        v-if="!collapsed"
        class="absolute h-auto w-full max-h-62.5 top-full mt-1 bg-zinc-700 brightness-85 p-1 rounded-md border border-zinc-500 overflow-auto scrollbar-thumb-zinc-500 scrollbar-track-transparent"
      >
        <li
          v-for="option in options"
          :key="option.uniqueKey"
          class="flex items-center h-10 bg-zinc-700 hover:bg-zinc-600 p-2 rounded-xs"
          @click="select_option(option)"
        >
          {{ option.label }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
type SelectProps = {
  name: string;
  label: string;
  inlaid_label?: boolean;
  placeholder?: string;
  showPlaceholder?: boolean;
  required?: boolean;
  options: SelectOptions[];
};

export type SelectOptions = {
  label: string;
  value: any;
  uniqueKey: string;
};

const props = defineProps<SelectProps>();
const emit = defineEmits(["change"]);

const collapsed = ref<boolean>(true);
const selected_value = ref<SelectOptions>();
const show_label = computed(() => {
  if (collapsed.value === false || selected_value.value) {
    return false;
  }
  return true;
});

function select_option(option: SelectOptions) {
  selected_value.value = option;
  collapsed.value = true;
  emit("change", selected_value.value);
}
</script>

<style scoped></style>
