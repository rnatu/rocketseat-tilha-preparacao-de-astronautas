# Pseudo-classes

É um tipo de seletor que ira selecionar um elemento que estiver um estado específico

Exemplo: É o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo class
`:pseudo-class-name`

## Selecionando elementos com pseudo-classes

* :first-child
```css
ul li:first-child {
  font-weight: bold;
}
```

* :nth-of-type()
```css
article p:nth-of-type(3) {
  color: red;
}
```

* :nth-child()
```css
article p:nth-child(2) {
  color: red;
}

```

## Ações do usuário
