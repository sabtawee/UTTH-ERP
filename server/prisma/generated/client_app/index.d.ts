
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model webmes_User
 * 
 */
export type webmes_User = $Result.DefaultSelection<Prisma.$webmes_UserPayload>
/**
 * Model webmes_Role
 * 
 */
export type webmes_Role = $Result.DefaultSelection<Prisma.$webmes_RolePayload>
/**
 * Model webmes_Permission
 * 
 */
export type webmes_Permission = $Result.DefaultSelection<Prisma.$webmes_PermissionPayload>
/**
 * Model webmes_UserRole
 * 
 */
export type webmes_UserRole = $Result.DefaultSelection<Prisma.$webmes_UserRolePayload>
/**
 * Model webmes_RolePermission
 * 
 */
export type webmes_RolePermission = $Result.DefaultSelection<Prisma.$webmes_RolePermissionPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Webmes_Users
 * const webmes_Users = await prisma.webmes_User.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Webmes_Users
   * const webmes_Users = await prisma.webmes_User.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.webmes_User`: Exposes CRUD operations for the **webmes_User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webmes_Users
    * const webmes_Users = await prisma.webmes_User.findMany()
    * ```
    */
  get webmes_User(): Prisma.webmes_UserDelegate<ExtArgs>;

  /**
   * `prisma.webmes_Role`: Exposes CRUD operations for the **webmes_Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webmes_Roles
    * const webmes_Roles = await prisma.webmes_Role.findMany()
    * ```
    */
  get webmes_Role(): Prisma.webmes_RoleDelegate<ExtArgs>;

  /**
   * `prisma.webmes_Permission`: Exposes CRUD operations for the **webmes_Permission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webmes_Permissions
    * const webmes_Permissions = await prisma.webmes_Permission.findMany()
    * ```
    */
  get webmes_Permission(): Prisma.webmes_PermissionDelegate<ExtArgs>;

  /**
   * `prisma.webmes_UserRole`: Exposes CRUD operations for the **webmes_UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webmes_UserRoles
    * const webmes_UserRoles = await prisma.webmes_UserRole.findMany()
    * ```
    */
  get webmes_UserRole(): Prisma.webmes_UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.webmes_RolePermission`: Exposes CRUD operations for the **webmes_RolePermission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Webmes_RolePermissions
    * const webmes_RolePermissions = await prisma.webmes_RolePermission.findMany()
    * ```
    */
  get webmes_RolePermission(): Prisma.webmes_RolePermissionDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    webmes_User: 'webmes_User',
    webmes_Role: 'webmes_Role',
    webmes_Permission: 'webmes_Permission',
    webmes_UserRole: 'webmes_UserRole',
    webmes_RolePermission: 'webmes_RolePermission'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "webmes_User" | "webmes_Role" | "webmes_Permission" | "webmes_UserRole" | "webmes_RolePermission"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      webmes_User: {
        payload: Prisma.$webmes_UserPayload<ExtArgs>
        fields: Prisma.webmes_UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webmes_UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webmes_UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload>
          }
          findFirst: {
            args: Prisma.webmes_UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webmes_UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload>
          }
          findMany: {
            args: Prisma.webmes_UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload>[]
          }
          create: {
            args: Prisma.webmes_UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload>
          }
          createMany: {
            args: Prisma.webmes_UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.webmes_UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload>
          }
          update: {
            args: Prisma.webmes_UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload>
          }
          deleteMany: {
            args: Prisma.webmes_UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webmes_UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.webmes_UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserPayload>
          }
          aggregate: {
            args: Prisma.Webmes_UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebmes_User>
          }
          groupBy: {
            args: Prisma.webmes_UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<Webmes_UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.webmes_UserCountArgs<ExtArgs>
            result: $Utils.Optional<Webmes_UserCountAggregateOutputType> | number
          }
        }
      }
      webmes_Role: {
        payload: Prisma.$webmes_RolePayload<ExtArgs>
        fields: Prisma.webmes_RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webmes_RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webmes_RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload>
          }
          findFirst: {
            args: Prisma.webmes_RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webmes_RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload>
          }
          findMany: {
            args: Prisma.webmes_RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload>[]
          }
          create: {
            args: Prisma.webmes_RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload>
          }
          createMany: {
            args: Prisma.webmes_RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.webmes_RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload>
          }
          update: {
            args: Prisma.webmes_RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload>
          }
          deleteMany: {
            args: Prisma.webmes_RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webmes_RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.webmes_RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePayload>
          }
          aggregate: {
            args: Prisma.Webmes_RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebmes_Role>
          }
          groupBy: {
            args: Prisma.webmes_RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Webmes_RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.webmes_RoleCountArgs<ExtArgs>
            result: $Utils.Optional<Webmes_RoleCountAggregateOutputType> | number
          }
        }
      }
      webmes_Permission: {
        payload: Prisma.$webmes_PermissionPayload<ExtArgs>
        fields: Prisma.webmes_PermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webmes_PermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webmes_PermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload>
          }
          findFirst: {
            args: Prisma.webmes_PermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webmes_PermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload>
          }
          findMany: {
            args: Prisma.webmes_PermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload>[]
          }
          create: {
            args: Prisma.webmes_PermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload>
          }
          createMany: {
            args: Prisma.webmes_PermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.webmes_PermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload>
          }
          update: {
            args: Prisma.webmes_PermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload>
          }
          deleteMany: {
            args: Prisma.webmes_PermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webmes_PermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.webmes_PermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_PermissionPayload>
          }
          aggregate: {
            args: Prisma.Webmes_PermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebmes_Permission>
          }
          groupBy: {
            args: Prisma.webmes_PermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Webmes_PermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.webmes_PermissionCountArgs<ExtArgs>
            result: $Utils.Optional<Webmes_PermissionCountAggregateOutputType> | number
          }
        }
      }
      webmes_UserRole: {
        payload: Prisma.$webmes_UserRolePayload<ExtArgs>
        fields: Prisma.webmes_UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webmes_UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webmes_UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload>
          }
          findFirst: {
            args: Prisma.webmes_UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webmes_UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload>
          }
          findMany: {
            args: Prisma.webmes_UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload>[]
          }
          create: {
            args: Prisma.webmes_UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload>
          }
          createMany: {
            args: Prisma.webmes_UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.webmes_UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload>
          }
          update: {
            args: Prisma.webmes_UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload>
          }
          deleteMany: {
            args: Prisma.webmes_UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webmes_UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.webmes_UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_UserRolePayload>
          }
          aggregate: {
            args: Prisma.Webmes_UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebmes_UserRole>
          }
          groupBy: {
            args: Prisma.webmes_UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Webmes_UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.webmes_UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<Webmes_UserRoleCountAggregateOutputType> | number
          }
        }
      }
      webmes_RolePermission: {
        payload: Prisma.$webmes_RolePermissionPayload<ExtArgs>
        fields: Prisma.webmes_RolePermissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.webmes_RolePermissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.webmes_RolePermissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload>
          }
          findFirst: {
            args: Prisma.webmes_RolePermissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.webmes_RolePermissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload>
          }
          findMany: {
            args: Prisma.webmes_RolePermissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload>[]
          }
          create: {
            args: Prisma.webmes_RolePermissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload>
          }
          createMany: {
            args: Prisma.webmes_RolePermissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.webmes_RolePermissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload>
          }
          update: {
            args: Prisma.webmes_RolePermissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload>
          }
          deleteMany: {
            args: Prisma.webmes_RolePermissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.webmes_RolePermissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.webmes_RolePermissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$webmes_RolePermissionPayload>
          }
          aggregate: {
            args: Prisma.Webmes_RolePermissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebmes_RolePermission>
          }
          groupBy: {
            args: Prisma.webmes_RolePermissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<Webmes_RolePermissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.webmes_RolePermissionCountArgs<ExtArgs>
            result: $Utils.Optional<Webmes_RolePermissionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Webmes_UserCountOutputType
   */

  export type Webmes_UserCountOutputType = {
    roles: number
  }

  export type Webmes_UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Webmes_UserCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * Webmes_UserCountOutputType without action
   */
  export type Webmes_UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webmes_UserCountOutputType
     */
    select?: Webmes_UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Webmes_UserCountOutputType without action
   */
  export type Webmes_UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_UserRoleWhereInput
  }


  /**
   * Count Type Webmes_RoleCountOutputType
   */

  export type Webmes_RoleCountOutputType = {
    permissions: number
    users: number
  }

  export type Webmes_RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | Webmes_RoleCountOutputTypeCountPermissionsArgs
    users?: boolean | Webmes_RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * Webmes_RoleCountOutputType without action
   */
  export type Webmes_RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webmes_RoleCountOutputType
     */
    select?: Webmes_RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Webmes_RoleCountOutputType without action
   */
  export type Webmes_RoleCountOutputTypeCountPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_RolePermissionWhereInput
  }

  /**
   * Webmes_RoleCountOutputType without action
   */
  export type Webmes_RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_UserRoleWhereInput
  }


  /**
   * Count Type Webmes_PermissionCountOutputType
   */

  export type Webmes_PermissionCountOutputType = {
    roles: number
  }

  export type Webmes_PermissionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | Webmes_PermissionCountOutputTypeCountRolesArgs
  }

  // Custom InputTypes
  /**
   * Webmes_PermissionCountOutputType without action
   */
  export type Webmes_PermissionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Webmes_PermissionCountOutputType
     */
    select?: Webmes_PermissionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Webmes_PermissionCountOutputType without action
   */
  export type Webmes_PermissionCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_RolePermissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model webmes_User
   */

  export type AggregateWebmes_User = {
    _count: Webmes_UserCountAggregateOutputType | null
    _avg: Webmes_UserAvgAggregateOutputType | null
    _sum: Webmes_UserSumAggregateOutputType | null
    _min: Webmes_UserMinAggregateOutputType | null
    _max: Webmes_UserMaxAggregateOutputType | null
  }

  export type Webmes_UserAvgAggregateOutputType = {
    id: number | null
  }

  export type Webmes_UserSumAggregateOutputType = {
    id: number | null
  }

  export type Webmes_UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    fullName: string | null
    email: string | null
    department: string | null
    plant: string | null
    section: string | null
    adDn: string | null
    isActive: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Webmes_UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    fullName: string | null
    email: string | null
    department: string | null
    plant: string | null
    section: string | null
    adDn: string | null
    isActive: boolean | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type Webmes_UserCountAggregateOutputType = {
    id: number
    username: number
    fullName: number
    email: number
    department: number
    plant: number
    section: number
    adDn: number
    isActive: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type Webmes_UserAvgAggregateInputType = {
    id?: true
  }

  export type Webmes_UserSumAggregateInputType = {
    id?: true
  }

  export type Webmes_UserMinAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    department?: true
    plant?: true
    section?: true
    adDn?: true
    isActive?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Webmes_UserMaxAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    department?: true
    plant?: true
    section?: true
    adDn?: true
    isActive?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type Webmes_UserCountAggregateInputType = {
    id?: true
    username?: true
    fullName?: true
    email?: true
    department?: true
    plant?: true
    section?: true
    adDn?: true
    isActive?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type Webmes_UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_User to aggregate.
     */
    where?: webmes_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Users to fetch.
     */
    orderBy?: webmes_UserOrderByWithRelationInput | webmes_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webmes_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webmes_Users
    **/
    _count?: true | Webmes_UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Webmes_UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Webmes_UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Webmes_UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Webmes_UserMaxAggregateInputType
  }

  export type GetWebmes_UserAggregateType<T extends Webmes_UserAggregateArgs> = {
        [P in keyof T & keyof AggregateWebmes_User]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebmes_User[P]>
      : GetScalarType<T[P], AggregateWebmes_User[P]>
  }




  export type webmes_UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_UserWhereInput
    orderBy?: webmes_UserOrderByWithAggregationInput | webmes_UserOrderByWithAggregationInput[]
    by: Webmes_UserScalarFieldEnum[] | Webmes_UserScalarFieldEnum
    having?: webmes_UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Webmes_UserCountAggregateInputType | true
    _avg?: Webmes_UserAvgAggregateInputType
    _sum?: Webmes_UserSumAggregateInputType
    _min?: Webmes_UserMinAggregateInputType
    _max?: Webmes_UserMaxAggregateInputType
  }

  export type Webmes_UserGroupByOutputType = {
    id: number
    username: string
    fullName: string
    email: string | null
    department: string | null
    plant: string | null
    section: string | null
    adDn: string | null
    isActive: boolean
    password: string | null
    createdAt: Date
    updatedAt: Date
    _count: Webmes_UserCountAggregateOutputType | null
    _avg: Webmes_UserAvgAggregateOutputType | null
    _sum: Webmes_UserSumAggregateOutputType | null
    _min: Webmes_UserMinAggregateOutputType | null
    _max: Webmes_UserMaxAggregateOutputType | null
  }

  type GetWebmes_UserGroupByPayload<T extends webmes_UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Webmes_UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Webmes_UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Webmes_UserGroupByOutputType[P]>
            : GetScalarType<T[P], Webmes_UserGroupByOutputType[P]>
        }
      >
    >


  export type webmes_UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    department?: boolean
    plant?: boolean
    section?: boolean
    adDn?: boolean
    isActive?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | webmes_User$rolesArgs<ExtArgs>
    _count?: boolean | Webmes_UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webmes_User"]>


  export type webmes_UserSelectScalar = {
    id?: boolean
    username?: boolean
    fullName?: boolean
    email?: boolean
    department?: boolean
    plant?: boolean
    section?: boolean
    adDn?: boolean
    isActive?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type webmes_UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | webmes_User$rolesArgs<ExtArgs>
    _count?: boolean | Webmes_UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $webmes_UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webmes_User"
    objects: {
      roles: Prisma.$webmes_UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      fullName: string
      email: string | null
      department: string | null
      plant: string | null
      section: string | null
      adDn: string | null
      isActive: boolean
      password: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["webmes_User"]>
    composites: {}
  }

  type webmes_UserGetPayload<S extends boolean | null | undefined | webmes_UserDefaultArgs> = $Result.GetResult<Prisma.$webmes_UserPayload, S>

  type webmes_UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<webmes_UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Webmes_UserCountAggregateInputType | true
    }

  export interface webmes_UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webmes_User'], meta: { name: 'webmes_User' } }
    /**
     * Find zero or one Webmes_User that matches the filter.
     * @param {webmes_UserFindUniqueArgs} args - Arguments to find a Webmes_User
     * @example
     * // Get one Webmes_User
     * const webmes_User = await prisma.webmes_User.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webmes_UserFindUniqueArgs>(args: SelectSubset<T, webmes_UserFindUniqueArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Webmes_User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {webmes_UserFindUniqueOrThrowArgs} args - Arguments to find a Webmes_User
     * @example
     * // Get one Webmes_User
     * const webmes_User = await prisma.webmes_User.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webmes_UserFindUniqueOrThrowArgs>(args: SelectSubset<T, webmes_UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Webmes_User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserFindFirstArgs} args - Arguments to find a Webmes_User
     * @example
     * // Get one Webmes_User
     * const webmes_User = await prisma.webmes_User.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webmes_UserFindFirstArgs>(args?: SelectSubset<T, webmes_UserFindFirstArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Webmes_User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserFindFirstOrThrowArgs} args - Arguments to find a Webmes_User
     * @example
     * // Get one Webmes_User
     * const webmes_User = await prisma.webmes_User.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webmes_UserFindFirstOrThrowArgs>(args?: SelectSubset<T, webmes_UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Webmes_Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webmes_Users
     * const webmes_Users = await prisma.webmes_User.findMany()
     * 
     * // Get first 10 Webmes_Users
     * const webmes_Users = await prisma.webmes_User.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webmes_UserWithIdOnly = await prisma.webmes_User.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webmes_UserFindManyArgs>(args?: SelectSubset<T, webmes_UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Webmes_User.
     * @param {webmes_UserCreateArgs} args - Arguments to create a Webmes_User.
     * @example
     * // Create one Webmes_User
     * const Webmes_User = await prisma.webmes_User.create({
     *   data: {
     *     // ... data to create a Webmes_User
     *   }
     * })
     * 
     */
    create<T extends webmes_UserCreateArgs>(args: SelectSubset<T, webmes_UserCreateArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Webmes_Users.
     * @param {webmes_UserCreateManyArgs} args - Arguments to create many Webmes_Users.
     * @example
     * // Create many Webmes_Users
     * const webmes_User = await prisma.webmes_User.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webmes_UserCreateManyArgs>(args?: SelectSubset<T, webmes_UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Webmes_User.
     * @param {webmes_UserDeleteArgs} args - Arguments to delete one Webmes_User.
     * @example
     * // Delete one Webmes_User
     * const Webmes_User = await prisma.webmes_User.delete({
     *   where: {
     *     // ... filter to delete one Webmes_User
     *   }
     * })
     * 
     */
    delete<T extends webmes_UserDeleteArgs>(args: SelectSubset<T, webmes_UserDeleteArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Webmes_User.
     * @param {webmes_UserUpdateArgs} args - Arguments to update one Webmes_User.
     * @example
     * // Update one Webmes_User
     * const webmes_User = await prisma.webmes_User.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webmes_UserUpdateArgs>(args: SelectSubset<T, webmes_UserUpdateArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Webmes_Users.
     * @param {webmes_UserDeleteManyArgs} args - Arguments to filter Webmes_Users to delete.
     * @example
     * // Delete a few Webmes_Users
     * const { count } = await prisma.webmes_User.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webmes_UserDeleteManyArgs>(args?: SelectSubset<T, webmes_UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webmes_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webmes_Users
     * const webmes_User = await prisma.webmes_User.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webmes_UserUpdateManyArgs>(args: SelectSubset<T, webmes_UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Webmes_User.
     * @param {webmes_UserUpsertArgs} args - Arguments to update or create a Webmes_User.
     * @example
     * // Update or create a Webmes_User
     * const webmes_User = await prisma.webmes_User.upsert({
     *   create: {
     *     // ... data to create a Webmes_User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webmes_User we want to update
     *   }
     * })
     */
    upsert<T extends webmes_UserUpsertArgs>(args: SelectSubset<T, webmes_UserUpsertArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Webmes_Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserCountArgs} args - Arguments to filter Webmes_Users to count.
     * @example
     * // Count the number of Webmes_Users
     * const count = await prisma.webmes_User.count({
     *   where: {
     *     // ... the filter for the Webmes_Users we want to count
     *   }
     * })
    **/
    count<T extends webmes_UserCountArgs>(
      args?: Subset<T, webmes_UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Webmes_UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webmes_User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Webmes_UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Webmes_UserAggregateArgs>(args: Subset<T, Webmes_UserAggregateArgs>): Prisma.PrismaPromise<GetWebmes_UserAggregateType<T>>

    /**
     * Group by Webmes_User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends webmes_UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webmes_UserGroupByArgs['orderBy'] }
        : { orderBy?: webmes_UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, webmes_UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebmes_UserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webmes_User model
   */
  readonly fields: webmes_UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webmes_User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webmes_UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends webmes_User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, webmes_User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the webmes_User model
   */ 
  interface webmes_UserFieldRefs {
    readonly id: FieldRef<"webmes_User", 'Int'>
    readonly username: FieldRef<"webmes_User", 'String'>
    readonly fullName: FieldRef<"webmes_User", 'String'>
    readonly email: FieldRef<"webmes_User", 'String'>
    readonly department: FieldRef<"webmes_User", 'String'>
    readonly plant: FieldRef<"webmes_User", 'String'>
    readonly section: FieldRef<"webmes_User", 'String'>
    readonly adDn: FieldRef<"webmes_User", 'String'>
    readonly isActive: FieldRef<"webmes_User", 'Boolean'>
    readonly password: FieldRef<"webmes_User", 'String'>
    readonly createdAt: FieldRef<"webmes_User", 'DateTime'>
    readonly updatedAt: FieldRef<"webmes_User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * webmes_User findUnique
   */
  export type webmes_UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * Filter, which webmes_User to fetch.
     */
    where: webmes_UserWhereUniqueInput
  }

  /**
   * webmes_User findUniqueOrThrow
   */
  export type webmes_UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * Filter, which webmes_User to fetch.
     */
    where: webmes_UserWhereUniqueInput
  }

  /**
   * webmes_User findFirst
   */
  export type webmes_UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * Filter, which webmes_User to fetch.
     */
    where?: webmes_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Users to fetch.
     */
    orderBy?: webmes_UserOrderByWithRelationInput | webmes_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_Users.
     */
    cursor?: webmes_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_Users.
     */
    distinct?: Webmes_UserScalarFieldEnum | Webmes_UserScalarFieldEnum[]
  }

  /**
   * webmes_User findFirstOrThrow
   */
  export type webmes_UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * Filter, which webmes_User to fetch.
     */
    where?: webmes_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Users to fetch.
     */
    orderBy?: webmes_UserOrderByWithRelationInput | webmes_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_Users.
     */
    cursor?: webmes_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_Users.
     */
    distinct?: Webmes_UserScalarFieldEnum | Webmes_UserScalarFieldEnum[]
  }

  /**
   * webmes_User findMany
   */
  export type webmes_UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Users to fetch.
     */
    where?: webmes_UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Users to fetch.
     */
    orderBy?: webmes_UserOrderByWithRelationInput | webmes_UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webmes_Users.
     */
    cursor?: webmes_UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Users.
     */
    skip?: number
    distinct?: Webmes_UserScalarFieldEnum | Webmes_UserScalarFieldEnum[]
  }

  /**
   * webmes_User create
   */
  export type webmes_UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * The data needed to create a webmes_User.
     */
    data: XOR<webmes_UserCreateInput, webmes_UserUncheckedCreateInput>
  }

  /**
   * webmes_User createMany
   */
  export type webmes_UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webmes_Users.
     */
    data: webmes_UserCreateManyInput | webmes_UserCreateManyInput[]
  }

  /**
   * webmes_User update
   */
  export type webmes_UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * The data needed to update a webmes_User.
     */
    data: XOR<webmes_UserUpdateInput, webmes_UserUncheckedUpdateInput>
    /**
     * Choose, which webmes_User to update.
     */
    where: webmes_UserWhereUniqueInput
  }

  /**
   * webmes_User updateMany
   */
  export type webmes_UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webmes_Users.
     */
    data: XOR<webmes_UserUpdateManyMutationInput, webmes_UserUncheckedUpdateManyInput>
    /**
     * Filter which webmes_Users to update
     */
    where?: webmes_UserWhereInput
  }

  /**
   * webmes_User upsert
   */
  export type webmes_UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * The filter to search for the webmes_User to update in case it exists.
     */
    where: webmes_UserWhereUniqueInput
    /**
     * In case the webmes_User found by the `where` argument doesn't exist, create a new webmes_User with this data.
     */
    create: XOR<webmes_UserCreateInput, webmes_UserUncheckedCreateInput>
    /**
     * In case the webmes_User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webmes_UserUpdateInput, webmes_UserUncheckedUpdateInput>
  }

  /**
   * webmes_User delete
   */
  export type webmes_UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
    /**
     * Filter which webmes_User to delete.
     */
    where: webmes_UserWhereUniqueInput
  }

  /**
   * webmes_User deleteMany
   */
  export type webmes_UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_Users to delete
     */
    where?: webmes_UserWhereInput
  }

  /**
   * webmes_User.roles
   */
  export type webmes_User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    where?: webmes_UserRoleWhereInput
    orderBy?: webmes_UserRoleOrderByWithRelationInput | webmes_UserRoleOrderByWithRelationInput[]
    cursor?: webmes_UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Webmes_UserRoleScalarFieldEnum | Webmes_UserRoleScalarFieldEnum[]
  }

  /**
   * webmes_User without action
   */
  export type webmes_UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_User
     */
    select?: webmes_UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserInclude<ExtArgs> | null
  }


  /**
   * Model webmes_Role
   */

  export type AggregateWebmes_Role = {
    _count: Webmes_RoleCountAggregateOutputType | null
    _avg: Webmes_RoleAvgAggregateOutputType | null
    _sum: Webmes_RoleSumAggregateOutputType | null
    _min: Webmes_RoleMinAggregateOutputType | null
    _max: Webmes_RoleMaxAggregateOutputType | null
  }

  export type Webmes_RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type Webmes_RoleSumAggregateOutputType = {
    id: number | null
  }

  export type Webmes_RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type Webmes_RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type Webmes_RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type Webmes_RoleAvgAggregateInputType = {
    id?: true
  }

  export type Webmes_RoleSumAggregateInputType = {
    id?: true
  }

  export type Webmes_RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type Webmes_RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type Webmes_RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type Webmes_RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_Role to aggregate.
     */
    where?: webmes_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Roles to fetch.
     */
    orderBy?: webmes_RoleOrderByWithRelationInput | webmes_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webmes_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webmes_Roles
    **/
    _count?: true | Webmes_RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Webmes_RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Webmes_RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Webmes_RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Webmes_RoleMaxAggregateInputType
  }

  export type GetWebmes_RoleAggregateType<T extends Webmes_RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateWebmes_Role]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebmes_Role[P]>
      : GetScalarType<T[P], AggregateWebmes_Role[P]>
  }




  export type webmes_RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_RoleWhereInput
    orderBy?: webmes_RoleOrderByWithAggregationInput | webmes_RoleOrderByWithAggregationInput[]
    by: Webmes_RoleScalarFieldEnum[] | Webmes_RoleScalarFieldEnum
    having?: webmes_RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Webmes_RoleCountAggregateInputType | true
    _avg?: Webmes_RoleAvgAggregateInputType
    _sum?: Webmes_RoleSumAggregateInputType
    _min?: Webmes_RoleMinAggregateInputType
    _max?: Webmes_RoleMaxAggregateInputType
  }

  export type Webmes_RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: Webmes_RoleCountAggregateOutputType | null
    _avg: Webmes_RoleAvgAggregateOutputType | null
    _sum: Webmes_RoleSumAggregateOutputType | null
    _min: Webmes_RoleMinAggregateOutputType | null
    _max: Webmes_RoleMaxAggregateOutputType | null
  }

  type GetWebmes_RoleGroupByPayload<T extends webmes_RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Webmes_RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Webmes_RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Webmes_RoleGroupByOutputType[P]>
            : GetScalarType<T[P], Webmes_RoleGroupByOutputType[P]>
        }
      >
    >


  export type webmes_RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    permissions?: boolean | webmes_Role$permissionsArgs<ExtArgs>
    users?: boolean | webmes_Role$usersArgs<ExtArgs>
    _count?: boolean | Webmes_RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webmes_Role"]>


  export type webmes_RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type webmes_RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    permissions?: boolean | webmes_Role$permissionsArgs<ExtArgs>
    users?: boolean | webmes_Role$usersArgs<ExtArgs>
    _count?: boolean | Webmes_RoleCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $webmes_RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webmes_Role"
    objects: {
      permissions: Prisma.$webmes_RolePermissionPayload<ExtArgs>[]
      users: Prisma.$webmes_UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["webmes_Role"]>
    composites: {}
  }

  type webmes_RoleGetPayload<S extends boolean | null | undefined | webmes_RoleDefaultArgs> = $Result.GetResult<Prisma.$webmes_RolePayload, S>

  type webmes_RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<webmes_RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Webmes_RoleCountAggregateInputType | true
    }

  export interface webmes_RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webmes_Role'], meta: { name: 'webmes_Role' } }
    /**
     * Find zero or one Webmes_Role that matches the filter.
     * @param {webmes_RoleFindUniqueArgs} args - Arguments to find a Webmes_Role
     * @example
     * // Get one Webmes_Role
     * const webmes_Role = await prisma.webmes_Role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webmes_RoleFindUniqueArgs>(args: SelectSubset<T, webmes_RoleFindUniqueArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Webmes_Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {webmes_RoleFindUniqueOrThrowArgs} args - Arguments to find a Webmes_Role
     * @example
     * // Get one Webmes_Role
     * const webmes_Role = await prisma.webmes_Role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webmes_RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, webmes_RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Webmes_Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RoleFindFirstArgs} args - Arguments to find a Webmes_Role
     * @example
     * // Get one Webmes_Role
     * const webmes_Role = await prisma.webmes_Role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webmes_RoleFindFirstArgs>(args?: SelectSubset<T, webmes_RoleFindFirstArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Webmes_Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RoleFindFirstOrThrowArgs} args - Arguments to find a Webmes_Role
     * @example
     * // Get one Webmes_Role
     * const webmes_Role = await prisma.webmes_Role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webmes_RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, webmes_RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Webmes_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webmes_Roles
     * const webmes_Roles = await prisma.webmes_Role.findMany()
     * 
     * // Get first 10 Webmes_Roles
     * const webmes_Roles = await prisma.webmes_Role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webmes_RoleWithIdOnly = await prisma.webmes_Role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webmes_RoleFindManyArgs>(args?: SelectSubset<T, webmes_RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Webmes_Role.
     * @param {webmes_RoleCreateArgs} args - Arguments to create a Webmes_Role.
     * @example
     * // Create one Webmes_Role
     * const Webmes_Role = await prisma.webmes_Role.create({
     *   data: {
     *     // ... data to create a Webmes_Role
     *   }
     * })
     * 
     */
    create<T extends webmes_RoleCreateArgs>(args: SelectSubset<T, webmes_RoleCreateArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Webmes_Roles.
     * @param {webmes_RoleCreateManyArgs} args - Arguments to create many Webmes_Roles.
     * @example
     * // Create many Webmes_Roles
     * const webmes_Role = await prisma.webmes_Role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webmes_RoleCreateManyArgs>(args?: SelectSubset<T, webmes_RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Webmes_Role.
     * @param {webmes_RoleDeleteArgs} args - Arguments to delete one Webmes_Role.
     * @example
     * // Delete one Webmes_Role
     * const Webmes_Role = await prisma.webmes_Role.delete({
     *   where: {
     *     // ... filter to delete one Webmes_Role
     *   }
     * })
     * 
     */
    delete<T extends webmes_RoleDeleteArgs>(args: SelectSubset<T, webmes_RoleDeleteArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Webmes_Role.
     * @param {webmes_RoleUpdateArgs} args - Arguments to update one Webmes_Role.
     * @example
     * // Update one Webmes_Role
     * const webmes_Role = await prisma.webmes_Role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webmes_RoleUpdateArgs>(args: SelectSubset<T, webmes_RoleUpdateArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Webmes_Roles.
     * @param {webmes_RoleDeleteManyArgs} args - Arguments to filter Webmes_Roles to delete.
     * @example
     * // Delete a few Webmes_Roles
     * const { count } = await prisma.webmes_Role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webmes_RoleDeleteManyArgs>(args?: SelectSubset<T, webmes_RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webmes_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webmes_Roles
     * const webmes_Role = await prisma.webmes_Role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webmes_RoleUpdateManyArgs>(args: SelectSubset<T, webmes_RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Webmes_Role.
     * @param {webmes_RoleUpsertArgs} args - Arguments to update or create a Webmes_Role.
     * @example
     * // Update or create a Webmes_Role
     * const webmes_Role = await prisma.webmes_Role.upsert({
     *   create: {
     *     // ... data to create a Webmes_Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webmes_Role we want to update
     *   }
     * })
     */
    upsert<T extends webmes_RoleUpsertArgs>(args: SelectSubset<T, webmes_RoleUpsertArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Webmes_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RoleCountArgs} args - Arguments to filter Webmes_Roles to count.
     * @example
     * // Count the number of Webmes_Roles
     * const count = await prisma.webmes_Role.count({
     *   where: {
     *     // ... the filter for the Webmes_Roles we want to count
     *   }
     * })
    **/
    count<T extends webmes_RoleCountArgs>(
      args?: Subset<T, webmes_RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Webmes_RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webmes_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Webmes_RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Webmes_RoleAggregateArgs>(args: Subset<T, Webmes_RoleAggregateArgs>): Prisma.PrismaPromise<GetWebmes_RoleAggregateType<T>>

    /**
     * Group by Webmes_Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends webmes_RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webmes_RoleGroupByArgs['orderBy'] }
        : { orderBy?: webmes_RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, webmes_RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebmes_RoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webmes_Role model
   */
  readonly fields: webmes_RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webmes_Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webmes_RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    permissions<T extends webmes_Role$permissionsArgs<ExtArgs> = {}>(args?: Subset<T, webmes_Role$permissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends webmes_Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, webmes_Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the webmes_Role model
   */ 
  interface webmes_RoleFieldRefs {
    readonly id: FieldRef<"webmes_Role", 'Int'>
    readonly name: FieldRef<"webmes_Role", 'String'>
    readonly description: FieldRef<"webmes_Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * webmes_Role findUnique
   */
  export type webmes_RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Role to fetch.
     */
    where: webmes_RoleWhereUniqueInput
  }

  /**
   * webmes_Role findUniqueOrThrow
   */
  export type webmes_RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Role to fetch.
     */
    where: webmes_RoleWhereUniqueInput
  }

  /**
   * webmes_Role findFirst
   */
  export type webmes_RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Role to fetch.
     */
    where?: webmes_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Roles to fetch.
     */
    orderBy?: webmes_RoleOrderByWithRelationInput | webmes_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_Roles.
     */
    cursor?: webmes_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_Roles.
     */
    distinct?: Webmes_RoleScalarFieldEnum | Webmes_RoleScalarFieldEnum[]
  }

  /**
   * webmes_Role findFirstOrThrow
   */
  export type webmes_RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Role to fetch.
     */
    where?: webmes_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Roles to fetch.
     */
    orderBy?: webmes_RoleOrderByWithRelationInput | webmes_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_Roles.
     */
    cursor?: webmes_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_Roles.
     */
    distinct?: Webmes_RoleScalarFieldEnum | Webmes_RoleScalarFieldEnum[]
  }

  /**
   * webmes_Role findMany
   */
  export type webmes_RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Roles to fetch.
     */
    where?: webmes_RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Roles to fetch.
     */
    orderBy?: webmes_RoleOrderByWithRelationInput | webmes_RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webmes_Roles.
     */
    cursor?: webmes_RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Roles.
     */
    skip?: number
    distinct?: Webmes_RoleScalarFieldEnum | Webmes_RoleScalarFieldEnum[]
  }

  /**
   * webmes_Role create
   */
  export type webmes_RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a webmes_Role.
     */
    data: XOR<webmes_RoleCreateInput, webmes_RoleUncheckedCreateInput>
  }

  /**
   * webmes_Role createMany
   */
  export type webmes_RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webmes_Roles.
     */
    data: webmes_RoleCreateManyInput | webmes_RoleCreateManyInput[]
  }

  /**
   * webmes_Role update
   */
  export type webmes_RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a webmes_Role.
     */
    data: XOR<webmes_RoleUpdateInput, webmes_RoleUncheckedUpdateInput>
    /**
     * Choose, which webmes_Role to update.
     */
    where: webmes_RoleWhereUniqueInput
  }

  /**
   * webmes_Role updateMany
   */
  export type webmes_RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webmes_Roles.
     */
    data: XOR<webmes_RoleUpdateManyMutationInput, webmes_RoleUncheckedUpdateManyInput>
    /**
     * Filter which webmes_Roles to update
     */
    where?: webmes_RoleWhereInput
  }

  /**
   * webmes_Role upsert
   */
  export type webmes_RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the webmes_Role to update in case it exists.
     */
    where: webmes_RoleWhereUniqueInput
    /**
     * In case the webmes_Role found by the `where` argument doesn't exist, create a new webmes_Role with this data.
     */
    create: XOR<webmes_RoleCreateInput, webmes_RoleUncheckedCreateInput>
    /**
     * In case the webmes_Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webmes_RoleUpdateInput, webmes_RoleUncheckedUpdateInput>
  }

  /**
   * webmes_Role delete
   */
  export type webmes_RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
    /**
     * Filter which webmes_Role to delete.
     */
    where: webmes_RoleWhereUniqueInput
  }

  /**
   * webmes_Role deleteMany
   */
  export type webmes_RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_Roles to delete
     */
    where?: webmes_RoleWhereInput
  }

  /**
   * webmes_Role.permissions
   */
  export type webmes_Role$permissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    where?: webmes_RolePermissionWhereInput
    orderBy?: webmes_RolePermissionOrderByWithRelationInput | webmes_RolePermissionOrderByWithRelationInput[]
    cursor?: webmes_RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Webmes_RolePermissionScalarFieldEnum | Webmes_RolePermissionScalarFieldEnum[]
  }

  /**
   * webmes_Role.users
   */
  export type webmes_Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    where?: webmes_UserRoleWhereInput
    orderBy?: webmes_UserRoleOrderByWithRelationInput | webmes_UserRoleOrderByWithRelationInput[]
    cursor?: webmes_UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Webmes_UserRoleScalarFieldEnum | Webmes_UserRoleScalarFieldEnum[]
  }

  /**
   * webmes_Role without action
   */
  export type webmes_RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Role
     */
    select?: webmes_RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RoleInclude<ExtArgs> | null
  }


  /**
   * Model webmes_Permission
   */

  export type AggregateWebmes_Permission = {
    _count: Webmes_PermissionCountAggregateOutputType | null
    _avg: Webmes_PermissionAvgAggregateOutputType | null
    _sum: Webmes_PermissionSumAggregateOutputType | null
    _min: Webmes_PermissionMinAggregateOutputType | null
    _max: Webmes_PermissionMaxAggregateOutputType | null
  }

  export type Webmes_PermissionAvgAggregateOutputType = {
    id: number | null
  }

  export type Webmes_PermissionSumAggregateOutputType = {
    id: number | null
  }

  export type Webmes_PermissionMinAggregateOutputType = {
    id: number | null
    code: string | null
    module: string | null
    description: string | null
  }

  export type Webmes_PermissionMaxAggregateOutputType = {
    id: number | null
    code: string | null
    module: string | null
    description: string | null
  }

  export type Webmes_PermissionCountAggregateOutputType = {
    id: number
    code: number
    module: number
    description: number
    _all: number
  }


  export type Webmes_PermissionAvgAggregateInputType = {
    id?: true
  }

  export type Webmes_PermissionSumAggregateInputType = {
    id?: true
  }

  export type Webmes_PermissionMinAggregateInputType = {
    id?: true
    code?: true
    module?: true
    description?: true
  }

  export type Webmes_PermissionMaxAggregateInputType = {
    id?: true
    code?: true
    module?: true
    description?: true
  }

  export type Webmes_PermissionCountAggregateInputType = {
    id?: true
    code?: true
    module?: true
    description?: true
    _all?: true
  }

  export type Webmes_PermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_Permission to aggregate.
     */
    where?: webmes_PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Permissions to fetch.
     */
    orderBy?: webmes_PermissionOrderByWithRelationInput | webmes_PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webmes_PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webmes_Permissions
    **/
    _count?: true | Webmes_PermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Webmes_PermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Webmes_PermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Webmes_PermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Webmes_PermissionMaxAggregateInputType
  }

  export type GetWebmes_PermissionAggregateType<T extends Webmes_PermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateWebmes_Permission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebmes_Permission[P]>
      : GetScalarType<T[P], AggregateWebmes_Permission[P]>
  }




  export type webmes_PermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_PermissionWhereInput
    orderBy?: webmes_PermissionOrderByWithAggregationInput | webmes_PermissionOrderByWithAggregationInput[]
    by: Webmes_PermissionScalarFieldEnum[] | Webmes_PermissionScalarFieldEnum
    having?: webmes_PermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Webmes_PermissionCountAggregateInputType | true
    _avg?: Webmes_PermissionAvgAggregateInputType
    _sum?: Webmes_PermissionSumAggregateInputType
    _min?: Webmes_PermissionMinAggregateInputType
    _max?: Webmes_PermissionMaxAggregateInputType
  }

  export type Webmes_PermissionGroupByOutputType = {
    id: number
    code: string
    module: string
    description: string | null
    _count: Webmes_PermissionCountAggregateOutputType | null
    _avg: Webmes_PermissionAvgAggregateOutputType | null
    _sum: Webmes_PermissionSumAggregateOutputType | null
    _min: Webmes_PermissionMinAggregateOutputType | null
    _max: Webmes_PermissionMaxAggregateOutputType | null
  }

  type GetWebmes_PermissionGroupByPayload<T extends webmes_PermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Webmes_PermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Webmes_PermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Webmes_PermissionGroupByOutputType[P]>
            : GetScalarType<T[P], Webmes_PermissionGroupByOutputType[P]>
        }
      >
    >


  export type webmes_PermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    module?: boolean
    description?: boolean
    roles?: boolean | webmes_Permission$rolesArgs<ExtArgs>
    _count?: boolean | Webmes_PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webmes_Permission"]>


  export type webmes_PermissionSelectScalar = {
    id?: boolean
    code?: boolean
    module?: boolean
    description?: boolean
  }

  export type webmes_PermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | webmes_Permission$rolesArgs<ExtArgs>
    _count?: boolean | Webmes_PermissionCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $webmes_PermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webmes_Permission"
    objects: {
      roles: Prisma.$webmes_RolePermissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: string
      module: string
      description: string | null
    }, ExtArgs["result"]["webmes_Permission"]>
    composites: {}
  }

  type webmes_PermissionGetPayload<S extends boolean | null | undefined | webmes_PermissionDefaultArgs> = $Result.GetResult<Prisma.$webmes_PermissionPayload, S>

  type webmes_PermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<webmes_PermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Webmes_PermissionCountAggregateInputType | true
    }

  export interface webmes_PermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webmes_Permission'], meta: { name: 'webmes_Permission' } }
    /**
     * Find zero or one Webmes_Permission that matches the filter.
     * @param {webmes_PermissionFindUniqueArgs} args - Arguments to find a Webmes_Permission
     * @example
     * // Get one Webmes_Permission
     * const webmes_Permission = await prisma.webmes_Permission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webmes_PermissionFindUniqueArgs>(args: SelectSubset<T, webmes_PermissionFindUniqueArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Webmes_Permission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {webmes_PermissionFindUniqueOrThrowArgs} args - Arguments to find a Webmes_Permission
     * @example
     * // Get one Webmes_Permission
     * const webmes_Permission = await prisma.webmes_Permission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webmes_PermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, webmes_PermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Webmes_Permission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_PermissionFindFirstArgs} args - Arguments to find a Webmes_Permission
     * @example
     * // Get one Webmes_Permission
     * const webmes_Permission = await prisma.webmes_Permission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webmes_PermissionFindFirstArgs>(args?: SelectSubset<T, webmes_PermissionFindFirstArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Webmes_Permission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_PermissionFindFirstOrThrowArgs} args - Arguments to find a Webmes_Permission
     * @example
     * // Get one Webmes_Permission
     * const webmes_Permission = await prisma.webmes_Permission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webmes_PermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, webmes_PermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Webmes_Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_PermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webmes_Permissions
     * const webmes_Permissions = await prisma.webmes_Permission.findMany()
     * 
     * // Get first 10 Webmes_Permissions
     * const webmes_Permissions = await prisma.webmes_Permission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webmes_PermissionWithIdOnly = await prisma.webmes_Permission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webmes_PermissionFindManyArgs>(args?: SelectSubset<T, webmes_PermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Webmes_Permission.
     * @param {webmes_PermissionCreateArgs} args - Arguments to create a Webmes_Permission.
     * @example
     * // Create one Webmes_Permission
     * const Webmes_Permission = await prisma.webmes_Permission.create({
     *   data: {
     *     // ... data to create a Webmes_Permission
     *   }
     * })
     * 
     */
    create<T extends webmes_PermissionCreateArgs>(args: SelectSubset<T, webmes_PermissionCreateArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Webmes_Permissions.
     * @param {webmes_PermissionCreateManyArgs} args - Arguments to create many Webmes_Permissions.
     * @example
     * // Create many Webmes_Permissions
     * const webmes_Permission = await prisma.webmes_Permission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webmes_PermissionCreateManyArgs>(args?: SelectSubset<T, webmes_PermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Webmes_Permission.
     * @param {webmes_PermissionDeleteArgs} args - Arguments to delete one Webmes_Permission.
     * @example
     * // Delete one Webmes_Permission
     * const Webmes_Permission = await prisma.webmes_Permission.delete({
     *   where: {
     *     // ... filter to delete one Webmes_Permission
     *   }
     * })
     * 
     */
    delete<T extends webmes_PermissionDeleteArgs>(args: SelectSubset<T, webmes_PermissionDeleteArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Webmes_Permission.
     * @param {webmes_PermissionUpdateArgs} args - Arguments to update one Webmes_Permission.
     * @example
     * // Update one Webmes_Permission
     * const webmes_Permission = await prisma.webmes_Permission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webmes_PermissionUpdateArgs>(args: SelectSubset<T, webmes_PermissionUpdateArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Webmes_Permissions.
     * @param {webmes_PermissionDeleteManyArgs} args - Arguments to filter Webmes_Permissions to delete.
     * @example
     * // Delete a few Webmes_Permissions
     * const { count } = await prisma.webmes_Permission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webmes_PermissionDeleteManyArgs>(args?: SelectSubset<T, webmes_PermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webmes_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_PermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webmes_Permissions
     * const webmes_Permission = await prisma.webmes_Permission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webmes_PermissionUpdateManyArgs>(args: SelectSubset<T, webmes_PermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Webmes_Permission.
     * @param {webmes_PermissionUpsertArgs} args - Arguments to update or create a Webmes_Permission.
     * @example
     * // Update or create a Webmes_Permission
     * const webmes_Permission = await prisma.webmes_Permission.upsert({
     *   create: {
     *     // ... data to create a Webmes_Permission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webmes_Permission we want to update
     *   }
     * })
     */
    upsert<T extends webmes_PermissionUpsertArgs>(args: SelectSubset<T, webmes_PermissionUpsertArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Webmes_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_PermissionCountArgs} args - Arguments to filter Webmes_Permissions to count.
     * @example
     * // Count the number of Webmes_Permissions
     * const count = await prisma.webmes_Permission.count({
     *   where: {
     *     // ... the filter for the Webmes_Permissions we want to count
     *   }
     * })
    **/
    count<T extends webmes_PermissionCountArgs>(
      args?: Subset<T, webmes_PermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Webmes_PermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webmes_Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Webmes_PermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Webmes_PermissionAggregateArgs>(args: Subset<T, Webmes_PermissionAggregateArgs>): Prisma.PrismaPromise<GetWebmes_PermissionAggregateType<T>>

    /**
     * Group by Webmes_Permission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_PermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends webmes_PermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webmes_PermissionGroupByArgs['orderBy'] }
        : { orderBy?: webmes_PermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, webmes_PermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebmes_PermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webmes_Permission model
   */
  readonly fields: webmes_PermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webmes_Permission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webmes_PermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends webmes_Permission$rolesArgs<ExtArgs> = {}>(args?: Subset<T, webmes_Permission$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the webmes_Permission model
   */ 
  interface webmes_PermissionFieldRefs {
    readonly id: FieldRef<"webmes_Permission", 'Int'>
    readonly code: FieldRef<"webmes_Permission", 'String'>
    readonly module: FieldRef<"webmes_Permission", 'String'>
    readonly description: FieldRef<"webmes_Permission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * webmes_Permission findUnique
   */
  export type webmes_PermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Permission to fetch.
     */
    where: webmes_PermissionWhereUniqueInput
  }

  /**
   * webmes_Permission findUniqueOrThrow
   */
  export type webmes_PermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Permission to fetch.
     */
    where: webmes_PermissionWhereUniqueInput
  }

  /**
   * webmes_Permission findFirst
   */
  export type webmes_PermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Permission to fetch.
     */
    where?: webmes_PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Permissions to fetch.
     */
    orderBy?: webmes_PermissionOrderByWithRelationInput | webmes_PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_Permissions.
     */
    cursor?: webmes_PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_Permissions.
     */
    distinct?: Webmes_PermissionScalarFieldEnum | Webmes_PermissionScalarFieldEnum[]
  }

  /**
   * webmes_Permission findFirstOrThrow
   */
  export type webmes_PermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Permission to fetch.
     */
    where?: webmes_PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Permissions to fetch.
     */
    orderBy?: webmes_PermissionOrderByWithRelationInput | webmes_PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_Permissions.
     */
    cursor?: webmes_PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_Permissions.
     */
    distinct?: Webmes_PermissionScalarFieldEnum | Webmes_PermissionScalarFieldEnum[]
  }

  /**
   * webmes_Permission findMany
   */
  export type webmes_PermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_Permissions to fetch.
     */
    where?: webmes_PermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_Permissions to fetch.
     */
    orderBy?: webmes_PermissionOrderByWithRelationInput | webmes_PermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webmes_Permissions.
     */
    cursor?: webmes_PermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_Permissions.
     */
    skip?: number
    distinct?: Webmes_PermissionScalarFieldEnum | Webmes_PermissionScalarFieldEnum[]
  }

  /**
   * webmes_Permission create
   */
  export type webmes_PermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a webmes_Permission.
     */
    data: XOR<webmes_PermissionCreateInput, webmes_PermissionUncheckedCreateInput>
  }

  /**
   * webmes_Permission createMany
   */
  export type webmes_PermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webmes_Permissions.
     */
    data: webmes_PermissionCreateManyInput | webmes_PermissionCreateManyInput[]
  }

  /**
   * webmes_Permission update
   */
  export type webmes_PermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a webmes_Permission.
     */
    data: XOR<webmes_PermissionUpdateInput, webmes_PermissionUncheckedUpdateInput>
    /**
     * Choose, which webmes_Permission to update.
     */
    where: webmes_PermissionWhereUniqueInput
  }

  /**
   * webmes_Permission updateMany
   */
  export type webmes_PermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webmes_Permissions.
     */
    data: XOR<webmes_PermissionUpdateManyMutationInput, webmes_PermissionUncheckedUpdateManyInput>
    /**
     * Filter which webmes_Permissions to update
     */
    where?: webmes_PermissionWhereInput
  }

  /**
   * webmes_Permission upsert
   */
  export type webmes_PermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the webmes_Permission to update in case it exists.
     */
    where: webmes_PermissionWhereUniqueInput
    /**
     * In case the webmes_Permission found by the `where` argument doesn't exist, create a new webmes_Permission with this data.
     */
    create: XOR<webmes_PermissionCreateInput, webmes_PermissionUncheckedCreateInput>
    /**
     * In case the webmes_Permission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webmes_PermissionUpdateInput, webmes_PermissionUncheckedUpdateInput>
  }

  /**
   * webmes_Permission delete
   */
  export type webmes_PermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
    /**
     * Filter which webmes_Permission to delete.
     */
    where: webmes_PermissionWhereUniqueInput
  }

  /**
   * webmes_Permission deleteMany
   */
  export type webmes_PermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_Permissions to delete
     */
    where?: webmes_PermissionWhereInput
  }

  /**
   * webmes_Permission.roles
   */
  export type webmes_Permission$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    where?: webmes_RolePermissionWhereInput
    orderBy?: webmes_RolePermissionOrderByWithRelationInput | webmes_RolePermissionOrderByWithRelationInput[]
    cursor?: webmes_RolePermissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Webmes_RolePermissionScalarFieldEnum | Webmes_RolePermissionScalarFieldEnum[]
  }

  /**
   * webmes_Permission without action
   */
  export type webmes_PermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_Permission
     */
    select?: webmes_PermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_PermissionInclude<ExtArgs> | null
  }


  /**
   * Model webmes_UserRole
   */

  export type AggregateWebmes_UserRole = {
    _count: Webmes_UserRoleCountAggregateOutputType | null
    _avg: Webmes_UserRoleAvgAggregateOutputType | null
    _sum: Webmes_UserRoleSumAggregateOutputType | null
    _min: Webmes_UserRoleMinAggregateOutputType | null
    _max: Webmes_UserRoleMaxAggregateOutputType | null
  }

  export type Webmes_UserRoleAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type Webmes_UserRoleSumAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type Webmes_UserRoleMinAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type Webmes_UserRoleMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    roleId: number | null
  }

  export type Webmes_UserRoleCountAggregateOutputType = {
    id: number
    userId: number
    roleId: number
    _all: number
  }


  export type Webmes_UserRoleAvgAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type Webmes_UserRoleSumAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type Webmes_UserRoleMinAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type Webmes_UserRoleMaxAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
  }

  export type Webmes_UserRoleCountAggregateInputType = {
    id?: true
    userId?: true
    roleId?: true
    _all?: true
  }

  export type Webmes_UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_UserRole to aggregate.
     */
    where?: webmes_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_UserRoles to fetch.
     */
    orderBy?: webmes_UserRoleOrderByWithRelationInput | webmes_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webmes_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webmes_UserRoles
    **/
    _count?: true | Webmes_UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Webmes_UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Webmes_UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Webmes_UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Webmes_UserRoleMaxAggregateInputType
  }

  export type GetWebmes_UserRoleAggregateType<T extends Webmes_UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateWebmes_UserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebmes_UserRole[P]>
      : GetScalarType<T[P], AggregateWebmes_UserRole[P]>
  }




  export type webmes_UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_UserRoleWhereInput
    orderBy?: webmes_UserRoleOrderByWithAggregationInput | webmes_UserRoleOrderByWithAggregationInput[]
    by: Webmes_UserRoleScalarFieldEnum[] | Webmes_UserRoleScalarFieldEnum
    having?: webmes_UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Webmes_UserRoleCountAggregateInputType | true
    _avg?: Webmes_UserRoleAvgAggregateInputType
    _sum?: Webmes_UserRoleSumAggregateInputType
    _min?: Webmes_UserRoleMinAggregateInputType
    _max?: Webmes_UserRoleMaxAggregateInputType
  }

  export type Webmes_UserRoleGroupByOutputType = {
    id: number
    userId: number
    roleId: number
    _count: Webmes_UserRoleCountAggregateOutputType | null
    _avg: Webmes_UserRoleAvgAggregateOutputType | null
    _sum: Webmes_UserRoleSumAggregateOutputType | null
    _min: Webmes_UserRoleMinAggregateOutputType | null
    _max: Webmes_UserRoleMaxAggregateOutputType | null
  }

  type GetWebmes_UserRoleGroupByPayload<T extends webmes_UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Webmes_UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Webmes_UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Webmes_UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], Webmes_UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type webmes_UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    roleId?: boolean
    user?: boolean | webmes_UserDefaultArgs<ExtArgs>
    role?: boolean | webmes_RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webmes_UserRole"]>


  export type webmes_UserRoleSelectScalar = {
    id?: boolean
    userId?: boolean
    roleId?: boolean
  }

  export type webmes_UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | webmes_UserDefaultArgs<ExtArgs>
    role?: boolean | webmes_RoleDefaultArgs<ExtArgs>
  }

  export type $webmes_UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webmes_UserRole"
    objects: {
      user: Prisma.$webmes_UserPayload<ExtArgs>
      role: Prisma.$webmes_RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      roleId: number
    }, ExtArgs["result"]["webmes_UserRole"]>
    composites: {}
  }

  type webmes_UserRoleGetPayload<S extends boolean | null | undefined | webmes_UserRoleDefaultArgs> = $Result.GetResult<Prisma.$webmes_UserRolePayload, S>

  type webmes_UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<webmes_UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Webmes_UserRoleCountAggregateInputType | true
    }

  export interface webmes_UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webmes_UserRole'], meta: { name: 'webmes_UserRole' } }
    /**
     * Find zero or one Webmes_UserRole that matches the filter.
     * @param {webmes_UserRoleFindUniqueArgs} args - Arguments to find a Webmes_UserRole
     * @example
     * // Get one Webmes_UserRole
     * const webmes_UserRole = await prisma.webmes_UserRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webmes_UserRoleFindUniqueArgs>(args: SelectSubset<T, webmes_UserRoleFindUniqueArgs<ExtArgs>>): Prisma__webmes_UserRoleClient<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Webmes_UserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {webmes_UserRoleFindUniqueOrThrowArgs} args - Arguments to find a Webmes_UserRole
     * @example
     * // Get one Webmes_UserRole
     * const webmes_UserRole = await prisma.webmes_UserRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webmes_UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, webmes_UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webmes_UserRoleClient<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Webmes_UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserRoleFindFirstArgs} args - Arguments to find a Webmes_UserRole
     * @example
     * // Get one Webmes_UserRole
     * const webmes_UserRole = await prisma.webmes_UserRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webmes_UserRoleFindFirstArgs>(args?: SelectSubset<T, webmes_UserRoleFindFirstArgs<ExtArgs>>): Prisma__webmes_UserRoleClient<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Webmes_UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserRoleFindFirstOrThrowArgs} args - Arguments to find a Webmes_UserRole
     * @example
     * // Get one Webmes_UserRole
     * const webmes_UserRole = await prisma.webmes_UserRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webmes_UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, webmes_UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__webmes_UserRoleClient<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Webmes_UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webmes_UserRoles
     * const webmes_UserRoles = await prisma.webmes_UserRole.findMany()
     * 
     * // Get first 10 Webmes_UserRoles
     * const webmes_UserRoles = await prisma.webmes_UserRole.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webmes_UserRoleWithIdOnly = await prisma.webmes_UserRole.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webmes_UserRoleFindManyArgs>(args?: SelectSubset<T, webmes_UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Webmes_UserRole.
     * @param {webmes_UserRoleCreateArgs} args - Arguments to create a Webmes_UserRole.
     * @example
     * // Create one Webmes_UserRole
     * const Webmes_UserRole = await prisma.webmes_UserRole.create({
     *   data: {
     *     // ... data to create a Webmes_UserRole
     *   }
     * })
     * 
     */
    create<T extends webmes_UserRoleCreateArgs>(args: SelectSubset<T, webmes_UserRoleCreateArgs<ExtArgs>>): Prisma__webmes_UserRoleClient<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Webmes_UserRoles.
     * @param {webmes_UserRoleCreateManyArgs} args - Arguments to create many Webmes_UserRoles.
     * @example
     * // Create many Webmes_UserRoles
     * const webmes_UserRole = await prisma.webmes_UserRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webmes_UserRoleCreateManyArgs>(args?: SelectSubset<T, webmes_UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Webmes_UserRole.
     * @param {webmes_UserRoleDeleteArgs} args - Arguments to delete one Webmes_UserRole.
     * @example
     * // Delete one Webmes_UserRole
     * const Webmes_UserRole = await prisma.webmes_UserRole.delete({
     *   where: {
     *     // ... filter to delete one Webmes_UserRole
     *   }
     * })
     * 
     */
    delete<T extends webmes_UserRoleDeleteArgs>(args: SelectSubset<T, webmes_UserRoleDeleteArgs<ExtArgs>>): Prisma__webmes_UserRoleClient<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Webmes_UserRole.
     * @param {webmes_UserRoleUpdateArgs} args - Arguments to update one Webmes_UserRole.
     * @example
     * // Update one Webmes_UserRole
     * const webmes_UserRole = await prisma.webmes_UserRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webmes_UserRoleUpdateArgs>(args: SelectSubset<T, webmes_UserRoleUpdateArgs<ExtArgs>>): Prisma__webmes_UserRoleClient<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Webmes_UserRoles.
     * @param {webmes_UserRoleDeleteManyArgs} args - Arguments to filter Webmes_UserRoles to delete.
     * @example
     * // Delete a few Webmes_UserRoles
     * const { count } = await prisma.webmes_UserRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webmes_UserRoleDeleteManyArgs>(args?: SelectSubset<T, webmes_UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webmes_UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webmes_UserRoles
     * const webmes_UserRole = await prisma.webmes_UserRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webmes_UserRoleUpdateManyArgs>(args: SelectSubset<T, webmes_UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Webmes_UserRole.
     * @param {webmes_UserRoleUpsertArgs} args - Arguments to update or create a Webmes_UserRole.
     * @example
     * // Update or create a Webmes_UserRole
     * const webmes_UserRole = await prisma.webmes_UserRole.upsert({
     *   create: {
     *     // ... data to create a Webmes_UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webmes_UserRole we want to update
     *   }
     * })
     */
    upsert<T extends webmes_UserRoleUpsertArgs>(args: SelectSubset<T, webmes_UserRoleUpsertArgs<ExtArgs>>): Prisma__webmes_UserRoleClient<$Result.GetResult<Prisma.$webmes_UserRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Webmes_UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserRoleCountArgs} args - Arguments to filter Webmes_UserRoles to count.
     * @example
     * // Count the number of Webmes_UserRoles
     * const count = await prisma.webmes_UserRole.count({
     *   where: {
     *     // ... the filter for the Webmes_UserRoles we want to count
     *   }
     * })
    **/
    count<T extends webmes_UserRoleCountArgs>(
      args?: Subset<T, webmes_UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Webmes_UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webmes_UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Webmes_UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Webmes_UserRoleAggregateArgs>(args: Subset<T, Webmes_UserRoleAggregateArgs>): Prisma.PrismaPromise<GetWebmes_UserRoleAggregateType<T>>

    /**
     * Group by Webmes_UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends webmes_UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webmes_UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: webmes_UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, webmes_UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebmes_UserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webmes_UserRole model
   */
  readonly fields: webmes_UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webmes_UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webmes_UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends webmes_UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, webmes_UserDefaultArgs<ExtArgs>>): Prisma__webmes_UserClient<$Result.GetResult<Prisma.$webmes_UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    role<T extends webmes_RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, webmes_RoleDefaultArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the webmes_UserRole model
   */ 
  interface webmes_UserRoleFieldRefs {
    readonly id: FieldRef<"webmes_UserRole", 'Int'>
    readonly userId: FieldRef<"webmes_UserRole", 'Int'>
    readonly roleId: FieldRef<"webmes_UserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * webmes_UserRole findUnique
   */
  export type webmes_UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_UserRole to fetch.
     */
    where: webmes_UserRoleWhereUniqueInput
  }

  /**
   * webmes_UserRole findUniqueOrThrow
   */
  export type webmes_UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_UserRole to fetch.
     */
    where: webmes_UserRoleWhereUniqueInput
  }

  /**
   * webmes_UserRole findFirst
   */
  export type webmes_UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_UserRole to fetch.
     */
    where?: webmes_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_UserRoles to fetch.
     */
    orderBy?: webmes_UserRoleOrderByWithRelationInput | webmes_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_UserRoles.
     */
    cursor?: webmes_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_UserRoles.
     */
    distinct?: Webmes_UserRoleScalarFieldEnum | Webmes_UserRoleScalarFieldEnum[]
  }

  /**
   * webmes_UserRole findFirstOrThrow
   */
  export type webmes_UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_UserRole to fetch.
     */
    where?: webmes_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_UserRoles to fetch.
     */
    orderBy?: webmes_UserRoleOrderByWithRelationInput | webmes_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_UserRoles.
     */
    cursor?: webmes_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_UserRoles.
     */
    distinct?: Webmes_UserRoleScalarFieldEnum | Webmes_UserRoleScalarFieldEnum[]
  }

  /**
   * webmes_UserRole findMany
   */
  export type webmes_UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which webmes_UserRoles to fetch.
     */
    where?: webmes_UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_UserRoles to fetch.
     */
    orderBy?: webmes_UserRoleOrderByWithRelationInput | webmes_UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webmes_UserRoles.
     */
    cursor?: webmes_UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_UserRoles.
     */
    skip?: number
    distinct?: Webmes_UserRoleScalarFieldEnum | Webmes_UserRoleScalarFieldEnum[]
  }

  /**
   * webmes_UserRole create
   */
  export type webmes_UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a webmes_UserRole.
     */
    data: XOR<webmes_UserRoleCreateInput, webmes_UserRoleUncheckedCreateInput>
  }

  /**
   * webmes_UserRole createMany
   */
  export type webmes_UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webmes_UserRoles.
     */
    data: webmes_UserRoleCreateManyInput | webmes_UserRoleCreateManyInput[]
  }

  /**
   * webmes_UserRole update
   */
  export type webmes_UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a webmes_UserRole.
     */
    data: XOR<webmes_UserRoleUpdateInput, webmes_UserRoleUncheckedUpdateInput>
    /**
     * Choose, which webmes_UserRole to update.
     */
    where: webmes_UserRoleWhereUniqueInput
  }

  /**
   * webmes_UserRole updateMany
   */
  export type webmes_UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webmes_UserRoles.
     */
    data: XOR<webmes_UserRoleUpdateManyMutationInput, webmes_UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which webmes_UserRoles to update
     */
    where?: webmes_UserRoleWhereInput
  }

  /**
   * webmes_UserRole upsert
   */
  export type webmes_UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the webmes_UserRole to update in case it exists.
     */
    where: webmes_UserRoleWhereUniqueInput
    /**
     * In case the webmes_UserRole found by the `where` argument doesn't exist, create a new webmes_UserRole with this data.
     */
    create: XOR<webmes_UserRoleCreateInput, webmes_UserRoleUncheckedCreateInput>
    /**
     * In case the webmes_UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webmes_UserRoleUpdateInput, webmes_UserRoleUncheckedUpdateInput>
  }

  /**
   * webmes_UserRole delete
   */
  export type webmes_UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
    /**
     * Filter which webmes_UserRole to delete.
     */
    where: webmes_UserRoleWhereUniqueInput
  }

  /**
   * webmes_UserRole deleteMany
   */
  export type webmes_UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_UserRoles to delete
     */
    where?: webmes_UserRoleWhereInput
  }

  /**
   * webmes_UserRole without action
   */
  export type webmes_UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_UserRole
     */
    select?: webmes_UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model webmes_RolePermission
   */

  export type AggregateWebmes_RolePermission = {
    _count: Webmes_RolePermissionCountAggregateOutputType | null
    _avg: Webmes_RolePermissionAvgAggregateOutputType | null
    _sum: Webmes_RolePermissionSumAggregateOutputType | null
    _min: Webmes_RolePermissionMinAggregateOutputType | null
    _max: Webmes_RolePermissionMaxAggregateOutputType | null
  }

  export type Webmes_RolePermissionAvgAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
  }

  export type Webmes_RolePermissionSumAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
  }

  export type Webmes_RolePermissionMinAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
  }

  export type Webmes_RolePermissionMaxAggregateOutputType = {
    id: number | null
    roleId: number | null
    permissionId: number | null
  }

  export type Webmes_RolePermissionCountAggregateOutputType = {
    id: number
    roleId: number
    permissionId: number
    _all: number
  }


  export type Webmes_RolePermissionAvgAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type Webmes_RolePermissionSumAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type Webmes_RolePermissionMinAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type Webmes_RolePermissionMaxAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
  }

  export type Webmes_RolePermissionCountAggregateInputType = {
    id?: true
    roleId?: true
    permissionId?: true
    _all?: true
  }

  export type Webmes_RolePermissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_RolePermission to aggregate.
     */
    where?: webmes_RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_RolePermissions to fetch.
     */
    orderBy?: webmes_RolePermissionOrderByWithRelationInput | webmes_RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: webmes_RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned webmes_RolePermissions
    **/
    _count?: true | Webmes_RolePermissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Webmes_RolePermissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Webmes_RolePermissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Webmes_RolePermissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Webmes_RolePermissionMaxAggregateInputType
  }

  export type GetWebmes_RolePermissionAggregateType<T extends Webmes_RolePermissionAggregateArgs> = {
        [P in keyof T & keyof AggregateWebmes_RolePermission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebmes_RolePermission[P]>
      : GetScalarType<T[P], AggregateWebmes_RolePermission[P]>
  }




  export type webmes_RolePermissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: webmes_RolePermissionWhereInput
    orderBy?: webmes_RolePermissionOrderByWithAggregationInput | webmes_RolePermissionOrderByWithAggregationInput[]
    by: Webmes_RolePermissionScalarFieldEnum[] | Webmes_RolePermissionScalarFieldEnum
    having?: webmes_RolePermissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Webmes_RolePermissionCountAggregateInputType | true
    _avg?: Webmes_RolePermissionAvgAggregateInputType
    _sum?: Webmes_RolePermissionSumAggregateInputType
    _min?: Webmes_RolePermissionMinAggregateInputType
    _max?: Webmes_RolePermissionMaxAggregateInputType
  }

  export type Webmes_RolePermissionGroupByOutputType = {
    id: number
    roleId: number
    permissionId: number
    _count: Webmes_RolePermissionCountAggregateOutputType | null
    _avg: Webmes_RolePermissionAvgAggregateOutputType | null
    _sum: Webmes_RolePermissionSumAggregateOutputType | null
    _min: Webmes_RolePermissionMinAggregateOutputType | null
    _max: Webmes_RolePermissionMaxAggregateOutputType | null
  }

  type GetWebmes_RolePermissionGroupByPayload<T extends webmes_RolePermissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Webmes_RolePermissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Webmes_RolePermissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Webmes_RolePermissionGroupByOutputType[P]>
            : GetScalarType<T[P], Webmes_RolePermissionGroupByOutputType[P]>
        }
      >
    >


  export type webmes_RolePermissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | webmes_RoleDefaultArgs<ExtArgs>
    permission?: boolean | webmes_PermissionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["webmes_RolePermission"]>


  export type webmes_RolePermissionSelectScalar = {
    id?: boolean
    roleId?: boolean
    permissionId?: boolean
  }

  export type webmes_RolePermissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | webmes_RoleDefaultArgs<ExtArgs>
    permission?: boolean | webmes_PermissionDefaultArgs<ExtArgs>
  }

  export type $webmes_RolePermissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "webmes_RolePermission"
    objects: {
      role: Prisma.$webmes_RolePayload<ExtArgs>
      permission: Prisma.$webmes_PermissionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      roleId: number
      permissionId: number
    }, ExtArgs["result"]["webmes_RolePermission"]>
    composites: {}
  }

  type webmes_RolePermissionGetPayload<S extends boolean | null | undefined | webmes_RolePermissionDefaultArgs> = $Result.GetResult<Prisma.$webmes_RolePermissionPayload, S>

  type webmes_RolePermissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<webmes_RolePermissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Webmes_RolePermissionCountAggregateInputType | true
    }

  export interface webmes_RolePermissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['webmes_RolePermission'], meta: { name: 'webmes_RolePermission' } }
    /**
     * Find zero or one Webmes_RolePermission that matches the filter.
     * @param {webmes_RolePermissionFindUniqueArgs} args - Arguments to find a Webmes_RolePermission
     * @example
     * // Get one Webmes_RolePermission
     * const webmes_RolePermission = await prisma.webmes_RolePermission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends webmes_RolePermissionFindUniqueArgs>(args: SelectSubset<T, webmes_RolePermissionFindUniqueArgs<ExtArgs>>): Prisma__webmes_RolePermissionClient<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Webmes_RolePermission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {webmes_RolePermissionFindUniqueOrThrowArgs} args - Arguments to find a Webmes_RolePermission
     * @example
     * // Get one Webmes_RolePermission
     * const webmes_RolePermission = await prisma.webmes_RolePermission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends webmes_RolePermissionFindUniqueOrThrowArgs>(args: SelectSubset<T, webmes_RolePermissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__webmes_RolePermissionClient<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Webmes_RolePermission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RolePermissionFindFirstArgs} args - Arguments to find a Webmes_RolePermission
     * @example
     * // Get one Webmes_RolePermission
     * const webmes_RolePermission = await prisma.webmes_RolePermission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends webmes_RolePermissionFindFirstArgs>(args?: SelectSubset<T, webmes_RolePermissionFindFirstArgs<ExtArgs>>): Prisma__webmes_RolePermissionClient<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Webmes_RolePermission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RolePermissionFindFirstOrThrowArgs} args - Arguments to find a Webmes_RolePermission
     * @example
     * // Get one Webmes_RolePermission
     * const webmes_RolePermission = await prisma.webmes_RolePermission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends webmes_RolePermissionFindFirstOrThrowArgs>(args?: SelectSubset<T, webmes_RolePermissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__webmes_RolePermissionClient<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Webmes_RolePermissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RolePermissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Webmes_RolePermissions
     * const webmes_RolePermissions = await prisma.webmes_RolePermission.findMany()
     * 
     * // Get first 10 Webmes_RolePermissions
     * const webmes_RolePermissions = await prisma.webmes_RolePermission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const webmes_RolePermissionWithIdOnly = await prisma.webmes_RolePermission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends webmes_RolePermissionFindManyArgs>(args?: SelectSubset<T, webmes_RolePermissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Webmes_RolePermission.
     * @param {webmes_RolePermissionCreateArgs} args - Arguments to create a Webmes_RolePermission.
     * @example
     * // Create one Webmes_RolePermission
     * const Webmes_RolePermission = await prisma.webmes_RolePermission.create({
     *   data: {
     *     // ... data to create a Webmes_RolePermission
     *   }
     * })
     * 
     */
    create<T extends webmes_RolePermissionCreateArgs>(args: SelectSubset<T, webmes_RolePermissionCreateArgs<ExtArgs>>): Prisma__webmes_RolePermissionClient<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Webmes_RolePermissions.
     * @param {webmes_RolePermissionCreateManyArgs} args - Arguments to create many Webmes_RolePermissions.
     * @example
     * // Create many Webmes_RolePermissions
     * const webmes_RolePermission = await prisma.webmes_RolePermission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends webmes_RolePermissionCreateManyArgs>(args?: SelectSubset<T, webmes_RolePermissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Webmes_RolePermission.
     * @param {webmes_RolePermissionDeleteArgs} args - Arguments to delete one Webmes_RolePermission.
     * @example
     * // Delete one Webmes_RolePermission
     * const Webmes_RolePermission = await prisma.webmes_RolePermission.delete({
     *   where: {
     *     // ... filter to delete one Webmes_RolePermission
     *   }
     * })
     * 
     */
    delete<T extends webmes_RolePermissionDeleteArgs>(args: SelectSubset<T, webmes_RolePermissionDeleteArgs<ExtArgs>>): Prisma__webmes_RolePermissionClient<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Webmes_RolePermission.
     * @param {webmes_RolePermissionUpdateArgs} args - Arguments to update one Webmes_RolePermission.
     * @example
     * // Update one Webmes_RolePermission
     * const webmes_RolePermission = await prisma.webmes_RolePermission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends webmes_RolePermissionUpdateArgs>(args: SelectSubset<T, webmes_RolePermissionUpdateArgs<ExtArgs>>): Prisma__webmes_RolePermissionClient<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Webmes_RolePermissions.
     * @param {webmes_RolePermissionDeleteManyArgs} args - Arguments to filter Webmes_RolePermissions to delete.
     * @example
     * // Delete a few Webmes_RolePermissions
     * const { count } = await prisma.webmes_RolePermission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends webmes_RolePermissionDeleteManyArgs>(args?: SelectSubset<T, webmes_RolePermissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Webmes_RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RolePermissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Webmes_RolePermissions
     * const webmes_RolePermission = await prisma.webmes_RolePermission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends webmes_RolePermissionUpdateManyArgs>(args: SelectSubset<T, webmes_RolePermissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Webmes_RolePermission.
     * @param {webmes_RolePermissionUpsertArgs} args - Arguments to update or create a Webmes_RolePermission.
     * @example
     * // Update or create a Webmes_RolePermission
     * const webmes_RolePermission = await prisma.webmes_RolePermission.upsert({
     *   create: {
     *     // ... data to create a Webmes_RolePermission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Webmes_RolePermission we want to update
     *   }
     * })
     */
    upsert<T extends webmes_RolePermissionUpsertArgs>(args: SelectSubset<T, webmes_RolePermissionUpsertArgs<ExtArgs>>): Prisma__webmes_RolePermissionClient<$Result.GetResult<Prisma.$webmes_RolePermissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Webmes_RolePermissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RolePermissionCountArgs} args - Arguments to filter Webmes_RolePermissions to count.
     * @example
     * // Count the number of Webmes_RolePermissions
     * const count = await prisma.webmes_RolePermission.count({
     *   where: {
     *     // ... the filter for the Webmes_RolePermissions we want to count
     *   }
     * })
    **/
    count<T extends webmes_RolePermissionCountArgs>(
      args?: Subset<T, webmes_RolePermissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Webmes_RolePermissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Webmes_RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Webmes_RolePermissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Webmes_RolePermissionAggregateArgs>(args: Subset<T, Webmes_RolePermissionAggregateArgs>): Prisma.PrismaPromise<GetWebmes_RolePermissionAggregateType<T>>

    /**
     * Group by Webmes_RolePermission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {webmes_RolePermissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends webmes_RolePermissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: webmes_RolePermissionGroupByArgs['orderBy'] }
        : { orderBy?: webmes_RolePermissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, webmes_RolePermissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebmes_RolePermissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the webmes_RolePermission model
   */
  readonly fields: webmes_RolePermissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for webmes_RolePermission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__webmes_RolePermissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends webmes_RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, webmes_RoleDefaultArgs<ExtArgs>>): Prisma__webmes_RoleClient<$Result.GetResult<Prisma.$webmes_RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    permission<T extends webmes_PermissionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, webmes_PermissionDefaultArgs<ExtArgs>>): Prisma__webmes_PermissionClient<$Result.GetResult<Prisma.$webmes_PermissionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the webmes_RolePermission model
   */ 
  interface webmes_RolePermissionFieldRefs {
    readonly id: FieldRef<"webmes_RolePermission", 'Int'>
    readonly roleId: FieldRef<"webmes_RolePermission", 'Int'>
    readonly permissionId: FieldRef<"webmes_RolePermission", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * webmes_RolePermission findUnique
   */
  export type webmes_RolePermissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_RolePermission to fetch.
     */
    where: webmes_RolePermissionWhereUniqueInput
  }

  /**
   * webmes_RolePermission findUniqueOrThrow
   */
  export type webmes_RolePermissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_RolePermission to fetch.
     */
    where: webmes_RolePermissionWhereUniqueInput
  }

  /**
   * webmes_RolePermission findFirst
   */
  export type webmes_RolePermissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_RolePermission to fetch.
     */
    where?: webmes_RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_RolePermissions to fetch.
     */
    orderBy?: webmes_RolePermissionOrderByWithRelationInput | webmes_RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_RolePermissions.
     */
    cursor?: webmes_RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_RolePermissions.
     */
    distinct?: Webmes_RolePermissionScalarFieldEnum | Webmes_RolePermissionScalarFieldEnum[]
  }

  /**
   * webmes_RolePermission findFirstOrThrow
   */
  export type webmes_RolePermissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_RolePermission to fetch.
     */
    where?: webmes_RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_RolePermissions to fetch.
     */
    orderBy?: webmes_RolePermissionOrderByWithRelationInput | webmes_RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for webmes_RolePermissions.
     */
    cursor?: webmes_RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_RolePermissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of webmes_RolePermissions.
     */
    distinct?: Webmes_RolePermissionScalarFieldEnum | Webmes_RolePermissionScalarFieldEnum[]
  }

  /**
   * webmes_RolePermission findMany
   */
  export type webmes_RolePermissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter, which webmes_RolePermissions to fetch.
     */
    where?: webmes_RolePermissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of webmes_RolePermissions to fetch.
     */
    orderBy?: webmes_RolePermissionOrderByWithRelationInput | webmes_RolePermissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing webmes_RolePermissions.
     */
    cursor?: webmes_RolePermissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` webmes_RolePermissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` webmes_RolePermissions.
     */
    skip?: number
    distinct?: Webmes_RolePermissionScalarFieldEnum | Webmes_RolePermissionScalarFieldEnum[]
  }

  /**
   * webmes_RolePermission create
   */
  export type webmes_RolePermissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to create a webmes_RolePermission.
     */
    data: XOR<webmes_RolePermissionCreateInput, webmes_RolePermissionUncheckedCreateInput>
  }

  /**
   * webmes_RolePermission createMany
   */
  export type webmes_RolePermissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many webmes_RolePermissions.
     */
    data: webmes_RolePermissionCreateManyInput | webmes_RolePermissionCreateManyInput[]
  }

  /**
   * webmes_RolePermission update
   */
  export type webmes_RolePermissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * The data needed to update a webmes_RolePermission.
     */
    data: XOR<webmes_RolePermissionUpdateInput, webmes_RolePermissionUncheckedUpdateInput>
    /**
     * Choose, which webmes_RolePermission to update.
     */
    where: webmes_RolePermissionWhereUniqueInput
  }

  /**
   * webmes_RolePermission updateMany
   */
  export type webmes_RolePermissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update webmes_RolePermissions.
     */
    data: XOR<webmes_RolePermissionUpdateManyMutationInput, webmes_RolePermissionUncheckedUpdateManyInput>
    /**
     * Filter which webmes_RolePermissions to update
     */
    where?: webmes_RolePermissionWhereInput
  }

  /**
   * webmes_RolePermission upsert
   */
  export type webmes_RolePermissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * The filter to search for the webmes_RolePermission to update in case it exists.
     */
    where: webmes_RolePermissionWhereUniqueInput
    /**
     * In case the webmes_RolePermission found by the `where` argument doesn't exist, create a new webmes_RolePermission with this data.
     */
    create: XOR<webmes_RolePermissionCreateInput, webmes_RolePermissionUncheckedCreateInput>
    /**
     * In case the webmes_RolePermission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<webmes_RolePermissionUpdateInput, webmes_RolePermissionUncheckedUpdateInput>
  }

  /**
   * webmes_RolePermission delete
   */
  export type webmes_RolePermissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
    /**
     * Filter which webmes_RolePermission to delete.
     */
    where: webmes_RolePermissionWhereUniqueInput
  }

  /**
   * webmes_RolePermission deleteMany
   */
  export type webmes_RolePermissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which webmes_RolePermissions to delete
     */
    where?: webmes_RolePermissionWhereInput
  }

  /**
   * webmes_RolePermission without action
   */
  export type webmes_RolePermissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the webmes_RolePermission
     */
    select?: webmes_RolePermissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: webmes_RolePermissionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable',
    Snapshot: 'Snapshot'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Webmes_UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    fullName: 'fullName',
    email: 'email',
    department: 'department',
    plant: 'plant',
    section: 'section',
    adDn: 'adDn',
    isActive: 'isActive',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type Webmes_UserScalarFieldEnum = (typeof Webmes_UserScalarFieldEnum)[keyof typeof Webmes_UserScalarFieldEnum]


  export const Webmes_RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type Webmes_RoleScalarFieldEnum = (typeof Webmes_RoleScalarFieldEnum)[keyof typeof Webmes_RoleScalarFieldEnum]


  export const Webmes_PermissionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    module: 'module',
    description: 'description'
  };

  export type Webmes_PermissionScalarFieldEnum = (typeof Webmes_PermissionScalarFieldEnum)[keyof typeof Webmes_PermissionScalarFieldEnum]


  export const Webmes_UserRoleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    roleId: 'roleId'
  };

  export type Webmes_UserRoleScalarFieldEnum = (typeof Webmes_UserRoleScalarFieldEnum)[keyof typeof Webmes_UserRoleScalarFieldEnum]


  export const Webmes_RolePermissionScalarFieldEnum: {
    id: 'id',
    roleId: 'roleId',
    permissionId: 'permissionId'
  };

  export type Webmes_RolePermissionScalarFieldEnum = (typeof Webmes_RolePermissionScalarFieldEnum)[keyof typeof Webmes_RolePermissionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type webmes_UserWhereInput = {
    AND?: webmes_UserWhereInput | webmes_UserWhereInput[]
    OR?: webmes_UserWhereInput[]
    NOT?: webmes_UserWhereInput | webmes_UserWhereInput[]
    id?: IntFilter<"webmes_User"> | number
    username?: StringFilter<"webmes_User"> | string
    fullName?: StringFilter<"webmes_User"> | string
    email?: StringNullableFilter<"webmes_User"> | string | null
    department?: StringNullableFilter<"webmes_User"> | string | null
    plant?: StringNullableFilter<"webmes_User"> | string | null
    section?: StringNullableFilter<"webmes_User"> | string | null
    adDn?: StringNullableFilter<"webmes_User"> | string | null
    isActive?: BoolFilter<"webmes_User"> | boolean
    password?: StringNullableFilter<"webmes_User"> | string | null
    createdAt?: DateTimeFilter<"webmes_User"> | Date | string
    updatedAt?: DateTimeFilter<"webmes_User"> | Date | string
    roles?: Webmes_UserRoleListRelationFilter
  }

  export type webmes_UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    plant?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    adDn?: SortOrderInput | SortOrder
    isActive?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: webmes_UserRoleOrderByRelationAggregateInput
  }

  export type webmes_UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: webmes_UserWhereInput | webmes_UserWhereInput[]
    OR?: webmes_UserWhereInput[]
    NOT?: webmes_UserWhereInput | webmes_UserWhereInput[]
    fullName?: StringFilter<"webmes_User"> | string
    department?: StringNullableFilter<"webmes_User"> | string | null
    plant?: StringNullableFilter<"webmes_User"> | string | null
    section?: StringNullableFilter<"webmes_User"> | string | null
    adDn?: StringNullableFilter<"webmes_User"> | string | null
    isActive?: BoolFilter<"webmes_User"> | boolean
    password?: StringNullableFilter<"webmes_User"> | string | null
    createdAt?: DateTimeFilter<"webmes_User"> | Date | string
    updatedAt?: DateTimeFilter<"webmes_User"> | Date | string
    roles?: Webmes_UserRoleListRelationFilter
  }, "id" | "username" | "email">

  export type webmes_UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrderInput | SortOrder
    department?: SortOrderInput | SortOrder
    plant?: SortOrderInput | SortOrder
    section?: SortOrderInput | SortOrder
    adDn?: SortOrderInput | SortOrder
    isActive?: SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: webmes_UserCountOrderByAggregateInput
    _avg?: webmes_UserAvgOrderByAggregateInput
    _max?: webmes_UserMaxOrderByAggregateInput
    _min?: webmes_UserMinOrderByAggregateInput
    _sum?: webmes_UserSumOrderByAggregateInput
  }

  export type webmes_UserScalarWhereWithAggregatesInput = {
    AND?: webmes_UserScalarWhereWithAggregatesInput | webmes_UserScalarWhereWithAggregatesInput[]
    OR?: webmes_UserScalarWhereWithAggregatesInput[]
    NOT?: webmes_UserScalarWhereWithAggregatesInput | webmes_UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"webmes_User"> | number
    username?: StringWithAggregatesFilter<"webmes_User"> | string
    fullName?: StringWithAggregatesFilter<"webmes_User"> | string
    email?: StringNullableWithAggregatesFilter<"webmes_User"> | string | null
    department?: StringNullableWithAggregatesFilter<"webmes_User"> | string | null
    plant?: StringNullableWithAggregatesFilter<"webmes_User"> | string | null
    section?: StringNullableWithAggregatesFilter<"webmes_User"> | string | null
    adDn?: StringNullableWithAggregatesFilter<"webmes_User"> | string | null
    isActive?: BoolWithAggregatesFilter<"webmes_User"> | boolean
    password?: StringNullableWithAggregatesFilter<"webmes_User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"webmes_User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"webmes_User"> | Date | string
  }

  export type webmes_RoleWhereInput = {
    AND?: webmes_RoleWhereInput | webmes_RoleWhereInput[]
    OR?: webmes_RoleWhereInput[]
    NOT?: webmes_RoleWhereInput | webmes_RoleWhereInput[]
    id?: IntFilter<"webmes_Role"> | number
    name?: StringFilter<"webmes_Role"> | string
    description?: StringNullableFilter<"webmes_Role"> | string | null
    permissions?: Webmes_RolePermissionListRelationFilter
    users?: Webmes_UserRoleListRelationFilter
  }

  export type webmes_RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    permissions?: webmes_RolePermissionOrderByRelationAggregateInput
    users?: webmes_UserRoleOrderByRelationAggregateInput
  }

  export type webmes_RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: webmes_RoleWhereInput | webmes_RoleWhereInput[]
    OR?: webmes_RoleWhereInput[]
    NOT?: webmes_RoleWhereInput | webmes_RoleWhereInput[]
    description?: StringNullableFilter<"webmes_Role"> | string | null
    permissions?: Webmes_RolePermissionListRelationFilter
    users?: Webmes_UserRoleListRelationFilter
  }, "id" | "name">

  export type webmes_RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: webmes_RoleCountOrderByAggregateInput
    _avg?: webmes_RoleAvgOrderByAggregateInput
    _max?: webmes_RoleMaxOrderByAggregateInput
    _min?: webmes_RoleMinOrderByAggregateInput
    _sum?: webmes_RoleSumOrderByAggregateInput
  }

  export type webmes_RoleScalarWhereWithAggregatesInput = {
    AND?: webmes_RoleScalarWhereWithAggregatesInput | webmes_RoleScalarWhereWithAggregatesInput[]
    OR?: webmes_RoleScalarWhereWithAggregatesInput[]
    NOT?: webmes_RoleScalarWhereWithAggregatesInput | webmes_RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"webmes_Role"> | number
    name?: StringWithAggregatesFilter<"webmes_Role"> | string
    description?: StringNullableWithAggregatesFilter<"webmes_Role"> | string | null
  }

  export type webmes_PermissionWhereInput = {
    AND?: webmes_PermissionWhereInput | webmes_PermissionWhereInput[]
    OR?: webmes_PermissionWhereInput[]
    NOT?: webmes_PermissionWhereInput | webmes_PermissionWhereInput[]
    id?: IntFilter<"webmes_Permission"> | number
    code?: StringFilter<"webmes_Permission"> | string
    module?: StringFilter<"webmes_Permission"> | string
    description?: StringNullableFilter<"webmes_Permission"> | string | null
    roles?: Webmes_RolePermissionListRelationFilter
  }

  export type webmes_PermissionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrderInput | SortOrder
    roles?: webmes_RolePermissionOrderByRelationAggregateInput
  }

  export type webmes_PermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: string
    AND?: webmes_PermissionWhereInput | webmes_PermissionWhereInput[]
    OR?: webmes_PermissionWhereInput[]
    NOT?: webmes_PermissionWhereInput | webmes_PermissionWhereInput[]
    module?: StringFilter<"webmes_Permission"> | string
    description?: StringNullableFilter<"webmes_Permission"> | string | null
    roles?: Webmes_RolePermissionListRelationFilter
  }, "id" | "code">

  export type webmes_PermissionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: webmes_PermissionCountOrderByAggregateInput
    _avg?: webmes_PermissionAvgOrderByAggregateInput
    _max?: webmes_PermissionMaxOrderByAggregateInput
    _min?: webmes_PermissionMinOrderByAggregateInput
    _sum?: webmes_PermissionSumOrderByAggregateInput
  }

  export type webmes_PermissionScalarWhereWithAggregatesInput = {
    AND?: webmes_PermissionScalarWhereWithAggregatesInput | webmes_PermissionScalarWhereWithAggregatesInput[]
    OR?: webmes_PermissionScalarWhereWithAggregatesInput[]
    NOT?: webmes_PermissionScalarWhereWithAggregatesInput | webmes_PermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"webmes_Permission"> | number
    code?: StringWithAggregatesFilter<"webmes_Permission"> | string
    module?: StringWithAggregatesFilter<"webmes_Permission"> | string
    description?: StringNullableWithAggregatesFilter<"webmes_Permission"> | string | null
  }

  export type webmes_UserRoleWhereInput = {
    AND?: webmes_UserRoleWhereInput | webmes_UserRoleWhereInput[]
    OR?: webmes_UserRoleWhereInput[]
    NOT?: webmes_UserRoleWhereInput | webmes_UserRoleWhereInput[]
    id?: IntFilter<"webmes_UserRole"> | number
    userId?: IntFilter<"webmes_UserRole"> | number
    roleId?: IntFilter<"webmes_UserRole"> | number
    user?: XOR<Webmes_UserRelationFilter, webmes_UserWhereInput>
    role?: XOR<Webmes_RoleRelationFilter, webmes_RoleWhereInput>
  }

  export type webmes_UserRoleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    user?: webmes_UserOrderByWithRelationInput
    role?: webmes_RoleOrderByWithRelationInput
  }

  export type webmes_UserRoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId_roleId?: webmes_UserRoleUserIdRoleIdCompoundUniqueInput
    AND?: webmes_UserRoleWhereInput | webmes_UserRoleWhereInput[]
    OR?: webmes_UserRoleWhereInput[]
    NOT?: webmes_UserRoleWhereInput | webmes_UserRoleWhereInput[]
    userId?: IntFilter<"webmes_UserRole"> | number
    roleId?: IntFilter<"webmes_UserRole"> | number
    user?: XOR<Webmes_UserRelationFilter, webmes_UserWhereInput>
    role?: XOR<Webmes_RoleRelationFilter, webmes_RoleWhereInput>
  }, "id" | "userId_roleId">

  export type webmes_UserRoleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
    _count?: webmes_UserRoleCountOrderByAggregateInput
    _avg?: webmes_UserRoleAvgOrderByAggregateInput
    _max?: webmes_UserRoleMaxOrderByAggregateInput
    _min?: webmes_UserRoleMinOrderByAggregateInput
    _sum?: webmes_UserRoleSumOrderByAggregateInput
  }

  export type webmes_UserRoleScalarWhereWithAggregatesInput = {
    AND?: webmes_UserRoleScalarWhereWithAggregatesInput | webmes_UserRoleScalarWhereWithAggregatesInput[]
    OR?: webmes_UserRoleScalarWhereWithAggregatesInput[]
    NOT?: webmes_UserRoleScalarWhereWithAggregatesInput | webmes_UserRoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"webmes_UserRole"> | number
    userId?: IntWithAggregatesFilter<"webmes_UserRole"> | number
    roleId?: IntWithAggregatesFilter<"webmes_UserRole"> | number
  }

  export type webmes_RolePermissionWhereInput = {
    AND?: webmes_RolePermissionWhereInput | webmes_RolePermissionWhereInput[]
    OR?: webmes_RolePermissionWhereInput[]
    NOT?: webmes_RolePermissionWhereInput | webmes_RolePermissionWhereInput[]
    id?: IntFilter<"webmes_RolePermission"> | number
    roleId?: IntFilter<"webmes_RolePermission"> | number
    permissionId?: IntFilter<"webmes_RolePermission"> | number
    role?: XOR<Webmes_RoleRelationFilter, webmes_RoleWhereInput>
    permission?: XOR<Webmes_PermissionRelationFilter, webmes_PermissionWhereInput>
  }

  export type webmes_RolePermissionOrderByWithRelationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    role?: webmes_RoleOrderByWithRelationInput
    permission?: webmes_PermissionOrderByWithRelationInput
  }

  export type webmes_RolePermissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    roleId_permissionId?: webmes_RolePermissionRoleIdPermissionIdCompoundUniqueInput
    AND?: webmes_RolePermissionWhereInput | webmes_RolePermissionWhereInput[]
    OR?: webmes_RolePermissionWhereInput[]
    NOT?: webmes_RolePermissionWhereInput | webmes_RolePermissionWhereInput[]
    roleId?: IntFilter<"webmes_RolePermission"> | number
    permissionId?: IntFilter<"webmes_RolePermission"> | number
    role?: XOR<Webmes_RoleRelationFilter, webmes_RoleWhereInput>
    permission?: XOR<Webmes_PermissionRelationFilter, webmes_PermissionWhereInput>
  }, "id" | "roleId_permissionId">

  export type webmes_RolePermissionOrderByWithAggregationInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
    _count?: webmes_RolePermissionCountOrderByAggregateInput
    _avg?: webmes_RolePermissionAvgOrderByAggregateInput
    _max?: webmes_RolePermissionMaxOrderByAggregateInput
    _min?: webmes_RolePermissionMinOrderByAggregateInput
    _sum?: webmes_RolePermissionSumOrderByAggregateInput
  }

  export type webmes_RolePermissionScalarWhereWithAggregatesInput = {
    AND?: webmes_RolePermissionScalarWhereWithAggregatesInput | webmes_RolePermissionScalarWhereWithAggregatesInput[]
    OR?: webmes_RolePermissionScalarWhereWithAggregatesInput[]
    NOT?: webmes_RolePermissionScalarWhereWithAggregatesInput | webmes_RolePermissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"webmes_RolePermission"> | number
    roleId?: IntWithAggregatesFilter<"webmes_RolePermission"> | number
    permissionId?: IntWithAggregatesFilter<"webmes_RolePermission"> | number
  }

  export type webmes_UserCreateInput = {
    username: string
    fullName: string
    email?: string | null
    department?: string | null
    plant?: string | null
    section?: string | null
    adDn?: string | null
    isActive?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: webmes_UserRoleCreateNestedManyWithoutUserInput
  }

  export type webmes_UserUncheckedCreateInput = {
    id?: number
    username: string
    fullName: string
    email?: string | null
    department?: string | null
    plant?: string | null
    section?: string | null
    adDn?: string | null
    isActive?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: webmes_UserRoleUncheckedCreateNestedManyWithoutUserInput
  }

  export type webmes_UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    adDn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: webmes_UserRoleUpdateManyWithoutUserNestedInput
  }

  export type webmes_UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    adDn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: webmes_UserRoleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type webmes_UserCreateManyInput = {
    username: string
    fullName: string
    email?: string | null
    department?: string | null
    plant?: string | null
    section?: string | null
    adDn?: string | null
    isActive?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type webmes_UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    adDn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webmes_UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    adDn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webmes_RoleCreateInput = {
    name: string
    description?: string | null
    permissions?: webmes_RolePermissionCreateNestedManyWithoutRoleInput
    users?: webmes_UserRoleCreateNestedManyWithoutRoleInput
  }

  export type webmes_RoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    permissions?: webmes_RolePermissionUncheckedCreateNestedManyWithoutRoleInput
    users?: webmes_UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type webmes_RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: webmes_RolePermissionUpdateManyWithoutRoleNestedInput
    users?: webmes_UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type webmes_RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: webmes_RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
    users?: webmes_UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type webmes_RoleCreateManyInput = {
    name: string
    description?: string | null
  }

  export type webmes_RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type webmes_RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type webmes_PermissionCreateInput = {
    code: string
    module: string
    description?: string | null
    roles?: webmes_RolePermissionCreateNestedManyWithoutPermissionInput
  }

  export type webmes_PermissionUncheckedCreateInput = {
    id?: number
    code: string
    module: string
    description?: string | null
    roles?: webmes_RolePermissionUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type webmes_PermissionUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: webmes_RolePermissionUpdateManyWithoutPermissionNestedInput
  }

  export type webmes_PermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    roles?: webmes_RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type webmes_PermissionCreateManyInput = {
    code: string
    module: string
    description?: string | null
  }

  export type webmes_PermissionUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type webmes_PermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type webmes_UserRoleCreateInput = {
    user: webmes_UserCreateNestedOneWithoutRolesInput
    role: webmes_RoleCreateNestedOneWithoutUsersInput
  }

  export type webmes_UserRoleUncheckedCreateInput = {
    id?: number
    userId: number
    roleId: number
  }

  export type webmes_UserRoleUpdateInput = {
    user?: webmes_UserUpdateOneRequiredWithoutRolesNestedInput
    role?: webmes_RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type webmes_UserRoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_UserRoleCreateManyInput = {
    userId: number
    roleId: number
  }

  export type webmes_UserRoleUpdateManyMutationInput = {

  }

  export type webmes_UserRoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_RolePermissionCreateInput = {
    role: webmes_RoleCreateNestedOneWithoutPermissionsInput
    permission: webmes_PermissionCreateNestedOneWithoutRolesInput
  }

  export type webmes_RolePermissionUncheckedCreateInput = {
    id?: number
    roleId: number
    permissionId: number
  }

  export type webmes_RolePermissionUpdateInput = {
    role?: webmes_RoleUpdateOneRequiredWithoutPermissionsNestedInput
    permission?: webmes_PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type webmes_RolePermissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_RolePermissionCreateManyInput = {
    roleId: number
    permissionId: number
  }

  export type webmes_RolePermissionUpdateManyMutationInput = {

  }

  export type webmes_RolePermissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Webmes_UserRoleListRelationFilter = {
    every?: webmes_UserRoleWhereInput
    some?: webmes_UserRoleWhereInput
    none?: webmes_UserRoleWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type webmes_UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type webmes_UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    department?: SortOrder
    plant?: SortOrder
    section?: SortOrder
    adDn?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type webmes_UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type webmes_UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    department?: SortOrder
    plant?: SortOrder
    section?: SortOrder
    adDn?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type webmes_UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    department?: SortOrder
    plant?: SortOrder
    section?: SortOrder
    adDn?: SortOrder
    isActive?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type webmes_UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type Webmes_RolePermissionListRelationFilter = {
    every?: webmes_RolePermissionWhereInput
    some?: webmes_RolePermissionWhereInput
    none?: webmes_RolePermissionWhereInput
  }

  export type webmes_RolePermissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type webmes_RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type webmes_RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type webmes_RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type webmes_RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type webmes_RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type webmes_PermissionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type webmes_PermissionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type webmes_PermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type webmes_PermissionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    module?: SortOrder
    description?: SortOrder
  }

  export type webmes_PermissionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Webmes_UserRelationFilter = {
    is?: webmes_UserWhereInput
    isNot?: webmes_UserWhereInput
  }

  export type Webmes_RoleRelationFilter = {
    is?: webmes_RoleWhereInput
    isNot?: webmes_RoleWhereInput
  }

  export type webmes_UserRoleUserIdRoleIdCompoundUniqueInput = {
    userId: number
    roleId: number
  }

  export type webmes_UserRoleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type webmes_UserRoleAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type webmes_UserRoleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type webmes_UserRoleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type webmes_UserRoleSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type Webmes_PermissionRelationFilter = {
    is?: webmes_PermissionWhereInput
    isNot?: webmes_PermissionWhereInput
  }

  export type webmes_RolePermissionRoleIdPermissionIdCompoundUniqueInput = {
    roleId: number
    permissionId: number
  }

  export type webmes_RolePermissionCountOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type webmes_RolePermissionAvgOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type webmes_RolePermissionMaxOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type webmes_RolePermissionMinOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type webmes_RolePermissionSumOrderByAggregateInput = {
    id?: SortOrder
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type webmes_UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<webmes_UserRoleCreateWithoutUserInput, webmes_UserRoleUncheckedCreateWithoutUserInput> | webmes_UserRoleCreateWithoutUserInput[] | webmes_UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: webmes_UserRoleCreateOrConnectWithoutUserInput | webmes_UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: webmes_UserRoleCreateManyUserInputEnvelope
    connect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
  }

  export type webmes_UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<webmes_UserRoleCreateWithoutUserInput, webmes_UserRoleUncheckedCreateWithoutUserInput> | webmes_UserRoleCreateWithoutUserInput[] | webmes_UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: webmes_UserRoleCreateOrConnectWithoutUserInput | webmes_UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: webmes_UserRoleCreateManyUserInputEnvelope
    connect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type webmes_UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<webmes_UserRoleCreateWithoutUserInput, webmes_UserRoleUncheckedCreateWithoutUserInput> | webmes_UserRoleCreateWithoutUserInput[] | webmes_UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: webmes_UserRoleCreateOrConnectWithoutUserInput | webmes_UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: webmes_UserRoleUpsertWithWhereUniqueWithoutUserInput | webmes_UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: webmes_UserRoleCreateManyUserInputEnvelope
    set?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    disconnect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    delete?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    connect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    update?: webmes_UserRoleUpdateWithWhereUniqueWithoutUserInput | webmes_UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: webmes_UserRoleUpdateManyWithWhereWithoutUserInput | webmes_UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: webmes_UserRoleScalarWhereInput | webmes_UserRoleScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type webmes_UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<webmes_UserRoleCreateWithoutUserInput, webmes_UserRoleUncheckedCreateWithoutUserInput> | webmes_UserRoleCreateWithoutUserInput[] | webmes_UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: webmes_UserRoleCreateOrConnectWithoutUserInput | webmes_UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: webmes_UserRoleUpsertWithWhereUniqueWithoutUserInput | webmes_UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: webmes_UserRoleCreateManyUserInputEnvelope
    set?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    disconnect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    delete?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    connect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    update?: webmes_UserRoleUpdateWithWhereUniqueWithoutUserInput | webmes_UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: webmes_UserRoleUpdateManyWithWhereWithoutUserInput | webmes_UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: webmes_UserRoleScalarWhereInput | webmes_UserRoleScalarWhereInput[]
  }

  export type webmes_RolePermissionCreateNestedManyWithoutRoleInput = {
    create?: XOR<webmes_RolePermissionCreateWithoutRoleInput, webmes_RolePermissionUncheckedCreateWithoutRoleInput> | webmes_RolePermissionCreateWithoutRoleInput[] | webmes_RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: webmes_RolePermissionCreateOrConnectWithoutRoleInput | webmes_RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: webmes_RolePermissionCreateManyRoleInputEnvelope
    connect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
  }

  export type webmes_UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<webmes_UserRoleCreateWithoutRoleInput, webmes_UserRoleUncheckedCreateWithoutRoleInput> | webmes_UserRoleCreateWithoutRoleInput[] | webmes_UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: webmes_UserRoleCreateOrConnectWithoutRoleInput | webmes_UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: webmes_UserRoleCreateManyRoleInputEnvelope
    connect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
  }

  export type webmes_RolePermissionUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<webmes_RolePermissionCreateWithoutRoleInput, webmes_RolePermissionUncheckedCreateWithoutRoleInput> | webmes_RolePermissionCreateWithoutRoleInput[] | webmes_RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: webmes_RolePermissionCreateOrConnectWithoutRoleInput | webmes_RolePermissionCreateOrConnectWithoutRoleInput[]
    createMany?: webmes_RolePermissionCreateManyRoleInputEnvelope
    connect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
  }

  export type webmes_UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<webmes_UserRoleCreateWithoutRoleInput, webmes_UserRoleUncheckedCreateWithoutRoleInput> | webmes_UserRoleCreateWithoutRoleInput[] | webmes_UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: webmes_UserRoleCreateOrConnectWithoutRoleInput | webmes_UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: webmes_UserRoleCreateManyRoleInputEnvelope
    connect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
  }

  export type webmes_RolePermissionUpdateManyWithoutRoleNestedInput = {
    create?: XOR<webmes_RolePermissionCreateWithoutRoleInput, webmes_RolePermissionUncheckedCreateWithoutRoleInput> | webmes_RolePermissionCreateWithoutRoleInput[] | webmes_RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: webmes_RolePermissionCreateOrConnectWithoutRoleInput | webmes_RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: webmes_RolePermissionUpsertWithWhereUniqueWithoutRoleInput | webmes_RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: webmes_RolePermissionCreateManyRoleInputEnvelope
    set?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    disconnect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    delete?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    connect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    update?: webmes_RolePermissionUpdateWithWhereUniqueWithoutRoleInput | webmes_RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: webmes_RolePermissionUpdateManyWithWhereWithoutRoleInput | webmes_RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: webmes_RolePermissionScalarWhereInput | webmes_RolePermissionScalarWhereInput[]
  }

  export type webmes_UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<webmes_UserRoleCreateWithoutRoleInput, webmes_UserRoleUncheckedCreateWithoutRoleInput> | webmes_UserRoleCreateWithoutRoleInput[] | webmes_UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: webmes_UserRoleCreateOrConnectWithoutRoleInput | webmes_UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: webmes_UserRoleUpsertWithWhereUniqueWithoutRoleInput | webmes_UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: webmes_UserRoleCreateManyRoleInputEnvelope
    set?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    disconnect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    delete?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    connect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    update?: webmes_UserRoleUpdateWithWhereUniqueWithoutRoleInput | webmes_UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: webmes_UserRoleUpdateManyWithWhereWithoutRoleInput | webmes_UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: webmes_UserRoleScalarWhereInput | webmes_UserRoleScalarWhereInput[]
  }

  export type webmes_RolePermissionUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<webmes_RolePermissionCreateWithoutRoleInput, webmes_RolePermissionUncheckedCreateWithoutRoleInput> | webmes_RolePermissionCreateWithoutRoleInput[] | webmes_RolePermissionUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: webmes_RolePermissionCreateOrConnectWithoutRoleInput | webmes_RolePermissionCreateOrConnectWithoutRoleInput[]
    upsert?: webmes_RolePermissionUpsertWithWhereUniqueWithoutRoleInput | webmes_RolePermissionUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: webmes_RolePermissionCreateManyRoleInputEnvelope
    set?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    disconnect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    delete?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    connect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    update?: webmes_RolePermissionUpdateWithWhereUniqueWithoutRoleInput | webmes_RolePermissionUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: webmes_RolePermissionUpdateManyWithWhereWithoutRoleInput | webmes_RolePermissionUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: webmes_RolePermissionScalarWhereInput | webmes_RolePermissionScalarWhereInput[]
  }

  export type webmes_UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<webmes_UserRoleCreateWithoutRoleInput, webmes_UserRoleUncheckedCreateWithoutRoleInput> | webmes_UserRoleCreateWithoutRoleInput[] | webmes_UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: webmes_UserRoleCreateOrConnectWithoutRoleInput | webmes_UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: webmes_UserRoleUpsertWithWhereUniqueWithoutRoleInput | webmes_UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: webmes_UserRoleCreateManyRoleInputEnvelope
    set?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    disconnect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    delete?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    connect?: webmes_UserRoleWhereUniqueInput | webmes_UserRoleWhereUniqueInput[]
    update?: webmes_UserRoleUpdateWithWhereUniqueWithoutRoleInput | webmes_UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: webmes_UserRoleUpdateManyWithWhereWithoutRoleInput | webmes_UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: webmes_UserRoleScalarWhereInput | webmes_UserRoleScalarWhereInput[]
  }

  export type webmes_RolePermissionCreateNestedManyWithoutPermissionInput = {
    create?: XOR<webmes_RolePermissionCreateWithoutPermissionInput, webmes_RolePermissionUncheckedCreateWithoutPermissionInput> | webmes_RolePermissionCreateWithoutPermissionInput[] | webmes_RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: webmes_RolePermissionCreateOrConnectWithoutPermissionInput | webmes_RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: webmes_RolePermissionCreateManyPermissionInputEnvelope
    connect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
  }

  export type webmes_RolePermissionUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<webmes_RolePermissionCreateWithoutPermissionInput, webmes_RolePermissionUncheckedCreateWithoutPermissionInput> | webmes_RolePermissionCreateWithoutPermissionInput[] | webmes_RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: webmes_RolePermissionCreateOrConnectWithoutPermissionInput | webmes_RolePermissionCreateOrConnectWithoutPermissionInput[]
    createMany?: webmes_RolePermissionCreateManyPermissionInputEnvelope
    connect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
  }

  export type webmes_RolePermissionUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<webmes_RolePermissionCreateWithoutPermissionInput, webmes_RolePermissionUncheckedCreateWithoutPermissionInput> | webmes_RolePermissionCreateWithoutPermissionInput[] | webmes_RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: webmes_RolePermissionCreateOrConnectWithoutPermissionInput | webmes_RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: webmes_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | webmes_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: webmes_RolePermissionCreateManyPermissionInputEnvelope
    set?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    disconnect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    delete?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    connect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    update?: webmes_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | webmes_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: webmes_RolePermissionUpdateManyWithWhereWithoutPermissionInput | webmes_RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: webmes_RolePermissionScalarWhereInput | webmes_RolePermissionScalarWhereInput[]
  }

  export type webmes_RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<webmes_RolePermissionCreateWithoutPermissionInput, webmes_RolePermissionUncheckedCreateWithoutPermissionInput> | webmes_RolePermissionCreateWithoutPermissionInput[] | webmes_RolePermissionUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: webmes_RolePermissionCreateOrConnectWithoutPermissionInput | webmes_RolePermissionCreateOrConnectWithoutPermissionInput[]
    upsert?: webmes_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput | webmes_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: webmes_RolePermissionCreateManyPermissionInputEnvelope
    set?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    disconnect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    delete?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    connect?: webmes_RolePermissionWhereUniqueInput | webmes_RolePermissionWhereUniqueInput[]
    update?: webmes_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput | webmes_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: webmes_RolePermissionUpdateManyWithWhereWithoutPermissionInput | webmes_RolePermissionUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: webmes_RolePermissionScalarWhereInput | webmes_RolePermissionScalarWhereInput[]
  }

  export type webmes_UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<webmes_UserCreateWithoutRolesInput, webmes_UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: webmes_UserCreateOrConnectWithoutRolesInput
    connect?: webmes_UserWhereUniqueInput
  }

  export type webmes_RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<webmes_RoleCreateWithoutUsersInput, webmes_RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: webmes_RoleCreateOrConnectWithoutUsersInput
    connect?: webmes_RoleWhereUniqueInput
  }

  export type webmes_UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<webmes_UserCreateWithoutRolesInput, webmes_UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: webmes_UserCreateOrConnectWithoutRolesInput
    upsert?: webmes_UserUpsertWithoutRolesInput
    connect?: webmes_UserWhereUniqueInput
    update?: XOR<XOR<webmes_UserUpdateToOneWithWhereWithoutRolesInput, webmes_UserUpdateWithoutRolesInput>, webmes_UserUncheckedUpdateWithoutRolesInput>
  }

  export type webmes_RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<webmes_RoleCreateWithoutUsersInput, webmes_RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: webmes_RoleCreateOrConnectWithoutUsersInput
    upsert?: webmes_RoleUpsertWithoutUsersInput
    connect?: webmes_RoleWhereUniqueInput
    update?: XOR<XOR<webmes_RoleUpdateToOneWithWhereWithoutUsersInput, webmes_RoleUpdateWithoutUsersInput>, webmes_RoleUncheckedUpdateWithoutUsersInput>
  }

  export type webmes_RoleCreateNestedOneWithoutPermissionsInput = {
    create?: XOR<webmes_RoleCreateWithoutPermissionsInput, webmes_RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: webmes_RoleCreateOrConnectWithoutPermissionsInput
    connect?: webmes_RoleWhereUniqueInput
  }

  export type webmes_PermissionCreateNestedOneWithoutRolesInput = {
    create?: XOR<webmes_PermissionCreateWithoutRolesInput, webmes_PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: webmes_PermissionCreateOrConnectWithoutRolesInput
    connect?: webmes_PermissionWhereUniqueInput
  }

  export type webmes_RoleUpdateOneRequiredWithoutPermissionsNestedInput = {
    create?: XOR<webmes_RoleCreateWithoutPermissionsInput, webmes_RoleUncheckedCreateWithoutPermissionsInput>
    connectOrCreate?: webmes_RoleCreateOrConnectWithoutPermissionsInput
    upsert?: webmes_RoleUpsertWithoutPermissionsInput
    connect?: webmes_RoleWhereUniqueInput
    update?: XOR<XOR<webmes_RoleUpdateToOneWithWhereWithoutPermissionsInput, webmes_RoleUpdateWithoutPermissionsInput>, webmes_RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type webmes_PermissionUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<webmes_PermissionCreateWithoutRolesInput, webmes_PermissionUncheckedCreateWithoutRolesInput>
    connectOrCreate?: webmes_PermissionCreateOrConnectWithoutRolesInput
    upsert?: webmes_PermissionUpsertWithoutRolesInput
    connect?: webmes_PermissionWhereUniqueInput
    update?: XOR<XOR<webmes_PermissionUpdateToOneWithWhereWithoutRolesInput, webmes_PermissionUpdateWithoutRolesInput>, webmes_PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type webmes_UserRoleCreateWithoutUserInput = {
    role: webmes_RoleCreateNestedOneWithoutUsersInput
  }

  export type webmes_UserRoleUncheckedCreateWithoutUserInput = {
    id?: number
    roleId: number
  }

  export type webmes_UserRoleCreateOrConnectWithoutUserInput = {
    where: webmes_UserRoleWhereUniqueInput
    create: XOR<webmes_UserRoleCreateWithoutUserInput, webmes_UserRoleUncheckedCreateWithoutUserInput>
  }

  export type webmes_UserRoleCreateManyUserInputEnvelope = {
    data: webmes_UserRoleCreateManyUserInput | webmes_UserRoleCreateManyUserInput[]
  }

  export type webmes_UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: webmes_UserRoleWhereUniqueInput
    update: XOR<webmes_UserRoleUpdateWithoutUserInput, webmes_UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<webmes_UserRoleCreateWithoutUserInput, webmes_UserRoleUncheckedCreateWithoutUserInput>
  }

  export type webmes_UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: webmes_UserRoleWhereUniqueInput
    data: XOR<webmes_UserRoleUpdateWithoutUserInput, webmes_UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type webmes_UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: webmes_UserRoleScalarWhereInput
    data: XOR<webmes_UserRoleUpdateManyMutationInput, webmes_UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type webmes_UserRoleScalarWhereInput = {
    AND?: webmes_UserRoleScalarWhereInput | webmes_UserRoleScalarWhereInput[]
    OR?: webmes_UserRoleScalarWhereInput[]
    NOT?: webmes_UserRoleScalarWhereInput | webmes_UserRoleScalarWhereInput[]
    id?: IntFilter<"webmes_UserRole"> | number
    userId?: IntFilter<"webmes_UserRole"> | number
    roleId?: IntFilter<"webmes_UserRole"> | number
  }

  export type webmes_RolePermissionCreateWithoutRoleInput = {
    permission: webmes_PermissionCreateNestedOneWithoutRolesInput
  }

  export type webmes_RolePermissionUncheckedCreateWithoutRoleInput = {
    id?: number
    permissionId: number
  }

  export type webmes_RolePermissionCreateOrConnectWithoutRoleInput = {
    where: webmes_RolePermissionWhereUniqueInput
    create: XOR<webmes_RolePermissionCreateWithoutRoleInput, webmes_RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type webmes_RolePermissionCreateManyRoleInputEnvelope = {
    data: webmes_RolePermissionCreateManyRoleInput | webmes_RolePermissionCreateManyRoleInput[]
  }

  export type webmes_UserRoleCreateWithoutRoleInput = {
    user: webmes_UserCreateNestedOneWithoutRolesInput
  }

  export type webmes_UserRoleUncheckedCreateWithoutRoleInput = {
    id?: number
    userId: number
  }

  export type webmes_UserRoleCreateOrConnectWithoutRoleInput = {
    where: webmes_UserRoleWhereUniqueInput
    create: XOR<webmes_UserRoleCreateWithoutRoleInput, webmes_UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type webmes_UserRoleCreateManyRoleInputEnvelope = {
    data: webmes_UserRoleCreateManyRoleInput | webmes_UserRoleCreateManyRoleInput[]
  }

  export type webmes_RolePermissionUpsertWithWhereUniqueWithoutRoleInput = {
    where: webmes_RolePermissionWhereUniqueInput
    update: XOR<webmes_RolePermissionUpdateWithoutRoleInput, webmes_RolePermissionUncheckedUpdateWithoutRoleInput>
    create: XOR<webmes_RolePermissionCreateWithoutRoleInput, webmes_RolePermissionUncheckedCreateWithoutRoleInput>
  }

  export type webmes_RolePermissionUpdateWithWhereUniqueWithoutRoleInput = {
    where: webmes_RolePermissionWhereUniqueInput
    data: XOR<webmes_RolePermissionUpdateWithoutRoleInput, webmes_RolePermissionUncheckedUpdateWithoutRoleInput>
  }

  export type webmes_RolePermissionUpdateManyWithWhereWithoutRoleInput = {
    where: webmes_RolePermissionScalarWhereInput
    data: XOR<webmes_RolePermissionUpdateManyMutationInput, webmes_RolePermissionUncheckedUpdateManyWithoutRoleInput>
  }

  export type webmes_RolePermissionScalarWhereInput = {
    AND?: webmes_RolePermissionScalarWhereInput | webmes_RolePermissionScalarWhereInput[]
    OR?: webmes_RolePermissionScalarWhereInput[]
    NOT?: webmes_RolePermissionScalarWhereInput | webmes_RolePermissionScalarWhereInput[]
    id?: IntFilter<"webmes_RolePermission"> | number
    roleId?: IntFilter<"webmes_RolePermission"> | number
    permissionId?: IntFilter<"webmes_RolePermission"> | number
  }

  export type webmes_UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: webmes_UserRoleWhereUniqueInput
    update: XOR<webmes_UserRoleUpdateWithoutRoleInput, webmes_UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<webmes_UserRoleCreateWithoutRoleInput, webmes_UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type webmes_UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: webmes_UserRoleWhereUniqueInput
    data: XOR<webmes_UserRoleUpdateWithoutRoleInput, webmes_UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type webmes_UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: webmes_UserRoleScalarWhereInput
    data: XOR<webmes_UserRoleUpdateManyMutationInput, webmes_UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type webmes_RolePermissionCreateWithoutPermissionInput = {
    role: webmes_RoleCreateNestedOneWithoutPermissionsInput
  }

  export type webmes_RolePermissionUncheckedCreateWithoutPermissionInput = {
    id?: number
    roleId: number
  }

  export type webmes_RolePermissionCreateOrConnectWithoutPermissionInput = {
    where: webmes_RolePermissionWhereUniqueInput
    create: XOR<webmes_RolePermissionCreateWithoutPermissionInput, webmes_RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type webmes_RolePermissionCreateManyPermissionInputEnvelope = {
    data: webmes_RolePermissionCreateManyPermissionInput | webmes_RolePermissionCreateManyPermissionInput[]
  }

  export type webmes_RolePermissionUpsertWithWhereUniqueWithoutPermissionInput = {
    where: webmes_RolePermissionWhereUniqueInput
    update: XOR<webmes_RolePermissionUpdateWithoutPermissionInput, webmes_RolePermissionUncheckedUpdateWithoutPermissionInput>
    create: XOR<webmes_RolePermissionCreateWithoutPermissionInput, webmes_RolePermissionUncheckedCreateWithoutPermissionInput>
  }

  export type webmes_RolePermissionUpdateWithWhereUniqueWithoutPermissionInput = {
    where: webmes_RolePermissionWhereUniqueInput
    data: XOR<webmes_RolePermissionUpdateWithoutPermissionInput, webmes_RolePermissionUncheckedUpdateWithoutPermissionInput>
  }

  export type webmes_RolePermissionUpdateManyWithWhereWithoutPermissionInput = {
    where: webmes_RolePermissionScalarWhereInput
    data: XOR<webmes_RolePermissionUpdateManyMutationInput, webmes_RolePermissionUncheckedUpdateManyWithoutPermissionInput>
  }

  export type webmes_UserCreateWithoutRolesInput = {
    username: string
    fullName: string
    email?: string | null
    department?: string | null
    plant?: string | null
    section?: string | null
    adDn?: string | null
    isActive?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type webmes_UserUncheckedCreateWithoutRolesInput = {
    id?: number
    username: string
    fullName: string
    email?: string | null
    department?: string | null
    plant?: string | null
    section?: string | null
    adDn?: string | null
    isActive?: boolean
    password?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type webmes_UserCreateOrConnectWithoutRolesInput = {
    where: webmes_UserWhereUniqueInput
    create: XOR<webmes_UserCreateWithoutRolesInput, webmes_UserUncheckedCreateWithoutRolesInput>
  }

  export type webmes_RoleCreateWithoutUsersInput = {
    name: string
    description?: string | null
    permissions?: webmes_RolePermissionCreateNestedManyWithoutRoleInput
  }

  export type webmes_RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
    permissions?: webmes_RolePermissionUncheckedCreateNestedManyWithoutRoleInput
  }

  export type webmes_RoleCreateOrConnectWithoutUsersInput = {
    where: webmes_RoleWhereUniqueInput
    create: XOR<webmes_RoleCreateWithoutUsersInput, webmes_RoleUncheckedCreateWithoutUsersInput>
  }

  export type webmes_UserUpsertWithoutRolesInput = {
    update: XOR<webmes_UserUpdateWithoutRolesInput, webmes_UserUncheckedUpdateWithoutRolesInput>
    create: XOR<webmes_UserCreateWithoutRolesInput, webmes_UserUncheckedCreateWithoutRolesInput>
    where?: webmes_UserWhereInput
  }

  export type webmes_UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: webmes_UserWhereInput
    data: XOR<webmes_UserUpdateWithoutRolesInput, webmes_UserUncheckedUpdateWithoutRolesInput>
  }

  export type webmes_UserUpdateWithoutRolesInput = {
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    adDn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webmes_UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    department?: NullableStringFieldUpdateOperationsInput | string | null
    plant?: NullableStringFieldUpdateOperationsInput | string | null
    section?: NullableStringFieldUpdateOperationsInput | string | null
    adDn?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type webmes_RoleUpsertWithoutUsersInput = {
    update: XOR<webmes_RoleUpdateWithoutUsersInput, webmes_RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<webmes_RoleCreateWithoutUsersInput, webmes_RoleUncheckedCreateWithoutUsersInput>
    where?: webmes_RoleWhereInput
  }

  export type webmes_RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: webmes_RoleWhereInput
    data: XOR<webmes_RoleUpdateWithoutUsersInput, webmes_RoleUncheckedUpdateWithoutUsersInput>
  }

  export type webmes_RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: webmes_RolePermissionUpdateManyWithoutRoleNestedInput
  }

  export type webmes_RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    permissions?: webmes_RolePermissionUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type webmes_RoleCreateWithoutPermissionsInput = {
    name: string
    description?: string | null
    users?: webmes_UserRoleCreateNestedManyWithoutRoleInput
  }

  export type webmes_RoleUncheckedCreateWithoutPermissionsInput = {
    id?: number
    name: string
    description?: string | null
    users?: webmes_UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type webmes_RoleCreateOrConnectWithoutPermissionsInput = {
    where: webmes_RoleWhereUniqueInput
    create: XOR<webmes_RoleCreateWithoutPermissionsInput, webmes_RoleUncheckedCreateWithoutPermissionsInput>
  }

  export type webmes_PermissionCreateWithoutRolesInput = {
    code: string
    module: string
    description?: string | null
  }

  export type webmes_PermissionUncheckedCreateWithoutRolesInput = {
    id?: number
    code: string
    module: string
    description?: string | null
  }

  export type webmes_PermissionCreateOrConnectWithoutRolesInput = {
    where: webmes_PermissionWhereUniqueInput
    create: XOR<webmes_PermissionCreateWithoutRolesInput, webmes_PermissionUncheckedCreateWithoutRolesInput>
  }

  export type webmes_RoleUpsertWithoutPermissionsInput = {
    update: XOR<webmes_RoleUpdateWithoutPermissionsInput, webmes_RoleUncheckedUpdateWithoutPermissionsInput>
    create: XOR<webmes_RoleCreateWithoutPermissionsInput, webmes_RoleUncheckedCreateWithoutPermissionsInput>
    where?: webmes_RoleWhereInput
  }

  export type webmes_RoleUpdateToOneWithWhereWithoutPermissionsInput = {
    where?: webmes_RoleWhereInput
    data: XOR<webmes_RoleUpdateWithoutPermissionsInput, webmes_RoleUncheckedUpdateWithoutPermissionsInput>
  }

  export type webmes_RoleUpdateWithoutPermissionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: webmes_UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type webmes_RoleUncheckedUpdateWithoutPermissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: webmes_UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type webmes_PermissionUpsertWithoutRolesInput = {
    update: XOR<webmes_PermissionUpdateWithoutRolesInput, webmes_PermissionUncheckedUpdateWithoutRolesInput>
    create: XOR<webmes_PermissionCreateWithoutRolesInput, webmes_PermissionUncheckedCreateWithoutRolesInput>
    where?: webmes_PermissionWhereInput
  }

  export type webmes_PermissionUpdateToOneWithWhereWithoutRolesInput = {
    where?: webmes_PermissionWhereInput
    data: XOR<webmes_PermissionUpdateWithoutRolesInput, webmes_PermissionUncheckedUpdateWithoutRolesInput>
  }

  export type webmes_PermissionUpdateWithoutRolesInput = {
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type webmes_PermissionUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type webmes_UserRoleCreateManyUserInput = {
    roleId: number
  }

  export type webmes_UserRoleUpdateWithoutUserInput = {
    role?: webmes_RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type webmes_UserRoleUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_UserRoleUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_RolePermissionCreateManyRoleInput = {
    permissionId: number
  }

  export type webmes_UserRoleCreateManyRoleInput = {
    userId: number
  }

  export type webmes_RolePermissionUpdateWithoutRoleInput = {
    permission?: webmes_PermissionUpdateOneRequiredWithoutRolesNestedInput
  }

  export type webmes_RolePermissionUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_RolePermissionUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    permissionId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_UserRoleUpdateWithoutRoleInput = {
    user?: webmes_UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type webmes_UserRoleUncheckedUpdateWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_UserRoleUncheckedUpdateManyWithoutRoleInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_RolePermissionCreateManyPermissionInput = {
    roleId: number
  }

  export type webmes_RolePermissionUpdateWithoutPermissionInput = {
    role?: webmes_RoleUpdateOneRequiredWithoutPermissionsNestedInput
  }

  export type webmes_RolePermissionUncheckedUpdateWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }

  export type webmes_RolePermissionUncheckedUpdateManyWithoutPermissionInput = {
    id?: IntFieldUpdateOperationsInput | number
    roleId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use Webmes_UserCountOutputTypeDefaultArgs instead
     */
    export type Webmes_UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Webmes_UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Webmes_RoleCountOutputTypeDefaultArgs instead
     */
    export type Webmes_RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Webmes_RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use Webmes_PermissionCountOutputTypeDefaultArgs instead
     */
    export type Webmes_PermissionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Webmes_PermissionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use webmes_UserDefaultArgs instead
     */
    export type webmes_UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = webmes_UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use webmes_RoleDefaultArgs instead
     */
    export type webmes_RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = webmes_RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use webmes_PermissionDefaultArgs instead
     */
    export type webmes_PermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = webmes_PermissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use webmes_UserRoleDefaultArgs instead
     */
    export type webmes_UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = webmes_UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use webmes_RolePermissionDefaultArgs instead
     */
    export type webmes_RolePermissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = webmes_RolePermissionDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}