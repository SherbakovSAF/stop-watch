<template>
  <div class="container">
    <div class="card__wrap">
      <article v-for="stopWatch in stopWatchesState" :key="stopWatch.id">
        <div class="stopWatchCard">
          <div class="stopWatchCard__contentWrap">
            <h1>{{ stopWatch.timeDisplay ? stopWatch.timeDisplay : 0 }}</h1>
            <hr>
            <div class="control__panel">
              <startButton v-if="!stopWatch.isLaunch" svgFill='#fff' @click="startStopwatch(stopWatch)" />
              <pauseButton v-if="stopWatch.isLaunch" svgFill='#fff' @click="pauseStopwatch(stopWatch)" />
              <resetButton svgFill='#fff' @click="clearStopwatch(stopWatch)" />
            </div>
          </div>
        </div>
      </article>
      <article @click="addStopwatch">
        <div class="stopWatchCard">
          <div class="stopWatchCard__contentWrap addStopWatchWrap">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8.5" width="3" height="20" fill="#9E9E9E"/>
                <rect y="11.5" width="3" height="20" transform="rotate(-90 0 11.5)" fill="#9E9E9E"/>
            </svg>  
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
        addingTime: null,
        timeDisplay: null
      }, {
        id: 1,
        count: 0,
        isLaunch: false,
        addingTime: null,
        timeDisplay: null
      }, {
        id: 2,
        count: 0,
        isLaunch: false,
        addingTime: null,
        timeDisplay: null
      },]
    }
  },
  computed: {

  },
  methods: {
    startStopwatch(stopwatch) {
      stopwatch.isLaunch = true
      stopwatch.addingTime = setInterval(() => {
        stopwatch.count++
        stopwatch.timeDisplay = this.formatStopwatch(stopwatch)
      }, 1000)
    },
    pauseStopwatch(stopwatch) {
      stopwatch.isLaunch = false,
        clearInterval(stopwatch.addingTime)
    },
    clearStopwatch(stopwatch) {
      this.pauseStopwatch(stopwatch)
      stopwatch.count = 0
      stopwatch.timeDisplay = null
    },
    formatStopwatch(stopwatch) {
      const hours = Math.floor(stopwatch.count / 60 / 60);
      const minutes = Math.floor(stopwatch.count / 60) - (hours * 60);
      const seconds = stopwatch.count % 60
      const formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ];
      if (stopwatch.count >= 3600) {
        return formatted.join(':')
      }
      if (stopwatch.count >= 60) {
        return [formatted[1], formatted[2]].join(':')
      }
      if (stopwatch.count <= 60) {
        return formatted[2]
      }
    },
    addStopwatch(){
      const newStopwatch = {
        id: this.stopWatchesState.length,
        count: 0,
        isLaunch: false,
        addingTime: null,
        timeDisplay: null
      }
      this.stopWatchesState.push(newStopwatch)
    }
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

.card__wrap article {
  width: 225px;
  background-color: #696969;
  position: relative;
}

.card__wrap article h1 {
  font-family: 'Gotham Pro';
  text-align: center;
  color: var(--colorInActive);
  padding-top: 22px;
  padding-bottom: 20px;
  font-size: 18px;
  line-height: 1;
}

hr{
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  height: 1px;
  width: 100%;
  background-color: var(--colorInActive)
}


.control__panel {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
}

.control__panel svg:last-child {
  margin-left: 48px;
}

.addStopWatchWrap{
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
