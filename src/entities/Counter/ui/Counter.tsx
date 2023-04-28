import { Button } from '@/shared/ui/Button';
import { useCounterActions } from '../model/slice/counterSlice';
import { useCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const counterValue = useCounterValue();
    const { decrement, increment, multiply } = useCounterActions();

    const incrementHandler = () => {
        increment();
    };

    const decrementHandler = () => {
        decrement();
    };

    const multiply2Handler = () => {
        multiply(2);
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button data-testid="increment-btn" onClick={incrementHandler}>+</Button>
            <Button data-testid="decrement-btn" onClick={decrementHandler}>-</Button>
            <Button data-testid="multiply-btn" onClick={multiply2Handler}>2</Button>
        </div>
    );
};
