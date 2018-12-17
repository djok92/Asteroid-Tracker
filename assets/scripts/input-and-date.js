function inputChecker(input1, input2) {
  if (input1.value === "" || input2.value === "") {
    alert("Please fill both inputs");
    return false;
  }

  return true;
}

function parseDate(str) {
  const myDate = str.split("-");
  return new Date(myDate[0], myDate[1], myDate[2]);
}

function dateDifference(firstDate, secondDate) {
  return Math.round((secondDate - firstDate) / (1000 * 60 * 60 * 24));
}

export { inputChecker, parseDate, dateDifference };
