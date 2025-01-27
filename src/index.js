let currentFloor = 1;

function changeFloor(positionTop, floor) {
  if (floor == currentFloor) {
    return alert("Xozir" + floor + " dasiz");
  }
  console.log(positionTop, floor);
  const second =
    floor < currentFloor ? currentFloor - floor : floor - currentFloor;
  console.log(currentFloor, "curent floor");
  console.log(second, "second");

  const elem = document.getElementById("elevator");
  document.documentElement.style.setProperty("--top", positionTop);

  elem.style.animation = `elevatorLift ${second}s linear`;

  setTimeout(() => {
    document.documentElement.style.setProperty("--finalyPos", positionTop);
    document.documentElement.style.setProperty("--current", positionTop);
    console.log(document.documentElement.style.getPropertyValue("--current"));
    currentFloor = floor;
  }, second * 1000);
}
