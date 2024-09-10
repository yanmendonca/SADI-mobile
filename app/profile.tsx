import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { MainHeader, SubjectHeader } from '@/components/Headers';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileAttendanceCard, ProfileCard, ProfileReportCard } from '@/components/Cards';

export default function Modal() {
  return (
    <SafeAreaView style={styles.body}>
      <SubjectHeader title={'Perfil'} />
      <View style={styles.container}>
        <ProfileCard />
      </View>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
        <View>
          <ProfileAttendanceCard />
        </View>
        <View style={styles.reportContainer}>
          <ProfileReportCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: { 
    flex: 1, 
    backgroundColor: '#F9FAFB' 
  },
  container: {
    marginTop: 70,
    flex: 1,
  },
  scrollView: {
    paddingTop: 80
  },
  reportContainer: {
    marginTop: 20, 
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
});
