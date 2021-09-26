import React, { useState } from "react";
import Section from "./components/Section/Section.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import FeedbackOptiops from "./components/FeedbackOptions/FeedbackOptions.jsx";
import Notification from "./components/Notification/Notification.jsx";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = { good, neutral, bad };

  const handleBtnClick = (e) => {
    const targetName = e.target.name;

    switch (targetName) {
      case "good":
        return setGood((state) => state + 1);
      case "neutral":
        return setNeutral((state) => state + 1);
      case "bad":
        return setBad((state) => state + 1);
      default:
        return targetName;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const persentOfGod = ((good / total) * 100).toFixed(0);

    return total ? persentOfGod : 0;
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptiops
          options={Object.keys(options)}
          onLeaveFeedback={handleBtnClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </>
  );
}

export default App;
