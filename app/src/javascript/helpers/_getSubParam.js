 var getSubParameter = function(str, start, end) {
     var exp;
     var regex;
     if (start === '') {
         exp = "(.*(?=" + end + "))";

     } else if (end === '') {
         exp = "((?<=" + start + ").*)";
     } else {
         exp = "(?<=" + start + ")(.*)(?=" + end + "))";
     }
     exp = exp.replace(/"'"/g, '');
     regex = new RegExp(exp);

     return regex.exec(str);
 };