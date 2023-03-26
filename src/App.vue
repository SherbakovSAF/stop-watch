<template>
  <div class="container">
    <div class="card__wrap">
      <article v-for="stopWatch in stopWatchesState" :key="stopWatch.id">
        <div class="stopWatchCard">
          <div class="stopWatchCard__contentWrap">
            <h1>{{stopWatch.count}}</h1>
            <hr>
            <div class="control__panel">
              <startButton v-if="!stopWatch.isLaunch" svgFill='#fff' @click="startStopwatch(stopWatch)"/>
              <pauseButton v-if="stopWatch.isLaunch" svgFill='#fff' @click="pauseStopwatch(stopWatch)"/>  
              <resetButton  svgFill='#fff' @click="clearStopwatch(stopWatch)"/>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import resetButton from './components/resetButton.vue';
import pauseButton from './components/pauseButton.vue';
import startButton from './components/startButton.vue';

export default {
  name: 'App',
  components: {
    resetButton,
    pauseButton,
    startButton
  },
  data() {
    return {
      stopWatchesState: [{
        id: 0,
        count: 0,
        isLaunch: false,
        addingTime: null
      }, {
        id: 1,
        count: 0,
        isLaunch: false,
        addingTime: null
      }, {
        id: 2,
        count: 0,
        isLaunch: false,
        addingTime: null
      },]
    }
  },
  methods:{
    startStopwatch(stopwatch){
      stopwatch.isLaunch = true
      stopwatch.addingTime = setInterval(()=>{
          stopwatch.count ++
        },1000)
    },
    pauseStopwatch(stopwatch){
      stopwatch.isLaunch = false,
      clearInterval(stopwatch.addingTime)
    },
    clearStopwatch(stopwatch){
      this.pauseStopwatch(stopwatch)
      stopwatch.count = 0
    },
    }
}
</script>

<style>
:root {
  --colorActive: #FFF;
  --colorInActive: #9E9E9E;
}
 
html {
  background-color: #353638;

}

html * {
  margin: 0;
  padding: 0;
}

.container {
  max-width: 775px;
  margin: 0 auto;
  padding-top: 50px;
}

.card__wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.card__wrap article{
width: 225px;
background-color: #696969;
}

.card__wrap article h1 {

  
  font-family: 'Gotham Pro';
  text-align: center;
  color: var(--colorInActive);
  padding: 22px 0px 20px 0px;
  font-size: 22px;
}


.control__panel{
  display: flex;
  justify-content: center;
  padding: 20px 0px;
}

.control__panel svg:last-child{
  margin-left: 48px;
}
</style>
