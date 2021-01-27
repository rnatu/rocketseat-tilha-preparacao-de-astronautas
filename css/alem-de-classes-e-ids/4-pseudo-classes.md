# Pseudo-classes

É um tipo de seletor que ira selecionar um elemento que estiver um estado específico

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class
`:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child -> Seleciona o primeiro filho na hierarquia

```css
ul li:first-child {
  font-weight: bold;
}
```

* :nth-of-type() -> Seleciona dentre todos os TIPOS na hierarquia, pela posição informada.

```css
article p:nth-of-type(1) {
  color: red;
}
```

* :nth-child() -> Seleciona dentre todos filhos na hierarquia, pela posição informada.

```css
article p:nth-child(3) {
  color: red;
}
```

* :nth-child(even) ou :nth-child(odd) -> Seleciona na hierarquia os filhos pares(odd) e/ou ímpares(even)

```css
ul li:nth-child(even) {
    color: red;
  }

  ul li:nth-child(odd) {
    color: blue;
  }
```

## Ações do usuário

* :hover -> Aplica o estilo enquanto o mouse estiver sobre o elemento

```css
  a:hover {
    color:red;
  }
```

* :focus -> Aplica o estilo enquanto o elemento estiver em foco

```css
  input:focus {
    border-color: red;
    outline: none;
  }
```

## Atributos

* :disabled -> Aplica o estilo se o elemento possuir o atributo disabled

```css
input:disabled {
  background-color: gray;
}
```

* :required -> Aplica o estilo se o elemento possuir o atributo required

```css
input:required {
  background-color: red;
}
```

## Referência

<https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes>
