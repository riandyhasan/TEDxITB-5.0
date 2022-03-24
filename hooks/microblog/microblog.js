import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";


export default function getPosts() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);

  async function getData() {
    try {
      const response = await getDocs(collection(db, "microblog"))
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
