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
  console.log("inside ons hare click");
  const id = e.currentTarget.parentNode.parentNode.dataset.nameid;
  console.log({ id });
  const domain = "http://localhost:7777";
  const link = `${domain}/names#${id}`;
  const dummy = document.createElement("textarea");
  document.body.appendChild(dummy);
  dummy.classList.add("display-none");
  dummy.innerHTML = link;
  console.log(dummy);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
  console.log(link);
  e.currentTarget.innerHTML = "Copied to clipboard";
};

export const _addHighlightClass = e => {
  // extract data-nameid
  const dataId = e.currentTarget.dataset.nameid;
  document
    .querySelectorAll(`.${dataId}`)
    .forEach(el => el.classList.add("highlighted"));
};
