var removeVowels = function (string) {
  return string
    .split("")
    .filter((current) => {
      if (
        current !== "a" &&
        current !== "e" &&
        current !== "i" &&
        current !== "o" &&
        current !== "u"
      ) {
        return current;
      }
    })
    .join("");
};
