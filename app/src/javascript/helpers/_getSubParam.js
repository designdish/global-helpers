 var getSubParameter = function(str, start, end) {
     var regex = new RegExp('/(?<=' + start + ')(.*)(?=' + end + ')/');
     return regex.exec(str);
 };