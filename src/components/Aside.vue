<template>
  <aside class="xl:block" aria-labelledby="sidebar-label">
    <div class="xl:w-[336px] sticky top-6">

      <!-- Latest news -->
      <div class="mb-12">
        <h4 class="mb-4 text-sm font-bold text-gray-900 dark:text-white uppercase">Latest news</h4>

        <!-- News Item 1 -->
        <div class="mb-6 flex items-center">
          <a href="#" class="shrink-0"></a>
          <div>
            <h5 class="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900">Our first office</h5>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone changes.</p>
            <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read in 9 minutes </a>
          </div>
        </div>

        <!-- News Item 2 -->
        <div class="mb-6 flex items-center">
          <a href="#" class="shrink-0"></a>
          <div>
            <h5 class="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900">Enterprise Design tips</h5>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone changes.</p>
            <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read in 14 minutes </a>
          </div>
        </div>

        <!-- News Item 3 -->
        <div class="mb-6 flex items-center">
          <a href="#" class="shrink-0"></a>
          <div>
            <h5 class="mb-2 text-lg font-bold leading-tight dark:text-white text-gray-900">Partnered up with Google</h5>
            <p class="mb-2 text-gray-500 dark:text-gray-400">Over the past year, Volosoft has undergone changes.</p>
            <a href="#" class="inline-flex items-center font-medium underline underline-offset-4 text-primary-600 dark:text-primary-500 hover:no-underline"> Read in 9 minutes </a>
          </div>
        </div>
      </div>

      <!-- Flowbite News -->
      <div class="mb-8">
        <h4 class="mb-2 text-sm font-bold text-gray-900 dark:text-white uppercase">Flowbite News morning headlines</h4>
        <p class="mb-4 text-sm text-gray-500 dark:text-gray-400">Get all the stories you need-to-know from the most powerful name in news delivered first thing every morning to your inbox</p>
        <button type="button" data-modal-toggle="newsletter-modal" class="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 text-center w-full">Subscribe</button>
      </div>

      <!-- Ad placeholder -->
      <div>
        <a href="#" class="flex justify-center items-center mb-3 w-full h-48 bg-gray-100 rounded-lg dark:bg-gray-700">
          <img src="https://nacholabraweb.000webhostapp.com/ico.png">
        </a>
        <p class="text-sm text-gray-500 dark:text-gray-400">NaxBoard, aplicación creada por Ignacio Labra.</p>
        <a href='https://nacholabraweb.000webhostapp.com/' target='_blank' class="text-xs text-gray-400 uppercase dark:text-gray-500">NaxWeb</a>
      </div>
    </div>
  </aside>
</template>

<script setup>
  import { ref } from 'vue'
  const name = ref()
</script>