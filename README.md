# Green Thumb.
Green Thumb é um projeto desenvolvido como etapa do processo seletivo para a [Red Ventures](https://www.redventures.com/) e baseado em um [layout](https://www.figma.com/file/y1TXkR9PKMOOgnjctWkvxI/greenthumb-pocket) específico.

Temporariamente, o projeto estará disponível neste [link](https://fernandofigueroa.000webhostapp.com/).

## Informações técnicas

#### Execução
 - Clone ou faça o download do projeto a partir do [`github`](https://github.com/fernandobf/challenge-red_ventures):
 - Instale o [`node`](https://www.npmjs.com/package/node):
  ```sh
npm i node
```
 - Instale o [`Live Server`](https://www.npmjs.com/package/live-server) (ou qualquer outro servidor local de sua preferência):
  ```sh
npm install -g live-server
```
 - No caso de ter escolhido o `Live Server`, basta entrar no diretório do projeto e executar o comando:
```sh
live-server
```
#### Estrutura do projeto
Abaixo segue a estrutura de pastas e arquivos contidos no projeto.
```
root/
├── css/
├── img/
├── js/
└── index.html
```

#### Stack utilizada
 - `HTML5`
 - `CSS3`
 - `JS Vanilha / ES6`

## Sobre o desafio
Um dos requisitos do teste solicitava para:
> "*não utilizar nenhum framework (Angular, React, Ember, Vue, etc)*"

Seguindo a ideia proposta, não utilizei nenhum *framework/library* de terceiros, seja em `JavaScript` ou `CSS`, ao mesmo tempo que tentei ser o menos verboso possível, priorizando um código simples e enxuto. 

**RESPONSIVIDADE:** O projeto contempla apenas as versões `mobile` e `desktop`, tendo seu break-point definido em `600px`.

**ASSETS:** para os elementos que representam cada um dos critérios selecionados, optei por usar `svg` ao invés de uma família inteira de fonte. Para as setas, logotipo e demais imagens decorativas, fiz a importação de imagens (em formato `.png` e otimizadas com o [PNG Tiny](https://tinypng.com/)).

**CARROSSEL:**  o carrossel só é aplicado corretamente quando acessado diretamente pelo `viewport` final (`<= 600px`) ou depois de recarregar a página. Isso acontece porque o script somente é aplicado na versão `mobile`.
*Nota: por ter optado por um carrossel bem simples e leve, ele mostrou-se limitado em alguns aspectos.*

**API:** Quando acessado o projeto pela primeira vez e ao definir os valores  `no`, `daily` e `true` nos campos `sun`, `water` e `pets` respectivamente, a `api` retorna um `status 404`. De qualquer forma, tomei a liberdade de criar um feedback generalista para os usuários em caso de erro.

**ARQUIVOS:** Para facilitar a legibilidade e consequente avaliação do código, optei por não minificá-los.

## Considerações finais

Espero que o trabalho apresentado esteja dentro da ideia proposta e que o mesmo tenha atingido as expectativas dos colegas. No mais, coloco-me à disposição para qualquer eventualidade. \0/
Torcendo para que tudo dê certo e que em breve possamos estar juntos, saúdo à todos. :) 

#### Sobre o autor
**Developed by:** fernandobf  

**Contact:** [fernandobf@globo.com](mailto:fernandobf@globo.com)

**LinkedIn:** [linkedin.com/in/fernandobf/](https://www.linkedin.com/in/fernandobf/)
