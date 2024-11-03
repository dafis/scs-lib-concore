import { DOMWrapper } from '../src/utils/dom';

describe('DOMWrapper', () => {
  let element: HTMLElement;
  let wrapper: DOMWrapper;

  beforeEach(() => {
    element = document.createElement('div');
    wrapper = new DOMWrapper(element);
  });

  test('should set text content', () => {
    wrapper.setTextContent('Hello');
    expect(element.textContent).toBe('Hello');
  });

  test('should set HTML content', () => {
    wrapper.setHTMLContent('<span>World</span>');
    expect(element.innerHTML).toBe('<span>World</span>');
  });

  test('should add and remove class', () => {
    wrapper.addClass('test-class');
    expect(element.classList.contains('test-class')).toBe(true);

    wrapper.removeClass('test-class');
    expect(element.classList.contains('test-class')).toBe(false);
  });

  test('should clear content', () => {
    wrapper.setHTMLContent('<span>Content</span>');
    wrapper.clearContent();
    expect(element.innerHTML).toBe('');
  });

  test('should append a child element', () => {
    const child = document.createElement('span');
    wrapper.appendChild(child);
    expect(element.firstChild).toBe(child);
  });

  test('should replace the element', () => {
    const newElement = document.createElement('p');
    wrapper.replaceWith(newElement);
    expect(wrapper.getElement()).toBe(newElement);
  });
});

