//获取URL参数
function getUrlParam(name) {  
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");  
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) {  
        return unescape(r[2]);  
    }  
    return null;  
} 

//排序
function sortBy(filed, rev, primer) {  
    rev = (rev) ? -1 : 1;  
    return function (a, b) {  
        a = a[filed];  
        b = b[filed];  
        if (typeof(primer) != 'undefined') {  
            a = primer(a);  
            b = primer(b);  
        }  
        if (a < b) {  
            return rev * -1;  
        }  
        if (a > b) {  
            return rev * 1;  
        }  
        return 1;  
    }  
}  

//字符串编码
function htmlEncodeByRegExp(str) {
	var s = "";
	if (!str || str.length == 0)
		return "";
	s = str.replace(/&/g, "&amp;");
	s = s.replace(/</g, "&lt;");
	s = s.replace(/>/g, "&gt;");
	s = s.replace(/ /g, "&nbsp;");
	s = s.replace(/\'/g, "&#39;");
	s = s.replace(/\"/g, "&quot;");
	return s;
}
