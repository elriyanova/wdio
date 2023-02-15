export async function waitForPage() {
  await this.waitUntil(() => this.execute(() => document.readyState === "complete"), {
    timeout: 60 * 1000,
    timeoutMsg: "Timeout on page loading",
  });
}
  
export async function getElementByExactText(element, text) {
  await $(`${element}=${text}`);
}
  
export async function getElementByStartsWithText(element, text) {
  await $(`${element}^=${text}`);
}
  
export async function getElementThatContainsText(element, text) {
  await $(`${element}^=${text}`);
}