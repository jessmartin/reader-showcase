<script lang="ts">
  import { limit } from 'firebase/firestore'
  import { Collection } from 'sveltefirets'
</script>

<Collection path="sources" queryConstraints={[limit(10)]} let:data={documents}>
  <p>Articles:</p>
  <ul>
    {#each documents as document}
      <li><a class="underline" href="/articles/{document.id}">{document.id}</a></li>
    {/each}
  </ul>
</Collection>
