import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import useUser from "../user/user";
import { collection, getDocs } from "firebase/firestore";

export default function getMerch() {
  const [cart, setCart] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useUser();

  async function getData() {
    try {
      const response = await getDocs(
        collection(db, `user/${user.userID}/cart`)
      );
      setCart(
        response.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
      setLoading(false);
      setError(null);
    } catch (e) {
      setError(e);
    }
  }

  useEffect(() => {
    getData();
  }, [cart]);

  return { cart, error, loading };
}
