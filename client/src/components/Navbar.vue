<template>
	<nav class="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
		<div class="navbar-brand">
			<router-link class="navbar-item" to="/">
				<img src="../assets/LogoTk.svg" width="112" height="28" alt="" />
			</router-link>

			<a
				role="button"
				class="navbar-burger"
				aria-label="menu"
				aria-expanded="false"
				data-target="navbarBasicExample"
			>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
				<span aria-hidden="true"></span>
			</a>
		</div>

		<div id="navbarBasicExample" class="navbar-menu">
			<div class="navbar-start">
				<router-link class="navbar-item" to="/vote">Vote</router-link>
			</div>

			<div class="navbar-end" v-if="!isConnected">
				<div class="navbar-item">
					<div class="buttons">
						<router-link class="button is-link" to="/Register">S'enregistrer</router-link>
						<router-link class="button is-secondary" to="/Login">Se connecter</router-link>
					</div>
				</div>
			</div>
		</div>

		<div class="navbar-end" v-if="isConnected">
			<div class="navbar-item">
				<div class="buttons">
					<router-link class="button is-rounded" to="/Panel">
						<span class="icon">
							<i class="fa fa-github"></i>
						</span>
					</router-link>
					<router-link class="button is-link" to="/Login" @click="deconnexion"
						>Se déconnecter</router-link
					>
				</div>
			</div>
		</div>
	</nav>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

document.addEventListener("DOMContentLoaded", () => {
	// Get all "navbar-burger" elements
	const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

	// Check if there are any navbar burgers
	if ($navbarBurgers.length > 0) {
		// Add a click event on each of them
		$navbarBurgers.forEach((el) => {
			el.addEventListener("click", () => {
				// Get the target from the "data-target" attribute
				const target = el.dataset.target;
				const $target = document.getElementById(target);

				// Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
				el.classList.toggle("is-active");
				$target.classList.toggle("is-active");
			});
		});
	}
});
export default {
	name: "Navbar.vue",
	setup() {
		const store = useStore();
		const isConnected = computed(() => store.state.isConnected);

		function deconnexion() {
			store.commit("setIsConnected", false);
		}

		return {
			isConnected,
			deconnexion,
		};
	},
};
</script>

<style scoped>
.navbar-dropdown,
.navbar-menu {
	background-color: #363636;
	border-top: 0px;
}
</style>
