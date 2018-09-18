import { Filter, Where, repository } from '@loopback/repository';
import {
  post,
  param,
  get,
  patch,
  del,
  requestBody
} from '@loopback/rest';
import { Student } from '../models';
import { StudentRepository } from '../repositories';

export class StudentController {
  constructor(
    @repository(StudentRepository)
    public studentRepository: StudentRepository,
  ) { }

  @post('/students')
  async create(@requestBody() Student: Student)
    : Promise<Student> {
    return await this.studentRepository.create(Student);
  }

  @get('/students/count')
  async count(@param.query.string('where') where?: Where): Promise<number> {
    return await this.studentRepository.count(where);
  }

  @get('/students')
  async find(@param.query.string('filter') filter?: Filter)
    : Promise<Student[]> {
    return await this.studentRepository.find(filter);
  }

  @patch('/students')
  async updateAll(
    @requestBody() Student: Student,
    @param.query.string('where') where?: Where
  ): Promise<number> {
    return await this.studentRepository.updateAll(Student, where);
  }

  @get('/students/{id}')
  async findById(@param.path.number('id') id: number): Promise<Student> {
    return await this.studentRepository.findById(id);
  }

  @patch('/students/{id}')
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() Student: Student
  ): Promise<boolean> {
    return await this.studentRepository.updateById(id, Student);
  }

  @del('/students/{id}')
  async deleteById(@param.path.number('id') id: number): Promise<boolean> {
    return await this.studentRepository.deleteById(id);
  }
}
