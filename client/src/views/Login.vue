<template>
	<Clogin></Clogin>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clogin from "@/components/Clogin.vue";

export default defineComponent({
	name: "Login",
	components: {
		Clogin,
	},
});
</script>

<style scoped></style>
