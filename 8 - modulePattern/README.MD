# Module Pattern

À medida que seu aplicativo e sua base de código crescem, torna-se cada vez mais importante manter seu código passível de manutenção e separado. O padrão de módulo permite que você divida seu código em partes menores e reutilizáveis.

Além de poder dividir seu código em partes reutilizáveis ​​menores, os módulos permitem que você mantenha determinados valores dentro de seu arquivo privado . As declarações dentro de um módulo têm escopo ( encapsulado ) para esse módulo, por padrão. Se não exportarmos explicitamente um determinado valor, esse valor não estará disponível fora desse módulo. Isso reduz o risco de colisões de nomes para valores declarados em outras partes de sua base de código, pois os valores não estão disponíveis no escopo global.

### Fonte
https://www.patterns.dev/posts/module-pattern/