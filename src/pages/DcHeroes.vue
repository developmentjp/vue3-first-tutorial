<template>
  <div class="m-auto">
    <h1 class="text-center">Dc Heroes {{heroesCount}}</h1>
      <ul>
        <li class='flex justify-between' v-for="(hero, index) in dcHeroes" :key="hero.name">
          <div>{{hero.name}} 
          </div> 
          <button @click="remove(index)">x</button>
        </li> 
      </ul>

      <form class='mt-10' @submit.prevent="addHero">
      <input class='border rounded p-1' v-model="newHero" placeholder="Type Hero Name Here" ref='newHeroRef'>
      <button class="border rounded bg-gradient-to-t from-red-700 to-pink-500 text-white p-1 ml-2" type="submit">Add Hero</button>
      </form>
  </div>
</template>

<script>
import {onMounted, ref, computed} from 'vue'
export default {
  setup(){
    const newHeroRef = ref('')
    const newHero= ref('')
    const dcHeroes= ref([
    {name: 'SuperGirl'},
    {name: 'Flash'}, 
    {name: 'Batman'},
    {name:  'Arrow'}, 
    {name: 'Superman'}
    ])
      
    onMounted(()=>{
      newHeroRef.value.focus()
    })

    function remove(index){
      dcHeroes.value = dcHeroes.value.filter((hero, i) => i !== index)
    }

    function addHero(){
      if(newHero.value !== ''){
        dcHeroes.value.push({name:newHero.value}); newHero.value =''; 
      }
      else{
        alert('Add Hero First!!!')
      }
    }

    const heroesCount = computed({
      get: ()=> dcHeroes.value.length 
    })

    return {dcHeroes, newHero, remove, addHero, newHeroRef, heroesCount}
  }
  // oOLD REGULAR METHODS
  // data(){
  //   return{
  //     newHero='',
  //     dcHeroes= [
  //     {name: 'SuperGirl'},
  //     {name: 'Flash'}, 
  //     {name: 'Batman'},
  //     {name:  'Arrow'}, 
  //     {name: 'Superman'}
  //     ]
  //   }
  // }
  // computed: {
  //   heroesCount(){
  //       return this.dcHeroes.length + ' heroes'
  //   },
  // },
  // methods:{
  //   addHero(){
  //     if(this.newHero !== ''){
  //       this.dcHeroes.push({name:this.newHero}); this.newHero =''; 
  //     }
  //     else{
  //       alert('Add Hero First!!!')
  //     }
  //   },
  //   // remove(index){
  //   //   this.dcHeroes = this.dcHeroes.filter((hero, i) => i !== index)
  //   // }
  // },
  
  // mounted(){
  //   this.$refs.newHeroRef.focus()
  // }

}
</script>

<style>

</style>