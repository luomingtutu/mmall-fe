/**
 * Created by Administrator on 2018/1/7/007.
 */
var _mm = require('util/utils.js');

var _cart = {
    //检查登录状态
    getCartCont : function (reslove, object) {
        _mm.request({
            url: _mm.getServerUrl('/cart/get_cart_product_count.do'),
            success: reslove,
            error: object
        })
    }
}