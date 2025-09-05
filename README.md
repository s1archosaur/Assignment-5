## **1. Difference between getElementById, getElementsByClassName, querySelector/querySelectorAll**

### **getElementById("id")**

It returns an element with a designated id. If no id is specified or no id matches, it returns null. 

### **getElementsByClassName("class")**

It returns a collection of elements with a designated class. 

### **querySelector("selector")**

It returns the first element that matches the given css selector. It returns only one element even if there are more instances of the same css selector.

### **querySelectorAll("selector")**

It returns all elements that matches the given css selector.


## **2. Creating and inserting a new element into the DOM**

At first, using the createElement function, a new element is created, then using innerText, className or other attributes, the element is filled with content, and then, the element is pushed to the document using appendChild, insertBefore and similar functions.

Example:
```javascript
const newElement = document.createElement("div");
newElement.innerText = "Hello World!";
newElement.className = "greeting";
document.body.appendChild(newElement);
```

## **3. Event Bubbling**

It is the process by which an event that was triggered on a child element goes all the way up or bubbles up to the document by going through the parent elements one by one. Here, if someone clicks on the parent, this event will trigger a propagation through the parent elements all the up to the html document if it is not stopped.
Example:
```html
<html>
    <body>
        <main id="page">
            <section id="card">
            </section>
        </main>
    </body>
</html>
```

```javascript
document.getElementById("page").addEventListener("click", function() {
    console.log("parent");
});
document.getElementById("card").addEventListener("click", function() {
    console.log("child");
});
```
After clicking the button, the output would be:
```
child
parent
```
As it runs on child first, child pops up first, then runs on parent, thus it pops up later.


## **4. Event Delegation**

It attaches a single listener to a parent element, which listens for events from its children by bubbling.
Example:
```javascript
document.getElementById("list").addEventListener("click", function(event) {
    if (event.target && event.target.tagName === "LI") {
        console.log("clicked:", event.target.innerText);
    }
});
```
It is useful beacuse it saves memory by attaching listeners to particular child instead of every children, it is easier to manage and works automatically with added elements.

## **5. Difference between preventDefault() and stopPropagation()**

**preventDefault():** A browser has some predefined or default behaviors for diiferent events. preventDefault() stops the browser’s default behavior for an event.

**stopPropagation():** Generally, bubbling can reach to the parent of a child element. stopPropagation() stops the event from bubbling up or coming down. As a result, the parent is not aware of it.