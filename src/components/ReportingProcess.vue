<template>
  <div class="reportingprocess">
    <div class="layer4">
			<h2>我的报道情况</h2>
			<h4>My Report</h4>
			<ul>
				<li><span>01 财务缴费</span>
					<div class="right">
						<p>普通通道</p>
						<p>绿色通道</p>
						<div class="bottom"><img src="../assets/images/ywc.png" /> 1/1<button class="ywc">已完成</button></div>
					</div>
					<div class="clear"></div>
				</li>
				<li><span>02 院系报道</span>
					<div class="right">
						<p>进入报道</p>
						<div class="bottom"><img src="../assets/images/wwc.png" /> 0/1<button class="wwc">未完成</button></div>
					</div>
					<div class="clear"></div>
				</li>
				<li><span>03 领取物品</span>
					<div class="right">
						<p>图像采集</p>
						<p>领取军训服</p>
						<p>领取钥匙</p>
						<div class="bottom"><img src="../assets/images/ywc.png" /> 1/3<button class="wwc">未完成</button></div>
					</div>
					<div class="clear"></div>
				</li>
				<li><span>04 报道完成</span>
					<div class="right"><img src="../assets/images/huanying.png" /></div>
					<div class="clear"></div>
				</li>
			</ul>
		</div>
  </div>
</template>

<style lang='scss'>
@import "@/assets/styles/media_common.scss";

* {
    box-sizing: border-box;
}
body {
    background: url(../assets/images/bg.jpg);
    background-size: cover;
}

.clear {
    clear: both;
}

.layer4 {
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
        height: auto;
        background-color: #32b16c;
        border: 1px solid #32b16c;
        margin: 10px;
        span {
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
        .right {
            width: 84%;
            background-color: #fff;
            float: left;
            padding-left: 20px;
            .bottom {
                padding-bottom: 10px;
                img {
                    width: 30px;
                    height: auto;
                }
            }
        }
        p {
            color: #000;
        }
        button {
            &.ywc {
                background-color: #32b16c;
                border-radius: 10px;
                width: 100px;
                height: 35px;
                border: 1px solid #32b16c;
                color: #000;
                float: right;
                margin-right: 10px;
            }
            &.wwc {
                background-color: #989898;
                border-radius: 10px;
                width: 100px;
                height: 35px;
                border: 1px solid #989898;
                color: #000;
                float: right;
                margin-right: 10px;
            }
        }
    }
}
</style>