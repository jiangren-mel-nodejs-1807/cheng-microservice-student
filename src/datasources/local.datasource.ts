import {inject} from '@loopback/core';
import {juggler, AnyObject} from '@loopback/repository';
const config = require('./local.datasource.json');

export class LocalDataSource extends juggler.DataSource {
  static dataSourceName = 'local';

  constructor(
    @inject('datasources.config.local', {optional: true})
    dsConfig: AnyObject = config
  ) {
    super(dsConfig);
  }
}
