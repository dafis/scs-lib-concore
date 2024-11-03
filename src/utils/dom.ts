/**
 * The DOMWrapper class serves as a generic utility for DOM manipulation.
 * It encapsulates an HTMLElement and provides methods for common interactions.
 */
export class DOMWrapper {
  protected element: HTMLElement;

  /**
   * Constructor initializes the DOM element.
   * @param element - The HTMLElement to wrap.
   */
  constructor(element: HTMLElement) {
    this.element = element;
  }

  /**
   * Sets the text content of the DOM element.
   * @param text - The text content to display in the element.
   */
  setTextContent(text: string): void {
    this.element.textContent = text;
  }

  /**
   * Sets the HTML content of the DOM element.
   * @param html - HTML string to set as the element's content.
   */
  setHTMLContent(html: string): void {
    this.element.innerHTML = html;
  }

  /**
   * Adds a CSS class to the DOM element.
   * @param className - The CSS class to add.
   */
  addClass(className: string): void {
    this.element.classList.add(className);
  }

  /**
   * Removes a CSS class from the DOM element.
   * @param className - The CSS class to remove.
   */
  removeClass(className: string): void {
    this.element.classList.remove(className);
  }

  /**
   * Clears the content of the DOM element.
   */
  clearContent(): void {
    this.element.innerHTML = '';
  }

  /**
   * Appends a child element to the DOM element.
   * @param child - The HTMLElement to append as a child.
   */
  appendChild(child: HTMLElement): void {
    this.element.appendChild(child);
  }

  /**
   * Replaces the DOM element with a new element.
   * @param newElement - The new element to replace the existing one.
   */
  replaceWith(newElement: HTMLElement): void {
    this.element.replaceWith(newElement);
    this.element = newElement; // Update internal reference
  }

  /**
   * Returns the encapsulated DOM element.
   * @returns - The current HTMLElement.
   */
  getElement(): HTMLElement {
    return this.element;
  }
}
