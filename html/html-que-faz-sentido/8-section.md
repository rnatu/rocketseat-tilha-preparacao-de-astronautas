# Section

## `<section></section>`

- Geralmente tem titulo e o conteúdo
- Atributos Globais

```html
<body>
  <main>
    <!-- Se não houver repetições de conteúdo, utilizar section -->
    <section>
      <h1>conteúdo</h1>
      <p>Descrição do conteúdo</p>
    </section>

    <!-- Se houver repetições de conteúdo, utilizar artile -->
    <article>
      <h2>Receita de bolo</h2>
      <p>Como fazer a receita de bolo</p>

      <section>
        <h3>Modo de preparo</h2>
        <p>Explicação sobre modo de preparo</p>
      </section>
    </article>

    <article>
      <h2>Receita de pudim</h2>
      <p>Como fazer a receita pudim</p>

      <section>
        <h3>Modo de preparo</h2>
        <p>Explicação sobre modo de preparo</p>
      </section>
    </article>

  </main>
</body>
```
