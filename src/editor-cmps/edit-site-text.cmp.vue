<template>
    <div class="edit-site-text">
        <h3> {{ (cmp.type  === 'site-text') ? 'Text' : 'Button' }} editor </h3>
        <section class="edit-text">
          <div class="flex space-between align-center">
            <select-box :data="fonts" v-model="cmp.style.fontFamily" placeholder="Pick a font..."></select-box>
            <el-color-picker show-alpha @active-change="setColor" v-model="cmp.style.color"></el-color-picker>
          </div>
          <div class="flex space-between align-center">
            <label> Font size: </label>
            <el-slider @input="setFontSize" v-model="fontSize"> </el-slider>
          </div>
          <div class="align-controls flex">
            <button @click.stop="setAlign('left')" :class="{selected: textAlign === 'left'}"> <i class="fas fa-align-left"></i> </button>
            <button @click.stop="setAlign('center')" :class="{selected: textAlign === 'center'}"> <i class="fas fa-align-center"></i> </button>
            <button @click.stop="setAlign('right')" :class="{selected: textAlign === 'right'}"> <i class="fas fa-align-right"></i> </button>
          </div>
          <div class="font-style-controls flex">
            <button @click.stop="toggleBold" :class="{selected: isBold}"> <i class="fas fa-bold"></i> </button>
            <button @click.stop="toggleItalic" :class="{selected: isItalic}"> <i class="fas fa-italic"></i> </button>
            <button @click.stop="toggleUnderline" :class="{selected: isUnderline}"> <i class="fas fa-underline"></i> </button>
          </div>
          <div class="text-shadow">
            <select-box @input="setShadow" :data="shadows" placeholder="Add text shadow...">  </select-box>
          </div>
          <div class="flex column align-center">
              <label>Line height:</label>
              <el-slider @input="setLineHeight" v-model="lineHeight" :min="1" :max="20"></el-slider>
          </div>
          <div class="flex column align-center">
            <label>Letter spacing:</label>
            <el-slider @input="setLetterSpacing" v-model="letterSpacing" :max="50"></el-slider>
          </div>
          <div class="flex column justify-center align-center">
            <h4> Pick a background color </h4>
            <color-picker @input="setBgc" />
          </div>
        </section>
    </div>
</template>

<script>
import selectBox from '../custom-cmps/select-box.cmp';
import { eventBus, UPDATE_SITE } from "@/services/event-bus.service.js";
import colorPicker from '@/custom-cmps/color-picker.cmp';

export default {  
name: 'edit-site-text',
props: ['cmp'],
  data() {
    return {
      fontSize: 16,
      lineHeight: 6,
      letterSpacing: 0,
      isBold: false,
      isItalic: false,
      isUnderline: false,
      shadow: 'None',
      textAlign: 'center',
      fonts: ['Arial', 'Nunito Sans', 'Righteous', 'Oswald', 'Bitter', 'Advent Pro', 'Josefin Slab', 'Russo One', 'Inknut Antiqua', 'Mr Dafoe'],
      shadows: ['Light', 'Medium', 'Heavy'],
    };
  },
  computed: {
    text() {
      return this.cmp.content
    }
  },
  methods: {
    openAdvanced() {
      this.showAdvanced = !this.showAdvanced
    },
    setFontSize(fontSize) {
      this.fontSize = fontSize
      this.cmp.style.fontSize = (fontSize / 16) + 'rem';
      eventBus.$emit(UPDATE_SITE);
    },
    setColor(color) {
      this.cmp.style.color = color
      eventBus.$emit(UPDATE_SITE);
    },
    setAlign(align) {
      this.textAlign = align;
      this.cmp.style.textAlign = align
      eventBus.$emit(UPDATE_SITE);
    },
    toggleBold() {
      this.isBold = !this.isBold
      this.cmp.style.fontWeight = this.isBold ? 'bold' : 'normal';
      eventBus.$emit(UPDATE_SITE);
    },
    toggleItalic() {
      this.isItalic = !this.isItalic
      this.cmp.style.fontStyle = this.isItalic ? 'italic' : 'normal';
      eventBus.$emit(UPDATE_SITE);
    },
    toggleUnderline() {
      this.isUnderline = !this.isUnderline
      this.cmp.style.textDecoration = this.isUnderline ? 'underline' : 'none';
      eventBus.$emit(UPDATE_SITE);
    },
    setShadow(shadow) {
      this.shadow = shadow;
      this.cmp.style.textShadow = shadow === 'Light' ? '1px 1px 1px black' : shadow === 'Medium' ? '2px 2px 4px black' : '4px 4px 8px black';
      eventBus.$emit(UPDATE_SITE);
    },
    setLineHeight(height) {
      this.lineHeight = height;
      this.cmp.style.lineHeight = height / 4;
      eventBus.$emit(UPDATE_SITE);
    },
    setLetterSpacing(spacing) {
      this.letterSpacing = spacing;
      this.cmp.style.letterSpacing = spacing / 4 + 'px';
      eventBus.$emit(UPDATE_SITE);
    },
    setBgc(bgc) {
      this.cmp.style.background = bgc;
      eventBus.$emit(UPDATE_SITE);
    }
  },
  components: {
    selectBox,
    colorPicker
  },
  created() {
      if (this.cmp.style.fontSize) this.fontSize = parseFloat(this.cmp.style.fontSize) * 16;
      if (this.cmp.style.lineHeight) this.lineHeight = parseFloat(this.cmp.style.lineHeight) * 4;
      if (this.cmp.style.letterSpacing) this.letterSpacing = parseFloat(this.cmp.style.letterSpacing) * 4;
      this.textAlign = (this.cmp.style.textAlign) ? this.cmp.style.textAlign : '';
      this.isBold = (this.cmp.style.fontWeight === 'bold');
      this.isItalic = (this.cmp.style.fontStyle === 'italic');
      this.isUnderline = (this.cmp.style.textDecoration === 'underline');
  },
  watch: {
    cmp: {
      deep: true,
      handler(newVal , oldVal) {
        if (newVal.style.fontSize) this.fontSize = parseFloat(newVal.style.fontSize) * 16;
        if (newVal.style.lineHeight) this.lineHeight = parseFloat(newVal.style.lineHeight) * 4;
        if (newVal.style.letterSpacing) this.letterSpacing = parseFloat(newVal.style.letterSpacing) * 4;
        this.textAlign = (newVal.style.textAlign) ? newVal.style.textAlign : '';
        this.isBold = (newVal.style.fontWeight === 'bold');
        this.isItalic = (newVal.style.fontStyle === 'italic');
        this.isUnderline = (newVal.style.textDecoration === 'underline');
      }
    }
  }
};
</script>