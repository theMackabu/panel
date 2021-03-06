import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import LoginContainer from '@/components/auth/LoginContainer';
import ForgotPasswordContainer from '@/components/auth/ForgotPasswordContainer';
import ResetPasswordContainer from '@/components/auth/ResetPasswordContainer';
import LoginCheckpointContainer from '@/components/auth/LoginCheckpointContainer';
import NotFound from '@/components/screens/NotFound';

export default ({ location, history, match }: RouteComponentProps) => {
    useEffect(() => {
        ReactGA.pageview(location.pathname);
    }, [ location.pathname ]);

    return (
        <div className={'pt-8 xl:pt-32'}>
            <Switch location={location}>
                <Route path={`${match.path}/login`} component={LoginContainer} exact/>
                <Route path={`${match.path}/login/checkpoint`} component={LoginCheckpointContainer}/>
                <Route path={`${match.path}/password`} component={ForgotPasswordContainer} exact/>
                <Route path={`${match.path}/password/reset/:token`} component={ResetPasswordContainer}/>
                <Route path={`${match.path}/checkpoint`} />
                <Route path={'*'}>
                    <NotFound onBack={() => history.push('/auth/login')} />
                </Route>
            </Switch>
        </div>
    );
};
