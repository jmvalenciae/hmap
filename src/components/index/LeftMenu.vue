<template>
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
</template>

<script>
</script>
