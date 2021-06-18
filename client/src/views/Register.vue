<template>
  <div class="container">
    <RForm></RForm>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import RForm from "@/components/RForm.vue";

export default defineComponent({
  name: "Register",
  components: {
    RForm,
  }
});
</script>

<style scoped>
</style>
