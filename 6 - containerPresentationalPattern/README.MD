# Container/Presentational Pattern

No React, uma maneira de impor a separação de interesses é usando o padrão Container/Presentation. Com esse padrão, podemos separar a visão da lógica do aplicativo.

### Prós
Há muitos benefícios em usar o padrão Container/Presentational.

O padrão Container/Presentation incentiva a separação de interesses. Os componentes de apresentação podem ser funções puras que são responsáveis ​​pela interface do usuário, enquanto os componentes de contêiner são responsáveis ​​pelo estado e pelos dados do aplicativo. Isso facilita a aplicação da separação de interesses.

Os componentes de apresentação são facilmente reutilizáveis, pois eles simplesmente exibem dados sem alterar esses dados. Podemos reutilizar os componentes de apresentação em todo o nosso aplicativo para diferentes propósitos.

Como os componentes de apresentação não alteram a lógica do aplicativo, a aparência dos componentes de apresentação pode ser facilmente alterada por alguém sem conhecimento da base de código, por exemplo, um designer. Se o componente de apresentação foi reutilizado em muitas partes do aplicativo, a alteração pode ser consistente em todo o aplicativo.

Testar componentes de apresentação é fácil, pois geralmente são funções puras. Sabemos o que os componentes renderizarão com base nos dados que passamos, sem precisar simular um armazenamento de dados.

### Contras
O padrão Container/Presentation facilita a separação da lógica do aplicativo da lógica de renderização. No entanto, Hooks possibilitam obter o mesmo resultado sem ter que usar o padrão Container/Presentation e sem ter que reescrever um componente funcional sem estado em um componente de classe. Observe que hoje, não precisamos criar componentes de classe para usar estado mais.

Embora ainda possamos usar o padrão Container/Presentation, mesmo com React Hooks, esse padrão pode facilmente ser um exagero em aplicações de tamanho menor.

### Fonte
https://www.patterns.dev/posts/presentational-container-pattern/