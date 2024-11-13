import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ScrollView, Image, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
    parent:{
        fontSize:10,
        paddingLeft:20,
        paddingRight:20,
        backgroundColor: '#EEFFE6',
        flex: 1,
        flexDirection: 'column',
    },
    child:{
        marginBottom: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
        alignItems: 'center',
        backgroundColor:'#539987',
        borderWidth: 1.5,
        fontSize:19,
        paddingBottom:5,
    },
    enterName:{
        marginTop: 20,
        fontSize: 18,
    },
    questionText:{
        fontSize: 19,
        color: '#E9FFFA',
        textAlign: 'center',
        paddingBottom: 5,
    }
})

const InputBox = ({label, onChangeText, icon_name}) => {
  return (
      // <View style={{padding: 20, paddingBottom: 5}}>
      <View>
        <Text>{label}</Text>
        <TextInput style = {{borderWidth: 1}} onChangeText={onChangeText}/>
          <FontAwesome5 name={icon_name} size={33} color="#539987" />
      </View>
  );
};

const MyApp = () => {

    const correctAnswer = ["Bee", "Tiger", "Turtle", "Crocodile"];
    const [name, setName] = useState('');
    const [answer1, setAnswer1] = useState(" ");
    const [answer2, setAnswer2] = useState(" ");
    const [answer3, setAnswer3] = useState(" ");
    const [answer4, setAnswer4] = useState(" ");

    const handleSubmit = () => {
        let score = 0;
        if (answer1 === correctAnswer[0]) score++;
        if (answer2 === correctAnswer[1]) score++;
        if (answer3 === correctAnswer[2]) score++;
        if (answer4 === correctAnswer[3]) score++;
        Alert.alert(name + " scored " + score + " points out of 4!");
    };

    return (
            // <ScrollView contentContainerStyle={{paddingBottom: 20}} style={styles.parent}>
            <ScrollView style={styles.parent}>
                <Text style={{paddingTop: 30, alignSelf:'center', fontSize:24, color:'#383D3B'}}>
                    <FontAwesome5 name="cat" size={33} color="#539987" />
                    <Text style={{ fontSize: 24, color: '#1C3411', fontWeight: 'bold',}}>  Animal Quiz Game  </Text>
                    <FontAwesome5 name="cat" size={33} color="#539987"/>
                </Text>
                {/*<Text style={{paddingTop: 30, alignSelf:'center', fontSize:24, color:'#1C3411'}}>Animal Quiz Game</Text>*/}
                <View style={styles.enterName}>
                    <InputBox label="Enter Player's Name:" onChangeText={setName}/>
                </View>

                <View style={styles.child}>
                    <Text style={styles.questionText}>Q1: What Animal is this?</Text>
                    <Image source={require("./img/bee.jpg")} style={{ width: 350, height: 350, alignSelf:'center' }} />
                    <RNPickerSelect
                        onValueChange={(value) => setAnswer1(value)}
                        items={[
                            {label: 'Bee', value: 'Bee'},
                            {label: 'Giraffe', value: 'Giraffe'},
                            {label: 'Turtle', value: 'Turtle'},
                            {label: 'Deer', value: 'Deer'},
                            {label: 'Penguin', value: 'Penguin'},
                        ]}
                    />
                </View>

                <View style={styles.child}>
                    <Text style={styles.questionText}>Q2: What Animal is this?</Text>
                    <Image source={require("./img/tiger.jpg")} style={{ width: 350, height: 350, alignSelf:'center' }} />
                    <RNPickerSelect
                        onValueChange={(value) => setAnswer2(value)}
                        items={[
                            {label: 'Squirrel', value: 'Squirrel'},
                            {label: 'Elephant', value: 'Elephant'},
                            {label: 'Tiger', value: 'Tiger'},
                            {label: 'Zebra', value: 'Zebra'},
                            {label: 'KingFisher', value: 'KingFisher'},
                        ]}
                    />
                </View>

                <View style={styles.child}>
                    <Text style={styles.questionText}>Q3: What Animal is this?</Text>
                    <Image source={require("./img/turtle.jpg")} style={{ width: 350, height: 350, alignSelf:'center' }} />
                    <RNPickerSelect
                        onValueChange={(value) => setAnswer3(value)}
                        items={[
                            {label: 'Peacock', value: 'Peacock'},
                            {label: 'Owl', value: 'Owl'},
                            {label: 'KingFisher', value: 'KingFisher'},
                            {label: 'Turtle', value: 'Turtle'},
                            {label: 'Squirrel', value: 'Squirrel'},
                        ]}
                    />
                </View>

                <View style={styles.child}>
                    <Text style={styles.questionText}>Q4: What Animal is this?</Text>
                    <Image source={require("./img/crocodile.jpg")} style={{ width: 350, height: 350, alignSelf:'center' }} />
                    <RNPickerSelect
                        onValueChange={(value) => setAnswer4(value)}
                        items={[
                            {label: 'Leopard', value: 'Leopard'},
                            {label: 'Crocodile', value: 'Crocodile'},
                            {label: 'Hummingbird', value: 'Hummingbird'},
                            {label: 'Owl', value: 'Owl'},
                            {label: 'Tiger', value: 'Tiger'},
                        ]}
                    />
                </View>

                <TouchableOpacity onPress={handleSubmit} style={{borderRadius: 25, width:200, height:50, backgroundColor:'#508A38', alignSelf:'center', paddingTop: 13}}>
                    <Text style={{color: '#FDFFFC', fontSize: 18, textAlign: 'center'}}>Submit Answer</Text>
                </TouchableOpacity>

                {/*<Button style={{marginTop: 10, marginBottom: 10}} title="Submit Answer" onPress={handleSubmit}/>*/}
            </ScrollView>
    );
};

export default MyApp;
