<template>
    <div>
      <h2>{{ title }}</h2>
      <p>{{ text }}</p>
      <!-- 1.ボタンを作成し、クリックしたら1回カウントする。countを表示。 -->
      <p><button @click="increment">click</button>{{ count }}回</p>
    </div>
  </template>
  
  <script>
    export default {
      data(){
        return {
          title: "Body",
          text: "ボディ",
          // 2.初期値は0にセット
          count: 0
        }
      },
      // 2.メソッドを定義
      methods: {
        // 3.「increment」という関数を定義する。
        increment(){
          // 4.countを+1する。
          this.count += 1;
          // 4.「this.$emit」でカスタムイベント（自由に作成できるイベント）を定義。addイベントを定義し、引数にカウントした値を持たせる。
          this.$emit("add", this.count);
        }
      }
    }
  </script>
  
  <style scoped>
    /* Bodyコンポーネントのみに当たるCSS */
    /* Bodyコンポーネントは「パープル」にします。 */
    div{
      border: 2px solid #800080
    }
    h2{
      color: #800080
    }
    p{
      color: #800080
    }
  </style>