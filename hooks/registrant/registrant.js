import React, { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { collection, getDocs } from "firebase/firestore";

export default function getRegistrant() {
  const [registrant, setRegistrant] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  async function getData() {
    try {
      const response = await getDocs(collection(db, "event-registrant"));
      setRegistrant(
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

  return { registrant, error, loading };
}
