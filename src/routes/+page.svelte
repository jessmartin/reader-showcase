<script lang="ts">
  import { limit } from 'firebase/firestore'
  import { Collection } from 'sveltefirets'
</script>

<Collection path="sources" queryConstraints={[limit(10)]} let:data={documents}>
  Show the FireStore data:
  {#each documents as document}
    <div>{document.id}</div>
  {/each}
</Collection>
