import { withAuthenticationRequired } from '@auth0/auth0-react';
import { AuthenticationGuardProps } from '../interfaces/interfaces';

export const AuthenticationGuard = ({
  component,
}: AuthenticationGuardProps) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => <div>Page is Loading</div>,
  });

  return <Component />;
};
