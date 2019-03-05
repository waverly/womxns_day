export const setBodyHeight = () => {
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      const womanListHeight = document.getElementById("womanList").scrollHeight;
      // TODO: adjust bottom padding for responsive
      // calculate half of window height and add to women's list
      const halfHeight = window.innerHeight / 1.5;

      document.body.style.height =
        womanListHeight + womanListHeight * 0.05 + "px";
    }
  }
};

export const genId = name => {
  const id = name
    .replace(/[^a-zA-Z ]/g, "")
    .split(" ")
    .join("")
    .toLowerCase();

  return id;
};

export const _onShareClick = e => {
  try {
    console.log("inside ons hare click");
    const dummy = document.createElement("input");
    document.body.appendChild(dummy);
    dummy.classList.add("display-none");
    dummy.value = "zis appeares to verk";
    console.log(dummy.value);
    console.log(dummy);
    dummy.select();
    document.execCommand("copy");
    alert("Copied the text: " + dummy.value);
    document.body.removeChild(dummy);
  } catch (err) {
    console.log("Error while copying to clipboard: " + err);
  }
};

export const _addHighlightClass = e => {
  // extract data-nameid
  const dataId = e.currentTarget.dataset.nameid;
  document
    .querySelectorAll(`.${dataId}`)
    .forEach(el => el.classList.add("highlighted"));
};
