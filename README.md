# EcoTrack

EcoTrack é uma aplicação fullstack desenvolvida para permitir o monitoramento e análise de dados ambientais em tempo real. A plataforma visa auxiliar organizações ambientais, pesquisadores e o público em geral a compreender melhor o impacto ambiental de diversas atividades e promover ações mais sustentáveis.

## Tecnologias Utilizadas

- **Frontend:** Angular
- **Backend:** NestJS
- **Containerização:** Docker
- **Orquestração:** Kubernetes
- **Infraestrutura como Código:** Terraform
- **Cloud:** AWS (Amazon Web Services)

## Arquitetura

EcoTrack é composto por uma interface de usuário construída com Angular que comunica-se com uma API RESTful desenvolvida em NestJS. A aplicação é dockerizada para facilitar o deployment e é orquestrada através do Kubernetes para escalar e gerenciar os containers eficientemente. A infraestrutura necessária é provisionada automaticamente na AWS usando Terraform.

## Como Executar

### Pré-requisitos

- Node.js e npm
- Docker
- Kubernetes CLI (kubectl)
- Terraform
- AWS CLI configurada com suas credenciais

### Instruções

1. **Clone o Repositório**
   ```bash
   git clone [URL_DO_REPOSITORIO]
   cd ecotrack-backend
   ```
2. **Inicie o Backend**
   ```bash
   cd backend
   npm install
   npm run start
   ```
3. **Dockerização**
   - Construa as imagens Docker para o frontend e o backend seguindo as instruções no Dockerfile de cada parte.
4. **Deploy com Kubernetes**
   - Construa as imagens Docker para o frontend e o backend seguindo as instruções no Dockerfile de cada parte.
5. **Terraform**
   - Inicialize e aplique a configuração do Terraform para provisionar os recursos na AWS.

## License

Nest is [MIT licensed](LICENSE).
