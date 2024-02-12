# EngraveMe

**EngraveMe** is a pioneering project designed to make the blockchain accessible for persistently saving data. Our initial focus is on the Bitcoin blockchain, offering a user-friendly interface for engraving messages permanently. Whether you're looking to immortalize a moment or secure data for eternity, EngraveMe provides the tools you need to write directly onto the world's most robust ledger.


## Technologies Used

- **Vue.js**: A progressive JavaScript framework for building user interfaces.
- **Nuxt.js**: An intuitive Vue framework for creating modern web applications.
- **Vuetify**: A Vue UI library with beautifully handcrafted components.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **SCSS/SASS**: A preprocessor scripting language that is interpreted or compiled into CSS.
- **Yarn**: Our preferred package manager for handling project dependencies.


## Project Setup

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/engraveme.git
cd engraveme
```
Then Install the dependencies:
```bash
yarn install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# yarn
yarn dev

```

## Production

Build the application for production:

```bash

# yarn
yarn build

```

Locally preview production build:

```bash

# yarn
yarn preview

```

## Resources 
- Framework [docs](https://vuejs.org/)
- Meta-Framework [docs](https://nuxt.com/)
- Vuetify as our Component Library [docs](https://vuetifyjs.com/en/)
### CSS Utils
- Tailwind [docs](https://tailwindcss.com/)
- SCSS/SASS [docs](https://sass-lang.com/documentation/)

## API Endpoints
- 'api/healthchecker', (), -> ()
- 'api/request-engraving', (msg: string, chain: string) -> (address: string, fees: number)
- 'api/tx/:txId', (txId: string) -> (op_return: string, status: string)
- 'api/tx-stream/:tx_id', (txId: string) -> (transactionStatus as Sse(Server-Side Event))