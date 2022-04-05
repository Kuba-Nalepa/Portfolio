<template>
    <div class="w-full">
        <Header/>
        <div class="background w-full h-screen">
            <div class="text-wrapper flex w-1/2 h-full items-center px-8 justify-center text-center text-3xl text-white">
                <p>
                    Playing the piano has always interested me since
                    I was little, but I started realising that goal
                    much later. I bought a piano, and started practising
                    everyday since october last year.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
    components: {
    Footer,
    Header
    },

}
</script>

<style scoped>
p{
    text-shadow: 2px 2px 1px black;
}
.background{
    background-image: url("@/assets/DarkPiano.jpg");
    background-size: cover;
    background-attachment: fixed;
    background-position: 70% 60%;
    background-repeat: no-repeat;
}

@media only screen and (max-width:768px)
{
    .text-wrapper{
        width:100%;
    }
    p{
        display: flex;
        justify-content: center;
        font-size: 2rem;
    }
}


@media only screen and (max-width:400px)
{
    .text-wrapper{
        width:100%;
    }
    p{
        display: flex;
        justify-content: center;
        font-size: 1.2rem;
    }
}

</style>
