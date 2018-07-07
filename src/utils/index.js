import Api        from './api';
import UserApi    from './userApi';
import IncomeApi  from './incomeApi';
import OutcomeApi from './outcomeApi';

export default  {
        make    : Api,
        User    : UserApi,
        Income  : IncomeApi,
        Outcome : OutcomeApi, 
};