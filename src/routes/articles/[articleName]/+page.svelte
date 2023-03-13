<script lang="ts">
  import { page } from '$app/stores'
  import type { PageData } from './$types'
  export let data: PageData
  $: doc = data
</script>

<h1>{doc.id}</h1>
{#each doc.jdom as jdom, pageNumber}
  <p>Page: {pageNumber}</p>
  <p class="overflow-hidden">{jdom.text}</p>
{/each}
