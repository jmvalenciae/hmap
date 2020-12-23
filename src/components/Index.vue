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
        </div>
</section>
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
.layer-list a{
    position: absolute;
    display: block;
    left: 2px;
    top: 210px;
    width: 76px;
    opacity: 0.95;
    background-color: #E96729;
    border-radius: 6px;
    z-index: 1;
}

.layer-list a{
    border-bottom: 1px solid black;
}


.transition-rotate{
    -webkit-transition: -webkit-transform 0.5s;
    transition:transform 0.5s;
}
.transition-rotate:hover{
    -webkit-transform: rotate(-45deg);
    transform: rotate(45deg);
}

ul,ol{
    list-style: none;
}

.link-border{
    border-right: 0.5px solid gray;
    border-left: 0.5px solid gray;
    padding-right: 0px;
}

.col {
    padding-left: 0px;
    padding-right: 0px;
}

.layer-list a{
    position:relative;
    display: block;
}


a[data-title]:hover:after
{
    background:#343a40;
    border-radius:5px;
    color:#fff;
    content:attr(data-title);
    top:20%;
    left:100%;
    padding:5px 15px;
    position:absolute;
    z-index:98;
    white-space:nowrap;
}

.button-position{
    position: fixed;
    display: inline-block;
    bottom: 5%;
    right: 2%;
    transition: right 0.5s;
}

.second-position{
    position: fixed;
    display: inline-block;
    bottom: 5%;
    right: 33%;
    transition: left 0.5s;
}

.visible-table{
    display: block;
}

.hidden-table{
    display: none;
}

/*# sourceMappingURL=estilos.css.map */
</style>
