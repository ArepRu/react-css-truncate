# react-css-truncate
Simple CSS multiline truncation for React components

## Usage

```
npm i react-css-truncate
```

```js
import linesTruncate from 'react-css-truncate';

// linesTruncate(lines: Number)

export const LineComponent = () => (
  <div style={linesTruncate(2)}>
    <div style={{...linesTruncate(1), width: '100px'}}></div>
  </div>
);
```
