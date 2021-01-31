<template>
  <!-- .container -->
  <div class="container-fluid">
      <!-- /.row -->

      <div class="row">
      <div class="col-12">
          <HMap/>
          <Index/>
      </div>
      </div>
      <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
import HMap from '@/components/HMap.vue';
import Index from './Index.vue'
export default {
  name: 'Layout',
  components: {HMap, 
               Index}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
