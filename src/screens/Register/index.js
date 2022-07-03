import {
    Text,
    Image,
    View,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './styles';
import Button from '../../components/Button';
import URL from '../../../assets/Link/URL';
import FormElement from '../../components/FormElement';

function RegisterScreen({ navigation }) {
    const handleSubmit = () => {};

    return (
        <SafeAreaView style={styles.container}>
            <Image
                style={styles.imgBackground}
                source={{
                    uri: URL.bg_img_intro,
                }}
            />
            <View style={styles.header}>
                <Text style={styles.title}>Đăng ký tài khoản</Text>
                <View style={styles.breakLine}></View>
            </View>

            <KeyboardAvoidingView
                style={styles.formContent}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                enabled={false}
            >
                <ScrollView>
                    <FormElement
                        title={'SĐT'}
                        placeholder={'Nhập số điện thoại'}
                        keyboardType={'numeric'}
                    />

                    <FormElement title={'Email'} placeholder={'Nhập Email'} />

                    <FormElement
                        title={'Họ và tên'}
                        placeholder={'Nhập họ tên'}
                    />

                    <FormElement
                        title={'Mật khẩu'}
                        placeholder={'Nhập mật khẩu'}
                        secureTextEntry={true}
                    />
                </ScrollView>
            </KeyboardAvoidingView>

            <View style={styles.button}>
                <Button
                    textInside={'Đăng ký'}
                    style={{ width: 200, height: 50 }}
                />
            </View>
        </SafeAreaView>
    );
}

export default RegisterScreen;
