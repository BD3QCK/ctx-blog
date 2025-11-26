var newDiv=document.createElement("div");newDiv.innerHTML=`

      <span id="time"></span>

      <script src="/js/time.js"></script>

      `,document.addEventListener("DOMContentLoaded",function(){var e=document.getElementsByClassName("statistics")[0],n=document.getElementsByClassName("beian")[0];console.log(e),console.log(n),e&&n&&e.parentNode.insertBefore(newDiv,n)});