<template>
	<div class="home">
		<section class="hero is-fullheight is-primary">
			<div class="hero-body is-justify-content-center">
				<div class="columns is-vcentered">
					<div class="column">
						<div class="container">
							<div class="block">
								<p class="title">Besoin de voter ?</p>
								<q class="subtitle">L'adulte ne croit pas au Père Noël, il vote.</q>
								<p class="subtitle">- Pierre Desproges</p>
							</div>
							<div class="block">
								<router-link class="button is-info" to="/vote"> Voter </router-link>
							</div>
						</div>
					</div>
					<div class="column is-flex is-justify-content-center">
						<figure class="image">
							<img src="../assets/logo_vote.svg" alt="" />
						</figure>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "CHome",
});
</script>

<style scoped>
.image {
	width: 256px;
	height: 256px;
}
</style>
