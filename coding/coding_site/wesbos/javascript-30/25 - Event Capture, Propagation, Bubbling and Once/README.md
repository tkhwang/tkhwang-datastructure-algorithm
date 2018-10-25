# Event Capture, Propagation, Bubbling and Once

```javascript
divs.forEach(div =>
  div.addEventListener("click", logText, {
    capture: false,
    once: true
  })
);

button.addEventListener(
  "click",
  () => {
    console.log("Click!!!");
  },
  {
    once: true
  }
);
```
