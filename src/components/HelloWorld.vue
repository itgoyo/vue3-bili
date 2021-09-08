<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
  </p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
  import {
    onMounted,
    reactive
  } from "vue";
  import {
    getData,
    SendMsgToWeChat
  } from "../api/api";

  defineProps({
    msg: String,
  });

  var options = {
    dir: "auto", // 文字方向
    body: "👿👿👿👿推流直播已经结束👿👿👿👿", // 通知主体
    requireInteraction: true, // 不自动关闭通知
    // 通知图标
    icon: "http://localhost:8080/hacker.png"
  };


  function notifyMe(title, options) {
    // 先检查浏览器是否支持
    if (!window.Notification) {
      console.log('浏览器不支持通知');
    } else {
      // 检查用户曾经是否同意接受通知
      if (Notification.permission === 'granted') {
        var notification = new Notification(title, options); // 显示通知
      } else if (Notification.permission === 'default') {
        // 用户还未选择，可以询问用户是否同意发送通知
        Notification.requestPermission().then(permission => {
          if (permission === 'granted') {
            console.log('用户同意授权');
            var notification = new Notification(title, options); // 显示通知
          } else if (permission === 'default') {
            console.warn('用户关闭授权 未刷新页面之前 可以再次请求授权');
          } else {
            // denied
            console.log('用户拒绝授权 不能显示通知');
          }
        });
      } else {
        // denied 用户拒绝
        console.log('用户曾经拒绝显示通知');
      }
    }
  }


  function callMe() {
    console.log("通知");
  }
  async function fetchData() {
    const res = await getData();
    console.log(res.data.live_room.liveStatus);
    if (res.data.live_room.liveStatus === 1) {//1是在线，!=是结束
      // notifyMe('这是通知的标题', options);
      // 通知改成server酱
      const wechatRes = await SendMsgToWeChat();
      console.log(wechatRes);
    }

  }
  var resData;


  fetchData();
  const state = reactive({
    count: 0
  });

  this.timer = setInterval(function () {
    fetchData()
  }, 60 * 1000) //一分钟请求一次
</script>

<style scoped>
  a {
    color: #42b983;
  }
</style>