<template>
    <div>
        <ul class=" fixed top-0 w-full flex justify-between px-4 py-4 md:px-10">
            <!-- flex flex-row justify-between px-2 py-4  md:px-10  -->
            <div class="arrow">
                <NuxtLink to="/">
                        <svg class="w-8 h-8 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>
                </NuxtLink>
            </div>
            <div class="nav w-60 flex justify-between">
            <NuxtLink to="/about"><li>About Me</li></NuxtLink>
            <NuxtLink to="/work"><li>My work</li></NuxtLink>
            <NuxtLink to="/hobby"><li>My Hobby</li></NuxtLink>
            </div>
        </ul>
    </div>
</template>
<style scoped>
ul{
    background-color: rgba(255, 255, 255, 0.6);
    backdrop-filter: blur(2px);
}
svg{
    opacity: 0.2;
    transition: 400ms ease-in-out;
}
svg:hover{
    transition: 400ms ease-in-out;
    opacity: 1;
    transform: scale(1.3);
}

.nav > a.nuxt-link-active:after{
    border-bottom: solid 2px rgb(7, 97, 124) ;
    width:35%;
}
.nav > a::after{
    display: block;
    content: '';
    border-bottom: solid 2px rgb(7, 97, 124) ;
    width:0;
    transition: 500ms ease-in-out;
    margin:auto;
}
.nav > a:hover::after{
    width:70%;
}

</style>