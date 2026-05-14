<template>
  <div class="flex flex-col gap-2">
    <label :for="name">
      {{ label }}
      <span
        v-if="required"
        class="text-red-300 text-xs"
      >
        *
      </span>
    </label>
    <div class="relative w-full flex items-center">
      <input
        :type="inferred_input_type"
        :name="name"
        :id="name"
        v-model="value"
        class="input"
      />
      <button
        v-if="type === 'password'"
        class="h-10 w-10 absolute left-full -translate-x-10 -translate-y-1/2 top-1/2"
        @click="visibility = !visibility"
      >
        <Icon
          :name="
            !visibility
              ? 'material-symbols:visibility-off-rounded'
              : 'material-symbols:visibility-rounded'
          "
          class="translate-y-0.5"
        ></Icon>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
export type HTMLInputTypeAttribute =
  | "number"
  | "search"
  | "button"
  | "text"
  | "email"
  | "month"
  | "password";

type InputProps = {
  name: string;
  label: string;
  type?: HTMLInputTypeAttribute;
  placeholder: string;
  showPlaceholder?: boolean;
  required?: boolean;
  autocomplete?: string;
};

const props = withDefaults(defineProps<InputProps>(), {
  type: "text",
  showPlaceholder: true,
  required: false,
});

const emit = defineEmits(["input"]);

const value = ref<string>();
const visibility = ref<boolean>(false);
const inferred_input_type = computed(() => {
  if (visibility.value == false && props.type == "password") {
    return "password";
  } else if (visibility.value === true && props.type === "password") {
    return "text";
  } else {
    return props.type;
  }
});

watch(value, () => {
  emit("input", value.value);
});
</script>

<style scoped></style>
