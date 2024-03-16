class Post {
  id: number;
  name: string;
  title: string;
  description: string;
  constructor(name: string, title: string, description: string, id: number) {
    this.name = name;
    this.description = description;
    this.title = title;
    this.id = id;
  }
}

export default Post;
