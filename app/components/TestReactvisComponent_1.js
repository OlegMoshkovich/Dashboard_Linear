import React, {Component} from 'react';

import RadialChart from 'react-vis/dist/radial-chart';

export default class SimpleRadialChart extends Component {



  render() {
    const {hoveredSection} = this.state;
    return (
      <RadialChart
        animation
        showLabels
        radiusDomain={[0, 20]}
        data={[
          {
            angle: 1,
            id: 1,
            radius: 10,
            opacity: (!hoveredSection || hoveredSection === 1) ? 1 : 0.6
          },
          {
            angle: 2,
            label: 'Super Custom label',
            subLabel: 'With annotation',
            id: 2,
            radius: 20,
            opacity: (!hoveredSection || hoveredSection === 2) ? 1 : 0.6
          },
          {
            angle: 5,
            id: 3,
            radius: 5,
            opacity: (!hoveredSection || hoveredSection === 3) ? 1 : 0.6,
            label: 'Alt Label'
          },
          {
            angle: 3,
            id: 4,
            radius: 14,
            opacity: (!hoveredSection || hoveredSection === 4) ? 1 : 0.6
          },
          {
            angle: 5,
            id: 5,
            radius: 12,
            subLabel: 'Sub Label only',
            opacity: (!hoveredSection || hoveredSection === 5) ? 1 : 0.6
          }
        ]}
        onSectionMouseOver={row => this.setState({hoveredSection: row.id})}
        onSectionMouseOut={() => this.setState({hoveredSection: false})}
        width={600}
        height={300} />
    );
  }
}
