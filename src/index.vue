<template lang="pug">
form(@submit.prevent="submit")
  slot
</template>

<script>
export default {
  props: ['accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novaidate', 'target'],
  methods: {
    submit (e) {
      const {action,  acceptCharset, autoComplete, enctype, method, name, novalidate, target} = this

      const form = new FormData()

      const options = {
        headers: {
        },
        methods: method,
        body: form
      }
      fetch(action, options)
        .then(res => this.$emit('response'))
        .catch(res => this.$emit('failed'))
    }
  }
}
</script>