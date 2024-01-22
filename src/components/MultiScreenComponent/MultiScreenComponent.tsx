// MultiScreenForm.tsx
import React from 'react';
import { GoalScreen } from 'screens/GoalScreen/GoalScreen';
import { MeasureScreen } from 'screens/MeasureScreen/MeasureScreen';
import { DestructiveScreen } from 'screens/DestructiveScreen/DestructiveScreen';
import { useMultiScreenComponent } from './MultiScreenComponent.state';
import { Header } from 'components/Header';

const MultiScreenComponent: React.FC = () => {
  const {
    handleBackToPrevious,
    handleGoalScreenNext,
    handleMeasureScreenNext,
    handleDesctructionScreenChoice,
    onTabChange,
    handleHeightChange,
    handleWeightChange,
    handleFinish,
    screen,
    state,
    inputState,
    tabState
  } = useMultiScreenComponent();

  return (
    <div>
      <Header onClick={handleBackToPrevious} />
      {screen === 1 && <GoalScreen onNext={handleGoalScreenNext} />}
      {screen === 2 && (
        <MeasureScreen
          onTabChange={onTabChange}
          onHeightChange={handleHeightChange}
          onWeightChange={handleWeightChange}
          inputState={inputState}
          onNextClick={handleMeasureScreenNext}
          tab={tabState}
        />
      )}
      {screen === 3 && (
        <DestructiveScreen
          onChoose={handleDesctructionScreenChoice}
          handleFinish={handleFinish}
          state={state}
        />
      )}
    </div>
  );
};

export default MultiScreenComponent;
