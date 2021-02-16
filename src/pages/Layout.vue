<template>
  <!-- .container -->
  <div class="container-fluid">
      <!-- /.row -->

      <div class="row">
      <div class="col-12">
          <router-view> </router-view>
          <!-- .bienvenidos -->
          <section class="bienvenidos">

          <IHeader />
          <LeftMenu />
          <IFooter />

          </section>
          <!-- .bienvenidos -->
      </div>
      </div>
      <!-- /.row -->
  </div>
  <!-- /.container -->
</template>

<script>
import IHeader from '@/components/index/Header.vue'
import LeftMenu from '@/components/index/LeftMenu.vue'
import IFooter from '@/components/index/Footer.vue'

export default {
  
  name: 'Layout',
  mounted() {             
         this.$store.dispatch('loadStations').then(
          //response => { this.$router.push({ name: 'index' }); },
          //error    => { console.log('No fue posible cargar la información referente a las estaciones. '); }
          this.$router.push({ name: 'index' })
        );

      },  
  components: {
      IHeader,
      LeftMenu,
      IFooter
      }

}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bienvenidos {
    color: #000;
    position: fixed;
    z-index: 1;
    top: 0;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column; 
    }
</style>
