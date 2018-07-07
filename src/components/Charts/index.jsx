import React from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

Charts(FusionCharts);

const MyCharts = (props) => {
    console.log(props.Data);
    return (
        <div>
            <ReactFC type="pie3d"
                width="100%"
                height="400"
                dataFormat='json'
                dataSource={{
                    chart: {
                        caption: props.Name || 'Gráfica',
                        //subCaption: 'Top 5 stores in last month by revenue',
                        numberPrefix: '$',
                    },
                    data: props.Data,
                }}
            />
        </div>
    );
};

export default MyCharts;