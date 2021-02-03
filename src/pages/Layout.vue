<template>
  <!-- .container -->
  <div class="container-fluid">
      <!-- /.row -->

      <div class="row">
      <div class="col-12">
          <HMap/>
          <router-view />
      </div>
      </div>
      <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
import HMap from '@/components/HMap.vue';
export default {
  name: 'Layout',
  components: {HMap},
  mounted() {
      /* Aqui se carga el componente index.vue desde el router */
      this.$router.push({name: 'index'});
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
