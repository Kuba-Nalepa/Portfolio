<template>
    <div>
        <Header/>
        <div class="main w-4/5 m-4 flex flex-row justify-center shadow mx-auto border border-black mb-14 mt-20 ">
            <img class="w-1/3" src="@/assets/Me.png" alt="">
            <div class=" ">

                <h1 class="text-3xl font-bold text-center pt-6 ">
                Hello there!
                </h1>

                <p class="m-6 text-xl">
                My name is Jakub Nalepa, my age is 21. <br> I've graduated
                <a class=" font-medium hover:text-blue-900" href="https://zs1.bochnia.pl/" target="blank">Zespół szkół nr.1 W Bochni</a>
                at IT technician profile.<br>
                Currently I'm unemployed, hovewer, I keep making new web pages and learning more and more
                about JavaScript, HTML and CSS . So far I've done a few single-page projects for particular
                peaople as freelancing.
                <br>In February this year I started learning JavaScript framework called <i>Vue.js</i>
                </p>
            </div>
       </div>

        <div class="bottom shadow w-3/5  mx-auto border border-black mb-14 ">
                <h1 class="text-3xl font-bold text-center">
                    Willing to work for You!
                </h1>
                <p class="m-6 text-xl">
                    I am keen on creating websites as front-end developer. I'm full of optimism that every day I
                    spend learning from new sources I'm being better than yesterday.<br>
                    If You are interested to collaborate with me. You can contact me down below by any social
                    media.
                </p>
        </div>
        <CommentInput/>
        <!-- I haven't got data base for those components :'(  -->
        <CommentSection/>
       <Footer/>
    </div>

</template>
<script>

import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import CommentInput from '@/components/Comments/CommentInput.vue';
import CommentSection from '@/components/Comments/CommentSection.vue';


export default {
    components: { Footer, Header, CommentInput, CommentSection }
}
</script>
<style scoped>
.shadow{
    box-shadow: 5px 5px gray;
}


    @media only screen and (max-width:975px)
    {
        .main{
            display:flex;
            flex-direction:column;
        }
        img{
             width:50%;
             display: flex;
             justify-content: center;
             margin: auto;
             border: 1px solid black ;
             border-top: none;
        }
    }

    @media only screen and (max-width:450px)
    {
        .main{
            display:flex;
            flex-direction: column;
        }
        img{
            width:100%;
        }
        p{
            font-size:small;
            margin:5px;
        }
    }
</style>
