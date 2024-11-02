import React from 'react';
import { LineChart as LC, Line ,XAxis,YAxis,CartesianGrid} from 'recharts';
const LineChart = () => {
 const mathMarks =  [{"name":"Alice","math":78,"english":85,"science":92,"history":75},
{"name":"Bob","math":82,"english":78,"science":88,"history":80},
{"name":"Charlie","math":90,"english":92,"science":85,"history":87},
{"name":"David","math":65,"english":70,"science":75,"history":68},
{"name":"Ella","math":88,"english":76,"science":80,"history":82},
{"name":"Frank","math":92,"english":89,"science":94,"history":91},
{"name":"Grace","math":79,"english":83,"science":78,"history":85},
{"name":"Henry","math":84,"english":88,"science":82,"history":81},
{"name":"Isla","math":73,"english":77,"science":85,"history":79},
{"name":"Jack","math":89,"english":91,"science":87,"history":90},
 ]
    return (
        <div className='w-[1120px] mx-auto'>
            <LC width={400} height={400} data={mathMarks}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="history" />
            <YAxis dataKey="history"/>
                <Line type="monotone" dataKey="math" stroke="#8884d8" />

                <br />
                <Line type="monotone" dataKey="english" stroke="pink" />
                <Line type="monotone" dataKey="science" stroke="red" />
                
               
                
                
            </LC>
        </div>
    );
};

export default LineChart;