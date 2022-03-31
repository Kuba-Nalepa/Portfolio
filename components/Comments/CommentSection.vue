<template>
        <div>
            <div
            v-for="(comment,x) in commentArray"
            :key="x"
            class=" w-3/4 mx-auto flex flex-col bg-my-color pl-4 border-4 border-white ">
            <div class="flex flex-row justify-left">
                <h3 class=" text-2xl flex justify-left">{{comment.name}}</h3>
                <h6 class="text-xl flex justify-left ml-4 ">{{comment.email}} </h6>
            </div>
                <p class="w-3/4 break-all text-2xl ml-4">{{comment.comment}}</p>
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
                {
                    comment: '',
                    name: '',
                    email: ''
                }
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