<script setup>
import { useDatabase } from 'vuefire'
import { useList } from 'vuefire'
import { ref as dbRef } from 'firebase/database'
const db = useDatabase()
const salones = useList(dbRef(db, 'Salones'))
</script>

<template>
  <nav class="navbar navbar-dark bg-primary">
    <a href="/" class="navbar-brand">Salones ocupados</a>
  </nav>
  <div class="container">
    <div class="row">
      <div class="row-sm-8">
        <table class="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li v-for="salon in salones" >
            <span>{{ salon.Name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
