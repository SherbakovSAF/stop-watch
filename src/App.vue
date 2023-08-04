<template>
  <div class="container">
    <div class="card__wrap">
      <article v-for="stopWatch in stopWatchesState" :key="stopWatch.id">
        <div class="stopWatchCard">
          <div class="stopWatchCard__contentWrap">
            <h1 :style="stopWatch.isLaunch ? 'color: #FFF' : 'color: #9E9E9E'">
              {{ stopWatch.timeDisplay ? stopWatch.timeDisplay : 0 }}
            </h1>
            <hr :style="stopWatch.isLaunch ? 'background-color: #FFF' : 'background-color: #9E9E9E'">
            <div class="control__panel">
              <startButton v-if="!stopWatch.isLaunch" @click="startStopwatch(stopWatch)" />
              <pauseButton v-if="stopWatch.isLaunch" @click="pauseStopwatch(stopWatch)" />
              <resetButton :svgFill="stopWatch.isLaunch ? '#FFF' : '#9E9E9E'" @click="clearStopwatch(stopWatch)" />
            </div>
          </div>
        </div>
      </article>
      <article @click="addStopwatch">
        <div class="stopWatchCard">
          <div class="stopWatchCard__contentWrap addStopWatchWrap">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8.5" width="3" height="20" fill="#9E9E9E" />
              <rect y="11.5" width="3" height="20" transform="rotate(-90 0 11.5)" fill="#9E9E9E" />
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
      stopWatchesState: []
    }
  },
  methods: {
    startStopwatch(stopwatch) {
      stopwatch.isLaunch = true
      stopwatch.startTime = Date.now() - stopwatch.count
      stopwatch.interval = setInterval(()=> {
        stopwatch.count = (Date.now() - stopwatch.startTime)
        stopwatch.timeDisplay = this.getTimeDisplay(stopwatch.count)
      }, 1000)
      
    },
    pauseStopwatch(stopwatch) {
      stopwatch.isLaunch = false,
      stopwatch.startTime = null,
      clearInterval(stopwatch.interval)
    },
    clearStopwatch(stopwatch) {
      this.pauseStopwatch(stopwatch)
      stopwatch.count = 0
      stopwatch.timeDisplay = '00'
    },
    getTimeDisplay(pastTimeMs){ 
      const convertMsToSec = Math.floor(pastTimeMs / 1000) 
      const formatted = this.formatStopwatch(convertMsToSec) 
      if (convertMsToSec >= 3600) {
        return formatted.join(':')
      }
      if (convertMsToSec >= 60) {
        return [formatted[1], formatted[2]].join(':')
      }
      if (convertMsToSec <= 60) {
        return formatted[2]
      }
    },
    formatStopwatch(sec) {
      const hours = Math.floor(sec / 60 / 60);
      const minutes = Math.floor(sec / 60) - (hours * 60);
      const seconds = sec % 60
      const formatted = [
        hours.toString().padStart(2, '0'),
        minutes.toString().padStart(2, '0'),
        seconds.toString().padStart(2, '0')
      ];
      return formatted
    },
    addStopwatch() {
      const newStopwatch = {
        id: this.stopWatchesState.length,
        isLaunch: false,
        count: 0,
        startTime: null,
        timeDisplay: '00',
        interval: null,
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

@font-face {
  font-family: 'Gotham Pro';
  src: url('~@/assets/font/GothamPro.eot');
  src: local('Gotham Pro'), local('GothamPro'),
    url('~@/assets/font/GothamPro.eot') format('embedded-opentype'),
    url('~@/assets/font/GothamPro.woff') format('woff'),
    url('~@/assets/font/GothamPro.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

.container {
  max-width: 775px;
  margin: 0 auto;
  padding-top: 50px;
}

.card__wrap {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  grid-row-gap: 45px;
}

@media (min-width: 0px) {
  .card__wrap {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) {
  .card__wrap {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card__wrap {
    grid-template-columns: repeat(3, 1fr);
    ;
  }
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

hr {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  height: 1px;
  width: 100%;
}


.control__panel {
  display: flex;
  justify-content: center;
  padding: 20px 0px;
}


.control__panel *{
cursor: pointer;
}

.control__panel svg:last-child {
  margin-left: 48px;
}

.addStopWatchWrap {
  display: flex;
  justify-content: center;
  cursor: pointer;
  padding-top: 50px;
  padding-bottom: 50px;
}
</style>
