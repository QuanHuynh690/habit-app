import React from "react";
import CalendarStrip from "react-native-calendar-strip";

import { FlatColors } from "@shared/src/constants/Colors";

export interface CalendarProps {
  selectedDate: moment.Moment;
  onDateSelected: React.Dispatch<React.SetStateAction<moment.Moment>>;
}
const HorizontalCalendar = ({
  selectedDate,
  onDateSelected,
}: CalendarProps) => {
  return (
    <CalendarStrip
      style={{
        height: 100,
        paddingTop: 30,
        paddingBottom: 10,
        marginHorizontal: -20,
      }}
      selectedDate={selectedDate}
      onDateSelected={onDateSelected}
      scrollable
      daySelectionAnimation={{
        type: "background",
        duration: 200,
        highlightColor: FlatColors["primary-blue-100"],
      }}
      dateNumberStyle={{ color: FlatColors["base-black"], fontSize: 20 }}
      dateNameStyle={{ color: "#CDCDD0", fontSize: 10, fontWeight: "bold" }}
      highlightDateNumberStyle={{
        color: FlatColors["primary-blue-100"],
        fontSize: 20,
      }}
      highlightDateNameStyle={{
        color: FlatColors["primary-blue-100"],
        fontSize: 10,
        fontWeight: "bold",
      }}
      highlightDateContainerStyle={{
        borderColor: FlatColors["primary-blue-100"],
      }}
      iconLeft={null}
      iconRight={null}
      dayContainerStyle={{
        borderRadius: 16,
        height: 64,
        backgroundColor: FlatColors["base-white"],
        borderColor: FlatColors["black-10"],
        borderWidth: 2,
      }}
      dayComponentHeight={66}
      calendarHeaderStyle={{ display: "none" }}
    />
  );
};
export default HorizontalCalendar;
