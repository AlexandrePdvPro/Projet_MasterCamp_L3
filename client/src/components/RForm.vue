<template>
	<section class="hero is-fullheight is-primary">
		<div class="hero-body">
			<div class="container has-text-centered">
				<div class="column is-4 is-offset-4">
					<h3 class="title">S'enregistrer</h3>
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
                  {{ emailField.errorMessage || 'Ce champ est requis' }}
                </p>
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
                  {{ passwordField.errorMessage || 'Ce champ est requis' }}
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
                  {{ confirmPasswordField.errorMessage || 'Ce champ est requis' }}
                </p>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    <input type="checkbox" required />
                    J'accepte les <a href="#">conditions d'utilisation</a>
                  </label>
                </div>
              </div>

							<div class="field is-grouped is-justify-content-center">
								<div class="control">
									<button type="submit" class="button is-link">S'enregistrer</button>
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
import { defineComponent, reactive, computed} from "vue";
import axios from "axios";
import { server } from "../helper";
import router from "../router";
import {useField, useForm} from "vee-validate";

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
    const emailField = reactive(useField('email', 'email'));
    const passwordField = reactive(useField('password', 'password'));
    const customerData: newUser = reactive({nom:'', prenom:'', email:'', numero_id: '', password:'' })

    const confirmPasswordValidator = computed(() => {
      return 'confirmPassword:password';
    });

    const confirmPasswordField = reactive(useField('confirmPassword', confirmPasswordValidator));

    const submitForm = handleSubmit((formValues:any) => {
      customerData.email = formValues.email;
      customerData.password = formValues.password;
      console.log('customerData: ', customerData);
      submitToServer(customerData);
      router.push({ name: "Home" });
      customerData.email = '';
      customerData.password = ''
      console.log('customerData: ', customerData);
    });

    const Register = function () {
      console.log(customerData);
      submitToServer(customerData);
      router.push({ name: "Home" });
    };

    const submitToServer = function (data: newUser) {
          axios.put(`${server.baseURL}/api/add/user`, data)
    }

    return {
      Register,
      submitToServer,
      customerData,
      emailField,
      passwordField,
      confirmPasswordField,
      submitForm,
      formMeta,
    }
  }
});
</script>

<style scoped>
::placeholder {
	color: black;
}
</style>
