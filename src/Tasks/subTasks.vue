<template>
	<article class="px-2 rounded-lg 2xl:col-span-2 sm:px-6">
		<div class="flex mb-4 flex-col">
			<div class="flex w-full items-center justify-between lg:justify-start space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
				<span>
					<button @click="$router.back" class="text-gray-900 line-clamp-1 dark:text-white hover:underline no-underline font-semibold">
						{{ Store.selectSpace}}
					</button>
				</span>
				<span class="hidden lg:block bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full"></span>
				<span class='hidden lg:block'>
					<time class="font-normal text-gray-500 line-clamp-1 dark:text-gray-400" pubdate="" datetime="2022-03-08" title="August 3rd, 2022">
						{{ Store.tasks[Store.TaskSelectPos].name }}
					</time>
				</span>
				<aside aria-label="Share social media">
					<div class="not-format">
						<button data-tooltip-target="tooltip-link"
							class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							type="button">
							<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7">
								</path>
							</svg>
						</button>

						<button data-tooltip-target="tooltip-save"
							class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20">
								<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
									d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"></path>
							</svg>
						</button>

						<button @click='removeTask("Task")' data-tooltip-target="tooltip-save"
							class="inline-flex items-center p-2 text-sm font-medium text-center text-red-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							type="button">
							<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  class="w-5 h-5"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 6a1 1 0 0 1 .117 1.993l-.117 .007h-.081l-.919 11a3 3 0 0 1 -2.824 2.995l-.176 .005h-8c-1.598 0 -2.904 -1.249 -2.992 -2.75l-.005 -.167l-.923 -11.083h-.08a1 1 0 0 1 -.117 -1.993l.117 -.007h16z" /><path d="M14 2a2 2 0 0 1 2 2a1 1 0 0 1 -1.993 .117l-.007 -.117h-4l-.007 .117a1 1 0 0 1 -1.993 -.117a2 2 0 0 1 1.85 -1.995l.15 -.005h4z" /></svg>
							<span class='hidden md:block pl-1.5'>Eliminar Tarea</span>
						</button>

						<button @click="$router.back" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
							type="button">
							<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
						</button>
					</div>
				</aside>
			</div>
		</div>

		<section class="antialiased">
			<div class="py-1">
				<div @click='openTask(Store.tasks[Store.TaskSelectPos])' class="flex justify-between items-center">
					<h2 class="text-lg lg:text-2xl line-clamp-1 font-bold text-gray-900 dark:text-white">
						{{ Store.tasks[Store.TaskSelectPos].name }}
					</h2>
					<div class='flex gap-x-2'>
						<button @click='showModal=true' class="inline-flex items-center p-2 text-sm font-medium text-center bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
						type="button">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 8h-14" /><path d="M5 12h9" /><path d="M11 16h-6" /><path d="M15 16h6" /><path d="M18 13v6" /></svg>
						</button>
						<button @click='cp(Store.tasks[Store.TaskSelectPos], false)' class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
						type="button">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg>
					</button>
				</div>
			</div><!--[-->

			<p class="text-sm text-gray-600 dark:text-gray-400">
				<time pubdate="" datetime="2022-02-08" title="February 8th, 2022">
					Feb. 8, 2022
				</time>
			</p>

				<article class="py- text-base rounded-lg lg:ml-1">
					<footer class="flex justify-between items-center mb-2">
					</footer>

					<p class="text-gray-900 dark:text-white">
						{{ Store.tasks[Store.TaskSelectPos].desc }}
					</p>

					<div v-for="item, pos in [...Store.tasks[Store.TaskSelectPos]?.subTasks || [], ...OptionsExtras]" class="mb-5">
						<Task
							@changeShow="position = ''"
							@openTask='openTask(pos)'
							@removeTask='removeTask("subTask", pos)'
							:item
							:mode="position === pos ? 'edit' : 'show'"
							@cp='cp($event)'
						/>
					</div>
				</article>
			</div>
		</section>
	</article>

	<Modal v-if='showModal' mode='SubTask' @changeShow='showModal=false' />
</template>

<script setup>
	import Modal from '@/components/modal/NewModal.vue'
	import Task from '@/Tasks/task.vue'
	import Toastify from 'toastify-js'
  import Store from '@/stores/store.js'
  import { removeTask } from '@/stores/actions.js'
  import { ref } from 'vue'

  const showModal = ref(false)
  const textoModal = ref({})
  const position = ref('')

  const props = defineProps({
    pos: String
  })

	Store.TaskSelectPos = props.pos;

  const TaskSelect = Store.tasks[Store.TaskSelectPos]
  const OptionsExtras = ref([])

  if (Store.selectSpace === 'Historys') {
  	OptionsExtras.value = [{ "name": '\n"Gnosis, conocimiento para el despertar de la conciencia"', "noEdit": 'Frase' }, { name: 'Inscripciones por whatsApp', noEdit: 'Otro' }]
  }

  const openTask = pos => {
  	position.value = pos
  }

  const cp = (item, copyDesc = true) => {
		let desc = ''
		copyDesc && item.desc?.split(/\r?\n/).forEach(item => desc += `\n${item}`)
	  navigator.clipboard.writeText(`${item.name}${desc}`)
	  Notification("Contenido copiado al portapapeles.")
  }
</script>