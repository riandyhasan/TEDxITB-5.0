import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";


export default function getPosts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  async function getData() {
    try {
      const blogs = collection(db, "microblog");
      const q = query(blogs, orderBy("order", "desc"));
      const response = await getDocs(q);
      setPosts(
        response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
      );
      setLoading(false);
      setError(null);
    } catch (e) {
      setError (e);
    }
  }

  useEffect(() => {
    getData();
  }, []);

  return { posts, error, loading };
}
