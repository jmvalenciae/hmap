<template>
<section>
<div>
    <div>
        <nav class="navbar nav-tabs navbar-expand-lg">
            <ul class="navbar-nav ml-auto">
                <li class="navbar-item"><a class="nav-link" href="#">Información</a></li>
                <li class="navbar-item"><a class="nav-link" href="#">Variables</a></li>
                <li class="navbar-item"><a class="nav-link" href="#">Galería</a></li>
            </ul>
        </nav>
    </div>
</div>
</section>
</template>
<script>
export default {
    name: "MapMenu",
    props: {
        station:Object 
    }
}
</script>
<style scoped>
.menu {
    position:relative;
}
li {
    margin: 10px
}

li:hover {
    background-color:#ff0;
}
</style>
