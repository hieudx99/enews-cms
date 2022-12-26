import { User } from './User';
import { Article } from './Article';

export class Comment {
  id!: number;
  requestDate!: string;
  content!: string;
  isVisible!: number;
  user!: User;
  article!: Article;
}
