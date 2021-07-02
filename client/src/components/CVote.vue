<template>
	<section class="hero is-primary is-fullheight">
		<div class="hero-body">
			<div class="tile is-ancestor">
				<CCandidat
					class="tile notification is-parent is-danger"
					v-for="candidat in candidats"
					:key="candidat"
					:candidat="candidat"
				></CCandidat>
			</div>
		</div>
		<div class="hero-foot">Copyright TkinterTeam</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CCandidat from "../components/CCandidat.vue";
import axios from "axios";
import { Candidat } from "../components/CCandidat.vue";
declare var require: any;

export default defineComponent({
	name: "CVote",
	components: {
		CCandidat,
	},
	setup() {
		// const candidats pour les tests, à laisser vide en prod
		const candidats = [
			{
				nom: "Bertrand",
				parti: "Gauche",
				imgUrl: require("../assets/logo.png"),
			},
			{ nom: "Arnaud", parti: "Droite", imgUrl: require("../assets/logo.png") },
			{ nom: "Arnaud", parti: "Droite", imgUrl: require("../assets/logo.png") },
		];
		function getCandidats(): void {
			axios.get("/vote").then((response) => {
				let res = response.data;
				for (const candidat in res) {
					let candidat = new Candidat();
					candidat.nom = res.nom;
					candidat.parti = res.parti;
					candidat.imgUrl = res.imgUrl;
					candidats.push(candidat);
				}
			});
		}
		return {
			candidats,
			getCandidats,
		};
	},
	mounted(): void {
		this.getCandidats();
	},
});
</script>

<style scoped>
.tile.is-ancestor {
	justify-content: center;
	flex-wrap: wrap;
}
</style>
