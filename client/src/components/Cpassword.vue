<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">Réinitialiser le mot de passe</h3>
          <hr class="login-hr" />
          <div class="box">
            <p>
              Veuillez saisir l'adresse email de votre compte. Si celle ci est
              enregistrée, vous recevrez un mail de réinitialisation
            </p>
            <form @submit.prevent="sendEmail">
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Email"
                    name="user_email"
                    required
                  />
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link" type="submit" value="Send">
                    Envoyer l'email
                  </button>
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

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cpassword",
  methods: {
    sendEmail: (e) => {
      // eslint-disable-next-line no-undef
      emailjs
        .sendForm(
          "tkinvote_resetpwd",
          "tkinvote_reset_password",
          e.target,
          "user_coH8k9D5xfQORmgGGdVd0"
        )
        .then(
          (result) => {
            console.log("Email sent successfully", result.status, result.text);
          },
          (error) => {
            console.log("Failed", error);
          }
        );
    },
  },
});
</script>

<style scoped></style>
