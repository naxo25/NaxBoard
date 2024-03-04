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
                <button data-tooltip-target="tooltip-facebook" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button">
                  <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                    <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd">
                    </path>
                  </svg>
                </button>
                <button data-tooltip-target="tooltip-twitter" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M12.186 8.672 18.743.947h-2.927l-5.005 5.9-4.44-5.9H0l7.434 9.876-6.986 8.23h2.927l5.434-6.4 4.82 6.4H20L12.186 8.672Zm-2.267 2.671L8.544 9.515 3.2 2.42h2.2l4.312 5.719 1.375 1.828 5.731 7.613h-2.2l-4.699-6.237Z"></path></svg></button>
                <div id="tooltip-twitter" role="tooltip" class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip dark:bg-gray-700 opacity-0 invisible" data-popper-placement="top" style="position:absolute;inset:auto auto 0px 0px;margin:0px;transform:translate(615px, -6349px);"> Share on Twitter 
                  <div class="tooltip-arrow" data-popper-arrow="" style="position:absolute;left:0px;transform:translate(63px, 0px);"></div>
                </div>
                <button data-tooltip-target="tooltip-reddit" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_13676_82300)"><path d="M9 18C13.9706 18 18 13.9706 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18Z"></path><path d="M15.0004 8.99997C15.0004 8.27365 14.411 7.68418 13.6846 7.68418C13.3267 7.68418 13.011 7.82102 12.7794 8.0526C11.8846 7.41049 10.6425 6.98944 9.27412 6.93681L9.87412 4.12628L11.8215 4.53681C11.8425 5.03155 12.2531 5.43155 12.7583 5.43155C13.2741 5.43155 13.6952 5.01049 13.6952 4.4947C13.6952 3.97891 13.2741 3.55786 12.7583 3.55786C12.3899 3.55786 12.0741 3.76839 11.9267 4.08418L9.7478 3.62102C9.68464 3.61049 9.62148 3.62102 9.56885 3.6526C9.51622 3.68418 9.48464 3.73681 9.46359 3.79997L8.80043 6.93681C7.40043 6.97891 6.1478 7.38944 5.24254 8.0526C5.01096 7.83155 4.68464 7.68418 4.33727 7.68418C3.61096 7.68418 3.02148 8.27365 3.02148 8.99997C3.02148 9.53681 3.33727 9.98944 3.80043 10.2C3.77938 10.3263 3.76885 10.4631 3.76885 10.6C3.76885 12.621 6.11622 14.2526 9.02149 14.2526C11.9267 14.2526 14.2741 12.621 14.2741 10.6C14.2741 10.4631 14.2636 10.3368 14.2425 10.2105C14.6741 9.99997 15.0004 9.53681 15.0004 8.99997ZM6.00043 9.93681C6.00043 9.42102 6.42148 8.99997 6.93727 8.99997C7.45306 8.99997 7.87412 9.42102 7.87412 9.93681C7.87412 10.4526 7.45306 10.8737 6.93727 10.8737C6.42148 10.8737 6.00043 10.4526 6.00043 9.93681ZM11.232 12.4105C10.5899 13.0526 9.36885 13.0947 9.01096 13.0947C8.65306 13.0947 7.42148 13.0421 6.7899 12.4105C6.69517 12.3158 6.69517 12.1579 6.7899 12.0631C6.88464 11.9684 7.04254 11.9684 7.13727 12.0631C7.53727 12.4631 8.40043 12.6105 9.02149 12.6105C9.64254 12.6105 10.4952 12.4631 10.9057 12.0631C11.0004 11.9684 11.1583 11.9684 11.2531 12.0631C11.3267 12.1684 11.3267 12.3158 11.232 12.4105ZM11.0636 10.8737C10.5478 10.8737 10.1267 10.4526 10.1267 9.93681C10.1267 9.42102 10.5478 8.99997 11.0636 8.99997C11.5794 8.99997 12.0004 9.42102 12.0004 9.93681C12.0004 10.4526 11.5794 10.8737 11.0636 10.8737Z" fill="white"></path></g><defs><clipPath id="clip0_13676_82300"><rect width="18" height="18"></rect></clipPath></defs></svg></button>
                <div id="tooltip-reddit" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700" data-popper-placement="top" style="position:absolute;inset:auto auto 0px 0px;margin:0px;transform:translate(662px, -6349px);"> Post on Reddit 
                  <div class="tooltip-arrow" data-popper-arrow="" style="position:absolute;left:0px;transform:translate(57px, 0px);"></div>
                </div>
                <button data-tooltip-target="tooltip-link" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.013 7.962a3.519 3.519 0 0 0-4.975 0l-3.554 3.554a3.518 3.518 0 0 0 4.975 4.975l.461-.46m-.461-4.515a3.518 3.518 0 0 0 4.975 0l3.553-3.554a3.518 3.518 0 0 0-4.974-4.975L10.3 3.7"></path></svg></button>
                <div id="tooltip-link" role="tooltip" class="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip dark:bg-gray-700" data-popper-placement="top" style="position:absolute;inset:auto auto 0px 0px;margin:0px;transform:translate(719px, -6349px);"> Share link 
                  <div class="tooltip-arrow" data-popper-arrow="" style="position:absolute;left:0px;transform:translate(41px, 0px);"></div>
                </div>
                <button data-tooltip-target="tooltip-save" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 20"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m13 19-6-5-6 5V2a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17Z"></path></svg></button>
                <div id="tooltip-save" role="tooltip" class="inline-block absolute z-10 py-2 px-3 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 tooltip dark:bg-gray-700 opacity-0 invisible" data-popper-placement="top" style="position:absolute;inset:auto auto 0px 0px;margin:0px;transform:translate(739px, -6349px);"> Save this article 
                  <div class="tooltip-arrow" data-popper-arrow="" style="position:absolute;left:0px;transform:translate(62px, 0px);"></div>
                </div>
                <button id="dropdownMenuIconHorizontalButton" data-dropdown-toggle="dropdownDotsHorizontal" class="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500  rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50  dark:hover:bg-gray-700 dark:focus:ring-gray-600" type="button"><svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 3"><path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"></path></svg></button>
                <div id="dropdownDotsHorizontal" class="hidden z-10 w-36  rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" data-popper-placement="bottom" style="position:absolute;inset:0px auto auto 0px;margin:0px;transform:translate(874px, 491px);"><ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownMenuIconHorizontalButton"><li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Add to collection</a></li><li><a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Report</a></li></ul></div>
              </div>
            </aside>
          </div>
              <article
                v-for="item,pos in Store.tasks"
                v-show='TaskSelectPos == pos || !ModeTask'
                @click='toTask(item,pos); $router.push("/Task/ahz" + pos + "nqwenz")'
                class="pb-6 cursor-pointer text-base rounded-lg ml-1">
              <footer class="flex justify-between items-center mb-2">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
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

            <p class="text-gray-900 dark:text-white">
              {{ item.desc }}
            </p>

            <div class="flex hidden items-center mt-4 space-x-4">
              <button type="button"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
              <svg class="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
              </svg>
              Reply
            </button>
          </div>
        
        </article>
      </div>
    </section>
  </article>
</template>

<script setup>
  import Store from '../stores/store.js'
  import { ref } from 'vue'

  const TaskSelectPos = ref()
  const ModeTask = ref(false)

  const toTask = (task, pos) => {
    ModeTask.value = true
    Store.TaskSelectPos = pos
  }
</script>