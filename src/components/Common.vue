<template>
  <!-- 公共顶部栏部分 -->
  <div class="header">
			<div class="top">
				<ul>
					<li class="guanwang"><a href="#">学校官网</a></li>
					<li class="dengji"> <a href="#">到校登记</a></li>
					<li class="jiaofei"><a href="#">新生缴费</a></li>
				</ul>
			</div>
			<div class="logo">
				<img src="../assets/images/logo.png" class="logo1" />
				<img src="../assets/images/yingxin.png" class="logo2" />
			</div>
			<div class="login">
				<button>用户登录</button>
				<button>个人信息</button>
			</div>
	</div>
</template>

<script>
export default {
  name: "Common"
}
</script>

<style lang="scss">
  // @import "@/assets/styles/common.scss";
@import "@/assets/styles/media_common.scss";

.header {
    width: 100%;
    height: 177px;
    margin: auto;
    background-image: url(../assets/images/header-bg2.png), url(../assets/images/header-bg.png);
    background-repeat: no-repeat, no-repeat;
    background-position: top right, top left;
    background-size: 234px 186px, cover;
    .top {
        height: 50px;
        ul {
            float: right;
            width: 50%;
            list-style-type: none;
            margin: 0 auto;
            padding: 0;
            overflow: hidden;
            display: inline-block;
        }
        li {
            float: left;
            width: 25%;
            padding-left: 30px;
            &.guanwang {
                background: url(../assets/images/guanwang.png) center left no-repeat;
                background-size: 20px 20px;
            }
            &.dengji {
                background: url(../assets/images/dengji.png) center left no-repeat;
                background-size: 20px 20px;
            }
            &.jiaofei {
                background: url(../assets/images/jiaofei.png) center left no-repeat;
                background-size: 20px 20px;
            }
            a {
                display: block;
                color: #000000;
                text-align: left;
                padding: 10px 0px;
                text-decoration: none;
                font-size: 16px;
                &:hover {
                    color: #c3aa6a;
                }
            }
        }
    }
    .logo {
        width: 46%;
        float: left;
        margin-left: 10px;
    }
    .login {
        width: 40%;
        float: left;
        margin-top: 30px;
        button {
            width: 100px;
            height: 40px;
            background-color: #32b16c;
            border-radius: 10px;
            border: 1px solid #32b16c;
            color: #fff;
            margin-left: 30px;
        }
    }
}
</style>