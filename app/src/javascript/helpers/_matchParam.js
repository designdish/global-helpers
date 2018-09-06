 var matchParam = function(str) {
     var param = getParameterByName(str),
         cookie = getCookie(str);
     if (param === cookie) {
         return true;
     }
     if (cookie.indexOf(param) != -1) {
         return true;
     } else {
         return false;
     }
 };