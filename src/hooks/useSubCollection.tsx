import React, { useEffect, useState } from "react";
import {
  onSnapshot,
  collection,
  query,
  DocumentData,
  CollectionReference,
  Query,
  orderBy,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { useAppSelector } from "../app/fooks";

interface Messages {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  };
}

export const useSubCollection = (
  collectionName: string,
  subCollectionName: string
) => {
  const [subDocuments, setSubDocuments] = useState<Messages[]>([]);
  const channelId = useAppSelector((state) => state.channel.channelId);

  useEffect(() => {
    let collectionRef: CollectionReference<DocumentData> = collection(
      db,
      collectionName,
      String(channelId),
      subCollectionName
    );

    const collectionRefOrder = query(
      collectionRef,
      orderBy("timestamp", "desc")
    );

    onSnapshot(collectionRefOrder, (snapshot) => {
      let result: Messages[] = [];
      snapshot.docs.forEach((doc) => {
        result.push({
          timestamp: doc.data().timestamp,
          message: doc.data().message,
          user: doc.data().user,
        });
      });
      setSubDocuments(result);
    });
  }, [channelId]);

  return { subDocuments };
};
