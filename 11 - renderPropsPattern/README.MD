# Render Props Pattern

Na seção sobre HOC, vimos que poder reutilizar a lógica do componente pode ser muito conveniente se vários componentes precisarem acessar os mesmos dados ou contiverem a mesma lógica.

Outra maneira de tornar os componentes muito reutilizáveis ​​é usando o padrão render prop . Uma prop de renderização é uma prop em um componente, cujo valor é uma função que retorna um elemento JSX. O componente em si não renderiza nada além da prop de renderização. Em vez disso, o componente simplesmente chama a prop de renderização, em vez de implementar sua própria lógica de renderização.

Imagine que temos um Titlecomponente. Neste caso, o Titlecomponente não deve fazer nada além de renderizar o valor que passamos. Podemos usar um prop de render para isso! Vamos passar o valor que queremos que o Titlecomponente renderize para a renderprop.

### Fonte
https://www.patterns.dev/posts/mixin-pattern/