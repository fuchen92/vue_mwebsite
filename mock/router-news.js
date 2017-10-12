var express = require('express');
var router = express.Router();

var newsList = require("../newslist.json");
//对所有新闻的get进行mock
router.get('/news', function (req, res, next) {
	//响应mock数据
	res.json(newsList);
});

module.exports = router;
