const queryString = require("querystring");

export const setBodyHeight = () => {
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      const womanListHeight = document.getElementById("womanList").scrollHeight;
      document.body.style.height =
        womanListHeight + womanListHeight * 0.05 + "px";
      console.log("in set body height", womanListHeight);
    }
  }
};

export const genId = name =>
  name
    .replace(/\s/g, "_")
    .replace(/\W/gi, "")
    .toLowerCase();

export const _addHighlightClass = e => {
  // extract data-nameid
  const dataId = e.currentTarget.dataset.nameid;
  document
    .querySelectorAll(`.${dataId}`)
    .forEach(el => el.classList.add("highlighted"));
};
