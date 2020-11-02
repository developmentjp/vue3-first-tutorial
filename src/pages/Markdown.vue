<template>

    <div class="flex flex-wrap w-full">
        <h1 class="w-full text-center text-3xl m-4">MarkDown</h1>
        <section class="flex w-11/12 m-auto h-screen">
            <article class="w-1/2 border p-2">
                <textarea ref='markdownTextArea' class="w-full h-full" name="" id="" :value="text" @input='update'></textarea>
            </article>

            <article class="w-1/2 border bg-gray-400 p-2" v-html='markedText'>
            </article>
        </section>
    </div>
  
</template>

<script>
import marked from 'marked'
import useDebounce from '../utilities/Composition/useDebounce'
export default {
    data(){
        return {
            text: '',
            debounce:'',
        }
    },

    computed:{
        markedText(){
            return marked(this.text)
        },
    },

    methods:{
        update(e){
            const task= ()=>(this.text = e.target.value)
            this.debounce(task, 500)
        },
    },

    mounted(){
        this.debounce =  useDebounce()
        this.$refs.markdownTextArea.focus()
  },

}
</script>

<style>

</style>