import { PieChart } from 'react-minimal-pie-chart';

const charStrings = [
  'breach',
  'brimstone',
  'cypher',
  'jett',
  'killjoy',
  'omen',
  'phoenix',
  'raze',
  'reyna',
  'sage',
  'skye',
  'sova',
  'viper',
];

export default function DisplayPieChart() {
  if (this.props.type === 'character') {
    <PieChart
      data={[
        charStrings.map((value, index) => ({
          title: value,
          value: 10,
          color: '#E38627',
        })),
      ]}
    />;
  }
}
