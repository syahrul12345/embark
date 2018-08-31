import PropTypes from "prop-types";
import React, {Component} from 'react';
import {Card, Form, Grid, StampCard} from 'tabler-react';

const test = {
  "fast": 50.0,
  "speed": 0.998437456605574,
  "fastest": 400.0,
  "avgWait": 1.9,
  "fastWait": 0.7,
  "blockNum": 6228803,
  "safeLowWait": 1.9,
  "block_time": 14.326530612244898,
  "fastestWait": 0.5,
  "safeLow": 24.0,
  "average": 24.0
};
const COLORS = {
  good: 'green',
  medium: 'yellow',
  bad: 'red'
};

class GasStation extends Component {
  constructor(props) {
    super(props);
    if (!props.gasStats) {
      return console.error('gasStats is a needed Prop for GasStation');
    }

    this.state = {gasSliderIndex: 0};
    this.formattedGasStats = GasStation.formatGasStats(props.gasStats);
  }

  static formatGasStats(gasStats) {
    const {
      fast, speed, fastest, avgWait, fastWait, blockNum, safeLowWait,
      block_time, fastestWait, safeLow, average
    } = gasStats;
    return {
      average: {price: average, wait: avgWait},
      blockTime: block_time,
      blockNum,
      speed,
      gasSteps: [
        {price: safeLow, wait: safeLowWait},
        {price: fast, wait: fastWait},
        {price: fastest, wait: fastestWait}
      ]
    };
  }

  gasSliderChange(e) {
    this.setState({
      gasSliderIndex: e.target.value
    });
  }

  static getColorForWait(wait) {
    if (wait <= 1) {
      return COLORS.good;
    }
    if (wait <= 3) {
      return COLORS.medium;
    }
    return COLORS.bad;
  }

  static getColorForPrice(gasPrice) {
    if (gasPrice <= 20) {
      return COLORS.good;
    }
    if (gasPrice <= 40) {
      return COLORS.medium;
    }
    return COLORS.bad;
  }

  render() {
    const currentGasStep = this.formattedGasStats.gasSteps[this.state.gasSliderIndex];
    return <Grid.Row>
      <Grid.Col>
        <Card>
          <Card.Header>
            <Card.Title>Gas Price Estimator</Card.Title>
          </Card.Header>

          <Card.Body>
            <Grid.Row cards={true}>
              <Grid.Col lg={6} md={6} sm={12}>
                <StampCard icon="sliders" color={GasStation.getColorForPrice(currentGasStep.price)}>
                  {currentGasStep.price / 10} GWei
                </StampCard>
              </Grid.Col>
              <Grid.Col lg={6} md={6} sm={12}>
                <StampCard icon="clock" color={GasStation.getColorForWait(currentGasStep.wait)}>
                  {currentGasStep.wait} minutes
                </StampCard>
              </Grid.Col>
            </Grid.Row>

            <Form.Group>
              <input type="range" className="slider"
                max={this.formattedGasStats.gasSteps.length - 1}
                min={0}
                step={1}
                value={this.state.gasSliderIndex}
                onChange={(e) => this.gasSliderChange(e)}
              />
            </Form.Group>


            <Grid.Row cards={true}>
              <Grid.Col lg={4} md={6} sm={12}>
                <StampCard icon="sliders" color="grey">
                 Average Price: {this.formattedGasStats.average.price / 10} Gwei
                </StampCard>
              </Grid.Col>
              <Grid.Col lg={4} md={6} sm={12}>
                <StampCard icon="clock" color="grey">
                  Average Wait: {this.formattedGasStats.average.wait} min
                </StampCard>
              </Grid.Col>
              <Grid.Col lg={4} md={6} sm={12}>
                <StampCard icon="square" color="grey">
                  Last Block: {this.formattedGasStats.blockNum}
                </StampCard>
              </Grid.Col>
            </Grid.Row>
          </Card.Body>
        </Card>
      </Grid.Col>
    </Grid.Row>;
  }
}

GasStation.propTypes = {
  gasStats: PropTypes.object.isRequired
};

export default GasStation;
