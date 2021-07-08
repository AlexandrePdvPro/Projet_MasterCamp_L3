<template>
  <section class="hero is-fullheight is-primary">
    <div class="hero-body">
      <div class="container has-text-centered">
        <div class="column is-4 is-offset-4">
          <h3 class="title">S'enregistrer</h3>
          <div class="box">
            <form @submit.prevent="submitForm">
              <div class="field">
                <label class="label">Nom</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Nom"
                    @input="nomField.handleChange($event)"
                    @blur="nomField.handleBlur"
                    :value="nomField.value"
                  />
                </div>
                <p
                  class="has-text-danger"
                  :style="{
                    visibility:
                      nomField.meta.touched && !nomField.meta.valid
                        ? 'visible'
                        : 'hidden',
                  }"
                >
                  {{ nomField.errorMessage || "Ce champ est requis" }}
                </p>
              </div>

              <div class="field">
                <label class="label">Prénom</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Prénom"
                    @input="prenomField.handleChange($event)"
                    @blur="prenomField.handleBlur"
                    :value="prenomField.value"
                  />
                </div>
                <p
                  class="has-text-danger"
                  :style="{
                    visibility:
                      prenomField.meta.touched && !prenomField.meta.valid
                        ? 'visible'
                        : 'hidden',
                  }"
                >
                  {{ prenomField.errorMessage || "Ce champ est requis" }}
                </p>
              </div>

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
                      emailField.meta.touched && !emailField.meta.valid
                        ? 'visible'
                        : 'hidden',
                  }"
                >
                  {{ emailField.errorMessage || "Ce champ est requis" }}
                </p>
              </div>

              <div class="field">
                <label class="label">Numéro d'identité</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    placeholder="Identité"
                    @input="idField.handleChange($event)"
                    @blur="idField.handleBlur"
                    :value="idField.value"
                  />
                </div>
                <p
                  class="has-text-danger"
                  :style="{
                    visibility:
                      idField.meta.touched && !idField.meta.valid
                        ? 'visible'
                        : 'hidden',
                  }"
                >
                  {{ idField.errorMessage || "Ce champ est requis" }}
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

              <div class="field">
                <label class="label">Confirmer le mot de passe</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="password"
                    placeholder="Confirm Password"
                    @input="confirmPasswordField.handleChange"
                    @blur="confirmPasswordField.handleBlur"
                    :value="confirmPasswordField.value"
                  />
                </div>
                <p
                  class="has-text-danger"
                  :style="{
                    visibility:
                      confirmPasswordField.meta.touched &&
                      !confirmPasswordField.meta.valid
                        ? 'visible'
                        : 'hidden',
                  }"
                >
                  {{
                    confirmPasswordField.errorMessage || "Ce champ est requis"
                  }}
                </p>
              </div>

              <div class="field is-grouped is-justify-content-center">
                <div class="control">
                  <button
                    type="submit"
                    class="button is-link"
                    :disabled="!formMeta.valid"
                  >
                    S'enregistrer
                  </button>
                </div>
                <div class="control">
                  <router-link class="button is-link is-light" to="/"
                    >Annuler</router-link
                  >
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
import { defineComponent, reactive, computed } from "vue";
import axios from "axios";
import { server } from "../helper";
import router from "../router";
import { useField, useForm } from "vee-validate";

interface newUser {
  nom: string;
  prenom: string;
  email: string;
  numero_id: string;
  password: string;
}

export default defineComponent({
  name: "RForm",
  setup() {
    const customerData: newUser = reactive({
      nom: "",
      prenom: "",
      email: "",
      numero_id: "",
      password: "",
    });

    const { meta: formMeta, handleSubmit } = useForm();
    const emailField = reactive(useField("email", "email"));
    const nomField = reactive(useField("nom", "user"));
    const prenomField = reactive(useField("prenom", "user"));
    const idField = reactive(useField("ID", "user"));
    const passwordField = reactive(useField("password", "password"));

    const confirmPasswordValidator = computed(() => {
      return "confirmPassword:password";
    });

    const confirmPasswordField = reactive(
      useField("confirmPassword", confirmPasswordValidator)
    );

    const submitForm = handleSubmit((formValues: any) => {
      customerData.nom = formValues.nom;
      customerData.prenom = formValues.prenom;
      customerData.numero_id = formValues.ID;
      customerData.email = formValues.email;
      customerData.password = formValues.password;
      console.log("customerData: ", customerData);
      submitToServer(customerData);
      getUserId(customerData.email);
      router.push({ name: "Home" });
      customerData.email = "";
      customerData.password = "";
      customerData.nom = "";
      customerData.prenom = "";
      customerData.numero_id = "";
      console.log("customerData: ", customerData);
    });

    const submitToServer = function (data: newUser) {
      axios.put(`${server.baseURL}/api/users/add/user`, data);
    };

    const getUserId = function (data: string): any {
      return axios.get(`${server.baseURL}/api/user_id`, {
        params: data,
      });
    };

    return {
      submitToServer,
      customerData,
      nomField,
      prenomField,
      idField,
      emailField,
      passwordField,
      confirmPasswordField,
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
