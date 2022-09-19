export const data = [
  {
    id: 1,
    question: " Is there something like instance variables?",
    answer:
      "Yes! The useRef() Hook isn't just for DOM refs. The “ref” object is a generic container whose current property is mutable and can hold any value, similar to an instance property on a class.",
  },
  {
    id: 2,
    question: "Can I run an effect only on updates?",
    answer:
      "This is a rare use case. If you need it, you can use a mutable ref to manually store a boolean value corresponding to whether you are on the first or a subsequent render, then check that flag in your effect. (If you find yourself doing this often, you could create a custom Hook for it.)",
  },
  {
    id: 3,
    question: "How to get the previous props or state?",
    answer:
      "Sometimes, you need previous props to clean up an effect. For example, you might have an effect that subscribes to a socket based on the userId prop. If the userId prop changes, you want to unsubscribe from the previous userId and subscribe to the next one.",
  },
  {
    id: 4,
    question: "Is there something like forceUpdate?",
    answer:
      "Both useState and useReducer Hooks bail out of updates if the next value is the same as the previous one. Mutating state in place and calling setState will not cause a re-render.",
  },
  {
    id: 5,
    question: "Can I make a ref to a function component?",
    answer:
      "While you shouldn't need this often, you may expose some imperative methods to a parent component with the useImperativeHandle Hook.",
  },
];
