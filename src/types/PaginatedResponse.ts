import { Response } from 'express';

export interface PaginatedResponse extends Response {
  totalCount?: number;
  paginated?: [],
}
