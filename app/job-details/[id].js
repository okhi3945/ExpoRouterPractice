import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import useFetch from '../../hook/useFetch';
import { View, Text, ActivityIndicator, Image, ScrollView, Linking, StyleSheet } from 'react-native';

/* 
    useLocalSearchParams → [id].js → 동적 라우팅 → 
    url의 특정 부분을 변수로 사용하여 다양한 페이지를 생성 → 
    [id]는 URL의 일부를 동적으로 받아오는 매개변수
    nearbyjobs에서 값하나를 눌렀을 때 각 값의 id값을 사용하여 페이지를 동적으로 생성해줌
*/

const JobDetails = () => {
    const params = useLocalSearchParams();
    const { data, isLoading, error } = useFetch(
        "job-details", {
        job_id: params.id,
    }
    );
    console.log(data)
    if (isLoading) {
        return (
            <View style={styles.loadingContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text>로딩 중...</Text>
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text>오류 발생: {error.message}</Text>
            </View>
        );
    }

    if (!data || data.length === 0) {
        return (
            <View style={styles.errorContainer}>
                <Text>데이터가 없습니다.</Text>
            </View>
        );
    }

    const job = data[0];

    return (
        <ScrollView style={styles.container}>
            <Image source={{ uri: job.employer_logo }} style={styles.logo} />
            <Text style={styles.jobTitle}>{job.job_title || "직무 제목 없음"}</Text>

            <View style={styles.table}>
                <View style={styles.tableHeader}>
                    <Text style={styles.headerTextLeft}>정보</Text>
                    <Text style={styles.headerText}>내용</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.rowLabel}>고용주 이름</Text>
                    <Text style={styles.rowValue}>{job.employer_name}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.rowLabel}>위치</Text>
                    <Text style={styles.rowValue}>{job.job_city}, {job.job_state}, {job.job_country}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.rowLabel}>고용 형태</Text>
                    <Text style={styles.rowValue}>{job.job_employment_type}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.rowLabel}>필요한 기술</Text>
                    <Text style={styles.rowValue}> 
                        {job.job_required_skills && job.job_required_skills.length > 0 // job_required_skills가 null이거나, length가 0보다 같거나 작으면 없음이라고 표시
                            ? job.job_required_skills.join(', ')
                            : "없음"}
                    </Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.rowLabel}>직무 설명</Text>
                    <Text style={styles.rowValue}>{job.job_description}</Text>
                </View>
                <View style={styles.tableRow}>
                    <Text style={styles.rowLabel}>지원 링크</Text>
                    <Text
                        style={styles.rowValueLink}
                        onPress={() => Linking.openURL(job.job_apply_link)}
                    >
                        {job.job_apply_link}
                    </Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
    },
    jobTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableHeader: {
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        padding: 10,
    },
    headerText: {
        flex: 1,
        fontWeight: 'bold',
        textAlign: 'left',
    }, headerTextLeft: {
        flex: 1,
        fontWeight: 'bold',
        marginLeft: '1%'
    },
    tableRow: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    rowLabel: {
        flex: 1,
        fontWeight: 'bold',
    },
    rowValue: {
        flex: 2,
    },
    rowValueLink: {
        flex: 2,
        color: 'blue',
        textDecorationLine: 'underline',
    },
});

export default JobDetails;
