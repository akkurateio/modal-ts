<template>
  <transition name="akk-modal" @keydown.esc="hide">
    <div
        @click="onClickMask"
        v-if="show"
        :class="maskClasses"
    >
      <div class="akk-modal-wrapper">
        <component
            class="component"
            ref="refComponent"
            :is="modal"
            v-bind="args"
            @close="hide"
        ></component>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';

const CLOSE = 'close';
const Escape = 'Escape';

interface OptsProp {
  customMaskClasses?: string[];
  dialogClassName?: any;
  customStyles?: any;
  className?: any;
  closeOnClickMask?: boolean;
  closeOnEsc?: boolean;
  animation?: string;
  duration?: number;
  mask?: boolean;
}
interface Opts {
  customMaskClasses: string[];
  dialogClassName: any;
  customStyles: any;
  className: any;
  closeOnClickMask: boolean;
  closeOnEsc: boolean;
  animation: string;
  duration: number;
  mask: boolean;
}
@Component
export default class Modal extends Vue {
  @Prop({ default: {} })
  readonly opts!: OptsProp;

  @Prop() readonly modal: any;

  @Prop() readonly args: any;
  @Prop({ default: true }) initShow!: boolean;

  show = false;
  init = false;
  mounted() {
    this.onInit();
    if (this.initShow) {
      this.$nextTick().then(() => {
        this.show = true;
      });
    }
  }

  @Watch('show')
  onShow(value: boolean) {
    if (value) {
      if (this.init) {
        return;
      }
      this.init = true;
      document.addEventListener('keyup', this.keyBoardEv);
      setTimeout(() => {
        const component = this.$refs.refComponent as Vue;
        component.$el.addEventListener('click', (e: Event) =>
            e.stopPropagation()
        );
      }, 100);
    } else {
      document.removeEventListener('keyup', this.keyBoardEv);
    }
  }

  keyBoardEv(e: KeyboardEvent) {
    if (e.key !== Escape) {
      return;
    }
    this.onEsc();
  }

  get options(): Opts {
    return {
      customMaskClasses: [],
      dialogClassName: null,
      customStyles: null,
      className: null,
      closeOnClickMask: true,
      closeOnEsc: false,
      animation: 'zoom',
      duration: 300,
      mask: true,
      ...this.opts,
    };
  }

  get maskClasses(): string[] {
    const classes: string[] = []

    if (!this.options.mask) {
      classes.push('opacity-0')
    }

    if( this.options.customMaskClasses) {
      this.options.customMaskClasses.forEach((prop: string) => {
        classes.push(prop)
      })
    } else {
      classes.push('akk-modal-mask')
    }

    return classes
  }

  hide(args: any = false): void {
    this.show = false;
    setTimeout(() => {
      this.$emit(CLOSE, this.$el, args);
    }, 500);
  }

  onEsc(): void {
    if (this.show && this.options.closeOnEsc) {
      this.hide();
    }
  }

  onClickMask(): void {
    if (this.options.closeOnClickMask) {
      this.hide();
    }
  }

  @Emit('init')
  onInit() {
    return {
      isShow: () => this.show,
      open: () => {
        this.show = true;
      },
      hide: () => {
        this.show = false;
      },
    };
  }
}
</script>
<style scoped>
.akk-modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*display: table;*/
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}

/*.akk-modal-mask.hide {*/
/*    background-color: rgba(0, 0, 0, 0);*/
/*}*/

.akk-modal-wrapper {
  /*display: table-cell;*/
  /*vertical-align: middle;*/
}

.akk-modal-enter {
  opacity: 0;
}

.akk-modal-leave-active {
  opacity: 0;
}

.akk-modal-enter .component,
.akk-modal-leave-active .component {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.component {
  margin: 0 auto;
}
</style>