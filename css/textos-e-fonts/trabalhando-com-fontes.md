# Trabalhando com fontes

<https://www.w3.org/TR/css-fonts-3/>

Tipografia transmite mensagem

- negrito
- tamanho
- estilo

## Basic Font Properties

- font-family
- font- weight
- font-style
- font-size

## Font Family

- Tipo de fonte de um elemento
- Lista de fontes e ordem de prioridade
- inclui *fallback* font

```css
p {
  font-family: "Times New Roman", Times, serif;
}
```

- serif
- sans-serif

## Font Weight

- Peso da fonte

```css
p {
  font-weight: bold;
}
```

## Font Style

```css
span {
  font-style: italic;
}
```

## Font size

```css
p {
  font-size: 2rem;
}
```

## Web Fonts

- fonte de sistema x fontes da web
- como usar fontes para web?

<https://css-tricks.com/snippets/css/using-font-face/>

- @font-face

  <https://fonts.google.com/>
- @import

  ```css
  <style>
  @import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');
  </style>
  ```

  link -> (RECOMENDADO)

  ```html
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Potta+One&display=swap" rel="stylesheet">
  ```
