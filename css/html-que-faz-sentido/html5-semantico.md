# HTML5 Semântico

## As tags

Irão ajudar a criar um HTML semântico, pois algumas tags tem significados específicos e orientações claras sobre onde devem ficar na página e o motivo dela existir.

Exemplo:

```html
<p>
  Nós (programadores), somos pagos para resolver problemas,
  não para memorizar soluções.
                          - Mayk Brito
</p>
```

Com uma melhor semântica

```html
<blockquote>
  Nós (programadores), somos pagos para resolver problemas,
  não para memorizar soluções.
                    <cite>- Mayk Brito</cite>
<blockquote>
```

## Seções comuns em documentos HTML

- cabeçalho `<header>`
- navegação `<nav>`
- conteúdo principal `<main>`
- barra lateral`<aside>`
- rodapé `<footer>`

```html
<body>
  <header>
    logomarca

    <nav>
      <ul>
        <li>
          item 1
        </li>
        <li>
          item 2
        </li>
      </ul>
    </nav>
  </header>

  <main>
    conteúdo
  </main>

  <aside>
    Parte lateral
  </aside>

  <footer>rodapé</footer>

</body>
```
