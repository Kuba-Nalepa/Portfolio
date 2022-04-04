<template>
    <div class="w-full h-screen">
        <Header/>
        <div class="background w-full h-screen">
            <div class="flex flex-col w-1/2 h-3/5 mx-4 justify-end align-middle text-center text-3xl text-white font-serif">
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

.background{
    background-image: url("@/assets/DarkPiano.jpg");
    background-size: 100vw 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
}
</style>