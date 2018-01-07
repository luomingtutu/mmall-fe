/**
 * Created by Administrator on 2018/1/6/006.
 */
require('./index.css');
var _mm = require('util/utils.js');
var _user = require('service/user-service.js');
var _cart = require('service/cart-service.js');
var navTop = {
    init : function(){
        this.bindEvent();
        this.loadUserInfo();
        this.loadCartCont();

        return this;
    },
    bindEvent : function () {
        $('.js-login').click(function () {
            _mm.doLogin();
        });
        $('.js-register').click(function () {
            window.location.href = './register.html';
        });
        $('.js-logout').click(function () {
            _user.logout(function (res) {
                window.location.reload();
            }, function (errMsg) {
                _mm.errorTips(errMsg);
            })
        })
    },
    loadUserInfo : function () {
        _user.checkLogin(function (res) {
            $('.not-login').hide().siblings('login').show().find('.username').text(res.username);
        }, function (errMsg) {
            //no
        })
    },
    loadCartCont : function () {
        _cart.getCartCont(function (res) {
            $('.nav .cart-count').text(res || 0);
        }, function (errMsg) {
            $('.nav .cart-count').text(0);
        })
    }
}

module.exports = navTop.init();