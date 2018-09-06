 var getSubParameter = function(str) {
     var regex = new RegExp(/(?<=-pid-)(.*)(?=-ml_count)/);
     return regex.exec(str);
 };