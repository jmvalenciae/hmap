<template>
<!-- .bienvenidos -->
<section class="bienvenidos">
<div id='map'>
            <div id="sidebar">

            </div>

            <header class="fixed" role="banner" id="encabezado">
                <a class="navbar-brand" href="https://www.facebook.com/SIMACUNAL/" target="_blank">
                    <img class="logosimac" src="../assets/images/SIMAC2.png"  width="200" height="90" alt="Logo del Sitio">
                </a>
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark barranav">
                    <!-- Brand -->
                    <div class="geoportal"><b><span>GEOPORTAL</span></b></div>

                    <!-- Toggler/collapsibe Button -->
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <!-- Navbar links -->
                    <div class="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="http://cdiac.manizales.unal.edu.co/sistema-alerta-temprana-test/MapaManizales/">
                                    <img onmouseover="this.src='../assets/images/inicio2.svg';" onmouseout="this.src='../assets/images/inicio.svg';" src="../assets/images/inicio.svg" class="img-fluid" width="35" height="35" alt="Logo del Sitio" title="Inicio">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://idea.manizales.unal.edu.co/reporte-meteorologico.html" target="_blank" title="Otros Reportes">
                                    <img onmouseover="this.src='../assets/images/meteorologico2.svg';" onmouseout="this.src='../assets/images/meteorologico.svg';" src="../assets/images/meteorologico.svg" width="35" height="35" alt="Logo del Sitio" title="Reporte Meteorológico">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://cdiac.manizales.unal.edu.co/gestion-riesgo/web/app.php/gestion_riesgo/generar_reporte/seleccionar_tipo_reporte" target="_blank" title="Reportes">
                                    <img onmouseover="this.src='../assets/images/generaReporte2.svg';" onmouseout="this.src='../assets/images/generaReporte.svg';" src="../assets/images/generaReporte.svg" width="35" height="35" alt="Logo del Sitio" title="Reportes">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a  class="nav-link" href="http://cdiac.manizales.unal.edu.co/gestion-riesgo/web/app.php/gestion_riesgo/generar_reporte/seleccionar_tipo_reporte_grafico" target="_blank" title="Reportes Gráficos">
                                    <img onmouseover="this.src='../assets/images/reporteGrafico2.svg';" onmouseout="this.src='../assets/images/reporteGrafico.svg';" src="../assets/images/reporteGrafico.svg" width="35" height="35" alt="Logo del Sitio" title="Reportes Gráficos">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://cdiac.manizales.unal.edu.co/indicadores/public/index" target="_blank" >
                                    <img onmouseover="this.src='../assets/images/cdiac2.svg';" onmouseout="this.src='../assets/images/cdiac.svg';" src="../assets/images/cdiac.svg" width="35" height="35" title="Datos Históricos">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://www.facebook.com/SIMACUNAL/" target="_blank" >
                                    <img onmouseover="this.src='../assets/images/facebook2.svg';" onmouseout="this.src='../assets/images/facebook.svg';" src="../assets/images/facebook.svg" width="35" height="35" alt="Logo del Sitio" title="Página de Facebook">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="https://twitter.com/simac_unal" target="_blank">
                                    <img onmouseover="this.src='../assets/images/twitter2.svg';" onmouseout="this.src='../assets/images/twitter.svg';" src="../assets/images/twitter.svg" width="35" height="35" alt="Logo del Sitio" title="Página de Twitter">
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="http://cdiac.manizales.unal.edu.co/gestion-riesgo/web/gestion_riesgo/solicitud_informacion/seleccionar_formulario" target="_blank">
                                    <img onmouseover="this.src='../assets/images/correo2.svg';" onmouseout="this.src='../assets/images/correo.svg';" src="../assets/images/correo.svg" width="35" height="35" alt="Logo del Sitio" title="Contáctanos">
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <div class="layer-list">
                <div>
                    <a class="nav-link" data-title="Estaciones Hidrometeorológicas" id="hidro" >
                        <div class="transition-rotate">
                            <img id="img_cloud" src="../assets/images/nube2.svg"
                                                width="46" height="46" style="cursor:pointer;"
                                                                       onclick="fillLayer('Hidrometeorológica'); colorChange('hidro');
                                                                       cambiar('img_cloud','../assets/images/nube2.svg','../assets/images/nube.svg');">
                        </div>
                    </a>
                </div>
                <div>
                    <a class="nav-link" data-title="Estaciones Acelerográficas" id="ace" >
                        <div class="transition-rotate">
                            <img id="img_house" src="../assets/images/casa2.svg"
                                                width="46" height="46" style="cursor:pointer;"
                                                                       onclick="fillLayer('Acelerográfica'); colorChange('ace');
                                                                       cambiar('img_house','../assets/images/casa2.svg','../assets/images/casa.svg');"
                                                                       >
                        </div>
                    </a>
                </div>
                <div>
                    <a class="nav-link" data-title="Estaciones Freatimétricas" id="frea">
                        <div class="transition-rotate">
                            <img id="img_floor" src="../assets/images/subterraneas2.png"
                                                width="46" height="46" style="cursor:pointer;"
                                                                       onclick="fillLayer('Freatimétrica'); colorChange('frea');
                                                                       cambiar('img_floor','../assets/images/subterraneas2.png','../assets/images/subterraneas.png');"
                                                                       >
                        </div>
                    </a>
                </div>
                <div>
                    <a class="nav-link" style="border-bottom:none" data-title="Estaciones de calidad del aire" id="caire">
                        <div class="transition-rotate">
                            <img id="img_air" src="../assets/images/caire2.png"
                                              width="46" height="46" style="cursor:pointer;"
                                                                     onclick="fillLayer('Calidad del aire');colorChange('caire');
                                                                     cambiar('img_air','../assets/images/caire2.png','../assets/images/caire.png')"
                                                                     >
                        </div>
                    </a>
                </div>
            </div>
        </div></section>
<!-- /.bienvenidos -->
</template>

<script>
export default {
    name: 'Index',
}
</script>

<style scoped>

.bienvenidos {
    color: #000;
    position: fixed;
    z-index: 1;
    top: 0;
    }

#map {
}

</style>
