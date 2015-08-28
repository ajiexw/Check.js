表单验证库 Check.js
========

此处不能为空
    <input type="text" id="ceshi" check="required;notempty">
    
    //此处不能为空，自定义提示文字	
    <input type="text" check="required;notempty[msg=用户名不能为空]">
    
    此处不能为空；最少字符数5个	
    <input type="text" check="notempty[msg=用户名不能为空];minlen[val=5]">

    字符长度必须大于或等于x	
    <input type="text" check="minlen[val=5]">

    字符长度必须小于或等于x	
    <input type="text" check="maxlen[val=5]">

    字符长度必须小于或等于x，不能为空	
    <input type="text" check="notempty;maxlen[val=5]">

    字符长度必须大于a，小于b	
    <input type="text" check="betweenlen[begin=3,end=6]">

    请填写正确的邮箱地址	
    <input type="text" check="email">

    该字符必须为整数	
    <input type="text" check="int">

    该字符必须为正整数	
    <input type="text" check="zint">
    
    该字符必须为正整数，提示文字	
    <input type="text" check="zint[msg=商品价格必须为正整数]">
    
    该字符必须为数字	
    <input type="text" check="num">
    
    该字符必须为小数	
    <input type="text" check="float">
    
    该字符必须为正浮点数	
    <input type="text" check="zfloat">
    
    该字符必须为非负浮点数	
    <input type="text" check="zfloat_zero">
    
    请填写正确的链接	
    <input type="text" check="url">
    
    请填写正确的中文格式	
    <input type="text" check="cn">
    
    请填写正确的日期格式	
    <input type="text" check="date">
    
    请填写正确的手机格式	
    <input type="text" check="mobile">
    
    请填写正确的座机格式	
    <input type="text" check="tel">
    
    请填写正确的手机或座机格式	
    <input type="text" check="tel_mobile">
    
    此处只能填写字母	
    <input type="text" check="letter">
    
    此处只能填写小写字母	
    <input type="text" check="letter_l">
    
    此处只能填写大写字母	
    <input type="text" check="letter_u">
    
    请填写正确的QQ号	
    <input type="text" check="qq">
    
    此处只能填写英文字母、数字、下划线	
    <input type="text" check="num_letter">
    
    请此处只能填写英文字母、数字	
    <input type="text" check="numletter">
    
    此处只能填写中文、英文字母、数字	
    <input type="text" check="cnnumletter">
    
    不能等于-1	
    <input type="text" check="notequal[val=-1]">
    
    此处不能为空，字符长度必须大于或等于	
    <textarea check="notempty[msg=产品介绍不能为空];minlen[val=20]"></textarea>
    
    表单提交时checkbox必须选中	
    <input type="checkbox" name="agreement" check="required;notempty[location=agreeid,msg=请接受服务条款]">
    我已阅读并同意《啥都有用户注册协议》
    <span id="agreeid"></span>
    
    checkbox不能为空	
    <input type="checkbox" name="companyType" check="required;notempty[location=companyType,msg=企业类型不能为空]"> 国有
    <input type="checkbox" name="companyType" check="required;notempty[location=companyType,msg=企业类型不能为空]"> 民营
    <span id="companyType"></span>
    
    表单提交时radio必须有值	
    <input type="radio" name="sex" check="required;notempty[location=sex]">  男
    <input type="radio" name="sex" check="required;notempty[location=sex]">  女
    <span id="sex"></span>
    
    select不能为空	
    性别：
    <select check="notempty[msg=性别不能为空]">
        <option value="">请选择</option>
        <option value="2">1</option>
        <option value="2">2</option>
    </select>
    
    select不能为空	
    <select check="notequal[msg=性别不能为空,val=0]">
        <option value="0">请选择</option>
        <option value="2">1</option>
        <option value="2">2</option>
    </select>
    
    密码验证	
    <input type="password" class="mid" check="required;pwd1">
    <input type="password" class="mid" check="required;pwd2">
