import { Person } from './Person';
import { Request } from 'express';

export interface PersonRequest extends Request {
  person?: Person,
}