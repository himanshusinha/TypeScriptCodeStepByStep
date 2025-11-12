function fruits(): string {
  return "Apple";
}

function simple(): number {
  return 10;
}

function complex(): number | string {
  let data = 20;
  let name = "anil";
  let type = "age";
  if (type == "age") {
    return data;
  } else {
    return name;
  }
}

function anything(): any {
  return;
}
