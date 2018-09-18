import { ChengMicroserviceStudentApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import * as fs from 'fs';

export { ChengMicroserviceStudentApplication };

export async function main(options?: ApplicationConfig) {
  const httpsOptions = {
    rest: {
      protocol: 'https',
      key: fs.readFileSync('./key.pem'),
      cert: fs.readFileSync('./cert.pem'),
    },
  };
  const app = new ChengMicroserviceStudentApplication(httpsOptions);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
