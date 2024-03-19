const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const path = require('path');

// Define el esquema de GraphQL
const typeDefs = gql`
  type Query {
    hello(message: String!): String
    aboutMichael: String
    aboutLeja: String
    aboutCristian: String
    aboutJose: String
<<<<<<< HEAD
    aboutBrigitte: String
=======
    aboutValeria: String
    aboutEsperanza: String
    aboutAndres: String
>>>>>>> a1916755459e444997da9b03e2d4ef25f6da9881
  }
`;

// Define los resolvers de GraphQL
const resolvers = {
  Query: {
    hello: (_, { message }) => {
      return `¡Hola, ${message}! Un saludo por parte del profe `;
    },
    aboutMichael: (_) => {
      return `¡Hola!, Soy Michael y me gusta la pizza :D, trabajo como desarrollador en Carvajal y tengo 2 gatos.`;
    },
    aboutLeja: (_) => {
      return `¡Hola!, Soy Alejandra, tengo una hermana gemela, me gustan mucho las manualidades (tejer, pintar, dibujar,etc.) y trabajo como aux. administrativa en IMEC.`;
    },
    aboutCristian: (_) => {
      return `¡Hola!, Soy Cristian: me gusta bailar salsa, me gusta jugar tenis y me encanta hacer hiking.`;
    },
    aboutJose: (_) => {
      return `¡Hola!, Soy Jose y me gustan los videojuegos,escuchar musica,y tengo una hermosa gata.`;
    },
<<<<<<< HEAD
    aboutBrigitte: (_) => {
      return `¡Hola!, Soy Vanesa y me gusta escuchar musica, las plantas y tengo una gata mas hermosa que la de Jose.`;
    },
=======
    aboutValeria: (_) => {
      return `¡Hola!, Soy Valeria. Me gusta nadar, jugar al fútbol, dormir y comer :D Tengo un gato llamado Zeus y estoy aprendiendo a manejar moto `;
    },
    aboutEsperanza: ( ) => {
      return `¡Hola, soy Esperanza! Me gustan los videojuegos, el anime y leer mangas/webcómics. También tengo un gato llamado Jean. `;
    },
    aboutAndres: ( ) => {
      return `¡Hola!, Soy Andrés, me gusta el fútbol y el ciclismo. Tengo un perro llamado Keisy. `;
    }
>>>>>>> a1916755459e444997da9b03e2d4ef25f6da9881

  },
};

async function startApolloServer() {
  // Crea la instancia de Apollo Server
  const server = new ApolloServer({ typeDefs, resolvers });

  // Inicia el servidor Apollo
  await server.start();

  // Crea la aplicación Express
  const app = express();

  // Aplica el middleware de Apollo Server a la aplicación Express
  server.applyMiddleware({ app, path: '/graphql' });

  // Sirve la aplicación de React desde la carpeta "saludofront-app"
  const reactAppPath = path.join(__dirname, 'saludofront-app', 'dist');
  app.use(express.static(reactAppPath));
  app.get('*', (req, res) => {
    res.sendFile(path.join(reactAppPath, 'index.html'));
  });

  // Inicia el servidor
  const PORT = 4000;
  app.listen(PORT, () => {
    console.log(`Servidor GraphQL ejecutándose en http://localhost:${PORT}${server.graphqlPath}`);
  });
}

startApolloServer();

