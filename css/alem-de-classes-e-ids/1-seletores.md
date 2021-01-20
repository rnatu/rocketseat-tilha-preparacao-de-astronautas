# Seletores

Conecta um elemento HTML com o CSS a fim de alterar o elemento.

## Tipos

  * Element selector
    - Todos os elementos HTML
```css
  h1 {
    color: red;
  }
```

  * ID Selector
    - Um elemento que tenha um atributo `id`.
    - Cada id deverá ser único.
```css
  #button{
    color: green;
  }
```

  * Class Selector
    - Os elementos que contenha um atributo `class`.
    - Podemos ter uma ou mais classes.
```css
  .card {
    background-color: white;
  }
```

  * Attribute selector
    - Um elemento que tenha um atributo específico.
```css
[title] {
  color: orange;
}
```

  * Pseudo-class selector
    - Elementos em um estado específico
```css
p:hover {
  color: red;
}
```

## Múltiplos

Você poderá selecionar múltiplos elementos a aplicar alguma regra css para todos eles.

Usamos uma separação por vírgulas para isso.

```css
h1:hover, p:hover, a, .logo {
  color: red;
}
```
