<template>
	<div>
		<Navbar></Navbar>
		<transition name="fade" mode="out-in">
			<router-view :key="$route.fullPath" />
		</transition>
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
template {
	background-color: #264653;
}

.fade-enter,
.fade-leave-to {
	opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
	transition: all 0.3s ease;
}

@import "../css/mystyles.css";
</style>
