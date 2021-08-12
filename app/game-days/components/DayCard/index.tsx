import { Row, Column, Text, theme } from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";

import { DateTime } from 'luxon';
import Icon from 'react-native-vector-icons/Ionicons';
import { Props } from "./types";

function DayCard(props: Props): React.ReactElement {

    const today = DateTime.now().toLocaleString();
    const isPlaying = props.date === today;

    return (
        <TouchableOpacity>
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
                    <Text bold fontSize={22}>{props.date}</Text>
                </Column>
                <Icon
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
        </TouchableOpacity>
    )
}
export default DayCard;
