<template lang="pug">
form(@submit.prevent="submit")
  slot
</template>

<script>
export default {
  props: ['accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novaidate', 'target'],
  methods: {
    _serilize ($form) {
      return {
        multipart () {
          return new FormData($form)
        },
        urlEncoded () {
          let ret = ''
          for (let i = 0; i < $form.length; i++) {
            ret += `${encodeURIComponent(name)}=${encodeURIComponent($form[i].value)}${i === $form.length - 1 ? '' : '&'}`
          }
          return ret
        }
      }
    },
    submit (e) {
      const {action,  acceptCharset, autoComplete, enctype, method, name, novalidate, target} = this
      let fetchUrl = action
      const serilizer = this._serilize(e.target)
      const options = {
        headers: {
          "Content-Type": enctype || "application/x-www-form-urlencoded"
        },
        mode: "no-cors",
        credentials: 'include',
        methods: method
      }
      switch (method.toUpperCase()) {
        case 'GET':
          fetchUrl = serilizer.urlEncoded()
        default:
          if (options.headers["Content-Type"] === "application/x-www-form-urlencoded") {
            options.body = serilizer.urlEncoded()
          } else {
            options.body = serilizer.multipart()
          }
      }
      fetch(action, options)
        .then(res => this.$emit('response'))
        .catch(res => this.$emit('disconnect'))
    }
  }
}
</script>