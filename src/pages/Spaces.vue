<template>
	<article class="px-4 rounded-lg 2xl:col-span-2 sm:px-6 ">
      <section class="antialiased">
        <div class="py-1">
          <div class="flex pb-6 justify-between items-center">
            <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
              NaxBoard
            </h2>
            <aside aria-label="Share social media">
              <div class="not-format">
                <button @click='showModal=true' class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-gray-300 dark:focus:ring-gray-600"
                type="button">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19 8h-14" /><path d="M5 12h9" /><path d="M11 16h-6" /><path d="M15 16h6" /><path d="M18 13v6" /></svg>
                </button>
                <button data-tooltip-target="tooltip-link" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"></path></svg></button>
                <button data-tooltip-target="tooltip-save" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"></path></svg></button>
                <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3"><path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></button>
              </div>
            </aside>
          </div>
              <article
                v-for="space,pos in Store.spaces"
                @click='getSpace(space.identifier, true);' class="pb-6 cursor-pointer w-auto text-base rounded-lg ml-1">
                <li class='flex -ml-2 pl-3 rounded-lg items-center hover:bg-gray-100 dark:hover:bg-gray-700'>
                	
									<img v-if='space.identifier' :src="space.logo || 'https://nacholabraweb.000webhostapp.com/ico.png'" class="w-6 h-6">
									<a class="flex items-center p-2 text-base text-gray-900 transition duration-75 pl-4 group dark:text-gray-200">
										{{ space.identifier }}
									</a>
                </li>

            <p class="text-gray-900 line-clamp-2 dark:text-white">
              {{ space.desc }}
            </p>
        </article>
      </div>
    </section>
  </article>
</template>

<script setup>
  import { getSpace } from '@/stores/auth.js'
  // import Modal from '@/components/modal/NewModal.vue'
  import Store from '@/stores/store.js'
  import { ref } from 'vue'

  const showModal = ref(false)
</script>