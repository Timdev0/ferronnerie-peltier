<template>
  <div class="image-dialog">
    <button class="image-dialog-trigger" type="button" @click="showDialog"><img :title="titlename" :alt="altname" class="image-dialog-thumb" ref="thumb" :src="thumb"/></button>
    <transition name="dialog" @enter="enter" @leave="leave">
      <div class="image-dialog-background" v-show="appearedDialog" ref="dialog">
        <button class="image-dialog-close" type="button" @click="hideDialog" aria-label="Close"></button><img :title="titlename" :alt="altname" class="image-dialog-animate" ref="animate" :class="{ loading: !loaded }" :src="loaded ? full : thumb"/><img :title="titlename" :alt="altname" class="image-dialog-full" ref="full" :src="appearedDialog &amp;&amp; full" :width="fullWidth" :height="fullHeight" @load="onLoadFull"/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'image-dialog',

  props: {
    thumb: String,
    full: String,
    fullWidth: Number,
    fullHeight: Number,
    altname: String,
    titlename: String,
  },

  data() {
    return {
      loaded: false,
      appearedDialog: false,
    };
  },

  methods: {
    showDialog() {
      this.appearedDialog = true;
    },

    hideDialog() {
      this.appearedDialog = false;
    },

    enter() {
      this.animateImage(
        this.$refs.thumb,
        this.$refs.full,
      );
    },

    leave() {
      this.animateImage(
        this.$refs.full,
        this.$refs.thumb,
      );
    },

    onLoadFull() {
      this.loaded = true;
    },

    animateImage(startEl, destEl) {
      const start = this.getBoundForDialog(startEl);
      this.setStart(start);

      this.$nextTick(() => {
        const dest = this.getBoundForDialog(destEl);
        this.setDestination(start, {
          top: dest.top,
          left: dest.left,
          width: dest.width || this.fullWidth,
          height: dest.height || this.fullHeight,
        });
      });
    },

    getBoundForDialog(el) {
      const bound = el.getBoundingClientRect();
      const dialog = this.$refs.dialog;
      return {
        top: bound.top + dialog.scrollTop,
        left: bound.left + dialog.scrollLeft,
        width: bound.width,
        height: bound.height,
      };
    },

    setStart(start) {
      const el = this.$refs.animate;
      el.style.left = `${start.left  }px`;
      el.style.top = `${start.top  }px`;
      el.style.width = `${start.width  }px`;
      el.style.height = `${start.height  }px`;
      el.style.transitionDuration = '0s';
      el.style.transform = '';
    },

    setDestination(start, dest) {
      const el = this.$refs.animate;
      el.style.transitionDuration = '';

      const translate = `translate(${dest.left - start.left}px, ${dest.top - start.top}px)`;
      const scale = `scale(${dest.width / start.width}, ${dest.height / start.height})`;
      el.style.transform = `${translate} ${scale}`;
    },
  },
}
</script>

<style scoped>
.image-dialog-trigger {
  margin: 0;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
}
.image-dialog-close {
  position: absolute;
  right: 20px;
  top: 20px;
  width: 60px;
  height: 60px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: 300ms ease-out;
  outline: none;
}
.image-dialog-close::before, .image-dialog-close::after {
  content: '';
  position: absolute;
  left: 50%;
  top: 50%;
  margin-top: -0.5px;
  margin-left: -20px;
  width: 40px;
  height: 1px;
  background-color: #000;
}
.image-dialog-close::before {
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}
.image-dialog-close::after {
  -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
}
.image-dialog-close:hover {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}
.image-dialog-background {
  overflow: auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 80px 40px;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  z-index: 1;
}
.image-dialog-animate {
  display: none;
  position: absolute;
  -webkit-transform-origin: left top;
          transform-origin: left top;
}
.image-dialog-animate.loading {
  display: block;
}
.dialog-enter-active, .dialog-leave-active {
  transition: background-color 300ms ease-out;
}
.dialog-enter, .dialog-leave-to {
  background-color: rgba(255, 255, 255, 0);
}
.dialog-enter-active .image-dialog-animate, .dialog-leave-active .image-dialog-animate {
  display: block;
  transition: -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
  transition: transform 300ms cubic-bezier(1, 0, 0.7, 1);
  transition: transform 300ms cubic-bezier(1, 0, 0.7, 1), -webkit-transform 300ms cubic-bezier(1, 0, 0.7, 1);
}
.dialog-enter-active .image-dialog-full, .dialog-leave-active .image-dialog-full {
  visibility: hidden;
}
.image-dialog-full{
  max-height: 100%;
  display: block;
  margin: 0 auto;
  max-width: 100%;
}

.image-dialog-thumb{
  max-width: 100%;
  height: auto;
  width: 100%;
}
</style>


