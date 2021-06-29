<template>
	<div class="custom-tile">
		<div class="tile is-child">
			<figure class="image">
				<img :src="candidat.imgUrl" alt="Photo des candidats" />
			</figure>
			<p class="title">{{ candidat.nom }} - {{ candidat.parti }}</p>
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
	justify-content: center;
}
</style>
