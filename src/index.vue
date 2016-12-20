<template lang="pug">
form(@submit.prevent="submit")
  slot
</template>

<script>
export default {
  props: ['accept-charset', 'action', 'autocomplete', 'enctype', 'method', 'name', 'novaidate', 'target'],
  methods: {
    _getGlobalFormItems (name) {
      return document.querySelectorAll(`[form=${name}]:not(form[name=${name}] *)`)
    },
    _serilize ($form, globalFormItems) {
      return {
        multipart () {
          const formData = new FormData($form)
          for (let i = 0; i < globalFormItems.length; i++) {
            formData.append(globalFormItems[i].name, globalFormItems[i].value)
          }
          return formData
        },
        urlEncoded () {
          let ret = ''
          for (let i = 0; i < $form.length; i++) {
            ret += `${encodeURIComponent($form[i].name)}=${encodeURIComponent($form[i].value)}`
          }
          for (let i = 0; i < globalFormItems.length; i++) {
            ret += `${encodeURIComponent(globalFormItems[i].name)}=${encodeURIComponent(globalFormItems[i].value)}`
          }
          return ret
        }
      }
    },
    submit (e) {
      const {action,  acceptCharset, autoComplete, enctype, method, name, novalidate, target} = this
      let fetchUrl = action
      const serilizer = this._serilize(e.target, this._getGlobalFormItems(name))
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
          if (options.headers["Content-Type"] === `application/x-www-form-urlencoded${acceptCharset ? ';' + acceptCharset : ''}`) {
            options.body = serilizer.urlEncoded()
          } else {
            options.body = serilizer.multipart()
          }
      }
      fetch(fetchUrl, options)
        .then(res => this.$emit('response'))
        .catch(res => this.$emit('disconnect'))
    }
  }
}
</script>