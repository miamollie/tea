// @ts-ignore
import { useUser, withPageAuthRequired } from "@auth0/nextjs-auth0/client";
import Link from "next/link";

function Create() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (user) {
    return (
      <div>
        Welcome {user.nickname}! <Link href="/api/auth/logout">Logout</Link>
      </div>
    );
  }

  return <Link href="/api/auth/login">Login</Link>;
}

export default withPageAuthRequired(Create, {
  onRedirecting: () => <p>Loading</p>,
  // @ts-ignore
  onError: (error: unknown) => <p>{error.message}</p>,
});
