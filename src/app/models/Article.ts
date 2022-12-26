import { Category } from './Category';

export class Article {
  id!: number;
  title!: string;
  imgTitle!: string;
  createdDate!: string;
  abstracted!: string;
  content!: string;
  author!: string;
  views!: number;
  category!: Category;
  isVisible!: number;
}
