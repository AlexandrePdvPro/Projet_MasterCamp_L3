<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title has-text-black">Se connecter</h3>
          <hr class="login-hr" />
          <div class="box">
            <form @submit.prevent="login">
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Email"
                    v-model="customerData.email"
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
                    v-model="customerData.password"
                    @keyup.enter="login"
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
import {defineComponent, reactive} from "vue";
import axios from "axios";
import { server } from '../helper'
import router from "../router";

interface user {
  email: string;
  password: string
}

export default defineComponent({
  name: "Clogin",
  setup() {

    const customerData: user = reactive({email:'', password:'' })

    const login = function () {
      console.log('customerData: ', customerData);
      submitToServer(customerData);
      router.push({ name: "Home" });
      customerData.email = '';
      customerData.password = ''
    }


    const submitToServer = function (data: user) {
      axios.post(`${server.baseURL}/api/auth/login`, data);
    }

    return{
      login,
      submitToServer,
      customerData,
    }
  }
});
</script>

<style scoped></style>
