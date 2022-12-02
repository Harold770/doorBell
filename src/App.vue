<script setup>
import { useDatabase } from 'vuefire'
import { useList } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
import HelloWorld from './components/HelloWorld.vue';
const db = useDatabase()
const salones = useList(dbRef(db, 'Salones'))

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
    deferredPrompt = e;
});
</script>

<template>
  <nav class="navbar navbar-dark bg-primary justify-content-center">
    <a href="/" class="navbar-brand">Salones ocupados</a>
  </nav>
  <div class="container">
    <div class="row">
      <div class="row-sm-8">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Laboratorio</th>
              <th scope="col">Entrada</th>
              <th scope="col">Maestro</th>
              <th scope="col">Estatus</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="salon in salones">
              <td>{{ salon.Name }}</td>
              <td>{{ salon.HoraEntrada }}</td>
              <td>{{ salon.Maestro }}</td>
              <td>
                <button v-if=salon.Status type="button" class="btn btn-danger">Ocupado</button>
                <button v-else type="button" class="btn btn-success">Disponible</button>
                
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
