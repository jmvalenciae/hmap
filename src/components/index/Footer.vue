<template>
<footer>
    <div class="button-position flex-container">
        <button type="button" class="btn btn-dark button-hide"
                @click="showModal(0)">
            Convenciones
        </button>
        <button type="button" class="btn btn-dark button-hide"
                @click="showModal(1)">
            Colaboradores
        </button>
    </div>
    <!------- Modal 1 Boton Convenciones ---------->
    <transition name="fade">
        <div class="overlay modal modal-dialog modal-dialog-centered modal-lg" 
            v-on:click="showConventions=showColaborators=false" v-if="showConventions">
            <div class="modal-content">

                <!-- Encabezado de la ventana -->
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" 
                            @click="showConventions = false;">&times;</button>
                </div>

                <!-- Cuerpo del modal -->
                <div class="modal-body">
                    <img class="img-fluid" src="@/assets/images/convencionesNuevo3.png" style="padding-left:100px; ">
                </div>
            </div>
        </div>
    </transition>
    <!------- Modal 2 Boton Convenciones ---------->
    <transition name="fade">
                <div class="overlay modal modal-dialog modal-xl"
                    v-on:click="showConventions=showColaborators=false" v-if="showColaborators">
                    <div class="modal-content">
                        <!-- Modal body -->
                        <div class="modal-body">
                            <br><br><br>
                            <div class="row">
                                <div class="col">
                                    <a href="http://unal.edu.co/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/unalLogo.png" width="150" height="110">
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="http://www.corpocaldas.gov.co/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logocorpocaldas.png" width="150" height="110">
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="http://www.manizales.gov.co/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logoalcaldia.png" width="150" height="110">
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="https://caldas.gov.co/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logogobernacion.png" width="150" height="110">
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="http://www.aguasdemanizales.com.co/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logoaguas.png" width="150" height="110">
                                    </a>
                                </div>
                            </div>
                            <br><br><br>
                            <div class="row">
                                <div class="col">
                                    <a href="http://www.chec.com.co/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logochec.png" width="150" height="110">
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="http://veoliacaldas.esmartserver.com/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logoemas.png" width="150" height="110">
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="http://froac.manizales.unal.edu.co/GAIA/index.php" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logogaia.png" width="150" height="110">
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="http://idea.manizales.unal.edu.co/gta/ingenieria_hidraulica/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logogta.png" width="150" height="110">
                                    </a>
                                </div>
                                <div class="col">
                                    <a href="http://www.gestiondelriesgomanizales.com/" target="_blank" class="nav-link colab-link">
                                        <img src="@/assets/images/logogestion.png" width="150" height="110">
                                    </a>
                                </div>
                            </div>
                            <br><br><br>
                        </div>
                    </div>
                </div>
            </transition>
</footer>
</template>

<script>
export default {
    data() {
        return {
            showConventions: false,
            showColaborators: false,
        }
    },

    methods: {
        showModal(opt){
            if(opt===0){
                this.showConventions = !this.showConventions;
                this.showColaborators = false;
            }
            else if(opt===1){
                this.showColaborators = !this.showColaborators;
                this.showConventions = false;
            }
        }
    }
}
</script>

<style>

.button-position{
    position: fixed;
    display: inline-block;
    bottom: 5%;
    right: 2%;
    transition: right 0.5s;
}

/**** modales ****/
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    display: block !important;
    transform: translate(-50%, -53%);
}

.modal-dialog{
    overflow-y: initial !important;
}

.modal-body{
    height: 80vh;
    width: 1000px;
    overflow-y: auto;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
.slide-enter-active,
.slide-leave-active {
    transition: transform .5s;
}

.slide-enter,
.slide-leave-to {
    transform: translate(-50%, 50%);
}

.colab-link{
    padding: 10px;
}
.colab-link:hover {
    border: #f50 solid 3px;
}
</style>
