<template>
  <svg :class="svgClass" v-on="$listeners">
    <use :xlink:href="iconName" class="svg-use"></use>
  </svg>
</template>

<script>
export default {
  props: {
    iconClass: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    iconName () {
      return '#icon-' + this.iconClass
    },
    svgClass () {
      return this.className ? 'svg-icon ' + this.className : 'svg-icon'
    }
  },
  components: {
  },
  created () {},
  mounted () {},
  methods: {}
}
</script>

<style scoped lang="less">
.svg-icon {
  width: 12px;
  height: 12px;
  fill: currentColor;
}
</style>
