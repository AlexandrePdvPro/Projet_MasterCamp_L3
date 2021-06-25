<template>
	<div class="home">
		<section class="hero is-primary is-fullheight">
			<div class="hero-body">
				<div class="container has-text-centered">
					<div class="block">
						<p class="title">Besoin de voter ?</p>
					</div>
					<div class="block">
						<router-link class="button is-info" to="/vote"> Voter </router-link>
					</div>
				</div>
			</div>
			<div class="hero-foot">Hello</div>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "CHome",
});
</script>
