<template>
	<Navbar></Navbar>
	<router-view />
</template>

<script lang="ts">
import Navbar from "@/components/Navbar.vue";

export default {
	name: "App",
	components: {
		Navbar,
	},
};
</script>

<style>
@import "../css/mystyles.css";
</style>
