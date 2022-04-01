<template>
    <div>
        <div class="w-full h-full ">
            <ul class="flex flex-row h-full text-center">

                <li class="about flex relative  w-1/3 h-screen">
                    <h1 class="flex items-center justify-center absolute h-screen w-full">
                        <NuxtLink class="text-3xl" to="about">About me</NuxtLink>
                    </h1>
                </li>

                <li class="progress flex relative w-1/3 h-screen">
                    <h1 class="flex items-center justify-center absolute h-screen w-full">
                        <NuxtLink class="text-3xl" to="work">My work</NuxtLink>
                    </h1>
                </li>

                <li class="hobby flex relative w-1/3 h-screen">
                    <h1 class="flex items-center justify-center absolute h-screen w-full">
                        <NuxtLink class="text-3xl" to="hobby">My Hobby</NuxtLink>
                    </h1>

                </li>
            </ul>
       </div>
    </div>
</template>

<style scoped>
.about{
    background-image: url("@/assets/About1.png");
    background-repeat: no-repeat;
    background-size: auto 100vh;
}
.progress {
    background-image: url("@/assets/Coding1.png");
    background-repeat: no-repeat;
    background-size: auto 100vh;
}
.hobby{
    background-image: url("@/assets/Piano.png");
    background-repeat: no-repeat;
    background-size: auto 100vh;
}
h1{
    color: white;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    backdrop-filter: blur(6px);
    transition: 600ms ease-out;
}
li{
    transition: 600ms ease-out;
}
a{
    text-shadow: 5px 5px 5px black, -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
}
h1:hover{
    backdrop-filter: none;
}
 li:hover{
    background-size: auto 110vh;
    transition: 600ms ease-out;
    width:50%;
 }



@media only screen and (max-width:768px)
{
    ul{
        display: flex;
        flex-direction: column;
        height:100vh;
    }
    li{
        width:100%;
        height:33vh;
    }
    li:hover{
        height: 50vh;
        width:100%;
    }
    .about{
        background-position:20% 50%;
    }
    .hobby{
        background-position: 0 50%;
    }
}
</style>