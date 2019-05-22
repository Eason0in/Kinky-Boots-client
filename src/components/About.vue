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
    <div class="wrap">
      <div class="youtube">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BTa-0tBOIzA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="aboutInfo">
        <h2>{{Infos.title}}</h2>
        <h4>{{Infos.info}}</h4>
      </div>
      <div class="comment">
        <div class="client" v-for="client in clients">
          <img :src="client.image" alt>
          <span>★★★★★</span>
          <h3>{{client.name}}</h3>
          <p>{{client.comment}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      Infos: {
        title: "The smash-hit musical KINKY BOOTS",
        info:
          "Inspired by true events, KINKY BOOTS features a book by Tony-winning theatre legend HARVEY FIERSTEIN and direction and choreography by Tony winner JERRY MITCHELL. It tells the story of Charlie Price, who inherits his father's shoe factory. Looking to save the family business, Charlie turns to a fabulously fashionable new friend — cabaret star Lola — who gives him an outrageous idea that could change both of their destinies. Soon, this unlikely duo creates the most sensational footwear that’s ever rocked the runways of Milan… giving the factory and its hardworking family a sparkling new future.",
        youtubeSrc: "https://youtu.be/pL8me-igOXc"
      },
      clients: [
        {
          image: "https://pbs.twimg.com/media/D6uMhSHUcAA0dR0.jpg",
          name: "Lady Gaga",
          comment:
            "Fabulous fabulous fabulous! Absolutely one of the most amazing shows EVER. The cast is so incredible and sweet and does a phenomenal job!!"
        },
        {
          image:
            "https://i0.wp.com/a.hiphotos.baidu.com/zhidao/wh%3D680%2C800/sign=473ec1fcc1fcc3ceb495c135aa75fab0/b90e7bec54e736d12f00c1d692504fc2d46269d8.jpg",
          name: "Tom Cruise",
          comment:
            " I have to say that Blaine Krauss was the most mesmerizing performer I have ever seen on stage. He touched my heart and his performance will forever be etched in my memories."
        },
        {
          image:
            "https://images.chinatimes.com/newsphoto/2016-01-04/656/20160104004501.jpg",
          name: "Anne Hathaway",
          comment:
            "Fantastic show it has everything laughter, emotion,Men with amazing legs!Absolutely brilliant! The best broadway show I have ever seen!! Lola was sassy and sensational. The whole cast was stellar!!"
        }
      ]
    };
  }
};
</script>

<style scoped>
.wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas: "youtube aboutInfo" "comment comment";
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background: #d32323;
}

.youtube {
  grid-area: youtube;
  padding: 40px 0px 30px 65px;
}
.youtube iframe {
  width: 100%;
  height: 100%;
}

.aboutInfo {
  grid-area: aboutInfo;
  padding: 30px 45px;
}
.aboutInfo h2 {
  color: #f1f1f1;
  font-size: 28px;
  font-weight: 800;
}
.aboutInfo h4 {
  color: #f1f1f1;
  line-height: 24px;
  padding-right: 30px;
}
.comment {
  grid-area: comment;
  display: inline-flex;
  flex-direction: row;
  padding: 10px 50px;
}

.client {
  flex: 1;
  height: 230px;
  justify-content: center;
  align-items: center;
  padding: 25px;
  margin: 0px 20px;
  border-radius: 10px;
  background-color: #f1f1f1;
}
.client span {
  vertical-align: middle;
  letter-spacing: 2px;
}
.client img {
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  vertical-align: middle;
}

.client h3 {
  font-weight: 700;
}
/* HomePage button */
.search-box {
  position: absolute;
  top: 47%;
  left: 87%;
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
