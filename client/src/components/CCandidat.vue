<template>
	<div class="custom-tile">
		<div class="tile is-child has-text-centered">
			<figure class="image is-128x128 is-inline-block">
				<img :src="candidat.imgUrl" alt="Photo des candidats" />
			</figure>
			<h1 class="title">{{ candidat.nom }}</h1>
			<h2 class="title">{{ candidat.parti }}</h2>
			<button class="button is-link">Voter</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export class Candidat {
	nom: string;
	parti: string;
	imgUrl: string;

	constructor() {
		this.nom = "";
		this.parti = "";
		this.imgUrl = "";
	}
}

export default defineComponent({
	name: "CCandidat",
	props: {
		candidat: { type: Candidat },
	},
	setup(props) {
		const OCandidat = ref(0);
		return {
			OCandidat,
		};
	},
});
</script>

<style scoped>
.custom-tile {
	margin: 25px;
	min-width: 260px;
	max-width: 350px;
}
</style>
