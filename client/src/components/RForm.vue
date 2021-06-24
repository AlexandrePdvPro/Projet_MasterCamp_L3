<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">S'enregistrer</h3>
          <hr class="login-hr" />
          <div class="box">
            <form @submit.prevent="Register">
              <div class="field">
                <label class="label">Nom</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="nom"
                    class="input"
                    type="text"
                    placeholder="Nom"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Prenom</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="prenom"
                    class="input"
                    type="text"
                    placeholder="Prenom"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="email"
                    class="input"
                    type="text"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Numéro d'identité</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="numero_id"
                    class="input"
                    type="text"
                    placeholder="Identité"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Mot de passe</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="password"
                    class="input"
                    type="text"
                    placeholder="Mot de passe"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Confirmer le mot de passe</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    v-model="password"
                    class="input"
                    type="text"
                    placeholder="Mot de passe"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" required />
                    J'accepte les <a href="#">conditions d'utilisation</a>
                  </label>
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button type="submit" class="button is-link">
                    S'enregistrer
                  </button>
                </div>
                <div class="control">
                  <button class="button is-link is-light">Annuler</button>
                </div>
              </div>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="/Login">Se connecter </router-link> &nbsp;·&nbsp;
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { server } from "@/helper.js";
import router from "../router";

export default defineComponent({
  name: "RForm",
  setup(props, ctx) {
    let nom: string;
    let prenom: string;
    let email: string;
    let id: number;
    let numero_id: string;
    let password: string;
    let admin: boolean;

    const Register = function () {
      let customerData = {
        first_name: nom,
        last_name: prenom,
        email: email,
        id: id,
        num_id: numero_id,
        password: password,
        admin: admin,
      };
      __submitToServer(customerData);
    }

    const __submitToServer = function (data: any) {
          axios.post(`${server.baseURL}/users/create`, data).then(data => {
            router.push({ name: "home" });
          });
    }

    return{
      Register,
      __submitToServer,
    }
  }
});
</script>

<style scoped></style>
