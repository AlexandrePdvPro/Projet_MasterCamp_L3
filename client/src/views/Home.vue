<template>
	<CHome></CHome>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CHome from "@/components/CHome.vue";

export default defineComponent({
	name: "Home",
	components: {
		CHome,
	},
});
</script>
