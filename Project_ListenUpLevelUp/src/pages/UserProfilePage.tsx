import { useAuth0 } from '@auth0/auth0-react';

function UserProfilePage() {
  const { user } = useAuth0();

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Hello {user.given_name}</h1>
      <div>{JSON.stringify(user)}</div>
    </div>
  );
}

export default UserProfilePage;
