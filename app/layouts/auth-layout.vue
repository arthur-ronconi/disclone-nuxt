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
      <Transition>
        <slot
          :name="slot_name"
          :key="key"
        ></slot>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { v4 } from "uuid";

const route = useRoute();
const slot_name = ref<string>();
const key = ref<string>(v4());

function defineComponent() {
  if (route.fullPath == "/login") {
    slot_name.value = "has-signed-in-before";
  } else if (route.fullPath == "/register") {
    slot_name.value = "hasnt-signed-in-before";
  } else {
    console.error("Something went wrong");
    slot_name.value = "index";
  }
}

defineComponent();

const fullPath = computed(() => route.fullPath);

watch(fullPath, () => {
  key.value = v4();
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
