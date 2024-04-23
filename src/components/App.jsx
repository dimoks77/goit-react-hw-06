import { useDispatch, useSelector } from 'react-redux'
import { deposit, withdraw } from '../redux/balanceSlice';
import LangSwitcher from './LangSwitcher';

export default function App() {
  const dispatch = useDispatch();
  const balance = useSelector(state => state.balance.value);
  const lang = useSelector(state => state.locale.lang);

  return (
    <>
      <LangSwitcher />
      <p>Current lang: {lang}</p>
      <hr />
      <p>Balance: {balance}</p>
      <button onClick={() => dispatch(deposit(10))}>Deposit 10 credits</button>
      <button onClick={() => dispatch(withdraw(10))}>Withdraw 10 credits</button>
    </>
  )
}

// export default App;
