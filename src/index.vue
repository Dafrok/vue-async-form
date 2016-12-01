<template lang="pug">
form(@submit.prevent="submit")
  slot
</template>

<script>
export default {
  props: ['accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novaidate', 'target'],
  methods: {
    _serilize ($form) {
      const formData = new FormData()
      for (let i = 0; i < $form.length; i++) {
        formData.append(name, $form[i].value)
      }
      return formData
    }
    submit (e) {
      const {action,  acceptCharset, autoComplete, enctype, method, name, novalidate, target} = this
      const formData = this._serilize(e.target)
      const options = {
        headers: {
          "Content-Type": enctype || "application/x-www-form-urlencoded"
        },
        methods: method,
        body: formData
      }
      fetch(action, options)
        .then(res => this.$emit('response'))
        .catch(res => this.$emit('failed'))
    }
  }
}
</script>