<template>
	<section class="hero is-primary is-fullheight">
		<div class="hero-body">
			<div class="tile is-ancestor">
				<CCandidat class="tile notification is-parent is-danger"></CCandidat>
				<CCandidat class="tile notification is-parent is-danger"></CCandidat>
				<CCandidat class="tile notification is-parent is-danger"></CCandidat>
			</div>
		</div>
		<div class="hero-foot">Hello</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CCandidat from "../components/CCandidat.vue";

export default defineComponent({
	name: "CVote",
	components: {
		CCandidat,
	},
});
</script>

<style scoped></style>
