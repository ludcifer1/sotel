import env from './.env';

// `.env.ts` is generated by the `npm run env` command


export const environment = {
  production: true,
  version: env.npm_package_version,
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'fr-FR', 'vi-VI']
};
