<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">Se connecter</h3>
          <hr class="login-hr" />
          <div class="box">
            <form @submit.prevent="login()">
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Email"
                    v-model="email"
                    required
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">Mot de passe</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Mot de passe"
                    v-model="password"
                    required
                  />
                </div>
              </div>

              <div class="field is-grouped">
                <div class="control">
                  <button class="button is-link" type="submit">Se connecter</button>
                </div>
                <div class="control">
                  <button class="button is-link is-light">Annuler</button>
                </div>
              </div>
            </form>
          </div>
          <p class="has-text-grey">
            <router-link to="/Register">S'enregistrer</router-link>
            &nbsp;·&nbsp;
            <router-link to="/reset-password"
              >Mot de passe oublié ?</router-link
            >
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";
import { server } from '../helper'
import router from "../router";

export default defineComponent({
  name: "Clogin",
  setup(props, ctx) {
    let email: string;
    let password: string;

    const login = function () {
      let customerData = {
        email: email,
        password: password,
      };
      console.log('customerData: ', customerData);
      __submitToServer(customerData);
    }

    const __submitToServer = function (data: any) {
      axios.post(`${server.baseURL}/api/auth/login`, data).then(data => {
        router.push({ path: "/" });
      });
    }

    return{
      login,
      __submitToServer,
    }
  }
});
</script>

<style scoped></style>
