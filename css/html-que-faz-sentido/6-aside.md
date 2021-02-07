# Aside

## `<aside></aside>`

- Conteúdos levemente relacionados ao conteúdo principal
  - explicações
  - glossários
  - links extras
  - biografia do autor
  - informações de perfil
- Não possui atributos especificos

```html
<body>

  <main>
    <article>
      <h1>Demonstração de texto exemplo</h1>

      <p>texto de exemplo lorem ispum
        Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Donec ac auctor ante.
        imperdiet dictum quam. In congue vel odio nec blandit.
        Quisque egestas placerat purus. Integer dolor tortor.
      </p>

      <!-- Glossário -->
      <aside>
        <h3>Glossários</h3>
          <dl>
            <dt>Terraplanagem</dt>
            <dd>É o processo de terraplanar. Se a terra é
            plana, não precisaria fazer isso.<dd>

            <dt>termo 2</dt>
            <dd>uma descrição sobre o termo 2<dd>
          </dl>
      </aside>
    </article>
  </main>

  <!-- Contéudo Relacionado -->
  <aside>
    <h3>Links Relacionados</h3>
    <ul>
      <li><a href="">Terraplanar com sucesso</a></li>
      <li><a href="">10 passos para contruir seu castelo</a></li>
      <li><a href="">Construindo uma pscina no deserto</a></li>
    </ul>
  </aside>

  <aside>
    <strong>Oferecimento: Oferê Cimentos</strong>
  </aside>

</body>
  ```
