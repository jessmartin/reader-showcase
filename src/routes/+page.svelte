<script lang="ts">
  import { limit, orderBy } from 'firebase/firestore'
  import { Collection } from 'sveltefirets'
  import type { IMessage } from '$lib/message.interface'

  console.log('Hello')
</script>

<Collection
  path="messages"
  queryConstraints={[limit(10), orderBy('updatedAt', 'desc')]}
  let:data={messages}
>
  Show the FireStore data:
  {#each messages as message}
    <div>{message.text}</div>
  {/each}
</Collection>
