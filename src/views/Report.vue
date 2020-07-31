<template>
  <div class="report">
    <Common />
    <ReportingProcess />
  </div>
</template>

<script>
// @ is an alias to /src
import Common from '@/components/Common.vue'
import ReportingProcess from '@/components/ReportingProcess.vue'

export default {
  name: 'report',
  components: {
    Common,
    ReportingProcess
  }
}
</script>