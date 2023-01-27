import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/icons-material";

function TimelineBar() {
    return (
        <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="secondary" />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Secondary</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color="success" />
        </TimelineSeparator>
        <TimelineContent>Success</TimelineContent>
      </TimelineItem>
    </Timeline>
    )
}

export default TimelineBar;