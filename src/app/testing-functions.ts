import { DebugElement } from "@angular/core";
import { ComponentFixture } from "@angular/core/testing";
import { By } from "@angular/platform-browser";


export function findElAll<T>(
  fixture: ComponentFixture<T>,
  testId: string
): DebugElement[] {
  return fixture.debugElement.queryAll(
    By.css(`[data-testid="${testId}"]`)
  );
}

export function findEl<T>(
  fixture: ComponentFixture<T>,
  testId: string
): DebugElement {
  return fixture.debugElement.query(
    By.css(`[data-testid="${testId}"]`)
  );
}

export function expectText<T>(
  fixture: ComponentFixture<T>,
  testId: string,
  text: string,
): void {
  const element = findEl(fixture, testId);
  const actualText = element.nativeElement.textContent;
  expect(actualText).toBe(text);
}

export function click<T>(
  fixture: ComponentFixture<T>,
  testId: string
): void {
  const element = findEl(fixture, testId);
  const event = makeClickEvent(element.nativeElement);
  element.triggerEventHandler('click', event);
}

export function makeClickEvent(
  target: EventTarget
): Partial<MouseEvent> {
  return {
    preventDefault(): void { },
    stopPropagation(): void { },
    stopImmediatePropagation(): void { },
    type: 'click',
    target,
    currentTarget: target,
    bubbles: true,
    cancelable: true,
    button: 0
  };
}

export function setFieldValue<T>(
  fixture: ComponentFixture<T>,
  testId: string,
  value: string,
): void {
  setFieldElementValue(
    findEl(fixture, testId).nativeElement,
    value
  );
}

/**
 * Enters text into a form field (`input`, `textarea` or `select` element).
 * Triggers appropriate events so Angular takes notice of the change.
 * If you listen for the `change` event on `input` or `textarea`,
 * you need to trigger it separately.
 *
 * @param element Form field
 * @param value Form field value
 */
export function setFieldElementValue(
  element: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement,
  value: string,
): void {
  element.value = value;
  // Dispatch an `input` or `change` fake event
  // so Angular form bindings take notice of the change.
  const isSelect = element instanceof HTMLSelectElement;
  dispatchFakeEvent(element, isSelect ? 'change' : 'input', isSelect ? false : true);
}

/**
 * Dispatches a fake event (synthetic event) at the given element.
 *
 * @param element Element that is the target of the event
 * @param type Event name, e.g. `input`
 * @param bubbles Whether the event bubbles up in the DOM tree
 */
export function dispatchFakeEvent(
  element: EventTarget,
  type: string,
  bubbles: boolean = false,
): void {
  const event = document.createEvent('Event');
  event.initEvent(type, bubbles, false);
  element.dispatchEvent(event);
}

