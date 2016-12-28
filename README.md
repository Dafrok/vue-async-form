# vue-async-form

## Install

```
$ npm i vue-async-form
```

## Get Start

```vue
<template>
  <async-form action="/" method="POST" @response="handleResponse" @disconnect="handleDisconnect">
    <input name="foo">
    <button>SUBMIT</button>
  </async-form>
</template>

<script>
import asyncForm from 'vue-async-form'
export default {
  components: {
    asyncForm
  },
  methods: {
    handleResponse (res) {
      // console.log(res)
    },
    handleDisconnect (res) {
      // console.log(res)
    }
  }
}
</script>
```
