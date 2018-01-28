//Business Logic
function palindromeTest (a) {
  var testPhrase = a.split("");
  for (var i=0; i<=testPhrase.length; i+=1) {
    if (testPhrase[i]!==testPhrase[testPhrase.length-(i+1)]) {
      return "Not a Palindrome!";
    } else {
    };
  };
  return "Palindrome!"
};

//User Interface
$(document).ready(function() {
  $("#palindromeInput").submit(function(event) {
  event.preventDefault();
  var wordToTest = $("#wordOrPhrase").val();
  var palindromeOrNot = palindromeTest(wordToTest);
  $("#output").html(palindromeOrNot);
  });
});
