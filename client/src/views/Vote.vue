<template>
	<CVote></CVote>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CVote from "../components/CVote.vue";

export default defineComponent({
	name: "Vote",
	components: {
		CVote,
	},
});
</script>

<style scoped></style>
