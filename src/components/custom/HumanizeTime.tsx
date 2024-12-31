import { formatDistanceToNow, fromUnixTime } from "date-fns";
import React from "react";

interface HumanizedTimeProps {
  timestamp: number;
}
const HumanizeTime: React.FC<HumanizedTimeProps> = ({ timestamp }) => {
  const current = fromUnixTime(timestamp / 1000);
  const humanizedTime = formatDistanceToNow(current);
  return <>{humanizedTime} ago</>;
};

export default HumanizeTime;