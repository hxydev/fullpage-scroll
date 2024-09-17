# section-scroll

A simple and lightweight JavaScript library for section scrolling.

### Install
```
npm install @xy.dev/section-scroll@0.0.1
```

### Usage
```javascript
// Vue
<script>
import FullPageScroll from '@xy.dev/fullpage-scroll';

export default {
  name: 'App',
  mounted() {
    const sections = document.querySelectorAll('.section');
    new FullPageScroll(sections);
  }
}
</script>
```

```javascript
// React
import { useEffect } from 'react';
import SectionScroll from '@xy.dev/section-scroll';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    new FullPageScroll(sections);
  }, []);

   return (
    <section></section>
  );
}
```