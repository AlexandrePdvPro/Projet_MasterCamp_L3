<template>
  <form class="box" action="">
    <div class="field">
      <label class="label">Nom</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Nom" required>
      </div>
    </div>

    <div class="field">
      <label class="label">Prenom</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Prenom" required>
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Email" required>
      </div>
    </div>

    <div class="field">
      <label class="label">Numéro d'identité</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Identité" required>
      </div>
    </div>

    <div class="field">
      <div class="control">
        <label class="checkbox">
          <input type="checkbox"  required/>
          J'accepte les <a href="#">conditions d'utilisation</a>
        </label>
      </div>
    </div>

    <div class="field is-grouped">
      <div class="control">
        <button class="button is-link">Submit</button>
      </div>
      <div class="control">
        <button class="button is-link is-light">Cancel</button>
      </div>
    </div>
  </form>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "RForm"
})
</script>

<style scoped>

</style>
