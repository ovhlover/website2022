window.addEventListener("load", () => {
  const hero = document.querySelector("#null");
  const icons = document.querySelectorAll(".icons");
  const wlcm = document.querySelector("#wlcm");

  const tl = new TimelineMax();

  tl.fromTo(hero, 1, { y: "-60%" }, { y: "0%" });
  tl.fromTo(icons, 1, { x: "-70%" }, { x: "0%" }, "-= 1");
  tl.fromTo(
    wlcm,
    1.5,
    { x: "-70%", opacity: 0 },
    { x: "0%", opacity: 1 },
    "-= 1"
  );
});
