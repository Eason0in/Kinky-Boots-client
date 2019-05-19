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
    <div class="main">
      <div class="imgSection">
        <img src="/static/pinkBoots.png" class="boot h1">
        <img src="/static/redBoots.png" class="boot h2">
        <img src="/static/brownBoots.png" class="boot h3">
      </div>
      <div class="infoSection">
        <div class="product1">
          <div class="productName">hunter Original</div>
          <div class="productNo">Pink Rbp</div>
          <div class="price">£270</div>
          <div class="productColor">CHOOSE COLOR</div>
          <div class="colors">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
          </div>
          <div class="rate">4.7 / 5.0</div>
          <div class="linkBuy">
            <a
              href="https://www.amazon.co.uk/Hunter-Womens-Original-Tall-Boots/dp/B07956T97B/ref=sr_1_2_sspa?crid=2OBNUNXG6GULB&keywords=hunter+original+red&qid=1558096627&s=gateway&sprefix=hunter+org%2Caps%2C440&sr=8-2-spons&psc=1"
              target="_blank"
            >LINK TO BUY</a>
          </div>
        </div>

        <div class="product2">
          <div class="productName">Wellington Boots</div>
          <div class="productNo">Military Red</div>
          <div class="price">£201</div>
          <div class="productColor">CHOOSE COLOR</div>
          <div class="colors">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
          </div>
          <div class="rate">4.5 / 5.0</div>
          <div class="linkBuy">
            <a
              href="https://www.amazon.co.uk/Hunter-Womens-Original-Tall-Boots/dp/B07956T97B/ref=sr_1_2_sspa?crid=2OBNUNXG6GULB&keywords=hunter+original+red&qid=1558096627&s=gateway&sprefix=hunter+org%2Caps%2C440&sr=8-2-spons&psc=1"
              target="_blank"
            >LINK TO BUY</a>
          </div>
        </div>

        <div class="product3">
          <div class="productName">Hunter Iris W23</div>
          <div class="productNo">Bitter Chocolate</div>
          <div class="price">£234</div>
          <div class="productColor">CHOOSE COLOR</div>
          <div class="colors">
            <div class="c1"></div>
            <div class="c2"></div>
            <div class="c3"></div>
          </div>
          <div class="rate">4.8 / 5.0</div>
          <div class="linkBuy">
            <a
              href="https://www.amazon.co.uk/Hunter-Womens-Original-Tall-Boots/dp/B07956T97B/ref=sr_1_2_sspa?crid=2OBNUNXG6GULB&keywords=hunter+original+red&qid=1558096627&s=gateway&sprefix=hunter+org%2Caps%2C440&sr=8-2-spons&psc=1"
              target="_blank"
            >LINK TO BUY</a>
          </div>
        </div>
      </div>
      <div class="next">&#8594;</div>
      <div class="pre">&#8592;</div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    $(document).ready(function() {
      let counter = 2;

      $(".next").click(function() {
        if (counter == 1) {
          $(".product1").fadeOut(500);
          $(".product2").fadeIn(500);
          $(".h1").animate({ top: "-50%" });
          $(".h2").animate({ top: "50%" });
          counter = 2;
        } else if (counter == 2) {
          $(".product2").fadeOut(500);
          $(".product3").fadeIn(500);
          $(".h2").animate({ top: "-50%" });
          $(".h3").animate({ top: "50%" });
          counter = 3;
        }
      });

      $(".pre").click(function() {
        if (counter == 2) {
          $(".product2").fadeOut(500);
          $(".product1").fadeIn(500);
          $(".h1").animate({ top: "50%" });
          $(".h2").animate({ top: "150%" });
          counter = 1;
        } else if (counter == 3) {
          $(".product3").fadeOut(500);
          $(".product2").fadeIn(500);
          $(".h2").animate({ top: "50%" });
          $(".h3").animate({ top: "150%" });
          counter = 2;
        }
      });
      $(".product2 .c1").click(function() {
        $(".product2 .c2").css("box-shadow", "none");
        $(".product2 .c3").css("box-shadow", "none");
        $(".product2 .c1").css(
          "box-shadow",
          "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
        );
        $(".h2").animate({ opacity: 0 }, function() {
          $(".h2").attr("src", "/static/redBoots.png");
        });
        $(".h2").animate({ opacity: 1 });
      });

      $(".product2 .c2").click(function() {
        $(".product2 .c1").css("box-shadow", "none");
        $(".product2 .c3").css("box-shadow", "none");
        $(".product2 .c2").css(
          "box-shadow",
          "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
        );
        $(".h2").animate({ opacity: 0 }, function() {
          $(".h2").attr("src", "/static/pinkBoots.png");
        });
        $(".h2").animate({ opacity: 1 });
      });
      $(".product2 .c3").click(function() {
        $(".product2 .c1").css("box-shadow", "none");
        $(".product2 .c2").css("box-shadow", "none");
        $(".product2 .c3").css(
          "box-shadow",
          "0 0 0 2px #0D1F2D, 0 0 0 3.5px #CB3843"
        );
        $(".h2").animate({ opacity: 0 }, function() {
          $(".h2").attr("src", "/static/brownBoots.png");
        });
        $(".h2").animate({ opacity: 1 });
      });
    });
  }
};
</script>

<style>
.main {
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.imgSection {
  height: 350px;
  width: 300px;
  background-color: #f1f1f1;
  border: solid 3px #d32323;
  position: relative;
  border-radius: 15px;
  overflow: hidden;
}
.infoSection {
  height: 265px;
  width: 420px;
  background-color: #262626;
  position: relative;
  margin-top: 37px;
  margin-left: -210px;
  border-radius: 15px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
}
.boot {
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
}
.logo {
  width: 130%;
  position: absolute;
  top: 29%;
  left: -40%;
  transform: rotate(-90deg);
  opacity: 0.1;
}
.productName {
  font-size: 25px;
  color: white;
  margin-top: 40px;
  margin-left: 5px;
}
.productNo {
  font-size: 13px;
  color: white;
  margin-top: 5px;
  margin-left: 5px;
}
.price {
  font-size: 20px;
  color: white;
  margin-top: 10px;
  margin-left: 5px;
}
.productColor {
  font-size: 10px;
  color: white;
  font-weight: bold;
  margin-top: 30px;
  margin-left: 0px;
}
.colors {
  margin-top: 15px;
  margin-left: 15px;
  display: flex;
}
.c1,
.c2,
.c3 {
  height: 15px;
  width: 15px;
  background-color: #d6440e;
  border-radius: 50%;
  cursor: pointer;
}
.c1 {
  box-shadow: 0 0 0 2px #0d1f2d, 0 0 0 3.5px #d32323;
}
.c2 {
  background-color: #ad15af;
  margin-left: 10px;
}
.c3 {
  background-color: #87560d;
  margin-left: 10px;
}
.rate {
  height: 60px;
  width: 60px;
  font-size: 12px;
  color: white;
  font-weight: bold;
  text-align: center;
  line-height: 60px;
  border-radius: 50%;
  border: 2px solid #d32323;
  position: absolute;
  top: 45%;
  left: 65%;
  transform: translate(-50%, -50%);
}
.productRate {
  font-size: 10px;
  color: white;
  font-weight: bold;
  position: absolute;
  top: 75%;
  left: 68%;
  transform: translate(-50%, -50%);
}
.linkBuy {
  height: 35px;
  width: 100px;
  background-color: #d32323;
  border-radius: 25px;
  color: white;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
  line-height: 35px;
  position: absolute;
  top: 70%;
  left: 65%;
  transform: translate(-50%, -50%);
  cursor: pointer;
}
.next,
.pre {
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50%;
  font-family: monospace;
  font-size: 25px;
  font-weight: bold;
  text-align: center;
  line-height: 45px;
  color: #d32323;
  position: absolute;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
}
.pre {
  left: 0%;
  box-shadow: -5px 5px 10px rgba(0, 0, 0, 0.2);
}
a {
  text-decoration: none;
  color: #f1f1f1;
}
.h1 {
  top: -50%;
}
.h3 {
  top: 150%;
}
.product1,
.product3 {
  height: 300px;
  width: 300px;
  display: none;
  position: absolute;
  left: 33%;
}
.product2 {
  height: 300px;
  width: 300px;
  position: absolute;
  left: 33%;
}

/* HomePage button */
.search-box {
  position: absolute;
  top: 85%;
  left: 85%;
  height: 40px;
  border-radius: 40px;
  padding: 10px;
  background-color: #d32323;
  cursor: pointer;
}
.search-box:hover .search-txt {
  width: 45px;
  padding: 0 6px;
}
.search-box:hover .search-btn {
  background-color: #f1f1f1;
}

.search-btn {
  color: #d32323;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
::placeholder {
  color: #f1f1f1;
}

a {
  text-decoration: none;
}

.search-txt {
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 10;
  color: #f1f1f1;
  font-size: 16px;
  transition: 0.4s;
  line-height: 40px;
  width: 0;
  cursor: pointer;
}
</style>
