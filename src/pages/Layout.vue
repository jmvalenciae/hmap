<template>
  <!-- .container -->
  <div class="container-fluid">
      <!-- /.row -->

      <div class="row">
      <div class="col-12">
          <router-view> </router-view>
      </div>
      </div>
      <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
//import HMap from './HMap.vue';
//import Index from './Index.vue'
export default {
  
  name: 'Layout',
  mounted() {             
         this.$store.dispatch('loadStations').then(
          //response => { this.$router.push({ name: 'index' }); },
          //error    => { console.log('No fue posible cargar la información referente a las estaciones. '); }
          this.$router.push({ name: 'index' })
        );

      },  
  //components: {HMap, 
    //          Index}

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
