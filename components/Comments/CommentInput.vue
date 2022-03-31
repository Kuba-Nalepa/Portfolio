<template>
    <div>
        <div class="section my-8">

            <div class=" com_article w-3/4 flex justify-center flex-col p-3 m-auto border border-black ">
                <div class="flex justify-left font-bold mb-2">
                    Leave a reply!
                </div>

                        <label for="comment">Write your comment</label>
                        <textarea
                        class=" border border-black"
                        cols="4"
                        rows="2"
                        required
                        v-model="comment"></textarea>

                <div class=" grid grid-cols-2 gap-x-10 mt-4">
                    <div>
                        <label for="name">Your name</label>
                        <input
                        class="w-full border border-black"
                        type="text"
                        required
                        placeholder="Write your name here"
                        v-model="name">
                    </div>

                    <div>
                        <label for="email">Your Email</label>
                        <input class="w-full border border-black"
                        type="text"
                        required
                        placeholder="Write your email here"
                        v-model="email">
                    </div>

                </div>

                <div id="button">
                    <button
                    @click="handleCommentBtn"
                    class=" w-min mt-4 p-2 bg-black text-white">
                    Submit
                    </button>
                        <div class="error">{{this.error}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {bus} from '../../plugins/main.js';
export default {

    data() {
        return {
            comment: '',
            name: '',
            email: '',
            error:  ''
        }
    },
    methods: {
        handleCommentBtn() {
            if(this.name != '' && this.email != '' && this.comment != '') {
                bus.$emit('submitComment',{
                    comment: this.$data.comment,
                    name: this.$data.name,
                    email: this.$data.email
                });
                this.error=''
            }

            else{
                this.error = 'To submit your comment, all fields are required!'
            }
        }
    }
}
</script>



<style scoped>
.com_article
{
    box-shadow: 5px 5px gray;
}
@media only screen and (max-width:768px)
{
    .section{
        width:75%;
        border: 1px black;
        display: flex;
        justify-content: center;
        margin-left:auto;
        margin-right: auto;
        margin-top: 32px;
        margin-bottom: 32px;
    }
    .section > .com_article
    {
        width:100%;
        box-shadow: 5px 5px gray;
    }
}
.error{
    color: red;
    font-weight: bold;
    padding-top:0.5rem;
}
</style>