function handleOnClick() {
  document.getElementsByClassName("mobNav").length > 0
    ? document.getElementsByTagName("Nav")[0].classList.remove("mobNav")
    : document.getElementsByTagName("Nav")[0].classList.add("mobNav");
}
