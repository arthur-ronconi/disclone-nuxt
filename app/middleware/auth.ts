export default defineNuxtRouteMiddleware((to, from) => {
  if (useUserStore().getHasSignedInBefore) {
    return navigateTo("/login");
  } else {
    return navigateTo("/register");
  }
});
