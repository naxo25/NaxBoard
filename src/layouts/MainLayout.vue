<template>
	<nav class="fixed z-30 w-full">
		<div class="px-3 py-3 lg:px-5 lg:pl-3">
			<div class="flex items-center justify-between">
				<div class="flex items-center justify-start">
					<button id="toggleSidebarMobile" aria-expanded="true" aria-controls="sidebar" class="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
						<svg id="toggleSidebarMobileHamburger" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
						<svg id="toggleSidebarMobileClose" class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
					</button>
					<a href="/" class="flex ml-2 md:mr-24">
						<img src="https://nacholabraweb.000webhostapp.com/ico.png" class="h-8 mr-3" alt="FlowBite Logo">
						<span class="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">NaxBoard</span>
					</a>

					<form action="#" method="GET" class="hidden lg:block lg:pl-3.5">
						<label for="topbar-search" class="sr-only">Search</label>
						<div class="relative mt-1 lg:w-96">
							<div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
								<svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
							</div>
							<input type="text" name="email" id="topbar-search" class="bg-gray-50 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500" placeholder="Search">
						</div>
					</form>
				</div>

				<div class="flex items-center">
					<div class="hidden mr-3 -mb-1 sm:block">
						<span></span>
					</div>

					<script async="" defer="" src="https://buttons.github.io/buttons.js"></script>

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
					<button type="button" data-dropdown-toggle="notification-dropdown" class="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
						<span class="sr-only">View notifications</span>
						<!-- Bell icon -->
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
					</button>
					<!-- Dropdown menu -->
					<div class="z-20 z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none  divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700" id="notification-dropdown" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1431px, 65px);" data-popper-placement="bottom">
						<div class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							Notifications
						</div>
						<div>
							<a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
								<div class="flex-shrink-0">
									<img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green.png" alt="Jese image">
									<div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 rounded-full bg-primary-700">
										<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path><path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path></svg>
									</div>
								</div>
								<div class="w-full pl-3">
									<div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
										New message from <span class="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: "Hey, what's up? All set for the presentation?"
									</div>
									<div class="text-xs font-medium text-primary-700 dark:text-primary-400">
										a few moments ago
									</div>
								</div>
							</a>
							<a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
								<div class="flex-shrink-0">
									<img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/jese-leos.png" alt="Jese image">
									<div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 rounded-full">
										<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z"></path></svg>
									</div>
								</div>
								<div class="w-full pl-3">
									<div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
										<span class="font-semibold text-gray-900 dark:text-white">Jese leos</span> and <span class="font-medium text-gray-900 dark:text-white">5 others</span> started following you.
									</div>
									<div class="text-xs font-medium text-primary-700 dark:text-primary-400">
										10 minutes ago
									</div>
								</div>
							</a>
							<a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
								<div class="flex-shrink-0">
									<img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/joseph-mcfall.png" alt="Joseph image">
									<div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 rounded-full">
										<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"></path></svg>
									</div>
								</div>
								<div class="w-full pl-3">
									<div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
										<span class="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span class="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.
									</div>
									<div class="text-xs font-medium text-primary-700 dark:text-primary-400">
										44 minutes ago
									</div>
								</div>
							</a>
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
										1 hour ago
									</div>
								</div>
							</a>
							<a href="#" class="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-600">
								<div class="flex-shrink-0">
									<img class="rounded-full w-11 h-11" src="https://flowbite-admin-dashboard.vercel.app/images/users/robert-brown.png" alt="Robert image">
									<div class="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-purple-500 rounded-full">
										<svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path></svg>
									</div>
								</div>
								<div class="w-full pl-3">
									<div class="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
										<span class="font-semibold text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the
										new design trend.
									</div>
									<div class="text-xs font-medium text-primary-700 dark:text-primary-400">
										3 hours ago
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
					<button type="button" data-dropdown-toggle="apps-dropdown" class="hidden p-2 text-gray-500 rounded-lg sm:flex hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700">
						<span class="sr-only">View notifications</span>
						<!-- Icon -->
						<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
					</button>
					<!-- Dropdown menu -->
					<div class="z-20 z-50 hidden max-w-sm my-4 overflow-hidden text-base list-none  divide-y divide-gray-100 rounded shadow-lg dark:bg-gray-700 dark:divide-gray-600" id="apps-dropdown" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate(1471px, 65px);" data-popper-placement="bottom">
						<div class="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							Apps
						</div>
						<div class="grid grid-cols-3 gap-4 p-4">
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Sales
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Users
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v7h-2l-1 2H8l-1-2H5V5z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Inbox
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Profile
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Settings
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"></path><path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Products
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Pricing
								</div>
							</a>
							<a href="#" class="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600">
								<svg class="mx-auto mb-1 text-gray-500 w-7 h-7 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm6.207.293a1 1 0 00-1.414 0l-6 6a1 1 0 101.414 1.414l6-6a1 1 0 000-1.414zM12.5 10a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clip-rule="evenodd"></path></svg>
								<div class="text-sm font-medium text-gray-900 dark:text-white">
									Billing
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
								<img class="w-8 h-8 rounded-full" src="data:image/png;base64,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" alt="nax photo">
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
	<AsideDesktop />
</template>

<script setup>
  import AsideDesktop from './AsideDesktop.vue'
</script>