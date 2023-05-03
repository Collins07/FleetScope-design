console.log(45)

// clear input fields on page load
window.onload = function() {
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";
  }

  // clear input fields on focus
  document.getElementById("username").addEventListener("focus", function() {
    this.value = "";
  });

  document.getElementById("password").addEventListener("focus", function() {
    this.value = "";
  });