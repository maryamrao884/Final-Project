// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// export default function App() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       // IMPORTANT: For Android emulator use 'http://10.0.2.2:3000/products'
//       // For iOS simulator use 'http://localhost:3000/products'
//       // For physical device use your computer's local IP (e.g., 'http://192.168.1.5:3000/products')
//       const response = await fetch('http://localhost:3000/products');
//       const data = await response.json();
//       setProducts(data);
//       console.log(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>AgrifeedBazar Products</Text>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <View style={styles.product}>
//             <Text style={styles.name}>{item.name}</Text>
//             <Text>Price: ₹{item.price}</Text>
//             <Text>Stock: {item.stock}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20, backgroundColor: '#fff' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
//   product: { marginBottom: 15, padding: 10, borderBottomWidth: 1 },
//   name: { fontSize: 18, fontWeight: '600' },
// });

import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Replace with your PC's IPv4 address (run `ipconfig` in PowerShell)
      const response = await fetch('http://192.168.100.53:3000/products');
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error('Fetch error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AgrifeedBazar Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.product}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>Price: ₹{item.price}</Text>
            <Text>Category: {item.category}</Text>
            <Text>Season: {item.season || 'All Season'}</Text>
            {item.image ? <Image source={{ uri: item.image }} style={styles.image} /> : null}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  product: { marginBottom: 15, padding: 10, borderBottomWidth: 1 },
  name: { fontSize: 18, fontWeight: '600' },
  image: { width: 100, height: 100, marginTop: 5 }
});