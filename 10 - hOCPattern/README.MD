# HOC Pattern (Higher Order Component)

Em nosso aplicativo, geralmente queremos usar a mesma lógica em vários componentes. Essa lógica pode incluir a aplicação de um determinado estilo aos componentes, a exigência de autorização ou a adição de um estado global.

Uma maneira de poder reutilizar a mesma lógica em vários componentes é usando o padrão de componente de ordem superior. Esse padrão nos permite reutilizar a lógica do componente em todo o nosso aplicativo.

Um componente de ordem superior (HOC) é um componente que recebe outro componente. O HOC contém certa lógica que queremos aplicar ao componente que passamos como parâmetro. Após aplicar essa lógica, o HOC retorna o elemento com a lógica adicional.

### Fonte
https://www.patterns.dev/posts/mixin-pattern/
https://reactjs.org/docs/higher-order-components.html