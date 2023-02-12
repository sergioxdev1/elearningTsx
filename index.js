import './style.css';
import ejercicios01to05 from './03regularExpression.js';

// visual sectin - Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `
<h1>E-Learning Platform</h1>
<div>
<h3>Add numbers only with operators</h3>
<pre>function addNumber(a, b) {
  return a > 0 || b > 0 ? a + b : 'negative number';
}
</pre>

<a href="HTML-FreecodeCamp-Mod01.html">HTML-FreecodeCamp-Mod01</a>
</div>
`;
ejercicios01to05();
