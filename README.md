表单验证库 Check.js
========

    #此处不能为空
    <input type="text" id="ceshi" check="required;notempty">
    
    此处不能为空，自定义提示文字	
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
