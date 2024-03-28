<template>
	<button @click="emit('onclick')" type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-layouts" data-collapse-toggle="dropdown-layouts">
		<img v-if="mode === 'image'"
			:src="image || 'https://nacholabraweb.000webhostapp.com/ico.png'"
			class="w-6 h-6"
		/>
		<svg v-else-if="mode === 'ico'"
			class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
			<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
		</svg>

		<span class="flex-1 ml-3 text-left whitespace-nowrap">
			{{ text }}
		</span>
	</button>
</template>

<script setup>
  const props = defineProps({
  	mode: String,
    image: String,
    text: String
  })

  const emit = defineEmits(['onclick']);
</script>