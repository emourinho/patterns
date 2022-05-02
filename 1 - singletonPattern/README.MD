# Singleton Pattern

Singletons são classes que podem ser instanciadas uma vez e podem ser acessadas globalmente. Essa única instância pode ser compartilhada em todo o nosso aplicativo, o que torna os Singletons ótimos para gerenciar o estado global em um aplicativo.

## Desvantagens
Restringir a instanciação a apenas uma instância pode economizar muito espaço de memória. Em vez de ter que configurar a memória para uma nova instância a cada vez, só precisamos configurar a memória para aquela instância, que é referenciada em todo o aplicativo. No entanto, Singletons são realmente considerados um anti-padrão e podem (ou devem ) ser evitados em JavaScript.

Em muitas linguagens de programação, como Java ou C++, não é possível criar objetos diretamente da mesma forma que em JavaScript. Nessas linguagens de programação orientadas a objetos, precisamos criar uma classe, que cria um objeto. Esse objeto criado tem o valor da instância da classe, assim como o valor de instanceno exemplo JavaScript.

No entanto, a implementação de classe mostrada nos exemplos acima é realmente um exagero. Como podemos criar objetos diretamente em JavaScript, podemos simplesmente usar um objeto regular para obter exatamente o mesmo resultado. Vamos abordar algumas das desvantagens de usar Singletons!

### fonte: 

https://www.patterns.dev/posts/singleton-pattern/