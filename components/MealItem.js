import {
  Pressable,
  Text,
  View,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';

function MealItem({ title, imageUrl, duration, complexity, affordability }) {
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: '#ffffff00' }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
      >
        <View>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.text}>{title}</Text>
        </View>
        <View style={styles.details}>
          <Text style={styles.detailsItem}>{duration}m</Text>
          <Text style={styles.detailsItem}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailsItem}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  mealItem: {
    margin: 14,
    overflow: 'hidden',
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 4,
    //ios
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
  },
  buttonPressed: {
    opacity: 0.2,
  },
  image: {
    width: '100%',
    height: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  details: {
    flexDirection: 'row',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsItem: {
    marginHorizontal: 4,
    fontSize: 13,
    color: '#404041',
  },
});
