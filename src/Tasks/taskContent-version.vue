<template>
	<span v-if='item.noEdit' class="mb-6 text-xs text-gray-900 dark:text-white">
		{{ item.noEdit }}
	</span>
	<article v-if='mode === "show"'> <!--@click="!item.noEdit && emit('openTask')">-->
		<footer class="flex items-center justify-between mb-2">
			<p class="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
				{{ item.name }}
			</p>
			<div class="flex gap-x-2 items-center">
				<p v-if='!item.noEdit' class="hidden lg:block text-sm text-gray-600 dark:text-gray-400"><time pubdate=""
					datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time>
				</p>
				<button v-if='!item.noEdit' @click="emit('openTask')" class="inline-flex items-center p-2 text-sm font-medium text-center text-sky-300 bg-white rounded-lg hover:bg-sky-100 focus:ring-4 focus:outline-none focus:ring-sky-50 dark:bg-sky-800 dark:hover:bg-sky-700 dark:hover:text-sky-300 dark:focus:ring-sky-600"
				type="button">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
				</button>
				<button @click.stop='emit("cp", item)' class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
				type="button">
				<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg>
			</button>
		</div>
		</footer>
		<p class="mb-4 text-xs whitespace-pre-wrap text-gray-900 dark:text-white">
			{{ item.desc }}
		</p>
	</article>

	<article v-else-if='mode === "edit"'>
		<footer class="flex items-center justify-between">
			<h1 contenteditable='true' spellcheck="false" ref='name' class="text-sm font-semibold text-gray-900 dark:text-white border-gray-200 text-gray-900 bg-transparent rounded-lg block w-full dark:border-gray-400 dark:placeholder-gray-400 outline-none">
				{{ item.name }}
			</h1>
			<div class="flex gap-x-2 items-center">
				<!-- <p class="hidden lg:block truncate text-sm text-gray-600 dark:text-gray-400"><time pubdate=""
					datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time>
				</p> -->
				<button @click.stop="emit('changeShow')" type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 inline-flex dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="readUserModal">
					<svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					<span class="sr-only">Close modal</span>
				</button>
		</div>
		</footer>
		<p class="text-xs mb-2 text-blue-900 dark:text-sky-500">
			Editando
		</p>

		<div contenteditable spellcheck="false" rows='8' class="truncate mb-4 whitespace-pre-line text-xs text-gray-700 dark:text-white w-full  border-0 bg-transparent outline-none h-auto dark:placeholder-gray-400" placeholder="Escribe una descripción aquí" data-dl-input-translation="true" ref='desc'>
			{{ item.desc }}
		</div>

		<button class='inline-flex items-center p-2 px-3 text-sm font-medium text-center text-base text-gray-300 bg-white rounded-lg hover:bg-sky-100 focus:ring-4 focus:outline-none focus:ring-sky-50 dark:bg-sky-800 dark:hover:bg-sky-700 dark:hover:text-gray-200 dark:focus:ring-sky-600' @click='updateValue(), emit("changeShow")'>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" /><path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z" /><path d="M16 5l3 3" /></svg>
			<span class='pl-1.5'>Actualizar</span>
		</button>

		<button class='inline-flex ml-2 items-center p-2 px-3 text-sm font-medium text-center text-base text-gray-300 bg-white rounded-lg hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-50 dark:bg-red-800 dark:hover:bg-red-700 dark:hover:text-gray-200 dark:focus:ring-red-600' @click='emit("removeTask"), emit("changeShow")'>
			<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="w-5 h-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>
			<span class='pl-1'>Eliminar</span>
		</button>
	</article>
</template>

<script setup>
	import { ref } from 'vue'
	import { updateTasks } from '@/stores/actions'
  const emit = defineEmits(['cp', 'changeShow', 'removeTask']);
  const name = ref('')
  const desc = ref('')

  const props = defineProps({
    mode: String,
    item: Array
  })

  const updateValue = () => {
  	props.item.name = name.value.innerText.trim()
  	props.item.desc = desc.value.innerText.trim()
  	updateTasks()
  }
</script>