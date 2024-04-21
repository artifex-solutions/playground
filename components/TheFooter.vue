<template>
	<footer class="container">
		<div class="ph:flex-col flex items-center justify-between gap-4">
			<p>{{ copyrightText }}</p>

			<ul class="flex gap-3">
				<li v-for="{ link } of socialMedia" :key="link">
					<NuxtLink
						:to="link"
						rel="noopener noreferrer nofollow"
						target="_blank"
						class="flex h-6 w-6"
					>
					</NuxtLink>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script lang="ts" setup>
import { getCollectionData } from '#pruvious/client'

const { copyrightText, socialMedia } = await getCollectionData('settings')
</script>
