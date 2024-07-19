import { Stack, Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="loginPage" />
      <Stack.Screen name="home" />
      <Stack.Screen name="myprofile" />
     
    </Stack>
  );
}
