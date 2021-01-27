# Utilizando combinadores

* Selecionando o li que seja filho direto de ul e contenha a class="red"

```css
ul > li[class="red"] {
  color: red;
}
```

## Dica

* Seletores muito específicos tendem a causa dificuldades no reuso das regras de estilização dos elementos
* Muitas veses, um simple uso de classes, torna o trabalho muito mais eficiente.

Utilizando o exemplo anterior:

```css
.red {
  color: red;
}
```
