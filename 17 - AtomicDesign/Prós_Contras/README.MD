# PRÓS

## Componentes podem ser desenvolvidos separadamente da aplicação e testados, antes de importá-los na aplicação;

## Assim que os padrões estejam estabelecidos, é possível ter um processo de desenvolvimento mais rápido, com maior flexibilidade caso haja necessidade de mudança. Designs podem ser mais consistentes, por conta da reutilização dos componentes já existentes;

## Também ajuda a gerenciar o uso do CSS, pois, o CSS esta “amarrado” ao componente especifico.

# CONTRAS

## Media queries se tornam mais difíceis, pois, os componentes estão isolados e com isto não é possível determinar o tamanho do contêiner pai.  Para remediar esta situação é possível introduzir componentes de layout para envolver os elementos e estes componentes de layout implementariam as propriedade do CSS como flex, grid, etc.