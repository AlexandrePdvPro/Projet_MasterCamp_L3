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
                    v-model="customerData.nom"
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
                    v-model="customerData.prenom"
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
                    v-model="customerData.email"
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
                    v-model="customerData.numero_id"
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
                    v-model="customerData.password"
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
import { defineComponent, reactive } from "vue";
import axios from "axios";
import { server } from '../helper'
import router from "../router";

interface newUser {
  nom : string;
  prenom: string;
  email: string;
  numero_id: string;
  password: string;
}

export default defineComponent({
  name: "RForm",
  setup() {

    const customerData: newUser = reactive({nom:'', prenom:'', email:'', numero_id: '', password:'' })

    const Register = function () {
      console.log(customerData);
      submitToServer(customerData);
      router.push({ name: "Home" });
    }

    const submitToServer = function (data: newUser) {
          axios.put(`${server.baseURL}/api/add/user`, data).then(response => console.log(customerData) );
    }

    return{
      Register,
      submitToServer,
      customerData,
    }
  }
});
</script>

<style scoped></style>
