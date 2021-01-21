# Pseudo-elements

com pseudo-elements nós podemos adicionar elementos HTML pelo próprio CSS

`::pseudo-element-name`

## Exemplos
* ::before -> Coloca um pseudo-elemento antes, utilizando content
**é necessária a utilizção do content, nem que seja vazio ex: content: "";
```css
li::before {
  content: "> "
}
```
* ::after -> Coloca um pseudo-elemento após, utilizando content
**é necessária a utilizção do content, nem que seja vazio ex: content: "";
```css
li {
  position: relative;
}
li::after {
  content: "";
  height: 1px;
  width: 10px;
  background-color: purple;

  position: absolute;
  bottom: 0px;
}
```
* ::first-line -> Aplica o estilo somente na primeira linha do texto
```css
article p::first-line {
  color: red;
}
```

## Referência
https://developer.mozilla.org/en-US/docs/web/CSS/Pseudo-elements
