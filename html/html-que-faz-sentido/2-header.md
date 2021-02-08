# Header

## `<header></header>`

- Onde utilizar?
  - Quando no início da página, é visto como global
  - Pode ser usado em outros elementos semânticos como article, section
  - Não deve ser utilizado `<header>` dentro de um `<header>` ou dentro do `<footer>`
- Múltiplos headers
- Não possui atributos específicos
- Possui `display:block`

```html
<body>
  <header>
    logo
    <nav></nav>
  </header>

  <section>
    <header>
      <h2>Essa é uma seção</h2>
      <p>Para falar mais da seção</p>
    </header>
    Esse conteúdo ficara em baixo
  </section>

  <section>
    <header></header>
  </section>
</body>
```
