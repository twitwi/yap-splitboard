<script setup lang="ts">
import { useSimpleStore } from '@/stores/simple'
const simple = useSimpleStore()
</script>

<template>
  <main>Hello {{ simple.userName }}</main>
</template>
