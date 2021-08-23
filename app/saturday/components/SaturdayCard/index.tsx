import { Row, Column, Text, theme } from "native-base";
import React from "react";
import { Pressable } from "react-native";
import { Swipeable } from "react-native-gesture-handler";

import { DateTime } from 'luxon';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { Props } from "./types";
import { getStyles } from './styles';

function SaturdayCard(props: Props): React.ReactElement {
	const styles = getStyles();

	const today = DateTime.now().toLocaleString();
	const isPlaying = props.saturday.date === today;


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
						<Text fontSize={22}>{props.saturday.date}</Text>
						<Text fontSize={16}>{`${props.saturday.players.length} Jogadores`}</Text>
					</Column>
					<IonIcon
						name={isPlaying
							? "football"
							: "flag"
						}
						color={isPlaying
							? theme.colors.green[300]
							: theme.colors.gray[300]
						}
						size={32} />
				</Row>
			</Pressable>
		</Swipeable>
	)
}
export default SaturdayCard;
