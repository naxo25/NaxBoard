<template>
	<nav class="fixed z-30 w-full">
		<div class="px-3 py-3 lg:px-5 lg:pl-3">
			<div class="flex items-center justify-between">
				<div class="flex items-center justify-start">
					<button @click='showMenu = !showMenu' id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						<svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
						<svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</button>
					<a href="/" class="flex ml-2 md:mr-24">
						<img src="https://nacholabraweb.000webhostapp.com/ico.png" class="h-8 mr-3" alt="FlowBite Logo">
						<span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">NaxBoard</span>
					</a>
				</div>

				<div class="flex items-center">
					<div class="hidden mr-3 -mb-1 sm:block">
						<span></span>
					</div>

					<!-- Search mobile -->
					<button id="toggleSidebarMobileSearch" type="button" class="p-2 text-gray-500 rounded-lg lg:hidden hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						<span class="sr-only">Search</span>
						<!-- Search icon -->
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
					</button>

					<!-- Dropdown menu -->
					<div id="dropdownNavbar" class="z-10 hidden  divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
						<ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownNavbarButton">
							<li>
								<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
							</li>
							<li>
								<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
							</li>
							<li>
								<a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
							</li>
						</ul>
						<div class="py-2">
							<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 dark:hover:text-white">Sign out</a>
						</div>
					</div>

					<!-- Notifications -->
					<button @click='Notifications = !Notifications' type="button" data-dropdown-toggle="notification-dropdown" class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
						<span class="sr-only">View notifications</span>
						<!-- Bell icon -->
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
					</button>
					<!-- Dropdown menu -->
					<div v-show='Notifications' class="z-20 z-50 max-w-sm my-4 overflow-hidden text-base list-none  divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700" id="notification-dropdown" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1431px, 65px);" data-popper-placement="bottom">
						<div class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							Notifications
						</div>
						<div>
							<a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
								<div class="flex-shrink-0">
									<img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/leslie-livingston.png" alt="Leslie image">
									<div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-green-400 rounded-full">
										<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
									</div>
								</div>
								<div class="w-full pl-3">
									<div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
										<span class="font-semibold text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span class="font-medium text-primary-700 dark:text-primary-500">@bonnie.green</span> what do you say?
									</div>
									<div class="text-xs font-medium text-primary-700 dark:text-primary-400">
										44 minutes ago
									</div>
								</div>
							</a>
						</div>
						<a href="#" class="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline">
							<div class="inline-flex items-center">
								<svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path><path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path></svg>
								View all
							</div>
						</a>
					</div>

					<!-- Apps -->
					<button @click='Apps = !Apps' type="button" data-dropdown-toggle="apps-dropdown" class="hidden p-2 text-gray-500 rounded-lg sm:flex hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
						<span class="sr-only">View notifications</span>
						<!-- Icon -->
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
					</button>
					<!-- Dropdown menu -->
					<div v-show='Apps' class="z-20 z-50 max-w-sm my-4 overflow-hidden text-base list-none  divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600" id="apps-dropdown" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1471px, 65px);" data-popper-placement="bottom">
						<div class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							Apps
						</div>
						<div class="grid grid-cols-3 gap-4 p-4">
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Profile
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Users
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Settings
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Logout
								</div>
							</a>
						</div>
					</div>

					<button id="theme-toggle" data-tooltip-target="tooltip-toggle" type="button" class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
						<svg id="theme-toggle-dark-icon" class="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
						<svg id="theme-toggle-light-icon" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
					</button>
					<div id="tooltip-toggle" role="tooltip" class="absolute z-10 inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip opacity-0 invisible" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1439px, 63px);" data-popper-placement="bottom">
						Toggle dark mode
						<div class="tooltip-arrow" data-popper-arrow="" style="position: absolute; left: 0px; transform: translate(69px, 0px);"></div>
					</div>

					<!-- Profile -->
					<div class="flex items-center ml-3">
						<div>
							<button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
								<span class="sr-only">Open user menu</span>
								<img class="w-8 h-8 rounded-full" :src="Store.user.image" alt="profile photo">
							</button>
						</div>
						<!-- Dropdown menu -->
						<div class="z-50 hidden my-4 text-base list-none  divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-2" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1559px, 61px);" data-popper-placement="bottom">
							<div class="px-4 py-3" role="none">
								<p class="text-sm text-gray-900 dark:text-white" role="none">
									Neil Sims
								</p>
								<p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
									neil.sims@flowbite.com
								</p>
							</div>
							<ul class="py-1" role="none">
								<li>
									<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
								</li>
								<li>
									<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
								</li>
								<li>
									<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
								</li>
								<li>
									<a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</nav>

	<!-- Desktop -->
	<Menu :showMenu @showMenuClick='showMenu = false' />

	<main class='lg:mr-10'>
		<routerView/>
	</main>
</template>

<script setup>
	import Store from '@/stores/store.js'
	import { signOut } from '@/stores/auth'
  import Menu from './Menu.vue'
	import { ref } from 'vue'
	import Toastify from 'toastify-js'
	import "toastify-js/src/toastify.css"

	const showMenu = ref(false)
	const Notifications = ref(false)
	const Apps = ref(false)

	window.Notification = (msg) => Toastify({
	  	text: msg,
	  	className: "info",
	  	style: {
	  		background: '#000'
	  		// background: "linear-gradient(to right, #00b09b, #96c93d)",
	  	}
	  }).showToast();
</script>