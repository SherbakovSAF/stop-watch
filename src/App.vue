<template>
  <div class="container">
    <div class="card__wrap">
      <article>
        <div class="stopWatchCard">
          <div class="stopWatchCard__contentWrap">
            <h1>2:40</h1>
            <hr>
            <div class="control__panel">
              <resetButton svgFill="#FF23"/>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import resetButton from './components/resetButton.vue';

export default {
  name: 'App',
  components: {
    resetButton
  }
}
</script>

<style>
html {
  background-color: #353638;
}
.container {
  max-width: 775px;
  margin: 0 auto;
}

.card__wrap {
  display: flex;
  flex-wrap: wrap;
}
</style>
