# Questões Questions Talk Web APP

Aplicação react Questions Talk

## Tipos de commit

| Tipo de commit | Descrição                | Release                                                                                                                     |
| -------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `feat`         | Uma nova feature         | `minor`                                                                                                                     |
| `fix`          | Correção de bugs         | `patch`                                                                                                                     |
| `docs`         | Documentação             | `patch`se o `escopo` for `readme`                                                                                           |
| `lint`         | Formatação de código     | Alterações que não afetam o significado do código (espaços em branco, identação, ponto-e-virgula, etc)                      |
| `style`        | Estilização de Página    | Alterações que afentam estilização da página não necessariamente uma funcionalidade nova (Aquivos styl,css, animações )     |
| `refactor`     | Refatoração de código    | Alteração no código que não corrige um bug, e nem adiciona uma feature                                                      |
| `perf`         | Melhorias de performance | Alteração no código que melhora a performance                                                                               |
| `build`        | Builds                   | Alterações que afetam o sistema de build, ou dependências externas (escopos exemplares: gulp, broccoli, yarn, npm, webpack) |
| `ci`           | Integração continua (CI) | Alteração aos arquivos de configuração e scripts do CI (escopos exemplares: travis, circleci, browserstack, saucelabs)      |
| `chore`        | Chores                   | Outras mudanças que não modificam os arquivos da aplicação ou dos testes                                                    |
| `revert`       | Reversão de commit       | Reversão a um commit anterior                                                                                               |

## Check-List de desenvolvimento

- [ ] Pesquisa de questões e resposta por texto
- [ ] Paginação
- [ ] Listagem dinâmica baseado no QuestoesTalk
- [x] Header _html/csss_
- [x] Listagem _html/csss_

## Servidor de desenvolvimento

Execute `yarn start` para iniciar um servidor de desenvolvimento. Navegue ao `http://localhost:3000/`. O app irá recarregar automaticamente caso haja qualquer mudança nos arquivos da aplicação.

Lembre-se de rodar o comando `sass --watch src/styles/scss:src/styles/css`, para o `sass` escutar as mudanças de estilos
