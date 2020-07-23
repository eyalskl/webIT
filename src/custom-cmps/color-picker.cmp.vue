<template>
  <div class="color-picker flex column">
      <div class="colors-container flex wrap justify-center">
        <span @click.stop="setColor('transparent')" title="Transparent" class="show-more"> <i class="far fa-times-circle"></i> </span>
        <span :class="{picked : color === pickedColor}" v-for="(color, idx) in colors" :key="idx" @click.stop="setColor(color)" :style="{backgroundColor : color}"> </span>
        <span @click.stop="showMore" title="More colors..." class="show-more"> <i class="far fa-arrow-alt-circle-right"></i> </span>
      </div>
  </div>
</template>

<script>

var colors = require('nice-color-palettes/1000');
const _ = require('lodash')

export default {
    data() {
        return {
            startFrom: 0,
            colors: _.flatten(colors).slice(this.startFrom, 26),
            pickedColor: '69d2e7'
        }
    },
    methods: {
        setColor(color) {
            this.pickedColor = color
            this.$emit('input', color)
        },
        showMore() {
            if (this.startFrom > 981) this.startFrom = 0;
            else this.startFrom += 26;
            this.colors = _.flatten(colors).slice(this.startFrom, this.startFrom + 26)
        }
    },
}
</script>

<style scoped>
    .color-picker {
        padding: .75rem 0rem;
    }
    .color-picker span {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        color: white;
        font-weight: bold;
        margin: 0.1rem;
        cursor: pointer;
        border-radius: 50%;
        width: 2rem;
        height: 2rem;
        transition: .2s;
    }
    .color-picker span:hover {
        opacity: .9;
        transform: scale(1.2);
        z-index: 1;
    }
    .color-picker span.show-more {
        color: #0076DF;
        font-size: 2.1rem;
    }
    .picked::after {
        content: '✔';
    }
</style>