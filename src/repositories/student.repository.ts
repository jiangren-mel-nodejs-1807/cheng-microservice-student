import { DefaultCrudRepository, juggler } from '@loopback/repository';
import { Student } from '../models';
import { inject } from '@loopback/core';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id
  > {
  constructor(
    @inject('datasources.local') protected datasource: juggler.DataSource,
  ) {
    super(Student, datasource);
  }
}
