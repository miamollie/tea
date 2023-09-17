import React from "react";
import Link from "next/link";

// @ts-ignore
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useTeasQuery } from "../../components/test/test.generated";

// @ts-ignore
export default function Test({ user }) {
  const { data, loading, error } = useTeasQuery();
  return (
    <>
      <div className="mb-5" data-testid="ssr">
        <h1 data-testid="ssr-title">Hi {user.name}</h1>
        <div data-testid="ssr-text">
          {loading && "Loading..."}
          {error && "Error..."}
          {data && data.teas?.map((b) => b?.name)}
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired();
