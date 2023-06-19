import { Notification } from 'components/Notification/Notification';
import { useState } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Statistics } from '../Statistics/Statistics';

export const App = () => {
  const [feedback, setfeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const onLeaveFeedback = label => {
    setfeedback(prevState => ({ ...prevState, [label]: prevState[label] + 1 }));
  };

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce(
      (total, currentValue) => total + currentValue,
      0
    );
  };

  const countPositiveFeedbackPercentage = () => {
    if (feedback.good === 0) {
      return '0';
    }
    return Math.round((feedback.good / countTotalFeedback()) * 100);
  };

  const { good, neutral, bad } = feedback;
  const positivePercentage = countPositiveFeedbackPercentage();
  const total = countTotalFeedback();

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </>
  );
};
