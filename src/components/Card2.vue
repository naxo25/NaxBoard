<template>
	<div class="text-gray-500 mt-8 sm:text-lg dark:text-gray-400">
		<ul class="block mb-3 space-y-4 sm:flex sm:space-y-0 lg:space-y-4 lg:block " id="testimonialTab" role="tablist">
			<li class="md:mr-2 lg:mr-0" role="presentation">
				<button class="p-4 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 bg-gray-100 dark:bg-gray-700" id="testimonial-1-tab" type="button" role="tab" aria-controls="testimonial-1" aria-selected="true">
					<figcaption class="space-y-2">
						<div class="flex space-x-2.5">
							<img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture">
							<div class="text-lg font-semibold text-gray-900 dark:text-white">Michael Gough</div>
						</div>
						<div class="text-sm font-light text-left text-gray-500 dark:text-gray-400">Web developer at Google</div>
					</figcaption>
				</button>
			</li>
			<li class="md:mr-2 lg:mr-0" role="presentation">
				<button class="p-4 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-900" id="testimonial-2-tab" type="button" role="tab" aria-controls="testimonial-2" aria-selected="false">
					<figcaption class="space-y-2">
						<div class="flex space-x-2.5">
							<img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture">
							<div class="text-lg font-semibold text-gray-900 dark:text-white">Bonnie Green</div>
						</div>
						<div class="text-sm font-light text-left text-gray-500 dark:text-gray-400">CEO at Facebook</div>
					</figcaption>
				</button>
			</li>
			<li class="md:mr-2 lg:mr-0" role="presentation">
				<button class="p-4 w-full rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 bg-white dark:bg-gray-900" id="testimonial-3-tab" type="button" role="tab" aria-controls="testimonial-3" aria-selected="false">
					<figcaption class="space-y-2">
						<div class="flex space-x-2.5">
							<img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="profile picture">
							<div class="text-lg font-semibold text-gray-900 dark:text-white">Lana Byrd</div>
						</div>
						<div class="text-sm font-light text-left text-gray-500 dark:text-gray-400">CTO at Microsoft</div>
					</figcaption>
				</button>
			</li>
		</ul>  
		<a class="inline-flex items-center pl-4 text-sm font-medium text-primary-600 hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700" href="#">
			View other 20 testimonials
			<svg class="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
		</a>
	</div>
</template>