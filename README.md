# Projet_MasterCamp_L3

# Vote à distance sécurisé

### Présentation
Ce projet a pour but de créer une application sécurisée de vote à distance, qui puisse être par exemple utilisée pour des élections officielles

Il s'agit d'une application web réalisée avec Vue.js 3 côté client et Nest.js côté serveur.
Pour la sécurisation des données, nous utilisons la blockchain d'Ethereum via le langage Solidity.


##### Equipe : Nicolas BATARDOT, Vincent PETIT, Alexandre PIEDVACHE, Timothé PREVOT, Marin VAN REMOORTEL

### Installation du client

```$ cd client```

```$ npm install```

#### Compiler et lancer la version dev

```$ npm run serve```

#### Compiler et lancer la version prod

```$ npm run build```


### Installation du serveur

```$ cd server```

```$ npm install```

#### Run dev version

```$ npm run start```

#### Run watch mode

```$ npm run start:dev```

#### Run production mode

```$ npm run start:prod```

### Créer la base de données

- Créer un fichier ormconfig.json d'après le template ormconfig.template dans server/templates et le remplir avec vos
informations de connexion postgres

- Mettre "synchronize" sur **true** pour créer la base la première fois, puis le mettre sur **false**
