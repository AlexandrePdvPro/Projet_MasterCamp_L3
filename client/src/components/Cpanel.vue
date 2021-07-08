<template>
  <section class="hero is-fullheight">
    <div class="hero-body is-justify-content-center">
      <div class="columns is-multiline">
        <div class="box column is-8 is-offset-2 register">
          <div class="columns is-vcentered">
            <div class="column left">
              <a @click="create" class="is-info">Créer une session</a>
              <br /><br />
              <a @click="add" class="">Ajouter un candidat</a>
            </div>

            <div class="column right has-text-centered">
              <h1 class="title is-4">Création d'une session</h1>
              <form>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-medium"
                      type="text"
                      placeholder="Nom de la session"
                    />
                  </div>
                </div>

                <div class="field">
                  <div class="dropdown is-hoverable">
                    <div class="dropdown-trigger">
                      <button
                        class="button"
                        aria-haspopup="true"
                        aria-controls="dropdown-menu3"
                      >
                        <span>Session privée ?</span>
                        <span class="icon is-small">
                          <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                      </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu3" role="menu">
                      <div class="dropdown-content">
                        <a href="#" class="dropdown-item"> Public </a>
                        <a href="#" class="dropdown-item"> Privée </a>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div v-if="change" class="column right has-text-centered">
              <h1 class="title is-4">Création d'une session</h1>
              <form>
                <div class="field">
                  <div class="control">
                    <input
                      class="input is-medium"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>

                <div class="field">
                  <div class="control">
                    <input
                      class="input is-medium"
                      type="email"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <button
                  class="button is-block is-primary is-fullwidth is-medium"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import * as crypto from "../solidityconfig";

export default defineComponent({
  name: "Cpanel",
  setup() {
    const change = false;
    const title = "";

    function test(title: string) {
      //   crypto.createSessions(1, title, false);
      // crypto.getSession();
    }

    function add(change: boolean) {
      change = true;
      console.log(change);
    }

    function create(change: boolean) {
      change = false;
      console.log(change);
    }

    return {
      test,
      title,
      change,
      add,
      create,
    };
  },
});
</script>

<style scoped></style>
