# projetoFinal

Este é o repositório do projeto Final. 

Passos para instalar o projeto:
1. Clonar o projeto.
2. Importar a base de dados (pasta bd)
3. Instalar as dependêcias, na página do backend.

```shell
npm install
```

3. Correr o servidor
 ```shell
npm start
```

Siga as etapas abaixo para criar um novo branch, fazer commit de alterações, abrir um Pull Request e, eventualmente, fundir suas alterações com o branch principal (main).

## Criar um Novo Branch SEMPRE que começarmos uma nova tarefa

Para criar um novo branch no GitHub, siga estes passos:

1. Acesse a página de branches do repositório: https://github.com/dianarsrodrigues/projetoFinal/branches
2. Clique no botão "New Branch" na parte superior da página do repositório.
3. Dê um nome significativo ao branch, como "criacao-do-menu".
4. Na source, escolher sempre "main".
5. Clique em "Create new branch".

## Antes de Abrir um Pull Request

Antes de abrir um Pull Request, certifique-se de fazer commit de todas as alterações feitas localmente:

Abrir a linha de comandos e ir para a pasta do repositório do Git.
Verifique se os arquivos aparecem em vermelho e se você está na branch correta com o comando
```shell
git status
```

![gitStatusVermelho](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/19e1cb7d-1a7d-4525-8bbd-973e745ccf47)

### Se estiver na branch errada, execute o comando 
```shell
git checkout nomeBranch
```
Verifique novamente.
```shell
git status
```
### Na branch correta  
Seguir os seguintes comandos 
```shell
git add .
git status
```
*Verifique se os arquivos aparecem em verde*

![gitSatusVerde](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/66039ca7-3f14-40c8-804a-0149e003a0e2)

```shell
git commit -m "Nome do Commit"
```
![gitCommit](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/d0e0ac04-2dee-40c3-bab1-f9d3934705a2)


```shell
git push
```

![gitPush](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/51d2e1e4-d003-4d7e-9a56-250a3dc0f394)

## Antes de abrir Pull Request, ver se a branch está atualizada com a branch "main"

O número sublinhado tem que ser ZERO!
![pullRequest](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/bda18db1-c300-4122-bc9a-3be8e5b196e1)

### Se não for ZERO, é necessário atualizar a branch main localmente:
Seguir os comandos:
```shell
git checkout main
```
![gitCheckoutMain](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/c2d640fe-a2fc-4f84-846f-86492d1a9fb3)

```shell
git pull
git checkout nomeBranch
git rebase main
```

#### Se aparecer a mensagem "Successfully rebased and updated":


![rebaseMain](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/3975239c-be91-4580-ad77-50a4922f4688)

*Se não aparecer a mensagem, NÃO FAZER este comando!!!!*
```shell
git push -f
```

![force](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/47b07781-72ee-4008-bb07-b8b0a21d4330)

## No gitHub, Criar um New Pull Request:

![newPullRequest](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/657989e2-5698-44aa-935e-32336aa0a317)

### 1. Confirmar que a base é main e o compare é a branch que se está a trabalhar e Verificar se os commit realizados aparecem

![confimarRequest](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/4e6c9430-9a5c-4436-a10c-17b24b2647b3)

### 2. Carregar em Create pull request
### 3. Colocar nos Reviewers todos os membros do grupo
![reviwers](https://github.com/dianarsrodrigues/projetoFinal/assets/109226540/8e9a66d2-3a78-49a8-945c-98c246264a9b)

### 4. Carregar em Create pull request

## Depois de aprovado pelos colegas de equipa carregar em Rebase and Merge

Obrigado pela atenção. 
Alguma dúvida perguntem :)
