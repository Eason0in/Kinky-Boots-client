<template>
  <div>
    <div id="openMenu">
      <img src="/static/menu.png" alt>
    </div>
    <div id="closeMenu">
      <img id="poster" src="/static/cross1.png" alt>
    </div>

    <div id="underMain">
      <div id="buySection">
        <div class="container">
          <h1>
            BROADWAY
            <br>MUSICAL
          </h1>
          <h4>#KINKYBOOTS | #BESTMUSICAL</h4>
          <router-link :to="'book'">
            <button class="tourBtn">UK TOUR</button>
          </router-link>
        </div>
      </div>
      <div id="posterSection">
        <img src="/static/image.jpg" alt>
      </div>
    </div>

    <div id="main">
      <div id="logoSection">
        <img src="/static/Kinky-Boots.png" alt>
      </div>
      <div id="menuSection">
        <ul>
          <li @mouseover="anim('about')">
            <router-link :to="'about'">
              <div id="about" class="menu">
                ABOU
                <div class="rotate">T</div>
              </div>
            </router-link>
          </li>
          <li @mouseover="anim('tour')">
            <router-link :to="'book'">
              <div id="tour" class="menu">
                TOU
                <div class="rotate">R</div>
              </div>
            </router-link>
          </li>
          <li @mouseover="anim('shop')">
            <router-link :to="'shop'">
              <div id="shop" class="menu">
                SHO
                <div class="shop">P</div>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  mounted() {
    $(document).ready(function() {
      $("#openMenu").click(function() {
        $("#main").fadeIn(200);
        $("#underMain").fadeOut(200);
        $("#openMenu").animate({ left: "-10%" });
        $("#closeMenu").animate({ left: "93%" });
        $(".menu").animate({ left: "-1%" }, 10);
      });

      $("#closeMenu").click(function() {
        $("#main").fadeOut(200);
        $("#underMain").fadeIn(200);
        $("#openMenu").animate({ left: "0%" });
        $("#closeMenu").animate({ left: "100%" });
        $(".menu").animate({ left: "-50%" }, 10);
      });
    });
  },
  methods: {
    anim(targetedId) {
      var targetLetter = $("#" + targetedId + " .rotate").text();
      var ascii = targetLetter.charCodeAt(0);
      var pointer = 65;
      changeChar();

      function changeChar() {
        if (pointer <= ascii) {
          $("#" + targetedId + " .rotate").text(String.fromCharCode(pointer));
          pointer++;
          setTimeout(changeChar, 20);
        } else {
          $(this).stop();
        }
      }
    }
  }
};
</script>


<style scoped>
body {
  margin: 0;
  padding: 0;
  background-color: #d32323;
}

a {
  color: black;
}

#main {
  height: 100vh;
  width: 100%;
  position: fixed;
  display: none;
}
#underMain {
  /*display: none;*/
  height: 100vh;
  width: 100%;
  position: fixed;
}

#logoSection {
  height: 100%;
  width: 50%;
  background-color: #f1f1f1;
  box-shadow: 10px 0px 30px rgba(0, 0, 0, 0.4);
  z-index: 999;
  position: absolute;
}
#logoSection img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20%;
}

#menuSection {
  height: 100%;
  width: 50%;
  background-color: #f1f1f1;
  position: absolute;
  left: 50%;
}

#menuSection ul {
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  left: -1%;
  top: 30%;
}

#menuSection ul li {
  height: 100px;
  width: 350px;
  font-family: arial black;
  font-size: 60px;
  line-height: 100px;
  cursor: pointer;
}

#menuSection ul li a {
  width: 100%;
  height: 100%;
  display: block;
}

.menu {
  height: 100px;
  width: 0px;
  background-color: #d32323;
  display: flex;
  position: absolute;
  left: -50%;
  cursor: pointer;
  pointer-events: none;
  transition: all 0.4s;
}

.rotate {
  pointer-events: none;
}
#menuSection ul li:hover .menu {
  width: 350px;
}

#openMenu,
#closeMenu {
  height: 100px;
  width: 100px;
  background-color: #d32323;
  position: fixed;
  left: 0%;
  top: 50%;
  transform: translateY(-50%);
  z-index: 999;
  cursor: pointer;
}
#closeMenu {
  left: 100%;
}

#openMenu img,
#closeMenu img {
  height: 40%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

/*----------------------------*/
#posterSection {
  height: 150%;
  width: 100%;
  background-color: #f1f1f1;
  position: absolute;
  left: 50%;
  transform: rotate(15deg);
  z-index: 999;
  overflow: hidden;
}
#posterSection img {
  position: relative;
  height: 90%;
  top: 40%;
  left: 25%;
  transform: translate(-50%, -50%);
}
#buySection {
  height: 100%;
  width: 70%;
  background-color: #d32323;
  z-index: 5;
  position: absolute;
}

#buySection .container {
  position: absolute;
  top: 42%;
  left: 40%;
  transform: translate(-50%, -50%);
  text-align: center;
  height: 200px;
}
.container h1 {
  font-family: "Permanent Marker", cursive;
  font-size: 50px;
}
.container h4 {
  margin-top: -20px;
}
.tourBtn {
  width: 120px;
  height: 40px;
  font-size: 18px;
  border-radius: 10px;
  margin-top: 20px;
  background-color: black;
  color: #f1f1f1;
  border: solid black;
  cursor: pointer;
  transition: 0.5s;
}

.tourBtn:hover {
  margin-top: 10px;
  background-color: black;
  color: #f1f1f1;
  border: solid black;
  box-shadow: 0px 5px 0px 0px rgba(0, 0, 0, 0.4);
}
</style>


