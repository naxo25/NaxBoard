<template>
	<aside :class="showMenu ? '' : 'hidden'" id="sidebar" class="fixed top-0 left-0 z-20 flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width" aria-label="Sidebar">
		<div class="relative flex flex-col flex-1 min-h-0 pt-0 dark:bg-gray-800 dark:border-gray-700 lg:dark:bg-transparent">
			<div class="flex flex-col flex-1 pt-5 pb-28 overflow-y-auto scrollbar scrollbar-w-2 scrollbar-thumb-rounded-[0.1667rem] scrollbar-thumb-slate-200 scrollbar-track-gray-400 dark:scrollbar-thumb-slate-900 dark:scrollbar-track-gray-800">
				<div class="flex-1 px-3 space-y-1  divide-y divide-gray-200  dark:divide-gray-700">
					<ul class="pb-2 space-y-1">
						<li>
							<Button
								mode='ico'
								text='Tasks'
								@onclick='$router.push("/Tasks")'
							/>
						</li>
						<li>
							<!-- <button @click='showSpaces = !showSpaces' type="button" class="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700" aria-controls="dropdown-layouts" data-collapse-toggle="dropdown-layouts">
								<svg class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"></path>
								</svg>
								<span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Spaces</span>
								<svg sidebar-toggle-item="" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
							</button> -->
							<ul class="pb-2 space-y-0.5 lg:space-y-1.5">
								<li v-for="space in Store.spaces">
									<Button
										mode='image'
										:image="space.logo"
										:text='space.identifier'
										@onclick='getSpace(space.identifier, true), emit("showMenuClick");'
									/>
								</li>
							</ul>
						</li>
						<li>
							<a @click='reload' class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
								<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4" /><path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4" /></svg>
								<span class="ml-3" sidebar-toggle-item="">Actualizar aplicación</span>
							</a>
						</li>
						<li>
							<a @click='getNotifications()' class="flex items-center p-2 text-base text-gray-900 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
								<svg class="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path clip-rule="evenodd" fill-rule="evenodd" d="M8.34 1.804A1 1 0 019.32 1h1.36a1 1 0 01.98.804l.295 1.473c.497.144.971.342 1.416.587l1.25-.834a1 1 0 011.262.125l.962.962a1 1 0 01.125 1.262l-.834 1.25c.245.445.443.919.587 1.416l1.473.294a1 1 0 01.804.98v1.361a1 1 0 01-.804.98l-1.473.295a6.95 6.95 0 01-.587 1.416l.834 1.25a1 1 0 01-.125 1.262l-.962.962a1 1 0 01-1.262.125l-1.25-.834a6.953 6.953 0 01-1.416.587l-.294 1.473a1 1 0 01-.98.804H9.32a1 1 0 01-.98-.804l-.295-1.473a6.957 6.957 0 01-1.416-.587l-1.25.834a1 1 0 01-1.262-.125l-.962-.962a1 1 0 01-.125-1.262l.834-1.25a6.957 6.957 0 01-.587-1.416l-1.473-.294A1 1 0 011 10.68V9.32a1 1 0 01.804-.98l1.473-.295c.144-.497.342-.971.587-1.416l-.834-1.25a1 1 0 01.125-1.262l.962-.962A1 1 0 015.38 3.03l1.25.834a6.957 6.957 0 011.416-.587l.294-1.473zM13 10a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
								<span class="ml-3" sidebar-toggle-item="">Permisos</span></a>
						</li>
					</ul>
					<div class="pt-2 space-y-1 text-gray-900 dark:text-gray-200">
						<div class='flex items-center text-base p-1'>
							<button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button-2" aria-expanded="false" data-dropdown-toggle="dropdown-2">
								<span class="sr-only">Open user menu</span>
								<img class="w-8 h-8 rounded-full" :src="Store.user.image" alt="profile photo">
							</button>
							<span class='ml-2.5'>User</span>
						</div>

						<button @click='signOut' class="flex items-center p-2 text-base transition duration-75 rounded-lg hover:bg-gray-100 group  dark:hover:bg-gray-700">
							<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
							<span class="ml-3" sidebar-toggle-item="">SignOut</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</aside>
</template>

<script setup>
	import Button from '@/components/Button.vue'
  import { getSpace, signOut } from '@/stores/auth.js'
	import Store from '@/stores/store.js'
	import { ref } from 'vue'
	
	const props = defineProps({
	  showMenu: Boolean
	})

	const getNotifications = () => {
  	navigator.permissions.query({name: "clipboard-write"}).then(result => {
  		if (result.state == "granted" || result.state == "prompt") {
  			alert("Se ha dado acceso.")
  		} else {
  			alert('Es necesesario solicitar permisos.')
  		}
  	})
	}

	const showSpaces = ref(true)
	const emit = defineEmits(['showMenuClick']);
	const reload = () => location.reload();
</script>