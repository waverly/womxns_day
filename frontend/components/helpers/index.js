export const setBodyHeight = () => {
  if (typeof window === "undefined") {
    return 0;
  } else if (typeof window != "undefined") {
    if (document.getElementById("womanList")) {
      const womanListHeight = document.getElementById("womanList").scrollHeight;
      // TODO: adjust bottom padding for responsive
      // calculate half of window height and add to women's list
      const halfHeight = window.innerHeight / 2.5;
      console.log(
        `set body height is running, woman list height is ${womanListHeight}, window offset is ${
          window.pageYOffset
        }`
      );
      document.body.style.height = womanListHeight + halfHeight + "px";
    }
  }
};
