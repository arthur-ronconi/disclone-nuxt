export const useUserStore = defineStore("user", () => {
  const has_signed_in_before = ref(false);

  const getHasSignedInBefore = computed(() => has_signed_in_before.value);

  function setSignedIn() {
    !has_signed_in_before.value;
  }

  return { has_signed_in_before, getHasSignedInBefore, setSignedIn };
});
