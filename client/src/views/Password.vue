<template>
  <div>
    <Cpassword></Cpassword>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cpassword from "@/components/Cpassword.vue";

export default {
  name: "Password",
  components: {
    Cpassword,
  },
};
</script>

<style scoped></style>
