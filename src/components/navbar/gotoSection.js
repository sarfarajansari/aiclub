export const goto = (name) => {
  document
    .querySelector("#" + name.toLowerCase().replace(" ", ""))
    .scrollIntoView({ behavior: "smooth" });
};
