import React from 'react';

const Dashboard = (props) => {
    if (props.count === 1) {
        return null;
    }
    return <div className='dashboard'>Dashboard - {props.count}
        <div>NAME: {props.name}</div>
        <div>AGE: {props.age}</div>
    </div>;
};

export default Dashboard;