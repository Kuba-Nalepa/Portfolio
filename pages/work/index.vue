<template>
    <div class="w-full h-screen">
        <Header/>
        <div class="background flex justify-end w-full h-screen ">
            <div class="text-wrapper flex flex-col w-1/2 h-full justify-center text-center text-3xl text-white">
                <button
                class="bg-btn-color object-fill w-min-content mx-auto p-4 m-4 rounded-xl hover:bg-white hover:text-black"
                @click="scrollTo('start')">Development
                </button>

                 <button
                class="bg-btn-color  w-min-content whitespace-nowrap mx-auto p-4 m-4 rounded-xl hover:bg-white hover:text-black"
                @click="scrollTo('projects')">My projects
                </button>
            </div>
        </div>

        <div class="start w-full h-3/4 flex justify-end items-center bg-yellow-500 my-10 ">
            <div v-if="showWebpage" class="w-1/2 h-1/2 flex justify-center flex-col">
                <img  class="w-3/4 h-full flex mx-auto mt-8" src="@/assets/Webpage1.png" alt="">
                <div class="flex justify-center flex-row">
                    <button
                        @click="left"
                        class=" bg-black text-white rounded p-1 w-20 m-4 small">
                            Left
                        </button>

                        <button
                        @click="right"
                        class=" bg-black text-white rounded p-1 w-20 m-4 small">
                            Right
                        </button>
                </div>

            </div>

            <div class="text-center w-1/2  h-1/2 ">
                <p  class="text-2xl m-4">
                    It was so hard for me to get into programming, yet I did not give up. My first webpages
                    built for schoolwork were simple and almost without any design.
                </p>

                <button
                @click="showWebpage = !showWebpage"
                class=" bg-black text-white rounded p-1 w-24 m-4 small"
                type="button"
                value='Button'>
                Have a look
                </button>

            </div>


        </div>

        <div  class="projects w-full h-96 flex justify-center mx-auto bg-blue-500 my-10 " >
            <h1 class="text-4xl">My projects:</h1>
        </div>

        <Footer/>
    </div>
</template>

<!-- <h1>My projects:</h1>
            <div>
                <Project title="Title1" description="Desciption1"  image="m.png"/>
            </div> -->

<script setup>
import Project from '@/components/Project.vue';
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
export default {
    components: {
    Footer,
    Header,
    Project
    },
    data(){
        return{
            showWebpage: false,

        }
    },
    methods:{
        scrollTo(x){
            document.querySelector('.'+x).scrollIntoView({
            block: 'center',
            behavior: 'smooth'
            })
        },
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
    .start{
        height: auto;
        display: flex;
        flex-direction: column;
    }
    .small{
        font-size: 1rem;
        white-space: nowrap;
    }
    .start > div{
        width:100%;
        height: 50%;
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
    .small{
        font-size: 1rem;

    }
}


</style>