<template lang="pug">
  #app
    form.wrapper
      .form-group.red
        input#name(type="text",required,v-model="book.name")
        label(for="name",data-content="UserName") UserName
      .form-group.red
        input#telno(type="text",required,v-model="book.telno")
        label(for="telno",data-content="TelNo") TelNo
      .form-group.red(style='width:30%')
        input#book-date(type="date",required,v-model="book.nowDate")
        label(for="book-date",data-content="Date") Date
      .form-group.red
        input#ticket(type="number",required,v-model="book.ticket")
        label(for="ticket",data-content="Ticket") Ticket
      .form-group.red(style='width:30%')
        button.tourBtn(type="submit") submit

</template>

<script>
  export default {
    name: 'Book',
    data() {
      return {
        book: {
          nowDate: '2019-05-15',
          name: '',
          ticket: null,
          telno: ''
        }
      }
    },
    components: {
      Datepicker
    }
  }
</script>


<style lang="sass" scoped>
  #app 
    width: 50%

  .tourBtn 
    width: 100%
    height: 40px
    font-size: 18px
    border-radius: 10px
    margin-top: 20px
    background-color: black
    color: #f1f1f1
    border: solid black
    cursor: pointer
    transition: 0.5s


  .tourBtn:hover 
    margin-top: 10px
    background-color: black
    color: #f1f1f1
    border: solid black
    box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.4)

  .wrapper
      align-items: center
      display: flex
      flex-direction: column
      justify-content: center

  $sans-serif: Roboto, Arial, sans-serif

  .form-group
      display: inline-block
      height: 3rem
      padding-top: 2rem

      input
          background: none
          border: none
          box-sizing: border-box
          display: block
          font-family: $sans-serif
          font-size: 1rem
          padding: 0.25rem 0.1rem
          width: 100%

      input:invalid
          box-shadow: none

      input:focus
          outline: none

      label
          display: inline-block
          font-family: $sans-serif
          font-size: 0
          pointer-events: none
          position: relative
          text-transform: uppercase
          width: 100%

      label::before
          content: attr(data-content)
          position: relative
          transition: all 0.2s ease
          will-change: font-size, top

      label::after
          bottom: 0.9rem
          content: ''
          height: 0.3rem
          left: 50%
          position: absolute
          transition: all 0.2s ease
          width: 0
          will-change: width, left

      label::before, input[required]:focus ~ label::before
          font-size: 0.75rem
          top: -3.25rem

      input:focus ~ label::after
          left: 0%
          width: 100%

      input:invalid ~ label::before
          font-size: 1rem
          top: -2rem

  // ---------- CONSTRUCTOR
  @mixin form-group($name, $lightcolor, $color, $darkcolor)
      .form-group.#{$name}
          input
              border-bottom: 0.1rem solid $color
              color: $darkcolor

          label::after
              background: $color

          label::before, input[required]:focus ~ label::before
              color: $lightcolor
          
          input:invalid ~ label::before
              color: $color

  // ---------- INCLUDE COMPONENTS
  $blue: #03A9F4
  $lightblue: lighten($blue, 15%)
  $darkblue: darken($blue, 15%)

  $red: #d32323
  $lightred: lighten($red, 15%)
  $darkred: darken($red, 15%)

  @include form-group("blue", $lightblue, $blue, $darkblue)
  @include form-group("red", $lightred, $red, $darkred)
</style>
