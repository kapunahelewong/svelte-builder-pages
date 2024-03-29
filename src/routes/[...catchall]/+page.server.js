// src/routes/[...catchall]/+page.server.js
import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-svelte';

/** @type {import('../$types').PageServerLoad} */
export async function load(event) {
  // fetch your Builder content
  const content = await fetchOneEntry({
  	model: 'page',
  	apiKey: "fe07520489dd4741b861fe3c2e19b071",
  	options: getBuilderSearchParams(event.url.searchParams),
  	userAttributes: {
  		urlPath: event.url.pathname || '/'
  	}
  });

  return { content };
}
