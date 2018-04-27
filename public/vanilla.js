console.time("vanilla");
function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function(){
  document.querySelectorAll('[data-action="hello"]').forEach(
    function(elem) {
      elem.addEventListener(
        'click',
        function() {
          var name = this.parentNode
                     .querySelector('[data-target="hello.name"]')
                     .value;
          console.log("Hello, " + name + "!");
        }
      );
    }
  );

  // document.querySelector('[data-action="hello"]').click()
  console.timeEnd("vanilla");
});
