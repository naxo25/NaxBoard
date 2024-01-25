<template>
  <div class="grid place-content-center mt-10">
    <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div class="flex flex-col items-center justify-center mb-4">
        <h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Espacios</h5>
        <p class="text-sm mt-2 text-gray-500 truncate dark:text-gray-400">Selecciona tu área de trabajo</p>
      </div>
      <div class="flow-root" style='width: 350px; min-height: 145px;'>
        <ul v-if='!store.loader' role="list" class="divide-y border-gray-200">
          <li v-for='space in store.spaces' class="py-3 sm:py-4 cursor-pointer hover:bg-gray-50 px-4" @click='getSpace(space)'>
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <img class="w-10 h-10 rounded-full" :src="space.logo || '/ico.png'">
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {{ space.identifier }}
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  {{ space.countTasks }} Tareas pendientes
                </p>
              </div>
              <div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <!-- {{ space.countTasks }} Tareas pendientes -->
              </div>
            </div>
          </li>
          <li class="py-3 sm:py-4 cursor-pointer hover:bg-gray-50 px-4" @click="signOut">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <button class="p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"><svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
                </svg></button>
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate dark:text-white">
                  Ingresar
                </p>
                <p class="text-sm text-gray-500 truncate dark:text-gray-400">
                  Cambiar usuario
                </p>
              </div>
            </div>
          </li>
        </ul>

        <div v-else>
          <div wire:loading="" class="w-full mt-6 bg-white overflow-hidden bg-opacity-100 flex flex-col items-center justify-center"><div class="ease-linear rounded-full border-2 border-purple border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] h-14 w-14 mb-4 animate-spin"></div>
          <p class="text-sm text-gray-600">Loading...</p></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import store from '@/stores/store.js'
  import { getSpace, signOut } from '@/stores/auth.js'
</script>