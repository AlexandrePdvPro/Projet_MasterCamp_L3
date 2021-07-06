<template>
	<section class="hero is-fullheight is-primary">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="column is-4 is-offset-4">
					<h3 class="title">Se connecter</h3>
					<div class="box">
						<form @submit.prevent="submitForm">
							<div class="field">
								<label class="label">Email</label>
								<div class="control has-icons-left has-icons-right">
									<input
										class="input"
										type="email"
										placeholder="Adresse email"
										@input="emailField.handleChange"
										@blur="emailField.handleBlur"
										:value="emailField.value"
									/>
								</div>
								<p
									class="has-text-danger"
									:style="{
										visibility:
											emailField.meta.touched && !emailField.meta.valid ? 'visible' : 'hidden',
									}"
								>
									{{ emailField.errorMessage || "Ce champ est requis" }}
								</p>
							</div>

							<div class="field">
								<label class="label">Mot de passe</label>
								<div class="control has-icons-left has-icons-right">
									<input
										class="input"
										type="password"
										placeholder="Password"
										@input="passwordField.handleChange($event)"
										@blur="passwordField.handleBlur"
										:value="passwordField.value"
									/>
								</div>
								<p
									class="has-text-danger"
									:style="{
										visibility:
											passwordField.meta.touched && !passwordField.meta.valid
												? 'visible'
												: 'hidden',
									}"
								>
									{{ passwordField.errorMessage || "Ce champ est requis" }}
								</p>
							</div>

							<div class="field is-grouped is-justify-content-center">
								<div class="control">
									<button class="button is-link" :disabled="!formMeta.valid" type="submit">
										Se connecter
									</button>
								</div>
								<div class="control">
									<button class="button is-link is-light">Annuler</button>
								</div>
							</div>
						</form>
					</div>
					<router-link to="/reset-password">Mot de passe oublié ?</router-link>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useStore } from "vuex";
import { useField, useForm } from "vee-validate";
import axios from "axios";
import { server } from "../helper";
import router from "../router";

interface user {
	email: string;
	password: string;
}

export default defineComponent({
	name: "Clogin",
	setup() {
		const store = useStore();

		const { meta: formMeta, handleSubmit } = useForm();
		const emailField = reactive(useField("email", "email"));
		const passwordField = reactive(useField("password", "password"));
		const customerData: user = reactive({ email: "", password: "" });

		const submitForm = handleSubmit((formValues: any) => {
			customerData.email = formValues.email;
			customerData.password = formValues.password;
			console.log("customerData: ", customerData);
			submitToServer(customerData);
			store.commit("setIsConnected", true);
			router.push({ name: "Home" });
			customerData.email = "";
			customerData.password = "";
			console.log("customerData: ", customerData);
		});

		const submitToServer = function (data: user) {
			axios.post(`${server.baseURL}/api/auth/login`, data);
		};

		return {
			submitToServer,
			customerData,
			emailField,
			passwordField,
			submitForm,
			formMeta,
		};
	},
});
</script>

<style scoped>
::placeholder {
	color: black;
}
</style>
