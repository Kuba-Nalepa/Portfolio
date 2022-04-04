<template>
        <div>
            <div
            v-for="(comment,x) in commentArray"
            :key="x"
            class=" comment-section w-3/5 mx-auto flex flex-col bg-comment-color pl-4 my-2 border border-black  ">
            <div class=" flex flex-col justify-left">
                <h3 class="name text-base sm:text-xl flex justify-left font-bold">{{comment.name}}:</h3>
                <h6 class="email sm:flex justify-left sm:text-sm text-xs">({{comment.email}}) </h6>
            </div>
                <p class="comment w-3/4 break-all text-sm sm:text-base ml-4">{{comment.comment}}</p>
            </div>
        </div>
</template>


<script>
import {bus} from '../../plugins/main.js';
export default {
    name: 'CommentSection',
    data() {
        return {

            commentArray: [
            ]

        }
    },

    created() {
        bus.$on('submitComment', (event) => {
            this.commentArray.push( {
                                    //ten event to tak naprawde przeslane dane z CommentInputa
            name: event.name,
            comment: event.comment,
            email: event.email
            });
        });


    },

}
</script>
<style scoped>
 .comment-section{
     box-shadow: 5px 5px gray;
 }
</style>