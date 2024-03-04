<template>
	<article class="px-4 rounded-lg 2xl:col-span-2 sm:px-6">
		<div class="flex mb-4 flex-col lg:flex-row justify-between lg:items-center">
			<div class="flex items-center space-x-3 text-gray-500 dark:text-gray-400 text-base mb-2 lg:mb-0">
				<span>
					<button @click="$router.back" class="text-gray-900 line-clamp-1 dark:text-white hover:underline no-underline font-semibold">
						{{ Store.selectSpace}}
					</button>
					</span>
					<span class="bg-gray-300 dark:bg-gray-400 w-2 h-2 rounded-full"></span>
					<span>
						<time class="font-normal text-gray-500 line-clamp-1 dark:text-gray-400" pubdate="" datetime="2022-03-08" title="August 3rd, 2022">
							{{ TaskSelect.name }}
						</time>
					</span>
				</div>
			<aside aria-label="Share social media">
				<div class="not-format">
					<button data-tooltip-target="tooltip-link"
						class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true"
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

					<button @click="$router.back" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						type="button">
						<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
					</button>
				</div>
			</aside>
		</div>

		<section class="antialiased">
			<div class="py-1">
				<div class="flex justify-between items-center">
					<h2 class="text-lg lg:text-2xl line-clamp-1 font-bold text-gray-900 dark:text-white">
						{{ TaskSelect.name }}
					</h2>
					<button @click='cp(TaskSelect)' class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
					type="button">
					<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg>
				</button>
			</div><!--[-->

			<p class="text-sm text-gray-600 dark:text-gray-400">
				<time pubdate="" datetime="2022-02-08" title="February 8th, 2022">
					Feb. 8, 2022
				</time>
			</p>

				<article class="py- cursor-pointer text-base rounded-lg lg:ml-1">
					<footer class="flex justify-between items-center mb-2">
					</footer>

					<p class="text-gray-900 dark:text-white">
						{{ TaskSelect.desc }}
					</p>

					<article v-for="item in [...TaskSelect.subTasks, ...OptionsExtras]" class="lg:pl-1 mb-5">
						<footer class="flex items-center justify-between mb-2">
							<p class="inline-flex items-center mr-3 text-sm font-semibold text-gray-900 dark:text-white">
								{{ item.name }}
							</p>
							<div class="flex gap-x-2 items-center">
								<p class="hidden lg:block text-sm text-gray-600 dark:text-gray-400"><time pubdate=""
									datetime="2022-02-08" title="February 8th, 2022"> 01/03/2023 4:15 PM</time>
								</p>
							<button @click='cp(item)' class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
								type="button">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M8 8m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z"></path><path d="M16 8v-2a2 2 0 0 0 -2 -2h-8a2 2 0 0 0 -2 2v8a2 2 0 0 0 2 2h2"></path></svg>
							</button>
							</div>
						</footer>
						<p class="mb-4 text-gray-900 dark:text-white">
							{{ item.desc }}
						</p>
					</article>

					<div class="flex lg:pl-1 items-center mb-5">
						<textarea id="chat" rows="1"
							class="block mr-4 p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
							placeholder="Agregar subtarea"></textarea>
							<button type="submit"
							class="inline-flex justify-center p-2 rounded-lg cursor-pointer text-primary-600 hover:bg-primary-100 dark:text-primary-500 dark:hover:bg-gray-600"><svg
								aria-hidden="true" class="w-6 h-6 rotate-90" fill="currentColor" viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z">
								</path>
							</svg><span class="sr-only">Send message</span>
						</button>
					</div>
				</article>

				<form class="mb-6">
					<div class="py-2 px-4 mb-4 rounded-lg rounded-t-lg border border-gray-200 dark:border-gray-700">
						<label for="comment" class="sr-only">Your comment</label><textarea id="comment" rows="6" class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 bg-transparent focus:outline-none dark:text-white dark:placeholder-gray-400"
							placeholder="Write a comment..." required=""></textarea>
						</div><button type="submit"
						class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
						Agregar tarea </button>
				</form>
			</div>
		</section>
	</article>
</template>

<script setup>
	import Toastify from 'toastify-js'
  import Store from '../stores/store.js'
  import { ref } from 'vue'

  const TaskSelect = ref(Store.tasks[Store.TaskSelectPos])
  const OptionsExtras = ref([])

  if (!TaskSelect.value.subTasks)
  	TaskSelect.value.subTasks = []

  if (Store.selectSpace === 'Historys') {
  	OptionsExtras.value = [{"name": "Gnosis, conocimiento para el despertar de la conciencia" }]
  }

  const cp = item => {
		let desc = ''
		item.desc?.split(/\r?\n/).forEach(item => desc += `\n${item}`)
	  navigator.clipboard.writeText(`${item.name}${desc}`)
	  Notification("Contenido copiado al portapapeles.")
  }
</script>