<template>
	<div class="text-yellow-400">Gallery {{ name }}</div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '@/store'

const store = useStore(key)

const name = computed(() => {
	return store.state.user.name
})
</script>
