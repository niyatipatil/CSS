document.addEventListener("DOMContentLoaded", function () {
  const menuItems = document.querySelectorAll(".menu li a");

  menuItems.forEach((item) => {
    item.addEventListener("click", function () {
      menuItems.forEach((item) =>
        item.parentElement.classList.remove("active")
      );
      this.parentElement.classList.add("active");
    });
  });
});
