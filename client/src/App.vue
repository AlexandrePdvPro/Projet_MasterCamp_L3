<template>
	<div>
		<Navbar></Navbar>
		<router-view />
	</div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";

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
