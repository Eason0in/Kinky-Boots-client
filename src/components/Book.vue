<template>
  <div id="app">
    <div class="search-box">
      <input class="search-txt" type="name" placeholder="HOME">
      <router-link :to="'/'">
        <div class="search-btn">
          <img src="/static/webLogo.png" style="height: 35px;color: red">
        </div>
      </router-link>
    </div>
    <div class="container">
      <div class="theater_form">
        <div class="theater">
          <h1>THEATER</h1>
          <h2>Kinky Boots</h2>
          <p class="address">Her Majesty's Theatre, London</p>
        </div>
        <form class="wrapper" @submit.prevent="addBook">
          <div class="form-group red">
            <input
              class="tag"
              style="width:30%;"
              id="tag"
              type="text"
              required
              v-model="book.areas"
            >
            <label for="tag" data-content="選擇區域"></label>
          </div>
          <div class="form-group red">
            <datetime
              v-model="book.nowDate"
              input-style="{    
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                width: 20px;
                height: 15px;
                padding: 4px 3px;
                border-radius: 5px;
                border: solid 2px #d32323;
                background-color: transparent;
                cursor: pointer;
                width:50%;
                color: #911818;
                position: relative;
                top: -4px;}"
              input-id="book-date"
              required
            ></datetime>
            <!-- <input id="book-date" type="date" required="required" v-model="book.nowDate"> -->
            <label for="book-date" data-content="觀看日期">觀看日期</label>
          </div>
          <div class="form-group red">
            <input id="name" type="text" required v-model="book.name">
            <label for="name" data-content="購票姓名">購票姓名</label>
          </div>
          <div class="form-group red">
            <input id="email" type="text" required v-model="book.email">
            <label for="email" data-content="Email">Email</label>
          </div>
          <div class="form-group red">
            <input id="ticket" type="number" required v-model="book.ticket">
            <label for="ticket" data-content="選擇票數">選擇票數</label>
          </div>
          <div class="form-group red" style="width:30%;">
            <button class="tourBtn" type="submit">submit</button>
          </div>
        </form>
      </div>
      <div class="svg_area">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="604.822px"
          height="410.97px"
          viewBox="0 0 604.822 410.97"
          enable-background="new 0 0 604.822 410.97"
          xml:space="preserve"
        >
          <g id="A1">
            <polygon
              data-name="A1"
              @click="add('A1')"
              points="424.331,258.97 397.331,258.97 397.331,231.97 370.331,231.97 370.331,204.97 342.491,204.97 315.491,204.97 
        288.491,204.97 261.491,204.97 235.331,204.97 235.331,231.97 208.331,231.97 208.331,258.97 181.331,258.97 181.331,285.97 
        424.331,285.97 	"
            ></polygon>
          </g>
          <g id="A2">
            <polygon
              data-name="A2"
              @click="add('A2')"
              points="570.822,168.813 549.768,151.881 566.661,130.874 545.605,113.943 545.661,113.874 523.841,96.328 
        507.003,117.266 486.063,100.428 418.001,185.067 438.872,201.85 421.94,222.906 442.996,239.836 442.94,239.906 463.996,256.836 
        463.94,256.906 484.928,273.782 570.768,168.881 	"
            ></polygon>
            <polygon
              data-name="A2"
              @click="add('A2')"
              points="34,168.813 55.055,151.881 38.161,130.874 59.217,113.943 59.161,113.874 80.981,96.328 97.819,117.266 
        118.759,100.428 186.821,185.067 165.95,201.85 182.882,222.906 161.826,239.836 161.882,239.906 140.826,256.836 140.882,256.906 
        119.895,273.782 34.055,168.881 	"
            ></polygon>
          </g>
          <g id="B1">
            <polygon
              data-name="B1"
              @click="add('B1')"
              points="423.911,302.97 180.911,302.97 154.331,302.97 154.331,329.97 181.331,329.97 181.331,356.97 208.331,356.97 
        208.331,383.97 234.331,383.97 234.331,410.97 261.331,410.97 288.331,410.97 315.331,410.97 342.331,410.97 369.331,410.97 
        369.331,383.97 369.491,383.97 397.331,383.97 397.331,356.97 424.331,356.97 424.331,329.97 451.331,329.97 451.331,302.97 	"
            ></polygon>
          </g>
          <g id="B2">
            <polygon
              data-name="B2"
              @click="add('B2')"
              points="604.822,195.813 583.768,178.881 497.928,283.782 480.94,304.906 501.928,321.782 485.556,342.14 485.487,342.085 
        467.94,363.906 489.761,381.452 506.692,360.397 506.761,360.452 540.624,318.342 540.761,318.452 557.692,297.397 
        557.761,297.452 592.146,254.693 571.09,237.761 	"
            ></polygon>
            <polygon
              data-name="B2"
              @click="add('B2')"
              points="0,195.813 21.055,178.881 106.895,283.782 123.882,304.906 102.895,321.782 119.267,342.14 119.335,342.085 
        136.882,363.906 115.062,381.452 98.13,360.397 98.062,360.452 64.198,318.342 64.062,318.452 47.13,297.397 47.062,297.452 
        12.676,254.693 33.732,237.761 	"
            ></polygon>
          </g>
          <g id="Stage">
            <path
              d="M233.763,185.97L147.579,77.236c0,0,23.74-11.816,30.758-17.097C205.958,39.353,238.332,0,302.879,0
        c61.453,0,96.705,39.421,124.539,59.892c7.093,5.217,30.762,17.385,30.762,17.385L371.993,185.97H233.763z"
            ></path>
          </g>
        </svg>

        <div class="ticket">
          <h4>座位{{book.areas}}區 ｜ {{place}} ｜ 價格 £{{book.price}}</h4>
          <h4>Total £{{book.price*book.ticket}}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { Datetime } from "vue-datetime";
import { DateTime as LuxonDateTime } from "luxon";

const API_URL = "http://localhost:1234/books";
export default {
  name: "Book",
  data: function() {
    return {
      book: {
        nowDate: LuxonDateTime.local().toISO(),
        name: "",
        ticket: null,
        email: "",
        areas: "",
        price: 0
      },
      stage_data: [
        {
          tag: "A1",
          place: "Grand Circle",
          price: 75
        },
        {
          tag: "A2",
          place: "Grand Circle",
          price: 55
        },
        {
          tag: "B1",
          place: "Royal Circle",
          price: 60
        },
        {
          tag: "B2",
          place: "Stalls",
          price: 35
        }
      ],
      place: ""
    };
  },
  methods: {
    add: function(data) {
      this.book.areas = data;
      const selectStageData = this.stage_data.find(item => {
        return item.tag === data;
      });
      this.place = selectStageData.place;
      this.book.price = selectStageData.price;
    },
    addBook() {
      console.log(this.book);
      fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(this.book),
        headers: {
          "content-type": "application/json"
        }
      })
        .then(res => res.json())
        .then(result => {
          if (result.deatils) {
            const error = result.deatils.map(item => item.message).join(" ");
            console.log(error);
          } else {
            this.book = {};
            this.place = "";
          }
        });
    }
  },
  components: {
    datetime: Datetime
  }
};
</script>


<style lang="sass" scoped>
body
  margin: 0
  padding: 0
  background: #f1f1f1
.container
  display: grid
  grid-template-columns: 1fr 1fr
  height: 100vh
  overflow: hidden
  grid-template-areas: "theater_form svg_area"
.theater_form
  grid-area: theater_form
  padding: 70px
  line-height: 40px
  h2
    margin-top: -1.5rem
  input
    align-items: center
    width: 20px
    height: 15px
    padding: 5px 3px
    border-radius: 5px
    border: solid 2px #d32323
    background-color: transparent
    cursor: pointer
.svg_area
  grid-area: svg_area
  padding: 70px
  text-align: center
  
.address
  font-size: 14px
  line-height: 20px
  background-color: #d32323
  padding: 10px 20px
  color: #f1f1f1
  margin-bottom: 10%
  
svg
  width: 100vh
body
  background-color: #f1f1f1
path
  stroke: #d32323
  stroke-width: 2px
  fill: transparent
polygon
  stroke: #d32323
  stroke-width: 3px
  fill: transparent
  cursor: pointer
  transition: 0.5s
  &:hover
    fill: #d32323
    transform: translate(-5px, -5px)


.tourBtn 
  width: 100%
  height: 40px
  font-size: 18px
  border-radius: 10px
  background-color: black
  color: #f1f1f1
  cursor: pointer
  transition: 0.5s

.tourBtn:hover 
  margin-top: -15px
  background-color: black
  color: #f1f1f1
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.4)

.wrapper
    display: flex
    flex-direction: column
    justify-content: center



$sans-serif: Roboto, Arial, sans-serif

.form-group
    display: inline-block
    height: 3rem
    padding-top: 0.5rem

    input
        background: none
        display: block
        font-family: $sans-serif
        font-size: 1rem
        padding: 0.25rem 0.1rem
        width: 50%
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
        left: 5px

    label::before
        content: attr(data-content)
        position: relative
        transition: all 0.2s ease
        will-change: font-size, top

    label::before, input[required]:focus ~ label::before
        font-size: 0.7rem
        top: -3.6rem

    input:invalid ~ label::before
        font-size: 0.8rem
        top: -2.1rem
    .vdatetime~label::before
        font-size: 0.7rem
        top: -4.2rem

// ---------- CONSTRUCTOR
@mixin form-group($name, $lightcolor, $color, $darkcolor)
    .form-group.#{$name}
        input
            color: $darkcolor

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



/* HomePage button
.search-box
  position: absolute
  top: 85%
  left: 85%
  height: 40px
  border-radius: 40px
  padding: 10px
  background-color: #d32323
  cursor: pointer
  &:hover
    .search-txt
      width: 45px
      padding: 0 6px
    .search-btn
      background-color: #f1f1f1

.search-btn
  color: #d32323
  float: right
  width: 40px
  height: 40px
  border-radius: 50%
  background-color: #f1f1f1
  display: flex
  align-items: center
  justify-content: center
  cursor: pointer

::placeholder
  color: #f1f1f1

a
  text-decoration: none

.search-txt
  border: none
  background: none
  outline: none
  float: left
  padding: 10
  color: #f1f1f1
  font-size: 16px
  transition: 0.4s
  line-height: 40px
  width: 0
  cursor: pointer
</style>
