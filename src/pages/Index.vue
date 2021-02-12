<template>
<!-- .bienvenidos -->
<div>

<section class="bienvenidos">
<div id="sidebar">

</div>

<IHeader />
<LeftMenu />
<IFooter />


</section>
</div>
<!-- /.bienvenidos -->
</template>

<script>
import IHeader from '@/components/index/Header.vue'
import LeftMenu from '@/components/index/LeftMenu.vue'
import IFooter from '@/components/index/Footer.vue'
export default {
    name: 'Index',

    components: {
        IHeader,
        LeftMenu,
        IFooter,
    },
}
</script>

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
