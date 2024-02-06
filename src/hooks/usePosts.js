import axios from "axios";
import { onMounted, ref } from "vue";

export default function usePosts() {
  const posts = ref([]);
  const isLoading = ref(true);
  const removePost = (post) => {
    posts.value = posts.value.filter((p) => p.id !== post.id);
  };
  const fetching = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?_limit=20"
      );
      posts.value = response.data;
    } catch (error) {
      console.log(error);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fetching);
  return {
    posts,
    isLoading,
    removePost,
  };
}
