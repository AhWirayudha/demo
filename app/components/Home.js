import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Modal, Pressable, Alert, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Context } from '../ext/Store';

const Item = ({ nama, sex, tgl, nik }) => (
    <View style={styles.item}>
        <Text>NIK : {nik}</Text>
        <Text>Nama : {nama}</Text>
        <Text>Jenis Kelamin : {sex}</Text>
        <Text>Tanggal lahir : {tgl}</Text>
    </View>
);

const Home = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [nik, setNik] = useState('');
    const [nama, setNama] = useState('');
    const [sex, setSex] = useState('');
    const [tgl, setTgl] = useState('');
    const [isEdit, setIsEdit] = useState(false);

    const add = async (item) => {
        setModalVisible(true);
    };

    const save = async () => {
        if (isEdit == false) {
            data.push(
                {
                    nik: nik,
                    nama: nama,
                    sex: sex,
                    tgl: tgl,
                }
            );
        } else {
            data.map(p =>
                p.nik === nik
                    ? { ...p, nama: nama }
                    : p
            );
        }
        cleardata();
        setModalVisible(false);
    };

    const cleardata = async () => {
        setNik('');
        setNama('');
        setSex('');
        setTgl('');
        setIsEdit(false);
    };

    const hapus = async (item) => {
        const filtered = data.filter(function (ibj) { return obj.nik === item.nik; });
        setData(filtered);
    };

    const edit = async (item) => {
        setNik(item.nik);
        setNama(item.nama);
        setSex(item.sex);
        setTgl(item.tgl);
        setIsEdit(true);

        setModalVisible(true);
    };

    const renderItem = ({ item }) => (
        <View>
            <Item nama={item.nama} sex={item.sex} tgl={item.tgl} nik={item.nik} />
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => edit(item)}
            >
                <Text style={styles.textStyle}>Edit</Text>
            </Pressable>
            <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => hapus(item)}
            >
                <Text style={styles.textStyle}>Hapus</Text>
            </Pressable>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={{ height: '20%', justifyContent: 'center' }}>
                <Text style={styles.welcome}>Manajemen Data Pegawai</Text>
            </View>
            <View style={{ alignItems: 'center', margin: 10 }}>
                <TouchableOpacity style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 15, borderColor: 'red', borderWidth: 2, backgroundColor: '#f0e9e9' }} onPress={() => add()} >
                    <View style={{ paddingTop: 5, paddingBottom: 5, paddingLeft: 20, paddingRight: 20, borderRadius: 15, }}>
                        <Text style={{ color: 'red' }}>Tambah Data</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <FlatList
                data={data}
                numColumns={2}
                horizontal={false}
                renderItem={renderItem}
                keyExtractor={item => item.nik}
                contentContainerStyle={{ width: '100%', alignItems: 'center', paddingBottom: 30 }}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
            <View style={{ justifyContent: 'center', alignItems: 'center', position: 'absolute', left: 0, right: 0, bottom: 0 }}>
                <Text>© AH WIRAYUDHA</Text>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TextInput
                            style={{ height: 40 }}
                            placeholder="NIK"
                            onChangeText={nik => setNik(nik)}
                            defaultValue={nik}
                        />
                        <TextInput
                            style={{ height: 40 }}
                            placeholder="Nama"
                            onChangeText={nama => setNama(nama)}
                            defaultValue={nama}
                        />
                        <TextInput
                            style={{ height: 40 }}
                            placeholder="Jenis Kelamin"
                            onChangeText={sex => setSex(sex)}
                            defaultValue={sex}
                        />
                        <TextInput
                            style={{ height: 40 }}
                            placeholder="Tanggal Lahir"
                            onChangeText={tgl => setTgl(tgl)}
                            defaultValue={tgl}
                        />
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => save()}
                        >
                            <Text style={styles.textStyle}>Simpan Data</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 40,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    item: {
        backgroundColor: '#f0e9e9',
        //flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        margin: 5
    },
    title: {
        fontSize: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
});

export default Home;