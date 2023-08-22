import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';

interface IconButtonProps {
    icon: string;
    label: string;
    onPress: PressableProps["onPress"]
}

export default function IconButton({ icon, label, onPress }: IconButtonProps) {
    return (
        <Pressable style={styles.iconButton} onPress={onPress}>
            {/* @ts-ignore-nex-line */}
            <MaterialIcons name={icon} size={24} color="#fff" />
            <Text style={styles.iconButtonLabel}>{label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    iconButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconButtonLabel: {
        color: '#fff',
        marginTop: 12,
    },
});
