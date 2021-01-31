<template>
<header class="fixed" role="banner" id="encabezado">
    <a class="navbar-brand" href="https://www.facebook.com/SIMACUNAL/" target="_blank">
        <img class="logosimac" src="@/assets/images/SIMAC2.png"  width="200" height="90" alt="Logo del Sitio">
    </a>
    <nav class="navbar navbar-expand-lg bg-dark navbar-dark barranav" v-bind:class="{'navbarOpen': show}">
        <!-- Brand -->
        <div class="geoportal"><b><span>GEOPORTAL</span></b></div>

        <!-- Toggler/collapsibe Button -->
        <button class="navbar-toggler" type="button" 
                data-toggle="collapse" data-target="#collapsibleNavbar"
                v-on:click="toggleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Navbar links -->
        <div class="collapse navbar-collapse" id="collapsibleNavbar" v-bind:class="{'show': show}">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                    <a class="nav-link" href="http://cdiac.manizales.unal.edu.co/sistema-alerta-temprana-test/MapaManizales/">
                        <img :src="inicio" 
                             @mouseover="inicio = toggleImg('inicio2.svg')" 
                             @mouseleave="inicio = toggleImg('inicio.svg')"
                             class="img-fluid" width="35" height="35" alt="Logo del Sitio" title="Inicio"/>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://idea.manizales.unal.edu.co/reporte-meteorologico.html" target="_blank" title="Otros Reportes">
                        <img :src="meteorologico" 
                             @mouseover="meteorologico = toggleImg('meteorologico2.svg')" 
                             @mouseleave="meteorologico = toggleImg('meteorologico.svg')"
                             width="35" height="35" alt="Logo del Sitio" title="Reporte Meteorológico">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://cdiac.manizales.unal.edu.co/gestion-riesgo/web/app.php/gestion_riesgo/generar_reporte/seleccionar_tipo_reporte" target="_blank" title="Reportes">
                        <img :src="generaReporte"
                             @mouseover="generaReporte = toggleImg('generaReporte2.svg')" 
                             @mouseleave="generaReporte = toggleImg('generaReporte.svg')"
                             width="35" height="35" alt="Logo del Sitio" title="Reportes">
                    </a>
                </li>
                <li class="nav-item">
                    <a  class="nav-link" href="http://cdiac.manizales.unal.edu.co/gestion-riesgo/web/app.php/gestion_riesgo/generar_reporte/seleccionar_tipo_reporte_grafico" target="_blank" title="Reportes Gráficos">
                        <img :src="reporteGrafico" 
                             @mouseover= "reporteGrafico = toggleImg('reporteGrafico2.svg')" 
                             @mouseleave="reporteGrafico = toggleImg('reporteGrafico.svg')"
                             width="35" height="35" alt="Logo del Sitio" title="Reportes Gráficos">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://cdiac.manizales.unal.edu.co/indicadores/public/index" target="_blank" >
                        <img :src="cdiac" 
                             @mouseover="cdiac = toggleImg('cdiac2.svg')" 
                             @mouseleave="cdiac = toggleImg('cdiac.svg')"
                             width="35" height="35" title="Datos Históricos">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.facebook.com/SIMACUNAL/" target="_blank" >
                        <img :src="facebook" 
                             @mouseover="facebook = toggleImg('facebook2.svg')" 
                             @mouseleave="facebook = toggleImg('facebook.svg')"
                             width="35" height="35" alt="Logo del Sitio" title="Página de Facebook">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://twitter.com/simac_unal" target="_blank">
                        <img :src="twitter" 
                             @mouseover="twitter = toggleImg('twitter2.svg')" 
                             @mouseleave="twitter = toggleImg('twitter.svg')"
                             width="35" height="35" alt="Logo del Sitio" title="Página de Twitter">
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="http://cdiac.manizales.unal.edu.co/gestion-riesgo/web/gestion_riesgo/solicitud_informacion/seleccionar_formulario" target="_blank">
                        <img :src="correo" 
                             @mouseover="correo = toggleImg('correo2.svg')" 
                             @mouseleave="correo = toggleImg('correo.svg')"
                             width="35" height="35" alt="Logo del Sitio" title="Contáctanos">
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</header>
</template>

<script>
export default {
    data(){
        return {
            show: false,
            inicio:require('@/assets/images/inicio.svg'),
            meteorologico:require('@/assets/images/meteorologico.svg'), 
            generaReporte:require('@/assets/images/generaReporte.svg'), 
            reporteGrafico:require('@/assets/images/reporteGrafico.svg'), 
            cdiac:require('@/assets/images/cdiac.svg'), 
            facebook:require('@/assets/images/facebook.svg'), 
            twitter:require('@/assets/images/twitter.svg'),
            correo:require('@/assets/images/correo.svg')
        }
    },

    methods: {
        toggleNavbar(){
            this.show = !this.show;
        },
        toggleImg(img){
            return require('@/assets/images/'+img);
        }
    }
}
</script>

<style scoped>

.barranav{
    position:fixed;
    right:0;
    top:0;
}

.fixed{
    position:fixed;
    top:0;
    z-index: 1;
}

.logosimac{
    padding-left: 5px;
    padding-bottom: 10px;
    z-index: 0;
}

.geoportal b span{
    font-family: "Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue", Helvetica, Arial, sans-serif;;
    font-size: 30px;
    color: white;
}
</style>
