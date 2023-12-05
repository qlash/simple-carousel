document.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector('.next').addEventListener('click', function() {
    document.querySelector('.slide-wrapper').scrollBy({
      left: 210,
      behavior: "smooth",
    })
  })

  document.querySelector('.prev').addEventListener('click', function() {
    document.querySelector('.slide-wrapper').scrollBy({
      left: -210,
      behavior: "smooth",
    })
  })
})
