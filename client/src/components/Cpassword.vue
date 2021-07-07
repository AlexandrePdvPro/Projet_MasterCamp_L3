<template>
	<section class="hero is-fullheight is-primary">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="column is-4 is-offset-4">
					<h3 class="title">Réinitialiser le mot de passe</h3>
					<div class="box">
						<p class="has-text-dark pb-3">
							Veuillez saisir l'adresse email de votre compte. Si celle ci est enregistrée, vous
							recevrez un mail de réinitialisation
						</p>
						<form @submit.prevent="sendEmail">
							<div class="field">
								<div class="control has-icons-left has-icons-right">
									<input class="input" type="text" placeholder="Email" name="user_email" required />
								</div>
							</div>

							<div class="field is-grouped is-justify-content-center">
								<div class="control">
									<button class="button is-link" type="submit" value="Send">Envoyer l'email</button>
								</div>
								<div class="control">
									<button class="button is-link is-light">Annuler</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import * as emailjs from "emailjs-com";

export default defineComponent({
  name: "Cpassword",
  methods: {
    sendEmail: (e: any) => {
      // eslint-disable-next-line no-undef
      emailjs
        .sendForm(
          "tkinvote_resetpwd",
          "tkinvote_reset_password",
          e.target,
          "user_coH8k9D5xfQORmgGGdVd0"
        )
        .then(
          (result: any) => {
            console.log("Email sent successfully", result.status, result.text);
          },
          (error: any) => {
            console.log("Failed", error);
          }
        );
    },
  },
});
</script>

<style scoped>
::placeholder {
	color: black;
}
</style>
