<template>
  <div class="indexx">

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

<style scoped>
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
}

.layer1 ul {
	width: 100%;
	list-style-type: none;
	margin: 0 auto;
	padding: 0;
	overflow: hidden;
	display: inline-block;
}

.layer1 li {
	float: left;
	width: 25%;
}

.layer1 li img {
	display: block;
	padding: 10px 9px;
	width: 30%;
	height: auto;
	margin: 0 auto;
}

.layer1 li p {
	text-align: center;
}

.layer2 {
	width: 70%;
	height: auto;
	margin: 10px auto;
	position: relative;
}

.layer2 ul {
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

.layer2 li {
	height: 50px;
}

.layer2 li a {
	display: block;
	color: #000000;
	text-align: left;
	padding: 10px 0px;
	font-size: 16px;
}

.layer2 li a:hover {
	color: #C3AA6A;
}

.layer2 .xuesheng {
	width: 20%;
	height: auto;
	position: relative;
	z-index: 9999;
}

.layer2 .xuesheng img {
	width: 100%;
	height: auto;
}

.layer3 {
	width: 70%;
	height: auto;
	margin: 10px auto;
	position: relative;
}

.layer3 ul {
	width: 100%;
	list-style-type: none;
	margin: 0 auto;
	overflow: hidden;
	padding: 0;
}

.layer3 li {
	height: 80px;
	background-color: #32b16c;
	margin: 10px;
	padding: 5px;
}

.layer3 li span {
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

.layer3 li h1 {
	font-size: 20px;
	color: #fff;
	margin: 0;
	padding: 0;
}

.layer3 li p {
	color: #b7efc2;
}

.layer4 {
	width: 70%;
	height: auto;
	margin: 10px auto;
	position: relative;
}

.layer4 ul {
	width: 100%;
	list-style-type: none;
	margin: 0 auto;
	overflow: hidden;
	padding: 0;
}

.layer4 li {
	height: auto;
	background-color: #32b16c;
	border: 1px solid #32b16c;
	margin: 10px;
}

.layer4 li span {
	display: block;
	float: left;
	width: 16%;
	height: 100%;
	background-color: #32b16c;
	line-height: 50px;
	font-size: 20px;
	text-align: center;
	color: #fff;
	padding-top: 30px;
}

.layer4 li .right {
	width: 84%;
	background-color: #fff;
	float: left;
	padding-left: 20px;
}

.layer4 li .right .bottom {
	padding-bottom: 10px;
}

.layer4 li .right .bottom img {
	width: 30px;
	height: auto;
}

.layer4 li p {
	color: #000;
}

.layer4 li button.ywc {
	background-color: #32b16c;
	border-radius: 10px;
	width: 100px;
	height: 35px;
	border: 1px solid #32b16c;
	color: #000;
	float: right;
	margin-right: 10px;
}

.layer4 li button.wwc {
	background-color: #989898;
	border-radius: 10px;
	width: 100px;
	height: 35px;
	border: 1px solid #989898;
	color: #000;
	float: right;
	margin-right: 10px;
}


@media screen and (max-width:540px) {

	.header {
		height: 112px;
		background-size: 100px 100px, cover;
	}

	.header .top ul {
		width: 100%;
		float: none;
	}

	.header .top li.guanwang {
		background-size: 10px 10px;
	}

	.header .top li.dengji {
		background-size: 10px 10px;
	}

	.header .top li.jiaofei {
		background-size: 10px 10px;
	}

	.header .top li a {
		font-size: 12px;
	}

	.header .logo {
		width: 40%;
		margin-left: 0px;
	}

	.header .logo .logo1 {
		width: 60%;
		height: auto;
	}

	.header .logo .logo2 {
		width: 30%;
		height: auto;
	}

	.header .login {
		width: 59%;
		margin-top: 0px;
	}

	.header .login button {
		width: 89px;
		height: 20px;
		margin-left: 10px;
	}


	.layer1 {
		width: 90%;
		margin: 10px auto;
	}

	.layer1 ul {
		width: 100%;
		list-style-type: none;
		margin: 0 auto;
		padding: 0;
		overflow: hidden;
		display: inline-block;
	}

	.layer1 li {
		float: left;
		width: 25%;
	}

	.layer1 li img {
		display: block;
		padding: 10px 9px;
		width: 90%;
		height: auto;
		margin: 0 auto;
	}

	.layer1 li p {
		text-align: center;
		font-size: 12px;
	}

	.layer2 {
		width: 100%;
	}

	.layer2 ul {
		width: 95%;
		;
		margin: 0 auto;
		overflow: hidden;
		border: 1px solid #32b16c;
		padding: 16px 0px 16px 90px;
		position: relative;
		z-index: 0;
		margin-top: -105px;
	}

	.layer2 li {
		height: 29px;
	}

	.layer2 li a {
		display: block;
		color: #000000;
		text-align: left;
		padding: 10px 0px;
		font-size: 12px;
	}

	.layer2 li a:hover {
		color: #C3AA6A;
	}

	.layer2 .xuesheng {
		width: 20%;
		height: auto;
		position: relative;
		z-index: 9999;
	}

	.layer2 .xuesheng img {
		width: 100%;
		height: auto;
	}

	.layer3 {
		width: 100%;
	}

	.layer3 li {
		height: 95px;
		margin: 10px;
		padding: 5px;
	}

	.layer3 li span {
		width: 20%;
		height: 50px;
		margin: 15px;
		line-height: 30px;
		font-size: 20px;
		padding-left: 10px;
	}

	.layer3 li h1 {
		font-size: 20px;
	}

	.layer3 li p {
    color: #b7efc2;
  }

	.layer4 {
		width: 100%;
	}

	.layer4 li span {
		width: 21%;
		line-height: 30px;
		font-size: 12px;
		padding-top: 30px;
	}

	.layer4 li .right {
		width: 79%;
		padding-left: 20px;
	}

	.layer4 li .right .bottom {
		padding-bottom: 10px;
	}

	.layer4 li .right .bottom img {
		width: 30px;
		height: auto;
	}

	.layer4 li .right img {
		width: 100%;
	}

	.layer4 li button.ywc {
		border-radius: 10px;
		width: 100px;
		height: 35px;
		margin-right: 10px;
	}

	.layer4 li button.wwc {
		border-radius: 10px;
		width: 100px;
		height: 35px;
		margin-right: 10px;
	}
}

</style>