export async function waitAndClick (timeout) {
  await element.waitForClickable({ timeout });
  await element.click();
}
export async function scrollAndClick (xCoords = 0, yCoords = 0){
  await element.scrollIntoView();
  await element.click({ x: xCoords, y: yCoords });
}
export async function waitAndSetValue (element, timeout, value) {
  await element.waitForDisplayed({ timeout });
  await element.scrollIntoView();
  await element.setValue(value);
}
  