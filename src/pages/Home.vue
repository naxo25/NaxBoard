<script setup>
	import Tasks from '../components/Tasks.vue';
	import Aside from '../components/Aside.vue';
	// import Statistics from '../components/Statistics.vue';
	// import Card from '../components/Card.vue';
	// import Carrousel from '../components/Carrousel.vue';
</script>

<template>
	<div class="flex overflow-hidden">
		<!-- <div id="main-content" class="relative w-full max-w-screen-2xl mx-auto h-full overflow-y-auto bg-gray-50  min-h-screen"> -->
		<div id="main-content" class="relative w-full h-full overflow-y-auto lg:ml-64 pt-10 min-h-screen">
			<div class="px-2 pt-11 2xl:px-0">
				<div class="px-2">
					<div class="grid gap-4 xl:grid-cols-2 2xl:grid-cols-3">
						<!-- <Card /> -->
						<Tasks />
						<Aside />
					</div>
					<div class='grid grid-cols-1 my-4 xl:grid-cols-2 xl:gap-4'>
						<!-- <Carrousel /> -->
						<!-- <Statistics /> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>