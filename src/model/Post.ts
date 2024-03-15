class Post {
  id: string;
  name: string;
  title: string;
  post: string;
  constructor(name: string, title: string, post: string, id: string) {
    this.name = name;
    this.post = post;
    this.title = title;
    this.id = id;
  }
}

export default Post;
