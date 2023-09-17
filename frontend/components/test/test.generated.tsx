/* eslint-disable */
import * as Types from "graph-types";

import { DocumentNode } from "graphql";
import * as React from "react";
import * as Apollo from "@apollo/client";
import * as ApolloReactComponents from "@apollo/client/react/components";
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
const defaultOptions = {} as const;
export type TeasQueryVariables = Types.Exact<{ [key: string]: never }>;

export type TeasQuery = {
  __typename: "Query";
  teas: Array<{ __typename: "Tea"; id: string; name: string }>;
};

export const TeasDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "teas" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "teas" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode;
export type TeasComponentProps = Omit<
  ApolloReactComponents.QueryComponentOptions<TeasQuery, TeasQueryVariables>,
  "query"
>;

export const TeasComponent = (props: TeasComponentProps) => (
  <ApolloReactComponents.Query<TeasQuery, TeasQueryVariables>
    query={TeasDocument}
    {...props}
  />
);

/**
 * __useTeasQuery__
 *
 * To run a query within a React component, call `useTeasQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeasQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeasQuery(
  baseOptions?: Apollo.QueryHookOptions<TeasQuery, TeasQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<TeasQuery, TeasQueryVariables>(TeasDocument, options);
}
export function useTeasLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<TeasQuery, TeasQueryVariables>,
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<TeasQuery, TeasQueryVariables>(
    TeasDocument,
    options,
  );
}
export type TeasQueryHookResult = ReturnType<typeof useTeasQuery>;
export type TeasLazyQueryHookResult = ReturnType<typeof useTeasLazyQuery>;
export type TeasQueryResult = Apollo.QueryResult<TeasQuery, TeasQueryVariables>;
