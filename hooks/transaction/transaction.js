import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function getTransaction() {
  const [transaction, setTrasaction] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await getDocs(collection(db, "transaction"));
      setTrasaction(
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
  }, []);

  return { transaction, error, loading };
}
