<template>
  <div class="home">
    <Common />
    <Index />
  </div>
</template>

<script>
// @ is an alias to /src
import Common from '@/components/Common.vue'
import Index from '@/components/Index.vue'

export default {
  name: 'Home',
  components: {
    Common,
    Index
  }
}
</script>