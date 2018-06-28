import {
    createStackNavigator,
} from 'react-navigation';
import HomeScreen from '../Screens/Home';
import Admob from '../Screens/Admob';
import Analytics from '../Screens/Analytics';
import Authentication from '../Screens/Authentication';

const AppNav = createStackNavigator(
    {
        Home: { screen: HomeScreen },
        Admob: { screen: Admob },
        Analytics: { screen: Analytics },
        Authentication: { screen: Authentication }
    },
    {
        headerMode: 'none',
        mode: 'modal',
        navigationOptions: {
            gesturesEnabled: false,
        },
        transitionConfig: () => ({
            transitionSpec: {
                duration: 300,
            },
            screenInterpolator: sceneProps => {
                const { layout, position, scene } = sceneProps;
                const { index } = scene;

                const height = layout.initHeight;
                const translateX = position.interpolate({

                    inputRange: [index - 1, index, index + 1],
                    outputRange: [height, 0, 0],

                });

                const opacity = position.interpolate({
                    inputRange: [index - 1, index - 0.99, index],
                    outputRange: [0, 0.5, 1],
                });

                return { opacity, transform: [{ translateX }] };
            },
        }),
    }
);

export default AppNav;