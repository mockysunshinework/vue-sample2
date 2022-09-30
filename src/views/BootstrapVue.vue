<template>
    <div>
      <h1>BootstrapVueでフォームを作ってみよう！</h1>
      <b-container fluid>
        <!-- 3.「v-for」で、配列typesを呼び出します。 -->
        <b-row class="my-1" v-for="type in types" :key="type">
          <b-col sm="3">
            <!-- 4.「types」に保存されているlabelを表示 -->
            <label :for="`type-${type}`">Type <code>{{ type }}</code>:</label>
          </b-col>
          <b-col sm="5">
            <!-- 5.入力フォームのtypeごとに表示 -->
            <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </template>
  <script>
    export default {
      // 1.dataプロパティを定義します。
      data(){
        return{
          // 2.配列:typesを定義します。
          types:[
            'text',
            'number',
            'email',
            'password',
            'tel',
            'date',
            'time'
          ]
        }
      }
    }
  </script>