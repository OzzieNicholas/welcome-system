<template>
  <div class="index">
    <!--layer1  begin-->
		<div class="layer1">
			<h2>快捷通道</h2>
			<h4>Fast Track</h4>
			<ul>
				<li><img src="../assets/images/d1.png" />
					<p>个人信息</p>
				</li>
				<li><img src="../assets/images/d2.png" />
					<p>绿色通道</p>
				</li>
				<li><img src="../assets/images/d3.png" />
					<p>到校登记</p>
				</li>
				<li><img src="../assets/images/d4.png" />
					<p>注册实况</p>
				</li>
			</ul>
		</div>
		<!--layer1  end-->

		<!--layer2  begin-->
		<div class="layer2">
			<h2>新生导航</h2>
			<h4>Freshman Navigation</h4>
			<div class="xuesheng"><img src="../assets/images/xuesheng.png" /></div>
			<ul>
				<li><a href="#">四川农业大学2020级新生迎新系统使用说明</a></li>
				<li><a href="#">致新同学的一封欢迎信</a></li>
				<li><a href="#">四川农业大学新生迎新系统登录方法</a></li>
			</ul>
			<div class="clear"></div>
		</div>
		<!--layer2  end-->

		<!--layer3  begin-->
		<div class="layer3">
			<h2>报道流程</h2>
			<h4>Reporting Process</h4>
			<ul>
				<li><span>01</span>
					<h1>财务缴费</h1>
					<p>新生进行缴费或登记通道</p>
				</li>
				<li><span>02</span>
					<h1>院系报道</h1>
					<p>新生持身份证、录取通知书等到学院报道点确认报道</p>
				</li>
				<li><span>03</span>
					<h1>领取物品</h1>
					<p>新生领取军训服、寝室钥匙、卧具等</p>
				</li>
				<li><span>04</span>
					<h1>报道完成</h1>
					<p>欢迎你，新同学！</p>
				</li>
			</ul>
			<div class="clear"></div>
		</div>
		<!--layer3  end-->
  </div>
</template>

<style lang="scss">
@import "@/assets/styles/media_common.scss";

body {
    background: url(../assets/images/bg.jpg);
    background-size: cover;
}

* {
    box-sizing: border-box;
}

.clear {
    clear: both;
}

h2,
h4 {
    text-align: center;
}

.layer1 {
    width: 90%;
    height: auto;
    margin: 10px auto;
    ul {
        width: 100%;
        list-style-type: none;
        margin: 0 auto;
        padding: 0;
        overflow: hidden;
        display: inline-block;
    }
    li {
        float: left;
        width: 25%;
        img {
            display: block;
            padding: 10px 9px;
            width: 30%;
            height: auto;
            margin: 0 auto;
        }
        p {
            text-align: center;
        }
    }
}

.layer2 {
    width: 70%;
    height: auto;
    margin: 10px auto;
    position: relative;
    ul {
        width: 90%;
        margin: 0 auto;
        overflow: hidden;
        border: 1px solid #32b16c;
        padding: 50px 0px 50px 220px;
        position: relative;
        z-index: 0;
        margin-top: -240px;
        background-color: #fff;
    }
    li {
        height: 50px;
        a {
            display: block;
            color: #000000;
            text-align: left;
            padding: 10px 0px;
            font-size: 16px;
            &:hover {
                color: #c3aa6a;
            }
        }
    }
    .xuesheng {
        width: 20%;
        height: auto;
        position: relative;
        z-index: 9999;
        img {
            width: 100%;
            height: auto;
        }
    }
}

.layer3 {
    width: 70%;
    height: auto;
    margin: 10px auto;
    position: relative;
    ul {
        width: 100%;
        list-style-type: none;
        margin: 0 auto;
        overflow: hidden;
        padding: 0;
    }
    li {
        height: 80px;
        background-color: #32b16c;
        margin: 10px;
        padding: 5px;
        span {
            display: block;
            float: left;
            width: 12%;
            background: url(../assets/images/number.png) left center no-repeat;
            height: 50px;
            margin: 15px;
            color: #32b16c;
            line-height: 50px;
            font-size: 20px;
            text-align: left;
            padding-left: 23px;
        }
        h1 {
            font-size: 20px;
            color: #fff;
            margin: 0;
            padding: 0;
        }
        p {
            color: #b7efc2;
        }
    }
}
</style>