import axios from "axios";

export interface IData {
  id: number;
  src: string;
  preview: string;
  duration: number;
  title: string;
  artists: string;
  genres: string;
}

const URL = "http://localhost:3001/music";

const dataApi = {
  async getPosts() {
    try {
      const response = await axios.get(`${URL}`);
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  },

  async getPostById(postId: number) {
    try {
      const response = await axios.get(`${URL}/posts/${postId}`);
      return response.data;
    } catch (error) {
      console.error(`Ошибка при получении данных для поста с ID ${postId}:`, error);
      throw error;
    }
  },
};

export { dataApi };
