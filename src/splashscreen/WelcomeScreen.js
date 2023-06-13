import React from 'react';
import {View, Text, Animated, Image,ScrollView} from 'react-native';
import {COLORS, SIZES, images} from '../../constant';
import {TextButton} from '../../reusableComponent';

const WelcomeScreen = ({navigation}) => {
  const onboardingData = [
    {
      id: 1,
      image: images.onboarding1,
      title: 'kids story',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
    {
      id: 2,
      image: images.onboarding2,
      title: 'kids story',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industrys standard dummy text ever since the 1500s',
    },
  ];

  const [data, setData] = React.useState(onboardingData);
  const scrollX = new Animated.Value(0);

  // story indicator
  const Indicator = () => {
    const dotPosition = Animated.divide(scrollX, SIZES.width);

    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {data.map((item, index) => {
          const dotColor = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: ['#d3eff8', COLORS.pictonBlue, '#d3eff8'],
            extrapolate: 'clamp',
          });
          const dotWidth = dotPosition.interpolate({
            inputRange: [index - 1, index, index + 1],
            outputRange: [10, 10, 10],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              key={index}
              style={{
                height: index == 0 ? 10 : 10,
                width: dotWidth,
                backgroundColor: dotColor,
                left: index != 0 ? 8 : null,
                borderRadius: 2,
              }}
            />
          );
        })}
      </View>
    );
  };

  return (
    <ScrollView
      style={{
        backgroundColor: '#F5F5F5',
      }}>
      {/* stories */}
      <Animated.FlatList
        horizontal
        pagingEnabled
        data={data}
        keyExtractor={item => `${item.id}`}
        scrollEventThrottle={16}
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x: scrollX},
              },
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={({item, index}) => (
          <View
            style={{
              width: SIZES.width,
              padding: 20,
            }}>
            <View
              style={{
                // flex: 3,
                alignItems: 'center',
                // height: '100%',
                // width: '100%',
                justifyContent: 'flex-end',
                marginTop: 350,
              }}>
              <Image
                source={item.image}
                style={{position: 'absolute'}}
                resizeMode="contain"
              />
            </View>
            <View
              style={{
                alignItems: 'center',
                // marginTop: 60,
                // flex:1
              }}>
              <Text
                style={{
                  //fontFamily: index == 0 ? 'Rokkitt-Bold' : 'Poppins-Bold',
                  fontFamily: 'Rokkitt-Bold',
                  fontSize: 22,
                  lineHeight: 32,
                  color: '#01031A',
                  textTransform: 'capitalize',
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  marginTop: 9,
                  textAlign: 'center',
                  //fontFamily: index == 0 ? 'Rokkitt-Regular' : 'Poppins-Regular',
                  fontFamily: 'Rokkitt-Regular',
                  //fontWeight: index == 0 ? '500' : '400',
                  fontWeight: '500',
                  fontSize: 16,
                  //lineHeight: index == 0 ? 24 : 30,
                  lineHeight: 24,
                  color: '#01031A',
                  marginHorizontal: 18,
                  opacity: 0.5,
                }}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />

      {/* render indicator */}
      <View style={{justifyContent: 'center'}}>
        <Indicator />
      </View>

      {/* textbutton */}
      <View
        style={{
          marginTop: 30,
          marginBottom: 78,
          marginHorizontal: 25,
         
        }}>
        <TextButton
          title="next"
          // onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    </ScrollView>
  );
};

export default WelcomeScreen;
