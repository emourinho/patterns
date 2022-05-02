# Observer Pattern

Com o padrão observador, podemos inscrever certos objetos, os observadores, em outro objeto, chamado observável. Sempre que um evento ocorre, o observável notifica todos os seus observadores!

### Prós
Usar o padrão observador é uma ótima maneira de impor a separação de interesses e o princípio da responsabilidade única. Os objetos observadores não estão fortemente acoplados ao objeto observável e podem ser (des)acoplados a qualquer momento. O objeto observável é responsável por monitorar os eventos, enquanto os observadores simplesmente manipulam os dados recebidos.

### Contras
Se um observador se tornar muito complexo, poderá causar problemas de desempenho ao notificar todos os assinantes.

### Fonte
https://www.patterns.dev/posts/observer-pattern/