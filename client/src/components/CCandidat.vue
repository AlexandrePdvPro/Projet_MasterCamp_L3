<template>
	<div class="custom-tile">
		<div class="tile is-child">
			<figure class="image">
				<img src="../assets/logo.png" alt="Photo des candidats" />
			</figure>
			<p class="title">Nom du candidat - Parti du candidat</p>
			<button class="button is-link">Voter</button>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "CCandidat",
});
</script>

<style scoped>
.custom-tile {
	margin: 25px;
	justify-content: center;
}
</style>
