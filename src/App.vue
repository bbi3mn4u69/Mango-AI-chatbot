
<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './lib/supabaseClient'

const countries = ref([])

async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}

onMounted(() => {
  getCountries()
})
</script>

<template>
  <div id="nav"></div>
  <router-view></router-view>
</template>

<style>
#app {
  overflow-x: hidden;
}
</style>
