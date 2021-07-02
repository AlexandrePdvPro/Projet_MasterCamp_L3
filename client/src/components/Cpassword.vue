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
            <Form  @submit="onSubmit">
              <div class="field">
                <div class="control has-icons-left has-icons-right">
                  <input class="input" name="email" type="email" placeholder="Email" v-model="value" />
                  <span>{{errorMessage}}</span>
                </div>
              </div>

              <div class="field is-grouped">S
                <div class="control">
                  <button type="submit" class="button is-link">Envoyer l'email</button>
                </div>
                <div class="control">
                  <button class="button is-link is-light">Annuler</button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Cpassword",
});
</script>

<style scoped></style>
