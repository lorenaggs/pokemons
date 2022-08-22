import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
} from "chart.js";

import { Radar } from "react-chartjs-2";
import {Stat} from "../../domain/models/PokemonInformation";
import {PokemonsData} from "../../domain/models";

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
);
interface Props {
    data: Stat[]
}
const RadarChart = ({ data }: Props ) => {
    const charts = {
        labels: [],
        datasets: [
            {
                label: 'Stats',
                data: [],
                backgroundColor: 'rgba(207, 153, 102, 0.2)',
                borderColor: 'rgba(207, 153, 102, 1)',
                borderWidth: 1,
            },
        ],
    };

    data.forEach((item) => {
        // @ts-ignore
        charts.labels.push(item.stat.name.replace('-', ' '));
        // @ts-ignore
        charts.datasets[0].data.push(item.base_stat);
    });

    return <Radar data={charts} />;
}

export default RadarChart;
