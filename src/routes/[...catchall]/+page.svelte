<script>
  import { isPreviewing, Content } from "@builder.io/sdk-svelte";

  // this data comes from the function in `+page.server.js`, which runs on the server only
  export let data;

  // we want to show unpublished content when in preview mode.
  const canShowContent = data.content || isPreviewing();
</script>

<main>
  <h1>Welcome to SvelteKit</h1>
  <h2>Below is your Builder Content:</h2>
  {#if canShowContent}
    <div>page Title: {data.content?.data?.title || "Unpublished"}</div>
    <Content
      model="page"
      content={data.content}
      apiKey={"fe07520489dd4741b861fe3c2e19b071"}
    />
  {:else}
    Content Not Found
  {/if}
</main>
