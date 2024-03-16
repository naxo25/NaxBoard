<template>
	<article class="px-4 rounded-lg 2xl:col-span-2 sm:px-6 ">
      <section class="antialiased">
        <div class="py-1">
          <div class="flex pb-6 justify-between items-center">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              {{ Store.selectSpace }} (20)
            </h2>
            <aside aria-label="Share social media">
              <div class="not-format">
                <button @click='showModal=true' class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
                type="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 8h-14" /><path d="M5 12h9" /><path d="M11 16h-6" /><path d="M15 16h6" /><path d="M18 13v6" /></svg>
                </button>
                <button data-tooltip-target="tooltip-link" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"></path></svg></button>
                <button data-tooltip-target="tooltip-save" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"></path></svg></button>
                <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3"><path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></button>

                <button @click="$router.push('/')" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                type="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500 dark:text-gray-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 14l-4 -4l4 -4" /><path d="M5 10h11a4 4 0 1 1 0 8h-1" /></svg>
              </button>
              </div>
            </aside>
          </div>
              <article
                v-for="item,pos in Store.tasks"
                @click='getSubTasks(pos, "Task")'
                class="pb-6 cursor-pointer w-auto text-base rounded-lg ml-1">
              <footer class="flex justify-between items-center mb-2">
                <p class="line-clamp-2 items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                  {{ item.name }}
                </p>

                <div class="flex gap-x-2 items-center">
                  <p class="hidden lg:block text-sm text-gray-600 dark:text-gray-400">
                    <time pubdate datetime="2022-02-08" title="February 8th, 2022">
                      Feb. 8, 2022
                    </time></p>

                    <button id="dropdownComment1Button" data-dropdown-toggle="dropdownComment1"
                    class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    type="button">
                    <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3">
                      <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/>
                    </svg>
                    <span class="sr-only">Comment settings
                    </span>
                  </button>
                </div>

                <!-- Dropdown menu -->
                <div id="dropdownComment1" class="hidden z-10 w-36  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600">
                  <ul class="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton">
                    <li>
                      <a href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Edit</a>
                    </li>
                    <li>
                      <a href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Remove</a>
                    </li>
                    <li>
                      <a href="#"
                      class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a>
                    </li>
                  </ul>
                </div>
              </footer>

            <p class="text-gray-900 line-clamp-2 dark:text-white">
              {{ item.desc }}
            </p>
        </article>
      </div>
    </section>
  </article>

  <Modal v-if='showModal' mode='Task' @changeShow='showModal=false' />
</template>

<script setup>
  import { getSubTasks } from '@/stores/actions'
  import Modal from '@/components/modal/NewModal.vue'
  import Store from '../stores/store.js'
  import { ref } from 'vue'

  const showModal = ref(false)
</script>