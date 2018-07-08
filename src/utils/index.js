import Api        from './api';
import UserApi    from './userApi';
import IncomeApi  from './incomeApi';
import OutcomeApi from './outcomeApi';
import SettingApi from './settingApi'

export default  {
        make    : Api,
        User    : UserApi,
        Income  : IncomeApi,
        Outcome : OutcomeApi,
        Setting : SettingApi, 
};