import { useAuth, useUser } from '@clerk/expo';
import { useClerk } from '@clerk/expo';
import { Link } from 'expo-router';
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { UserButton, UserProfileView } from "@clerk/expo/native";

export default function Page() {
  const { isSignedIn } = useAuth({ treatPendingAsSignedOut: false });
  const { user } = useUser();
  const { signOut } = useClerk();

  return (
    <View style={styles.container}>
      {!isSignedIn ? (
        <>
          <Text style={styles.title}>Welcome!</Text>
          <Link href="/(auth)/sign-in">
            <Text>Sign in</Text>
          </Link>
        </>
      ) : (
        <>
          {/* Header với thông tin user và các nút */}
          <View style={styles.header}>
            <Text style={styles.title}>Hello {user?.emailAddresses[0].emailAddress}</Text>
            
            <Pressable style={styles.button} onPress={() => signOut()}>
              <Text style={styles.buttonText}>Sign out</Text>
            </Pressable>
            
            <View style={{ width: 36, height: 36 }}>
              <UserButton />
            </View>
          </View>
          
          {/* ✅ UserProfileView với style flex: 1 - chiếm toàn bộ phần còn lại */}
          <UserProfileView style={{ flex: 1 }} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,        // Container chiếm toàn màn hình
    padding: 20,
    paddingTop: 60,
  },
  header: {
    marginBottom: 20,
    gap: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#0a7ea4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
});