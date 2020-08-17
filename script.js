const arrowButton = document.getElementById("arrow");
const itemsArr = document.querySelectorAll(".item");

let containerHeight = calculateHeight(itemsArr);

function calculateHeight(items) {
  return items.length * 90;
}

let scene = new Scene(
  {
    ".container": [
      {
        transform: "scale(.7)",
        opacity: 0,
      },

      {
        transform: "scale(1)",
        opacity: 1,
      },
    ],
  },
  {
    selector: true,
    easing: Scene.EASE_IN_OUT,
    duration: 1,
  }
).playCSS();

let scene2 = new Scene(
  {
    ".container": {
      0.3: {
        transform: "scale(1)",
        height: "15%",
        opacity: 1,
      },
      1: {
        height: `${containerHeight}px`,
      },
    },
    ".items-container": {
      0.8: {
        opacity: 0,
      },

      0.95: {
        opacity: 1,
      },
    },
    ".item": function (i) {
      return {
        1: {
          opacity: 0,
        },
        1.2: {
          opacity: 1,
        },
        options: {
          delay: i * 0.3,
        },
      };
    },
    "#arrow": {
      0.1: { transform: "rotate(0deg)" },
      0.4: { transform: "rotate(180deg)" },
    },
  },
  { easing: Scene.EASE_IN_OUT, selector: true }
);

arrowButton.addEventListener("click", () => {
  if (scene2.getDirection() === "normal") {
    scene2.playCSS();
    scene2.setDirection("reverse");
  } else {
    scene2.playCSS();
    scene2.setDirection("normal");
  }
});
