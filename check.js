//全局变量
var loop = true;
var sdy_submit = true;

//验证文案
var checkTexts = {
    notempty: "此处不能为空",
    minlen: "字符长度不能小于",
    maxlen: "字符长度不能大于",
    betweenlen: "字符长度必须大于",
    email: "请填写正确的邮箱地址",
    int: "该字符必须为整数",
    zint: "该字符必须为正整数",
    num: "该字符必须为数字",
    float: "该字符必须为小数",
    zfloat: "该字符必须为正浮点数",
    zfloat_zero: "该字符必须为非负浮点数",
    zip: "请填写正确的邮政编码",
    url: "请填写正确的链接",
    cn: "请填写正确的中文字符",
    date: "请填写正确的日期格式",
    mobile: "请填写正确的手机格式",
    tel: "请填写正确的座机格式",
    tel_mobile: "请填写正确的手机或座机格式",
    letter: "此处只能填写字母",
    letter_l: "此处只能填写小写字母",
    letter_u: "此处只能填写大写字母",
    qq: "请填写正确的QQ号",
    num_letter: "此处只能填写英文字母、数字、下划线",
    numletter: "此处只能填写英文字母、数字",
    cnnumletter: "此处只能填写中文、英文字母、数字",
    notequal: "不能为",
}

//正则
var checkRegexs = {
    decmal: "^([+-]?)\\d*\\.\\d+$", //浮点数
    positiveDecmal: "^(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*))$", //正浮点数
    negativeDecmal: "^(-(([0-9]+\\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\\.[0-9]+)|([0-9]*[1-9][0-9]*)))$", //负浮点数
    positiveDecmalAndZero: "^\\d+(\\.\\d+)?$", //非负浮点数（正浮点数 + 0）
    decmal3: "^-?([1-9]\\d*.\\d*|0.\\d*[1-9]\\d*|0?.0+|0)$", //浮点数
    decmal5: "^((-\\d+(\\.\\d+)?)|(0+(\\.0+)?))$", //非正浮点数（负浮点数 + 0）
    integer: "^-?[1-9]\\d*$", //整数
    positiveInteger: "^[1-9]\\d*$", //正整数
    negativeInteger: "^-[1-9]\\d*$", //负整数
    num: "^([+-]?)\\d*\\.?\\d+$", //数字
    num1: "^[1-9]\\d*|0$", //正数（正整数 + 0）
    num2: "^-[1-9]\\d*|0$", //负数（负整数 + 0）
    ascii: "^[\\x00-\\xFF]+$", //仅ACSII字符
    chinese: "^[\\u4e00-\\u9fa5]+$", //仅中文
    color: "^[a-fA-F0-9]{6}$", //颜色
    date: "^\\d{4}(\\-|\\/|\.)\\d{1,2}\\1\\d{1,2}$", //日期
    email: "^\\w+((-\\w+)|(\\.\\w+))*\\@[A-Za-z0-9]+((\\.|-)[A-Za-z0-9]+)*\\.[A-Za-z0-9]+$", //邮件
    idcard: "^[1-9]([0-9]{14}|[0-9]{17})$", //身份证
    ip4: "^(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)$", //ip地址
    letter: "^[A-Za-z]+$", //字母
    letter_l: "^[a-z]+$", //小写字母
    letter_u: "^[A-Z]+$", //大写字母
    mobile: "^0?(13|15|17|18|14)[0-9]{9}$", //手机
    tel: "^[0-9\-()（）]{7,18}$", //电话号码的函数(包括验证国内区号,国际区号,分机号)
    notempty: "^\\S+$", //非空
    password: "^.*[A-Za-z0-9\\w_-]+.*$", //密码
    fullNumber: "^[0-9]+$", //数字
    picture: "(.*)\\.(jpg|bmp|gif|ico|pcx|jpeg|tif|png|raw|tga)$", //图片
    qq: "^[1-9][0-9]{4,10}$", //QQ号码
    rar: "(.*)\\.(rar|zip|7zip|tgz)$", //压缩文件
    url: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$", //url
    username: "^[A-Za-z0-9_\\-\\u4e00-\\u9fa5]+$", //户名
    deptname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$", //单位名
    zip: "^\\d{6}$", //邮编
    realname: "^[A-Za-z\\u4e00-\\u9fa5]+$", // 真实姓名
    companyname: "^[A-Za-z0-9_()（）\\-\\u4e00-\\u9fa5]+$",
    companyaddr: "^[A-Za-z0-9_()（）\\#\\-\\u4e00-\\u9fa5]+$",
    companysite: "^http[s]?:\\/\\/([\\w-]+\\.)+[\\w-]+([\\w-./?%&#=]*)?$",
    number_letter: "^[0-9a-zA-Z\_]+$",
    numberletter: "^[0-9a-zA-Z]+$",
    cnnumberletter: "^[0-9a-zA-Z\u4e00-\u9fa5]+$",

};


// 验证规则
var checkRules = {
    isNull: function(str) {
        return $.trim(str) == "";
    },
    minLen: function(str, len) {
        return $.trim(str).length < parseInt(len);
    },
    maxLen: function(str, len) {
        return $.trim(str).length > parseInt(len);
    },
    betweenLen: function(str, begin, end) {
        return (str.length >= begin && str.length <= end);
    },
    isEmail: function(str) {
        return new RegExp(checkRegexs.email).test(str);
    },
    isInt: function(str) {
        return new RegExp(checkRegexs.integer).test(str);
    },
    isPositiveInt: function(str) {
        return new RegExp(checkRegexs.positiveInteger).test(str);
    },
    isNum: function(str) {
        return new RegExp(checkRegexs.num).test(str);
    },
    isZip: function(str) {
        return new RegExp(checkRegexs.zip).test(str);
    },
    isDecmal: function(str) {
        return new RegExp(checkRegexs.decmal).test(str);
    },
    isPositiveDecmal: function(str) {
        return new RegExp(checkRegexs.positiveDecmal).test(str);
    },
    isNegativeDecmal: function(str) {
        return new RegExp(checkRegexs.negativeDecmal).test(str);
    },
    isPositiveDecmalAndZero: function(str) {
        return new RegExp(checkRegexs.positiveDecmalAndZero).test(str);
    },
    isUrl: function(str) {
        return new RegExp(checkRegexs.url).test(str);
    },
    isCn: function(str) {
        return new RegExp(checkRegexs.chinese).test(str);
    },
    isDate: function(str) {
        return new RegExp(checkRegexs.date).test(str);
    },
    isMobile: function(str) {
        return new RegExp(checkRegexs.mobile).test(str);
    },
    isTel: function(str) {
        return new RegExp(checkRegexs.tel).test(str);
    },
    isLetter: function(str) {
        return new RegExp(checkRegexs.letter).test(str);
    },
    isLetterL: function(str) {
        return new RegExp(checkRegexs.letter_l).test(str);
    },
    isLetterU: function(str) {
        return new RegExp(checkRegexs.letter_u).test(str);
    },
    isQQ: function(str) {
        return new RegExp(checkRegexs.qq).test(str);
    },
    isNumber_Letter: function(str) {
        return new RegExp(checkRegexs.number_letter).test(str);
    },
    isNumberLetter: function(str) {
        return new RegExp(checkRegexs.numberletter).test(str);
    },
    isCnNumberLetter: function(str) {
        return new RegExp(checkRegexs.cnnumberletter).test(str);
    },
    notEqual: function(str, val) {
        return $.trim(str) != val;
    },
    fullNumberName: function(str) {
        return new RegExp(checkRegexs.fullNumber).test(str);
    },
    isPwd: function(str) {
        return /^.*([\W_a-zA-z0-9-])+.*$/i.test(str);
    },
    isPwdRepeat: function(str1, str2) {
        return (str1 == str2);
    },
    checkType: function(element) {
        return (element.attr("type") == "checkbox" || element.attr("type") == "radio" || element.attr("rel") == "select");
    },
    simplePwd: function(str) {
        return pwdLevel(str) == 1;
    }
};


function insertTip(obj, val, location, msg, tclass){

    //如果不是必填项 且 非必填项没有值
    if(!$(obj).is("[check*=required]") && val == ""){
        if(location){
            $("#" + location).removeClass();
        }else{
            if($(obj).next(".sdy-tip").length > 0){
                $(obj).next(".sdy-tip").remove();
            } 
        } 
        return false;
    }

    var span = '<span class="sdy-tip ' + tclass + '">' + msg + '</span>';
    //如果提示有自定义位置
    if(location){
        var loc = $("#" + location);
        if(loc.is(".sdy-tip")){
            loc.removeClass();
        }
        loc.addClass("sdy-tip " + tclass).text(msg).show();
    }else{
        if($(obj).next(".sdy-tip").length > 0){
            $(obj).next(".sdy-tip").replaceWith(span);
        }else{
            $(obj).after(span);
        }
    }   
}

function switchBack(isChecked, obj, type, val, params){
    if(isChecked){
        insertTip(obj, val, params.location, "", "correct");
        loop = true;
        //sdy_submit = true;
    }else{
        if(params.val){
            var msg = params.msg ? params.msg : checkTexts[type] + params.val;
        }else if(params.begin){
            var msg = params.msg ? params.msg : "字符长度必须大于等于" + params.begin + "，小于等于" + params.end;
        }else{
            var msg = params.msg ? params.msg : checkTexts[type];
        }
        insertTip(obj, val, params.location, msg, "error");
        loop = false;
        sdy_submit = false;
    }
}

//根据类型验证，返回true或false
function switchType(obj, type, val, params){
    var isChecked;
    switch(type){
        case "notempty":
            isChecked = !checkRules.isNull(val);
            break;
        case "minlen": 
            isChecked = !checkRules.minLen(val, params.val);
            break;
        case "maxlen": 
            isChecked = !checkRules.maxLen(val, params.val);
            break;
        case "betweenlen": 
            isChecked = checkRules.betweenLen(val, params.begin, params.end);
            break;
        case "email": 
            isChecked = checkRules.isEmail(val);
            break;
        case "int":   
            isChecked = checkRules.isInt(val);
            break;
        case "zint": 
            isChecked = checkRules.isPositiveInt(val);
            break;
        case "num": 
            isChecked = checkRules.isNum(val);
            break;
        case "zip":   
            isChecked = checkRules.isZip(val);
            break;
        case "float": 
            isChecked = checkRules.isDecmal(val);
            break;
        case "zfloat": 
            isChecked = checkRules.isPositiveDecmal(val);
            break;
        case "zfloat_zero": 
            isChecked = checkRules.isPositiveDecmalAndZero(val);
            break;
        case "url": 
            isChecked = checkRules.isUrl(val);
            break;
        case "cn": 
            isChecked = checkRules.isCn(val);
            break;
        case "date": 
            isChecked = checkRules.isDate(val);
            break;
        case "mobile": 
            isChecked = checkRules.isMobile(val);
            break;
        case "tel": 
            isChecked = checkRules.isTel(val);
            break;
        case "tel_mobile": 
            isChecked = checkRules.isTel(val) || checkRules.isMobile(val);
            break;
        case "letter": 
            isChecked = checkRules.isLetter(val);
            break;
        case "letter_l": 
            isChecked = checkRules.isLetterL(val);
            break;
        case "letter_u": 
            isChecked = checkRules.isLetterU(val);
            break;
        case "qq": 
            isChecked = checkRules.isQQ(val);
            break;
        case "num_letter": 
            isChecked = checkRules.isNumber_Letter(val);
            break;
        case "numletter": 
            isChecked = checkRules.isNumberLetter(val);
            break;
        case "cnnumletter": 
            isChecked = checkRules.isCnNumberLetter(val);
            break;
        case "notequal": 
            isChecked = checkRules.notEqual(val, params.val);
            break;
        default:
          return;
    };
    switchBack(isChecked, obj, type, val, params);
}

function checkVal(obj){
    //当前值
    var val;
    if($(obj).attr("type") == "checkbox" || $(obj).attr("type") == "radio"){
        var name = $(obj).attr("name");
        var checkeds =  $("input[name=" + name + "]:checked");
        val = checkeds.length ? checkeds.length : "";
    }else{
        val =  $(obj).val();
    }
     
    //处理多种验证类型，结果为：["notempty[msg=用户名不能为空]","minlen[val=10,msg=最小长度为10]"]
    var arrays = $(obj).attr("check").toString().split(";");
    for(var i in arrays){
        if(arrays[i] != ""){
            //获取验证类型，如：notempty，email
            var type = arrays[i].toString().split("[")[0];
            if(type == "required"){
                continue;
            }
            //获取验证参数字符串，如：["msg=用户名不能为空","val=2"]
            var str_params = arrays[i].toString().split("[")[1];
            //参数数组：params = ["msg":"用户名不能为空", "val":"2"]
            var params = {};
            if(str_params){
                var arr_params = str_params.slice(0,-1).toString().split(",");
                for(var i in arr_params){
                    var s_arrs = arr_params[i].toString().split("=");
                    params[s_arrs[0]] = s_arrs[1];
                }
            }

            switchType(obj, type, val, params);
            if(!loop){
                break;
            }
            
        }
    }
};

function sdyCheckSubmit(){
    sdy_submit = true;

    //当前页面有1个以上的Form需要验证时，参数形式：'#sdyForm'
    var formId = arguments[0] ? arguments[0] : "";

    //提交表单时对"必填、没有隐藏、不为空有值的input、textarea"验证
     $(formId + " input[type=text], textarea").filter("[check]:visible").filter(function(index){
        return $(this).is("[check*=required]") || $(this).val() != "";
     }).trigger("blur");
     //提交表单时对"必填的checkbox、select"验证，
     //"checkbox、select"只有noempty的验证，如果不是必填，意味着可为空，提交时不需要再验证
    $(formId + " input[type=checkbox], input[type=radio], select").filter("[check*=required]:visible").trigger("change");
    $("span.error:first").prev(":input").focus();
    return sdy_submit;
}

$(function(){
    $("input[type=text][check], textarea[check]").live("blur",function(){
        checkVal(this);
    });

    $("input[type=checkbox][check], input[type=radio][check], select[check]").live("change",function(){
        checkVal(this);
    });
        
});
