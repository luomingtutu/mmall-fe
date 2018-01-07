/**
 * Created by Administrator on 2018/1/7/007.
 */
var _mm = require('util/utils.js');

var _user = {
    logout : function (reslove, object) {
        _mm.request({
            url :  _mm.getServerUrl('/user/login.do'),
            method : 'POST',
            success : reslove,
            error : object
        })
    },
    //检查登录状态
    checkLogin : function (reslove, object) {
        _mm.request({
            url: _mm.getServerUrl('/user/get_user_info.do'),
            //method: 'POST',
            success: reslove,
            error: object
        })
    }
}