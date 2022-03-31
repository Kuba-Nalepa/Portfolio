<template>
    <div>
        <Header/>
        <div class=" main w-4/5 m-4 flex flex-row justify-center mx-auto border border-black">
            <img class="w-1/3" src="@/assets/Me.png" alt="">
            <div class=" bg-blue-200 ">

                <h1 class=" text-3xl font-bold text-center ">
                Hello there!
                </h1>

                <p class="">
                My name is Jakub Nalepa, my age is 21. <br> I've graduated
                <a class=" font-medium hover:text-blue-900" href="https://zs1.bochnia.pl/" target="blank">Zespół szkół nr.1 W Bochni</a>
                at IT technician profile.<br>
                Currently I'm working as front-end developer,
                making new web pages and learning more and more about JavaScript, HTML and CSS . So far I've done
                a few single-page projects for particular peaople as freelancing.
                <br>In February this year I started learning JavaScript framework called <i>Vue.js</i>
                </p>
            </div>
       </div>

        <div class="">
                <h1 class="">
                    Willing to work for You!
                </h1>
                <p class="">
                    I am keen on creating websites as front-end developer. I'm full of optimism that every day I
                    spend learning from new sources and being better than yesterday.<br>
                    If You are interested to collaborate with me. You can contact me down below by any social
                    media, or my E-mail:
                </p>
                svg
        </div>

       <Footer/>
    </div>

</template>
<script>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';

export default {
    components: { Footer, Header }
}
</script>
<style scoped>
.main{
    box-shadow: 5px 5px gray;
}

    @media only screen and (max-width:768px)
    {
        .main{
            display:flex;
            flex-direction: column;
        }
        img{
            width:100%;
        }
    }
</style>
