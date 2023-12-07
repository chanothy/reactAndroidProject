import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { collection, onSnapshot } from 'firebase/firestore';
import Listings from '../../components/Listings';
import { db } from '../../FirebaseConfig';

/**
 * Trips page 
 * links to db with snapshots of the collection of reservations
 */

export default function Trips() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const listingsCollection = collection(db, 'reservations');
    const tripData = onSnapshot(listingsCollection, (snapshot) => {
      const listingsList = snapshot.docs.map(doc => doc.data());
      setListings(listingsList);
    });

    return () => tripData();
  }, []);

  return (
  <View>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Reservations</Text>
    <ScrollView>
      {listings.map((listing) => (
        <Listings
          key={listing.listingId}
          ids={[listing.listingId]}
        />
      ))}
    </ScrollView>
    </View>
  );
}
