# Combinators

Combinadores, pois eles trabalhram para buscar e combinar seletores a fim de aplicar um estilização


## Descendant combinator

* Identificado por um espaço entre os sletores
* Busca um elemento dentro de outro
```css
body article h2 {
  color: green;
}
```


## Child combinator

* Identificado pelo sinal ` > ` entre dois seletores
* Seleciona todos o elementos que são filhos direto do pai
* Elementos depois dos filhos diretos serão desconsiderados
```css
body > ul > li {
  color: red;
}
```

## Adjacent sibling combinator

* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona SOMENTE o elemento do lado direito que é irmão direto na hierarquia
```css
h1 + p {
  color: gray;
}
```

outro exemplo:

```css
button + button {
  margin-left: 2rem
}
```

## General sibling combinator

* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona TODOS os elementos irmãos

```css
  h1 ~ p {
    color: blue;
  }
```
