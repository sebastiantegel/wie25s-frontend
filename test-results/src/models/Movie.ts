export class Movie {
  title: string;
  imageUrl: string;
  id: string;

  constructor(title: string, imageUrl: string, id: string) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
  }
}
