<template>
  <div id="app">
    <!-- BootstrapVueの表示 -->
    <!-- スラッシュを入れることで、タグの省略表記になります。<BootstrapVue></BootstrapVue>と同じです。 -->
    <BootstrapVue/>
  </div>
</template>

<script>
  // 「BootstrapVue.vue」のインポート
  import BootstrapVue from './views/BootstrapVue.vue'

  export default {
    name: 'app',
    components: {
      // コンポーネントの読み込み
      BootstrapVue
    }
  }
</script>