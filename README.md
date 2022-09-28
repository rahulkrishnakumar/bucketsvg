# BucketSVG Svg Icon library

Beautiful Hand-crafted svg icons ready to use in your next app. Available as optimized SVG icons and via React using npm package

## Basic Usage

The quickest way to use these icons is to simply copy the source for the icon you need from bucketsvg.com and inline it directly into your HTML

```svg
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
  <path fill="#183153" d="M16.1 11H3.9c-.5 0-.9-.4-.9-.9v-.2c0-.5.4-.9.9-.9h12.2c.5 0 .9.4.9.9v.2c0 .5-.4.9-.9.9Z"/>
</svg>

```

## Using React

First install bucketsvg

```node

npm i bucketsvg
```

Now add icons using as a component in your app. example:

```js
import { MinusMini } from 'bucketsvg';

function MyComponent() {
  return (
    <div>
      <MinusMini />
      <p>Some paragraph</p>
    </div>
  );
}
```
