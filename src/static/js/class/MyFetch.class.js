export default class MyFetch {
  static baseUrl = '/api/blog';
  constructor() {}

  static async getPosts() {
    const res = await fetch(MyFetch.baseUrl);
    const data = await res.json();
    return data;
  }

  static async createPost() {
    const res = await fetch('api/create');
    const data = await res.json();
    return data;
  }
}
