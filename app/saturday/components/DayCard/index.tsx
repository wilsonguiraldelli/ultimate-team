import { Row, Column, Text, theme, Menu, Container, Tooltip } from "native-base";
import React, { Fragment } from "react";
import { Pressable, Animated } from "react-native";
import { Swipeable, RectButton } from "react-native-gesture-handler";

import { DateTime } from 'luxon';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Props } from "./types";
import { getStyles } from './styles';

function DayCard(props: Props): React.ReactElement {
	const styles = getStyles();

	const today = DateTime.now().toLocaleString();
	const isPlaying = props.date === today;


	const renderOptions = () => (
		<Row>
			<Pressable style={styles.deleteContainer}>
				<MaterialIcon name="delete" size={32} color='#FFF' onPress={props.onDelete} />
			</Pressable>
		</Row>
	);

	return (
		<Swipeable
			renderRightActions={renderOptions}
		>
			<Pressable
				onPress={() => props.onSelect()}
				style={styles.container}
			>
				<Row
					borderBottomWidth={0.5}
					borderBottomColor={theme.colors.gray[300]}
					space={3}
					paddingX={8}
					paddingY={4}
					alignItems="center"
					justifyContent="space-between"
				>
					<Column space={1}>
						<Text fontSize={22}>{props.date}</Text>
					</Column>
					<IonIcon
						name={isPlaying
							? "football"
							: "flag"
						}
						color={isPlaying
							? theme.colors.black
							: theme.colors.gray[300]
						}
						size={32} />
				</Row>
			</Pressable>
		</Swipeable>
	)
}
export default DayCard;
