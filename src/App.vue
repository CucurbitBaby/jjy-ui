<template>
  <div id="app">
    <jl-select :options="options" v-model="selected" :is-loading="isLoading" />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        },
        {
          value: '选项2',
          label: '双皮奶'
        },
        {
          value: '选项3',
          label: '蚵仔煎'
        },
        {
          value: '选项4',
          label: '龙须面'
        },
        {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      selected: '',
      isLoading: false
    }
  },
  created() {
    this.isLoading = true
    setTimeout(() => {
      this.isLoading = false
    }, 3000)
  }

}
</script>
