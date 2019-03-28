import React from "react";
import Paper from "@material-ui/core/Paper";
import {
  Chart,
  PieSeries,
  Tooltip
} from "@devexpress/dx-react-chart-material-ui";
import {
  Animation,
  EventTracker,
  HoverState
} from "@devexpress/dx-react-chart";
import { connectProps } from "@devexpress/dx-react-core";

const tooltipContentTitleStyle = {
  fontWeight: "bold",
  paddingBottom: 0
};

const TooltipContent = ({ targetItem, data }) => {
  return (
    <div>
      <Tooltip.Content
        style={tooltipContentTitleStyle}
        text={data[targetItem.point].name}
      />
      <Tooltip.Content
        style={tooltipContentTitleStyle}
        text={"Size " + data[targetItem.point].size}
      />
      <Tooltip.Content
        style={tooltipContentTitleStyle}
        text={data[targetItem.point].count + " Files"}
      />
    </div>
  );
};

class DemoChart extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      target: null
    };

    this.TooltipContent = connectProps(TooltipContent, () => ({
      ...this.props
    }));
  }

  changeHover = target => {
    this.setState({
      target: target ? target : null
    });
  };

  render() {
    const { target } = this.state;

    return (
      <Paper>
        <div style={{height: '400px', width: "400px", backgroundColor: 'red'}}/>
        <Chart data={this.props.data}>
          <PieSeries valueField="size" argumentField="name" innerRadius={0.6} />
          <EventTracker />
          <HoverState />
          <Tooltip
            targetItem={target}
            contentComponent={this.TooltipContent}
            onTargetItemChange={this.changeHover}
          />
          <Animation />
        </Chart>
      </Paper>
    );
  }
}

export default DemoChart