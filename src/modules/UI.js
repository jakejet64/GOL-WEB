import iro from "@jaames/iro";
import Board from "./Board.js";
// imported color picker
import StyleSet from "./StyleSet.js";
import Style from "./Style.js";

export default class UI {
  static board = new Board(
    50,
    Math.round(window.innerWidth / (window.innerHeight / 50))
  );

  static rowColLock = true;

  static playbackSpeed = 1050 - 475;

  static timer = setInterval(() => {
    this.board.stepForward();
    UI.drawBoard();
  }, this.playbackSpeed);

  static playing = true;

  static colorPicker = new iro.ColorPicker("#picker");

  static currentColorBeingPicked = "none";

  static styles = new StyleSet();

  static loadHomepage() {
    UI.addDefaultStyles();
    UI.loadSavedStyles();

    UI.adjustCSSRowsCols();
    UI.addWindowResizeEventListener();
    UI.drawBoard();
    UI.addPlaybackMenuListeners();
    UI.addResizeMenuListeners();
    UI.addStyleMenuListeners();
  }

  static addDefaultStyles() {
    this.styles.addStyle(
      new Style(
        "rgb(214, 142, 7)",
        "rgb(255, 255, 255)",
        "rgb(149, 149, 149)",
        "5px"
      )
    );
    this.styles.addStyle(
      new Style("rgb(214, 142, 70)", "rgb(0, 0, 0)", "rgb(19, 149, 149)", "2px")
    );
    this.styles.addStyle(
      new Style(
        "rgb(21, 142, 7)",
        "rgb(100, 100, 100)",
        "rgb(149, 19, 149)",
        "10px"
      )
    );
  }

  static loadSavedStyles() {
    const stylesMenu = document.querySelector(".stylesMenu");
    stylesMenu.textContent = "";
    this.styles.getStyles().forEach((style) => {
      const background = document.createElement("div");
      background.setAttribute(
        "style",
        `
                height: 50px;
                width: 50px;
                background-color: ${style.getBackground()};
                display: flex;
                align-items: center;
                justify-content: center;
            `
      );
      const cell = document.createElement("div");
      cell.setAttribute(
        "style",
        `
                height: 35px;
                width: 35px;
                border: 1px solid ${style.getSecondary()};
                border-radius: ${style.getRadius()};
                background-color: ${style.getPrimary()};
            `
      );
      background.appendChild(cell);
      stylesMenu.appendChild(background);
    });
    UI.addStylesMenuListeners();
  }

  static addStylesMenuListeners() {
    const root = document.documentElement;
    const styleDivs = document.querySelectorAll(".stylesMenu > div");
    styleDivs.forEach((styleDiv) => {
      styleDiv.addEventListener("click", () => {
        root.style.setProperty(
          "--background-color",
          styleDiv.style.backgroundColor
        );
        root.style.setProperty(
          "--primary-color",
          styleDiv.children[0].style.backgroundColor
        );
        root.style.setProperty(
          "--secondary-color",
          styleDiv.children[0].style.borderColor
        );
        root.style.setProperty(
          "--border-radius",
          styleDiv.children[0].style.borderRadius
        );
      });
    });
  }

  static addStyleMenuListeners() {
    // open the style menu
    document
      .querySelector(".openStyleMenu .open")
      .addEventListener("click", () => {
        document
          .querySelector(".openStyleMenu .open")
          .classList.add("inactive");
        document
          .querySelector(".openStyleMenu .close")
          .classList.remove("inactive");
        document.querySelector(".styleMenu").classList.add("open");
        document.querySelector(".stylesMenu").classList.remove("inactive");
      });
    // close the style menu
    document
      .querySelector(".openStyleMenu .close")
      .addEventListener("click", () => {
        document
          .querySelector(".openStyleMenu .close")
          .classList.add("inactive");
        document
          .querySelector(".openStyleMenu .open")
          .classList.remove("inactive");
        document.querySelector(".styleMenu").classList.remove("open");
        if (this.currentColorBeingPicked != "none") {
          document
            .querySelector(`.${this.currentColorBeingPicked}`)
            .classList.remove("selected");
          this.currentColorBeingPicked = "none";
          document.querySelector(".colorPickerUI").classList.add("inactive");
        }
        document.querySelector(".stylesMenu").classList.add("inactive");
      });
    // border radius adjustment
    document
      .querySelector('input[name="borderRadius"]')
      .addEventListener("input", (e) => {
        const root = document.documentElement;
        root.style.setProperty("--border-radius", `${e.target.value}px`);
      });
    // click on a color to change
    document
      .querySelectorAll(".primaryColor, .secondaryColor, .backgroundColor")
      .forEach((element) =>
        element.addEventListener("click", (e) => {
          if (this.currentColorBeingPicked == "none") {
            const selection = e.target.parentNode.parentNode.classList[0];
            this.currentColorBeingPicked = selection;
            document
              .querySelector(`.${this.currentColorBeingPicked}`)
              .classList.add("selected");
            document
              .querySelector(".colorPickerUI")
              .classList.remove("inactive");
            UI.setColorPickerColor();
          }
        })
      );
    // color picker cancel button
    document
      .querySelector(".colorPickerUI .cancel")
      .addEventListener("click", () => {
        document
          .querySelector(`.${this.currentColorBeingPicked}`)
          .classList.remove("selected");
        this.currentColorBeingPicked = "none";
        document.querySelector(".colorPickerUI").classList.add("inactive");
      });
    // color picker submit button
    document
      .querySelector(".colorPickerUI .submit")
      .addEventListener("click", () => {
        document
          .querySelector(`.${this.currentColorBeingPicked}`)
          .classList.remove("selected");
        document.querySelector(".colorPickerUI").classList.add("inactive");
        UI.pickColor();
        this.currentColorBeingPicked = "none";
      });
    // new saved style button
    document.querySelector(".saveStyle").addEventListener("click", () => {
      const root = document.documentElement;
      const newStyle = new Style(
        getComputedStyle(root).getPropertyValue("--primary-color"),
        getComputedStyle(root).getPropertyValue("--secondary-color"),
        getComputedStyle(root).getPropertyValue("--background-color"),
        getComputedStyle(root).getPropertyValue("--border-radius")
      );
      this.styles.addStyle(newStyle);
      UI.loadSavedStyles();
    });
  }

  static setColorPickerColor() {
    const root = document.documentElement;
    let newColor;

    if (this.currentColorBeingPicked == "primaryColor") {
      newColor = getComputedStyle(root).getPropertyValue("--primary-color");
    } else if (this.currentColorBeingPicked == "secondaryColor") {
      newColor = getComputedStyle(root).getPropertyValue("--secondary-color");
    } else {
      // background color
      newColor = getComputedStyle(root).getPropertyValue("--background-color");
    }

    this.colorPicker.color.rgbString = newColor;
  }

  static pickColor() {
    const root = document.documentElement;
    const newColor = this.colorPicker.color.rgbString;

    if (this.currentColorBeingPicked == "primaryColor") {
      root.style.setProperty("--primary-color", newColor);
    } else if (this.currentColorBeingPicked == "secondaryColor") {
      root.style.setProperty("--secondary-color", newColor);
    } else {
      // background color
      root.style.setProperty("--background-color", newColor);
    }
  }

  static addResizeMenuListeners() {
    // open the resize menu
    document
      .querySelector(".openResizeMenu .open")
      .addEventListener("click", () => {
        document
          .querySelector(".openResizeMenu .open")
          .classList.add("inactive");
        document
          .querySelector(".openResizeMenu .close")
          .classList.remove("inactive");
        document.querySelector(".resizeMenu").classList.add("open");
      });
    // close the resize menu
    document
      .querySelector(".openResizeMenu .close")
      .addEventListener("click", () => {
        document
          .querySelector(".openResizeMenu .close")
          .classList.add("inactive");
        document
          .querySelector(".openResizeMenu .open")
          .classList.remove("inactive");
        document.querySelector(".resizeMenu").classList.remove("open");
      });
    // lock rows & columns
    document
      .querySelector(".locked .lockOpen")
      .addEventListener("click", () => {
        document.querySelector(".locked .lockOpen").classList.add("inactive");
        document
          .querySelector(".locked .lockClosed")
          .classList.remove("inactive");
        document
          .querySelectorAll(".colIcon, .cols")
          .forEach((element) => element.classList.add("grayedOut"));
        this.rowColLock = true;
        UI.lockBoard();
      });
    // unlock rows & columns
    document
      .querySelector(".locked .lockClosed")
      .addEventListener("click", () => {
        document.querySelector(".locked .lockClosed").classList.add("inactive");
        document
          .querySelector(".locked .lockOpen")
          .classList.remove("inactive");
        document
          .querySelectorAll(".colIcon, .cols")
          .forEach((element) => element.classList.remove("grayedOut"));
        this.rowColLock = false;
      });
    // row sizing adjustment
    document
      .querySelector('input[name="rows"]')
      .addEventListener("input", (e) => {
        const newRows = 160 - e.target.value;
        if (this.rowColLock) {
          this.board = new Board(newRows, 1);
          UI.lockBoard();
        } else {
          UI.updateRows(newRows);
        }
      });
    // col sizing adjustment
    document
      .querySelector('input[name="cols"]')
      .addEventListener("input", (e) => {
        if (!this.rowColLock) {
          UI.updateCols(160 - e.target.value);
        }
      });
  }

  static updateCols(newCols) {
    if (this.playing) {
      UI.pause();
      this.board = new Board(this.board.getRows(), newCols);
      UI.adjustCSSRowsCols();
      UI.drawBoard();
      UI.play();
    } else {
      this.board = new Board(this.board.getRows(), newCols);
      UI.adjustCSSRowsCols();
      UI.drawBoard();
    }
  }

  static updateRows(newRows) {
    if (this.playing) {
      UI.pause();
      this.board = new Board(newRows, this.board.getCols());
      UI.adjustCSSRowsCols();
      UI.drawBoard();
      UI.play();
    } else {
      this.board = new Board(newRows, this.board.getCols());
      UI.adjustCSSRowsCols();
      UI.drawBoard();
    }
  }

  static lockBoard() {
    if (this.playing) {
      UI.pause();
      this.board = new Board(
        this.board.getRows(),
        Math.round(
          window.innerWidth / (window.innerHeight / this.board.getRows())
        )
      );
      UI.adjustCSSRowsCols();
      UI.drawBoard();
      UI.play();
    } else {
      this.board = new Board(
        this.board.getRows(),
        Math.round(
          window.innerWidth / (window.innerHeight / this.board.getRows())
        )
      );
      UI.adjustCSSRowsCols();
      UI.drawBoard();
    }
  }

  static adjustCSSRowsCols() {
    const root = document.documentElement;
    root.style.setProperty("--rows", this.board.getRows());
    root.style.setProperty("--cols", this.board.getCols());
  }

  static addWindowResizeEventListener() {
    window.addEventListener("resize", () => {
      if (this.rowColLock) {
        UI.lockBoard();
      }
    });
  }

  static addPlaybackMenuListeners() {
    document.querySelector(".play").addEventListener("click", () => {
      document.querySelector(".play").classList.add("inactive");
      document.querySelector(".pause").classList.remove("inactive");
      UI.play();
    });

    document.querySelector(".pause").addEventListener("click", () => {
      document.querySelector(".pause").classList.add("inactive");
      document.querySelector(".play").classList.remove("inactive");
      UI.pause();
    });

    document
      .querySelector('input[name="playbackSpeed"]')
      .addEventListener("input", (e) => {
        this.playbackSpeed = e.target.value;
        this.playbackSpeed = 1050 - this.playbackSpeed;
        if (this.playing) {
          UI.pause();
          UI.play();
        }
      });

    document.querySelector(".refresh").addEventListener("click", () => {
      UI.refreshBoard();
    });
  }

  static refreshBoard() {
    if (this.playing) {
      UI.pause();
      this.board = new Board(this.board.getRows(), this.board.getCols());
      UI.drawBoard();
      UI.play();
    } else {
      this.board = new Board(this.board.getRows(), this.board.getCols());
      UI.drawBoard();
    }
  }

  static play() {
    this.timer = setInterval(() => {
      this.board.stepForward();
      UI.drawBoard();
    }, this.playbackSpeed);
    this.playing = true;
  }

  static pause() {
    clearInterval(this.timer);
    this.playing = false;
  }

  static drawBoard() {
    const boardElem = document.querySelector(".board");
    const boolBoard = this.board.getBoard();

    // clear old board
    boardElem.textContent = "";

    boolBoard.forEach((row) => {
      row.forEach((col) => {
        const newBoardPiece = document.createElement("div");
        if (col) {
          newBoardPiece.classList.add("alive");
        } else {
          newBoardPiece.classList.add("dead");
        }
        boardElem.appendChild(newBoardPiece);
      });
    });
  }
}
