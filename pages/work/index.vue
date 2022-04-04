<template>
    <div class="w-full h-screen">
        <Header/>
        <div class="background flex justify-end w-full h-screen ">
            <div class="text-wrapper flex flex-col w-1/2 h-full justify-center text-center text-3xl text-white font-serif">
                <button
                class="p-2"
                @click="scrollToStart">How it started</button>
                <button
                class="p-2"
                @click="scrollToDevelopment">Development</button>
                <button
                class="p-2"
                @click="scrollToPresent">Present days</button>
            </div>
        </div>
        <div ref="start" class="h-96">
            Div1
        </div>

        <div ref="development" class="h-96">
            Div2
        </div>

         <div ref="present" class="h-96">
            Div3
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
    methods:{
        scrollToStart(){
            this.$refs.start.scrollIntoView({
            behavior: 'smooth'
            })
        },

        scrollToDevelopment(){
            this.$refs.development.scrollIntoView({
            behavior: 'smooth'
            })
        },

        scrollToPresent(){
            this.$refs.present.scrollIntoView({
            behavior: 'smooth'
            })
        }
    }

}
</script>

<style scoped>
.background{
    background-image: url("@/assets/Workstation.jpg");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
}
.select{
    top:50%;
    left:20%;
}

@media only screen and (max-width:768px)
{
    .text-wrapper{
        width:100%;
    }
    p{
        display: flex;
        justify-content: center;
        font-size: 1.5rem;
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
        font-size: 0.8rem;
    }
}


</style>