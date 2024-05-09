'use client';
import React, { useState } from 'react';

interface Candidate {
  name: string;
  ratio: number;
  color: string;
  isLocked: boolean;
}

const VotingApp: React.FC = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([
    { name: 'Candidate 1', ratio: 10, color: 'red', isLocked: false },
    { name: 'Candidate 2', ratio: 20, color: 'green', isLocked: false },
    { name: 'Candidate 3', ratio: 30, color: 'blue', isLocked: false },
    { name: 'Candidate 4', ratio: 40, color: 'orange', isLocked: false },
  ]);

  const [inputValues, setInputValues] = useState<string[]>(
    candidates.map((candidate) => candidate.ratio.toString()),
  );

  const handleRatioChange = (index: number, value: string) => {
    setInputValues(
      inputValues.map((input, idx) => (idx === index ? value : input)),
    );
    setTimeout(() => {
      applyRatioChange(index, value);
    }, 300);
  };

  const applyRatioChange = (index: number, value: string) => {
    const newRatio = parseFloat(value);
    if (isNaN(newRatio) || newRatio < 0 || newRatio > 100) {
      return; // Ignore invalid input
    }

    let newCandidates = [...candidates];
    const ratioDifference = newRatio - newCandidates[index].ratio;
    newCandidates[index].ratio = newRatio;

    if (index + 1 < newCandidates.length) {
      newCandidates[index + 1].ratio = Math.max(
        0,
        newCandidates[index + 1].ratio - ratioDifference,
      );
    }

    setCandidates(newCandidates);
    setInputValues(
      newCandidates.map((candidate) => candidate.ratio.toFixed(1)),
    );
  };

  return (
    <div>
      <h1>Voting App</h1>
      <div
        style={{
          width: '100%',
          height: '20px',
          display: 'flex',
          marginBottom: '20px',
        }}
      >
        {candidates.map((candidate, index) => (
          <div
            key={index}
            style={{
              width: `${candidate.ratio.toFixed(1)}%`,
              height: '20px',
              backgroundColor: candidate.color,
            }}
          />
        ))}
      </div>
      {candidates.map((candidate, index) => (
        <div key={index}>
          <label>{candidate.name}</label>::::::::
          <input
            type="text"
            value={inputValues[index]}
            onChange={(e) => handleRatioChange(index, e.target.value)}
          />
        </div>
      ))}
    </div>
  );
};

export default VotingApp;
