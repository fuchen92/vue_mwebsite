var express = require('express');
var router = express.Router();

var newsList = require("./newslist.json");
var newsList2 = require("./newslist2.json");
//对所有新闻的get进行mock
router.get('/news', function (req, res, next) {
	//响应mock数据
	res.json(newsList);
});

router.get("/news2", function (req, res, next) {
	res.json(newsList2);
})

module.exports = router;
