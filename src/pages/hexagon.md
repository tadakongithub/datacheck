---
slug: 'hexagon'
title: 'CSSで六角形をつくる'
date: '2020-06-26'
category: 'CSS'
---

これをつくるCSSをステップを踏んで紹介します。

<iframe height="300" style="width: 100%;" scrolling="no" title="hexagon5" src="https://codepen.io/tadapon/embed/yLeoopV?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tadapon/pen/yLeoopV'>hexagon5</a> by Tadashi
  (<a href='https://codepen.io/tadapon'>@tadapon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

正方形をつくる

<iframe height="300" style="width: 100%;" scrolling="no" title="zYrddwz" src="https://codepen.io/tadapon/embed/zYrddwz?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tadapon/pen/zYrddwz'>zYrddwz</a> by Tadashi
  (<a href='https://codepen.io/tadapon'>@tadapon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


正方形の高さと幅をゼロにする
<iframe height="300" style="width: 100%;" scrolling="no" title="hexagon2" src="https://codepen.io/tadapon/embed/YzwxQXp?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tadapon/pen/YzwxQXp'>hexagon2</a> by Tadashi
  (<a href='https://codepen.io/tadapon'>@tadapon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

灰色の部分を消せば左側の三角形が完成!なので、**border-top**, **border-bottom**, **border-left**の色を透明にする。
<iframe height="300" style="width: 100%;" scrolling="no" title="hexagon3" src="https://codepen.io/tadapon/embed/MWKvvvb?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tadapon/pen/MWKvvvb'>hexagon3</a> by Tadashi
  (<a href='https://codepen.io/tadapon'>@tadapon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

真ん中の四角をつくる。高さは、左の三角形の**border-top**と**border-bottom**の幅を足した数値にする。幅は適当に。
<iframe height="300" style="width: 100%;" scrolling="no" title="hexagoncenter" src="https://codepen.io/tadapon/embed/ExPvvww?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tadapon/pen/ExPvvww'>hexagoncenter</a> by Tadashi
  (<a href='https://codepen.io/tadapon'>@tadapon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

左の三角形と同じかんじで右側の三角形もつくる。
<iframe height="300" style="width: 100%;" scrolling="no" title="hexagon4" src="https://codepen.io/tadapon/embed/abdyyVE?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tadapon/pen/abdyyVE'>hexagon4</a> by Tadashi
  (<a href='https://codepen.io/tadapon'>@tadapon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

横１列に並べるため、コンテナーの中に入れて、コンテナーに<span style="background-color: #d1d1d1">display: flex</span>を加える。
<iframe height="300" style="width: 100%;" scrolling="no" title="hexagon5" src="https://codepen.io/tadapon/embed/yLeoopV?height=265&theme-id=dark&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/tadapon/pen/yLeoopV'>hexagon5</a> by Tadashi
  (<a href='https://codepen.io/tadapon'>@tadapon</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
