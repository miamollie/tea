/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/teas": {
    get: operations["getTeas"];
    post: operations["addTea"];
  };
  "/tea/{teaId}": {
    get: operations["getTea"];
  };
}

export interface components {
  responses: {
    /** List of Teas */
    TeasResponse: {
      content: {
        "application/json": external["../tea/api.tea.yml"]["components"]["schemas"]["Tea"][];
      };
    };
    /** Single Tea */
    TeaResponse: {
      content: {
        "application/json": external["../tea/api.tea.yml"]["components"]["schemas"]["Tea"];
      };
    };
  };
}

export interface operations {
  getTeas: {
    responses: {
      200: components["responses"]["TeasResponse"];
      /** Bad request */
      400: {
        content: {
          "application/json": external["../tea/api.tea.yml"]["components"]["schemas"]["Error"];
        };
      };
    };
  };
  addTea: {
    responses: {
      200: components["responses"]["TeasResponse"];
      /** Bad request */
      400: {
        content: {
          "application/json": external["../tea/api.tea.yml"]["components"]["schemas"]["Error"];
        };
      };
    };
  };
  getTea: {
    parameters: {
      path: {
        /** ID of the tea */
        teaId: number;
      };
    };
    responses: {
      200: components["responses"]["TeasResponse"];
      /** Bad request */
      400: {
        content: {
          "application/json": external["../tea/api.tea.yml"]["components"]["schemas"]["Error"];
        };
      };
    };
  };
}

export interface external {
  "../tea/api.tea.yml": {
    paths: {};
    components: {
      schemas: {
        Error: {
          /** @example An error has occurred */
          message: string;
        };
        Tea: {
          /** Format: int32 */
          id: number;
          /** Format: int32 */
          name: number;
          description?: external["../tea/api.tea.yml"]["components"]["schemas"]["Description"];
        };
        /** Format: string */
        Description: string;
      };
    };
    operations: {};
  };
}
