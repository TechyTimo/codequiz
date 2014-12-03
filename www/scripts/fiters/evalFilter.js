angular.module("codeQuiz")
  .filter('eval', function () {
    return function (input) {
      if (/^if/.test(input)) {
        input = input.replace('if(', '').replace(')', '');
        input = 'new Boolean(' + input + ')';
      }
      else if (typeof(input) == "object") {
      	return input[1];
      }
      return (input)?eval(input).toString():'undefined';
    };
  });