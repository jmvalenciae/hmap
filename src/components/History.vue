<template>
  <!-- .container -->
  <div class="container">
      <div class="row">
          <div class="col-12">
              <h1 class="text-center text-info">Historic Map</h1>
          </div>
      </div>
      <!-- /.row -->

      <div class="row">
      <div class="col-12">
          <HMap/>
      </div>
      </div>
      <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
import HMap from './HMap.vue'
export default {
  name: 'History',
  components: {HMap}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
