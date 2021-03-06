<template>
    <div class="edit-site-text">
        <h3> {{ (cmp.type  === 'site-text') ? 'Text' : 'Button' }} editor </h3>
        <section class="edit-text flex column justify-center">
          <div v-if="cmp.type  === 'site-button'" class="link-pick">
            <h4> Attach an external link to the button </h4>
            <div class="input-container">
              <input type="text" v-model="cmp.content.href" placeholder="Insert a link">
              <i class="fas fa-link"></i>
            </div>
          </div>
          <div class="fonts-n-colors flex align-center">
            <select-box :data="fonts" type="fontFamily" v-model="cmp.style.fontFamily" placeholder="Pick a font..."> </select-box>
            <label> <i class="fas fa-paint-brush" :style="{color: cmp.style.color}"> </i> <input type="color" @input="setColor" v-model="cmp.style.color"> </label>
          </div>
          <div class="flex column justify-center align-center">
            <label> Font Size </label>
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
          <div class="flex column align-center">
              <label> Line Height </label>
              <el-slider @input="setLineHeight" v-model="lineHeight" :min="1" :max="20"></el-slider>
          </div>
          <div class="flex column align-center">
            <label> Letter Spacing </label>
            <el-slider @input="setLetterSpacing" v-model="letterSpacing" :max="50"></el-slider>
          </div>
          <div v-if="cmp.type  === 'site-button'" class="flex column align-center">
            <label> Round Edges </label>
            <el-slider @input="setBorderRadius" v-model="borderRadius" :max="50"></el-slider>
          </div>
          <div class="text-shadow">
            <select-box @input="setShadow" :data="shadows" type="shadow" placeholder="Add text shadow...">  </select-box>
          </div>
          <div class="flex column justify-center align-center">
            <h4> Background Color </h4>
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
      borderRadius: 0,
      isBold: false,
      isItalic: false,
      isUnderline: false,
      shadow: 'None',
      textAlign: 'center',
      fonts: ['Arial', 'Nunito Sans', 'Righteous', 'Titillium Web', 'Oswald', 'Bitter', 'Advent Pro', 'Josefin Slab', 'Russo One', 'Inknut Antiqua', 'Mr Dafoe'],
      shadows: ['None', 'Light', 'Medium', 'Heavy'],
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
    setColor(ev) {
      this.cmp.style.color = ev.target.value
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
      this.cmp.style.textShadow = shadow === 'None' ? 'none' : shadow === 'Light' ? '1px 1px 1px black' : shadow === 'Medium' ? '2px 2px 4px black' : '4px 4px 8px black';
      eventBus.$emit(UPDATE_SITE);
    },
    setLineHeight(height) {
      this.lineHeight = height;
      this.cmp.style.lineHeight = height / 4;
      eventBus.$emit(UPDATE_SITE);
    },
    setBorderRadius(radius) {
      this.borderRadius = radius;
      this.cmp.style.borderRadius = radius + 'px';
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
      if (this.cmp.style.borderRadius) this.borderRadius = parseInt(this.cmp.style.borderRadius);
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
        if (newVal.style.borderRadius) this.borderRadius = parseInt(newVal.style.borderRadius);
        this.textAlign = (newVal.style.textAlign) ? newVal.style.textAlign : '';
        this.isBold = (newVal.style.fontWeight === 'bold');
        this.isItalic = (newVal.style.fontStyle === 'italic');
        this.isUnderline = (newVal.style.textDecoration === 'underline');
      }
    }
  }
};
</script>