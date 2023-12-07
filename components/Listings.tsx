import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons';


export default function Listings({category, ids}) {
  const listings = [
    { id: 1, title: 'Cabin', url:'https://media.gettyimages.com/id/93463536/photo/log-cabin-in-the-forest.jpg?s=612x612&w=gi&k=20&c=11biv17nKCSCYw3zJ96oF7092sbjdfHA_xtqeSACHV0=' , price: '$100/night', category: 'Cabins' },
    { id: 2, title: 'Tiny Home', url:'https://media.gettyimages.com/id/108219206/photo/log-cabin-hidden-in-the-trees-by-the-lake-ohara-in-canada.jpg?s=612x612&w=gi&k=20&c=Fbrpof3ijCqANYPR_jxphlUp6yZhsFRTZV0YLZTeJQA=' , price: '$120/night', category: 'Tiny Homes' },
    { id: 3, title: 'Trendy', url:'https://media.gettyimages.com/id/1298286077/photo/luxury-living-room-at-night-with-sofa-floor-lamp-and-parquet-floor.webp?s=1024x1024&w=gi&k=20&c=PgsO0fa2r73hSMNmvITrumSvnptRcah_Fy1JE0DrBqk=' , price: '$90/night', category: 'Trending' },
    { id: 4, title: 'Play', url:'https://media.gettyimages.com/id/1311350206/photo/gamer-room.webp?s=1024x1024&w=gi&k=20&c=KnwJ_Htc4HSD2cTUYPeRvQPO0BkG5Ps6C5FhKfyyEqc=' , price: '$110/night', category: 'Play' },
  ];

 let filteredListings = listings;

  if (ids) {
    filteredListings = listings.filter(listing => ids.includes(listing.id));
  } else if (category) {
    filteredListings = listings.filter(listing => listing.category === category);
  }
  const navigation = useNavigation();

  const handleListingSelect = (listing) => {
    console.log(`Selected listing: ${listing.title}`);
    navigation.navigate('ListingDetails', { listing: listing });

  }
      return (
       <ScrollView style={{width: '100%' }}>
         {filteredListings.map((listing) => (
           <TouchableOpacity key={listing.id} onPress={() => handleListingSelect(listing)} style={{width: '100%' }}>
             <Text style={{ fontSize: 20 }} >{listing.title}</Text>
             <Text>{listing.price}</Text>
             <View style={{position: 'relative'}}>
               <Image source={{uri: listing.url}}
                      style={{width: '100%', height: 200}}
               />
               <AntDesign name="hearto" size={24} color="white" style={{position: 'absolute', top: 10, right: 10}} />
             </View>
           </TouchableOpacity>
         ))}
       </ScrollView>
      );
}
