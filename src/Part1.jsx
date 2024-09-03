import React, { useState } from "react";

const StatisticLine  = (props) => {
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

const Button = (props) => {
  return(
    <>
      <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Statistics = (props) => {
  if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <p>No stratitic</p>
    )
  }
  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.bad}/>
      <StatisticLine text="all" value={props.all}/>
      <StatisticLine text="average" value={props.average}/>
    </div>
  );
};

export default function Part1() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodValue = () => setGood(good + 1);
  const handleNeutralValue = () => setNeutral(neutral + 1);
  const handleBadlValue = () => setBad(bad + 1);

  const all = good + neutral + bad;
  const average = all / 3;
  return (
    <>
      <h1>Give feedback</h1>
      <div>
        <Button text="good" onClick={handleGoodValue} />
        <Button text="neutral" onClick={handleNeutralValue} />
        <Button text="bad" onClick={handleBadlValue} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}/>
    </>
  );
}
