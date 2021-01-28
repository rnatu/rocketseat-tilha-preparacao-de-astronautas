# Atribuindo mais estilos ás fontes

<https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Fundamentals>

## font-variant

*variações na apresentação fonte

```css
p {
  font-variant: small-caps;
}
```

<https://developer.mozilla.org/en-US/docs/web/CSS/font-variant>

## font-stretch

* alargamento ou encolhimento da fonte*s
* aceita palavra-chaves como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%

```css
p {
  font-stretch: expanded;
}
```

<https://developer.mozilla.org/en-US/docs/web/CSS/font-stretch>

## letter-spacing

* Espaços entre caracteres

```css
p {
  fontletter-spacing: 4px
};
```

<https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing>

## word-spacing

* espaços entre caracteres

```css
p {
  word-spacing: 4px;
}
```

<https://developer.mozilla.org/en-US/docs/Web/CSS/word-spacing>

## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns 1.5 ou 2

```css
p {
  line-height: 1.6;
}
```

<https://developer.mozilla.org/en-US/docs/Web/CSS/line-height>

## text-transform

```css
p {
  text-transform: uppercase; /* capitalize | lowercase | none */
}

```

<https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform>

## text-decoration

* Aparência decorativa de um texto
* line: underline | overline | line-through
  * podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: (color) values

```css
p {
  text-decoration: underline wavy red; /* shorthand */
  or
  text-decoration-line: underline;
  text-decoration-style: wavy
  text-decoration-color: red;
}
```

<https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration>

## text-align

* Alinhamento de um texto

```css
  p {
    text-align: center; /* left | right | center | justify */
  }
```

<https://developer.mozilla.org/en-US/docs/Web/CSS/text-align>

## text-shadow

* Sombra aplicada a um textos
* Permite múltiplos valores

```css
p {
  values => /* offset-x | offset-y | blut-radius | color */
  text-shadow: 2px 2px 1px red,
}
```
