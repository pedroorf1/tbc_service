
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Perfil
 * 
 */
export type Perfil = $Result.DefaultSelection<Prisma.$PerfilPayload>
/**
 * Model Addres
 * 
 */
export type Addres = $Result.DefaultSelection<Prisma.$AddresPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Knowledgespace
 * 
 */
export type Knowledgespace = $Result.DefaultSelection<Prisma.$KnowledgespacePayload>
/**
 * Model Degree
 * 
 */
export type Degree = $Result.DefaultSelection<Prisma.$DegreePayload>
/**
 * Model Skills
 * 
 */
export type Skills = $Result.DefaultSelection<Prisma.$SkillsPayload>
/**
 * Model Experiences
 * 
 */
export type Experiences = $Result.DefaultSelection<Prisma.$ExperiencesPayload>
/**
 * Model Projects
 * 
 */
export type Projects = $Result.DefaultSelection<Prisma.$ProjectsPayload>
/**
 * Model Refereces
 * 
 */
export type Refereces = $Result.DefaultSelection<Prisma.$ReferecesPayload>
/**
 * Model ReferecePrices
 * 
 */
export type ReferecePrices = $Result.DefaultSelection<Prisma.$ReferecePricesPayload>
/**
 * Model UserPoints
 * 
 */
export type UserPoints = $Result.DefaultSelection<Prisma.$UserPointsPayload>
/**
 * Model Feed
 * 
 */
export type Feed = $Result.DefaultSelection<Prisma.$FeedPayload>
/**
 * Model FeedComments
 * 
 */
export type FeedComments = $Result.DefaultSelection<Prisma.$FeedCommentsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<ExtArgs>;

  /**
   * `prisma.addres`: Exposes CRUD operations for the **Addres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addres
    * const addres = await prisma.addres.findMany()
    * ```
    */
  get addres(): Prisma.AddresDelegate<ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs>;

  /**
   * `prisma.knowledgespace`: Exposes CRUD operations for the **Knowledgespace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Knowledgespaces
    * const knowledgespaces = await prisma.knowledgespace.findMany()
    * ```
    */
  get knowledgespace(): Prisma.KnowledgespaceDelegate<ExtArgs>;

  /**
   * `prisma.degree`: Exposes CRUD operations for the **Degree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Degrees
    * const degrees = await prisma.degree.findMany()
    * ```
    */
  get degree(): Prisma.DegreeDelegate<ExtArgs>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **Skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.SkillsDelegate<ExtArgs>;

  /**
   * `prisma.experiences`: Exposes CRUD operations for the **Experiences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experiences.findMany()
    * ```
    */
  get experiences(): Prisma.ExperiencesDelegate<ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<ExtArgs>;

  /**
   * `prisma.refereces`: Exposes CRUD operations for the **Refereces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refereces
    * const refereces = await prisma.refereces.findMany()
    * ```
    */
  get refereces(): Prisma.ReferecesDelegate<ExtArgs>;

  /**
   * `prisma.referecePrices`: Exposes CRUD operations for the **ReferecePrices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferecePrices
    * const referecePrices = await prisma.referecePrices.findMany()
    * ```
    */
  get referecePrices(): Prisma.ReferecePricesDelegate<ExtArgs>;

  /**
   * `prisma.userPoints`: Exposes CRUD operations for the **UserPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPoints
    * const userPoints = await prisma.userPoints.findMany()
    * ```
    */
  get userPoints(): Prisma.UserPointsDelegate<ExtArgs>;

  /**
   * `prisma.feed`: Exposes CRUD operations for the **Feed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feeds
    * const feeds = await prisma.feed.findMany()
    * ```
    */
  get feed(): Prisma.FeedDelegate<ExtArgs>;

  /**
   * `prisma.feedComments`: Exposes CRUD operations for the **FeedComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedComments
    * const feedComments = await prisma.feedComments.findMany()
    * ```
    */
  get feedComments(): Prisma.FeedCommentsDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.3.1
   * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    User: 'User',
    Perfil: 'Perfil',
    Addres: 'Addres',
    Contact: 'Contact',
    Knowledgespace: 'Knowledgespace',
    Degree: 'Degree',
    Skills: 'Skills',
    Experiences: 'Experiences',
    Projects: 'Projects',
    Refereces: 'Refereces',
    ReferecePrices: 'ReferecePrices',
    UserPoints: 'UserPoints',
    Feed: 'Feed',
    FeedComments: 'FeedComments'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'perfil' | 'addres' | 'contact' | 'knowledgespace' | 'degree' | 'skills' | 'experiences' | 'projects' | 'refereces' | 'referecePrices' | 'userPoints' | 'feed' | 'feedComments'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Perfil: {
        payload: Prisma.$PerfilPayload<ExtArgs>
        fields: Prisma.PerfilFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          deleteMany: {
            args: Prisma.PerfilDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PerfilUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PerfilUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PerfilPayload>
          }
          aggregate: {
            args: Prisma.PerfilAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePerfil>
          }
          groupBy: {
            args: Prisma.PerfilGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PerfilGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerfilCountArgs<ExtArgs>,
            result: $Utils.Optional<PerfilCountAggregateOutputType> | number
          }
        }
      }
      Addres: {
        payload: Prisma.$AddresPayload<ExtArgs>
        fields: Prisma.AddresFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddresFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddresFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload>
          }
          findFirst: {
            args: Prisma.AddresFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddresFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload>
          }
          findMany: {
            args: Prisma.AddresFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload>[]
          }
          create: {
            args: Prisma.AddresCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload>
          }
          createMany: {
            args: Prisma.AddresCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AddresDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload>
          }
          update: {
            args: Prisma.AddresUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload>
          }
          deleteMany: {
            args: Prisma.AddresDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AddresUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AddresUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AddresPayload>
          }
          aggregate: {
            args: Prisma.AddresAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAddres>
          }
          groupBy: {
            args: Prisma.AddresGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AddresGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddresCountArgs<ExtArgs>,
            result: $Utils.Optional<AddresCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>,
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Knowledgespace: {
        payload: Prisma.$KnowledgespacePayload<ExtArgs>
        fields: Prisma.KnowledgespaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.KnowledgespaceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgespaceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload>
          }
          findFirst: {
            args: Prisma.KnowledgespaceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgespaceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload>
          }
          findMany: {
            args: Prisma.KnowledgespaceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload>[]
          }
          create: {
            args: Prisma.KnowledgespaceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload>
          }
          createMany: {
            args: Prisma.KnowledgespaceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KnowledgespaceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload>
          }
          update: {
            args: Prisma.KnowledgespaceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload>
          }
          deleteMany: {
            args: Prisma.KnowledgespaceDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.KnowledgespaceUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.KnowledgespaceUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$KnowledgespacePayload>
          }
          aggregate: {
            args: Prisma.KnowledgespaceAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateKnowledgespace>
          }
          groupBy: {
            args: Prisma.KnowledgespaceGroupByArgs<ExtArgs>,
            result: $Utils.Optional<KnowledgespaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.KnowledgespaceCountArgs<ExtArgs>,
            result: $Utils.Optional<KnowledgespaceCountAggregateOutputType> | number
          }
        }
      }
      Degree: {
        payload: Prisma.$DegreePayload<ExtArgs>
        fields: Prisma.DegreeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DegreeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DegreeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          findFirst: {
            args: Prisma.DegreeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DegreeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          findMany: {
            args: Prisma.DegreeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>[]
          }
          create: {
            args: Prisma.DegreeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          createMany: {
            args: Prisma.DegreeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DegreeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          update: {
            args: Prisma.DegreeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          deleteMany: {
            args: Prisma.DegreeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.DegreeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.DegreeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$DegreePayload>
          }
          aggregate: {
            args: Prisma.DegreeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateDegree>
          }
          groupBy: {
            args: Prisma.DegreeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<DegreeGroupByOutputType>[]
          }
          count: {
            args: Prisma.DegreeCountArgs<ExtArgs>,
            result: $Utils.Optional<DegreeCountAggregateOutputType> | number
          }
        }
      }
      Skills: {
        payload: Prisma.$SkillsPayload<ExtArgs>
        fields: Prisma.SkillsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findFirst: {
            args: Prisma.SkillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          findMany: {
            args: Prisma.SkillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>[]
          }
          create: {
            args: Prisma.SkillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          createMany: {
            args: Prisma.SkillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SkillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          update: {
            args: Prisma.SkillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          deleteMany: {
            args: Prisma.SkillsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SkillsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SkillsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SkillsPayload>
          }
          aggregate: {
            args: Prisma.SkillsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSkills>
          }
          groupBy: {
            args: Prisma.SkillsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SkillsGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillsCountArgs<ExtArgs>,
            result: $Utils.Optional<SkillsCountAggregateOutputType> | number
          }
        }
      }
      Experiences: {
        payload: Prisma.$ExperiencesPayload<ExtArgs>
        fields: Prisma.ExperiencesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperiencesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperiencesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          findFirst: {
            args: Prisma.ExperiencesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperiencesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          findMany: {
            args: Prisma.ExperiencesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>[]
          }
          create: {
            args: Prisma.ExperiencesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          createMany: {
            args: Prisma.ExperiencesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExperiencesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          update: {
            args: Prisma.ExperiencesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          deleteMany: {
            args: Prisma.ExperiencesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ExperiencesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ExperiencesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ExperiencesPayload>
          }
          aggregate: {
            args: Prisma.ExperiencesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateExperiences>
          }
          groupBy: {
            args: Prisma.ExperiencesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ExperiencesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperiencesCountArgs<ExtArgs>,
            result: $Utils.Optional<ExperiencesCountAggregateOutputType> | number
          }
        }
      }
      Projects: {
        payload: Prisma.$ProjectsPayload<ExtArgs>
        fields: Prisma.ProjectsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          deleteMany: {
            args: Prisma.ProjectsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProjectsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProjectsPayload>
          }
          aggregate: {
            args: Prisma.ProjectsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProjects>
          }
          groupBy: {
            args: Prisma.ProjectsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectsCountArgs<ExtArgs>,
            result: $Utils.Optional<ProjectsCountAggregateOutputType> | number
          }
        }
      }
      Refereces: {
        payload: Prisma.$ReferecesPayload<ExtArgs>
        fields: Prisma.ReferecesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferecesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferecesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload>
          }
          findFirst: {
            args: Prisma.ReferecesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferecesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload>
          }
          findMany: {
            args: Prisma.ReferecesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload>[]
          }
          create: {
            args: Prisma.ReferecesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload>
          }
          createMany: {
            args: Prisma.ReferecesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReferecesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload>
          }
          update: {
            args: Prisma.ReferecesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload>
          }
          deleteMany: {
            args: Prisma.ReferecesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReferecesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReferecesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecesPayload>
          }
          aggregate: {
            args: Prisma.ReferecesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRefereces>
          }
          groupBy: {
            args: Prisma.ReferecesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReferecesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferecesCountArgs<ExtArgs>,
            result: $Utils.Optional<ReferecesCountAggregateOutputType> | number
          }
        }
      }
      ReferecePrices: {
        payload: Prisma.$ReferecePricesPayload<ExtArgs>
        fields: Prisma.ReferecePricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferecePricesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferecePricesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload>
          }
          findFirst: {
            args: Prisma.ReferecePricesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferecePricesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload>
          }
          findMany: {
            args: Prisma.ReferecePricesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload>[]
          }
          create: {
            args: Prisma.ReferecePricesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload>
          }
          createMany: {
            args: Prisma.ReferecePricesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReferecePricesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload>
          }
          update: {
            args: Prisma.ReferecePricesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload>
          }
          deleteMany: {
            args: Prisma.ReferecePricesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReferecePricesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReferecePricesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReferecePricesPayload>
          }
          aggregate: {
            args: Prisma.ReferecePricesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReferecePrices>
          }
          groupBy: {
            args: Prisma.ReferecePricesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReferecePricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferecePricesCountArgs<ExtArgs>,
            result: $Utils.Optional<ReferecePricesCountAggregateOutputType> | number
          }
        }
      }
      UserPoints: {
        payload: Prisma.$UserPointsPayload<ExtArgs>
        fields: Prisma.UserPointsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserPointsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPointsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload>
          }
          findFirst: {
            args: Prisma.UserPointsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPointsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload>
          }
          findMany: {
            args: Prisma.UserPointsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload>[]
          }
          create: {
            args: Prisma.UserPointsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload>
          }
          createMany: {
            args: Prisma.UserPointsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserPointsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload>
          }
          update: {
            args: Prisma.UserPointsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload>
          }
          deleteMany: {
            args: Prisma.UserPointsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserPointsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserPointsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPointsPayload>
          }
          aggregate: {
            args: Prisma.UserPointsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserPoints>
          }
          groupBy: {
            args: Prisma.UserPointsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserPointsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserPointsCountArgs<ExtArgs>,
            result: $Utils.Optional<UserPointsCountAggregateOutputType> | number
          }
        }
      }
      Feed: {
        payload: Prisma.$FeedPayload<ExtArgs>
        fields: Prisma.FeedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          findFirst: {
            args: Prisma.FeedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          findMany: {
            args: Prisma.FeedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>[]
          }
          create: {
            args: Prisma.FeedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          createMany: {
            args: Prisma.FeedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          update: {
            args: Prisma.FeedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          deleteMany: {
            args: Prisma.FeedDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeedUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeedUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedPayload>
          }
          aggregate: {
            args: Prisma.FeedAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeed>
          }
          groupBy: {
            args: Prisma.FeedGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeedGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedCountArgs<ExtArgs>,
            result: $Utils.Optional<FeedCountAggregateOutputType> | number
          }
        }
      }
      FeedComments: {
        payload: Prisma.$FeedCommentsPayload<ExtArgs>
        fields: Prisma.FeedCommentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FeedCommentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedCommentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload>
          }
          findFirst: {
            args: Prisma.FeedCommentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedCommentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload>
          }
          findMany: {
            args: Prisma.FeedCommentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload>[]
          }
          create: {
            args: Prisma.FeedCommentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload>
          }
          createMany: {
            args: Prisma.FeedCommentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeedCommentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload>
          }
          update: {
            args: Prisma.FeedCommentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload>
          }
          deleteMany: {
            args: Prisma.FeedCommentsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FeedCommentsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FeedCommentsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FeedCommentsPayload>
          }
          aggregate: {
            args: Prisma.FeedCommentsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFeedComments>
          }
          groupBy: {
            args: Prisma.FeedCommentsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FeedCommentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.FeedCommentsCountArgs<ExtArgs>,
            result: $Utils.Optional<FeedCommentsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    addres: number
    contact: number
    degree: number
    skills: number
    experiences: number
    projects: number
    referecePrices: number
    refereces: number
    userPoints: number
    feeds: number
    comments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    addres?: boolean | UserCountOutputTypeCountAddresArgs
    contact?: boolean | UserCountOutputTypeCountContactArgs
    degree?: boolean | UserCountOutputTypeCountDegreeArgs
    skills?: boolean | UserCountOutputTypeCountSkillsArgs
    experiences?: boolean | UserCountOutputTypeCountExperiencesArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    referecePrices?: boolean | UserCountOutputTypeCountReferecePricesArgs
    refereces?: boolean | UserCountOutputTypeCountReferecesArgs
    userPoints?: boolean | UserCountOutputTypeCountUserPointsArgs
    feeds?: boolean | UserCountOutputTypeCountFeedsArgs
    comments?: boolean | UserCountOutputTypeCountCommentsArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AddresWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDegreeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DegreeWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountExperiencesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExperiencesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferecePricesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReferecePricesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReferecesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReferecesWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserPointsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserPointsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFeedsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FeedWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCommentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FeedCommentsWhereInput
  }



  /**
   * Count Type KnowledgespaceCountOutputType
   */

  export type KnowledgespaceCountOutputType = {
    degree: number
  }

  export type KnowledgespaceCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    degree?: boolean | KnowledgespaceCountOutputTypeCountDegreeArgs
  }

  // Custom InputTypes

  /**
   * KnowledgespaceCountOutputType without action
   */
  export type KnowledgespaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the KnowledgespaceCountOutputType
     */
    select?: KnowledgespaceCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * KnowledgespaceCountOutputType without action
   */
  export type KnowledgespaceCountOutputTypeCountDegreeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DegreeWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: bigint | null
  }

  export type UserMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    password: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    password: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: bigint
    email: string
    password: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    perfil?: boolean | User$perfilArgs<ExtArgs>
    addres?: boolean | User$addresArgs<ExtArgs>
    contact?: boolean | User$contactArgs<ExtArgs>
    degree?: boolean | User$degreeArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    experiences?: boolean | User$experiencesArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    referecePrices?: boolean | User$referecePricesArgs<ExtArgs>
    refereces?: boolean | User$referecesArgs<ExtArgs>
    userPoints?: boolean | User$userPointsArgs<ExtArgs>
    feeds?: boolean | User$feedsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    perfil?: boolean | User$perfilArgs<ExtArgs>
    addres?: boolean | User$addresArgs<ExtArgs>
    contact?: boolean | User$contactArgs<ExtArgs>
    degree?: boolean | User$degreeArgs<ExtArgs>
    skills?: boolean | User$skillsArgs<ExtArgs>
    experiences?: boolean | User$experiencesArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    referecePrices?: boolean | User$referecePricesArgs<ExtArgs>
    refereces?: boolean | User$referecesArgs<ExtArgs>
    userPoints?: boolean | User$userPointsArgs<ExtArgs>
    feeds?: boolean | User$feedsArgs<ExtArgs>
    comments?: boolean | User$commentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      perfil: Prisma.$PerfilPayload<ExtArgs> | null
      addres: Prisma.$AddresPayload<ExtArgs>[]
      contact: Prisma.$ContactPayload<ExtArgs>[]
      degree: Prisma.$DegreePayload<ExtArgs>[]
      skills: Prisma.$SkillsPayload<ExtArgs>[]
      experiences: Prisma.$ExperiencesPayload<ExtArgs>[]
      projects: Prisma.$ProjectsPayload<ExtArgs>[]
      referecePrices: Prisma.$ReferecePricesPayload<ExtArgs>[]
      refereces: Prisma.$ReferecesPayload<ExtArgs>[]
      userPoints: Prisma.$UserPointsPayload<ExtArgs>[]
      feeds: Prisma.$FeedPayload<ExtArgs>[]
      comments: Prisma.$FeedCommentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      email: string
      password: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    perfil<T extends User$perfilArgs<ExtArgs> = {}>(args?: Subset<T, User$perfilArgs<ExtArgs>>): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    addres<T extends User$addresArgs<ExtArgs> = {}>(args?: Subset<T, User$addresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'findMany'> | Null>;

    contact<T extends User$contactArgs<ExtArgs> = {}>(args?: Subset<T, User$contactArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findMany'> | Null>;

    degree<T extends User$degreeArgs<ExtArgs> = {}>(args?: Subset<T, User$degreeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'findMany'> | Null>;

    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findMany'> | Null>;

    experiences<T extends User$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, User$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findMany'> | Null>;

    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findMany'> | Null>;

    referecePrices<T extends User$referecePricesArgs<ExtArgs> = {}>(args?: Subset<T, User$referecePricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'findMany'> | Null>;

    refereces<T extends User$referecesArgs<ExtArgs> = {}>(args?: Subset<T, User$referecesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'findMany'> | Null>;

    userPoints<T extends User$userPointsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'findMany'> | Null>;

    feeds<T extends User$feedsArgs<ExtArgs> = {}>(args?: Subset<T, User$feedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'findMany'> | Null>;

    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'BigInt'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.perfil
   */
  export type User$perfilArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    where?: PerfilWhereInput
  }


  /**
   * User.addres
   */
  export type User$addresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    where?: AddresWhereInput
    orderBy?: AddresOrderByWithRelationInput | AddresOrderByWithRelationInput[]
    cursor?: AddresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddresScalarFieldEnum | AddresScalarFieldEnum[]
  }


  /**
   * User.contact
   */
  export type User$contactArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * User.degree
   */
  export type User$degreeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    where?: DegreeWhereInput
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    cursor?: DegreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DegreeScalarFieldEnum | DegreeScalarFieldEnum[]
  }


  /**
   * User.skills
   */
  export type User$skillsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    cursor?: SkillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * User.experiences
   */
  export type User$experiencesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    where?: ExperiencesWhereInput
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    cursor?: ExperiencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExperiencesScalarFieldEnum | ExperiencesScalarFieldEnum[]
  }


  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * User.referecePrices
   */
  export type User$referecePricesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    where?: ReferecePricesWhereInput
    orderBy?: ReferecePricesOrderByWithRelationInput | ReferecePricesOrderByWithRelationInput[]
    cursor?: ReferecePricesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferecePricesScalarFieldEnum | ReferecePricesScalarFieldEnum[]
  }


  /**
   * User.refereces
   */
  export type User$referecesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    where?: ReferecesWhereInput
    orderBy?: ReferecesOrderByWithRelationInput | ReferecesOrderByWithRelationInput[]
    cursor?: ReferecesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReferecesScalarFieldEnum | ReferecesScalarFieldEnum[]
  }


  /**
   * User.userPoints
   */
  export type User$userPointsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    where?: UserPointsWhereInput
    orderBy?: UserPointsOrderByWithRelationInput | UserPointsOrderByWithRelationInput[]
    cursor?: UserPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserPointsScalarFieldEnum | UserPointsScalarFieldEnum[]
  }


  /**
   * User.feeds
   */
  export type User$feedsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    where?: FeedWhereInput
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    cursor?: FeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }


  /**
   * User.comments
   */
  export type User$commentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    where?: FeedCommentsWhereInput
    orderBy?: FeedCommentsOrderByWithRelationInput | FeedCommentsOrderByWithRelationInput[]
    cursor?: FeedCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FeedCommentsScalarFieldEnum | FeedCommentsScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Perfil
   */

  export type AggregatePerfil = {
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  export type PerfilAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type PerfilSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type PerfilMinAggregateOutputType = {
    id: bigint | null
    photo: string | null
    name: string | null
    secondname: string | null
    socialname: string | null
    birthday: Date | null
    userId: bigint | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: bigint | null
    photo: string | null
    name: string | null
    secondname: string | null
    socialname: string | null
    birthday: Date | null
    userId: bigint | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    photo: number
    name: number
    secondname: number
    socialname: number
    birthday: number
    userId: number
    _all: number
  }


  export type PerfilAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PerfilSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type PerfilMinAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    secondname?: true
    socialname?: true
    birthday?: true
    userId?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    secondname?: true
    socialname?: true
    birthday?: true
    userId?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    secondname?: true
    socialname?: true
    birthday?: true
    userId?: true
    _all?: true
  }

  export type PerfilAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfil to aggregate.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Perfils
    **/
    _count?: true | PerfilCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerfilAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerfilSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerfilMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerfilMaxAggregateInputType
  }

  export type GetPerfilAggregateType<T extends PerfilAggregateArgs> = {
        [P in keyof T & keyof AggregatePerfil]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerfil[P]>
      : GetScalarType<T[P], AggregatePerfil[P]>
  }




  export type PerfilGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PerfilWhereInput
    orderBy?: PerfilOrderByWithAggregationInput | PerfilOrderByWithAggregationInput[]
    by: PerfilScalarFieldEnum[] | PerfilScalarFieldEnum
    having?: PerfilScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerfilCountAggregateInputType | true
    _avg?: PerfilAvgAggregateInputType
    _sum?: PerfilSumAggregateInputType
    _min?: PerfilMinAggregateInputType
    _max?: PerfilMaxAggregateInputType
  }

  export type PerfilGroupByOutputType = {
    id: bigint
    photo: string | null
    name: string | null
    secondname: string | null
    socialname: string | null
    birthday: Date | null
    userId: bigint | null
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerfilGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerfilGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerfilGroupByOutputType[P]>
            : GetScalarType<T[P], PerfilGroupByOutputType[P]>
        }
      >
    >


  export type PerfilSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    photo?: boolean
    name?: boolean
    secondname?: boolean
    socialname?: boolean
    birthday?: boolean
    userId?: boolean
    user?: boolean | Perfil$userArgs<ExtArgs>
  }, ExtArgs["result"]["perfil"]>

  export type PerfilSelectScalar = {
    id?: boolean
    photo?: boolean
    name?: boolean
    secondname?: boolean
    socialname?: boolean
    birthday?: boolean
    userId?: boolean
  }

  export type PerfilInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Perfil$userArgs<ExtArgs>
  }


  export type $PerfilPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Perfil"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      photo: string | null
      name: string | null
      secondname: string | null
      socialname: string | null
      birthday: Date | null
      userId: bigint | null
    }, ExtArgs["result"]["perfil"]>
    composites: {}
  }


  type PerfilGetPayload<S extends boolean | null | undefined | PerfilDefaultArgs> = $Result.GetResult<Prisma.$PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PerfilFindManyArgs, 'select' | 'include'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Perfil'], meta: { name: 'Perfil' } }
    /**
     * Find zero or one Perfil that matches the filter.
     * @param {PerfilFindUniqueArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PerfilFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>
    ): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Perfil that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PerfilFindUniqueOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PerfilFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Perfil that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PerfilFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>
    ): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Perfil that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindFirstOrThrowArgs} args - Arguments to find a Perfil
     * @example
     * // Get one Perfil
     * const perfil = await prisma.perfil.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PerfilFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Perfils that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Perfils
     * const perfils = await prisma.perfil.findMany()
     * 
     * // Get first 10 Perfils
     * const perfils = await prisma.perfil.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perfilWithIdOnly = await prisma.perfil.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PerfilFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Perfil.
     * @param {PerfilCreateArgs} args - Arguments to create a Perfil.
     * @example
     * // Create one Perfil
     * const Perfil = await prisma.perfil.create({
     *   data: {
     *     // ... data to create a Perfil
     *   }
     * })
     * 
    **/
    create<T extends PerfilCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilCreateArgs<ExtArgs>>
    ): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Perfils.
     *     @param {PerfilCreateManyArgs} args - Arguments to create many Perfils.
     *     @example
     *     // Create many Perfils
     *     const perfil = await prisma.perfil.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PerfilCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Perfil.
     * @param {PerfilDeleteArgs} args - Arguments to delete one Perfil.
     * @example
     * // Delete one Perfil
     * const Perfil = await prisma.perfil.delete({
     *   where: {
     *     // ... filter to delete one Perfil
     *   }
     * })
     * 
    **/
    delete<T extends PerfilDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilDeleteArgs<ExtArgs>>
    ): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Perfil.
     * @param {PerfilUpdateArgs} args - Arguments to update one Perfil.
     * @example
     * // Update one Perfil
     * const perfil = await prisma.perfil.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PerfilUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilUpdateArgs<ExtArgs>>
    ): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Perfils.
     * @param {PerfilDeleteManyArgs} args - Arguments to filter Perfils to delete.
     * @example
     * // Delete a few Perfils
     * const { count } = await prisma.perfil.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PerfilDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PerfilDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Perfils
     * const perfil = await prisma.perfil.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PerfilUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Perfil.
     * @param {PerfilUpsertArgs} args - Arguments to update or create a Perfil.
     * @example
     * // Update or create a Perfil
     * const perfil = await prisma.perfil.upsert({
     *   create: {
     *     // ... data to create a Perfil
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Perfil we want to update
     *   }
     * })
    **/
    upsert<T extends PerfilUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PerfilUpsertArgs<ExtArgs>>
    ): Prisma__PerfilClient<$Result.GetResult<Prisma.$PerfilPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Perfils.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilCountArgs} args - Arguments to filter Perfils to count.
     * @example
     * // Count the number of Perfils
     * const count = await prisma.perfil.count({
     *   where: {
     *     // ... the filter for the Perfils we want to count
     *   }
     * })
    **/
    count<T extends PerfilCountArgs>(
      args?: Subset<T, PerfilCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerfilCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PerfilAggregateArgs>(args: Subset<T, PerfilAggregateArgs>): Prisma.PrismaPromise<GetPerfilAggregateType<T>>

    /**
     * Group by Perfil.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerfilGroupByArgs} args - Group by arguments.
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
      T extends PerfilGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerfilGroupByArgs['orderBy'] }
        : { orderBy?: PerfilGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PerfilGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerfilGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Perfil model
   */
  readonly fields: PerfilFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Perfil$userArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Perfil model
   */ 
  interface PerfilFieldRefs {
    readonly id: FieldRef<"Perfil", 'BigInt'>
    readonly photo: FieldRef<"Perfil", 'String'>
    readonly name: FieldRef<"Perfil", 'String'>
    readonly secondname: FieldRef<"Perfil", 'String'>
    readonly socialname: FieldRef<"Perfil", 'String'>
    readonly birthday: FieldRef<"Perfil", 'DateTime'>
    readonly userId: FieldRef<"Perfil", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Perfil findUnique
   */
  export type PerfilFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }


  /**
   * Perfil findUniqueOrThrow
   */
  export type PerfilFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where: PerfilWhereUniqueInput
  }


  /**
   * Perfil findFirst
   */
  export type PerfilFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }


  /**
   * Perfil findFirstOrThrow
   */
  export type PerfilFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfil to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Perfils.
     */
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }


  /**
   * Perfil findMany
   */
  export type PerfilFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter, which Perfils to fetch.
     */
    where?: PerfilWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Perfils to fetch.
     */
    orderBy?: PerfilOrderByWithRelationInput | PerfilOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Perfils.
     */
    cursor?: PerfilWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Perfils from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Perfils.
     */
    skip?: number
    distinct?: PerfilScalarFieldEnum | PerfilScalarFieldEnum[]
  }


  /**
   * Perfil create
   */
  export type PerfilCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to create a Perfil.
     */
    data?: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
  }


  /**
   * Perfil createMany
   */
  export type PerfilCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Perfils.
     */
    data: PerfilCreateManyInput | PerfilCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Perfil update
   */
  export type PerfilUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The data needed to update a Perfil.
     */
    data: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
    /**
     * Choose, which Perfil to update.
     */
    where: PerfilWhereUniqueInput
  }


  /**
   * Perfil updateMany
   */
  export type PerfilUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Perfils.
     */
    data: XOR<PerfilUpdateManyMutationInput, PerfilUncheckedUpdateManyInput>
    /**
     * Filter which Perfils to update
     */
    where?: PerfilWhereInput
  }


  /**
   * Perfil upsert
   */
  export type PerfilUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * The filter to search for the Perfil to update in case it exists.
     */
    where: PerfilWhereUniqueInput
    /**
     * In case the Perfil found by the `where` argument doesn't exist, create a new Perfil with this data.
     */
    create: XOR<PerfilCreateInput, PerfilUncheckedCreateInput>
    /**
     * In case the Perfil was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerfilUpdateInput, PerfilUncheckedUpdateInput>
  }


  /**
   * Perfil delete
   */
  export type PerfilDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
    /**
     * Filter which Perfil to delete.
     */
    where: PerfilWhereUniqueInput
  }


  /**
   * Perfil deleteMany
   */
  export type PerfilDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Perfils to delete
     */
    where?: PerfilWhereInput
  }


  /**
   * Perfil.user
   */
  export type Perfil$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Perfil without action
   */
  export type PerfilDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Perfil
     */
    select?: PerfilSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PerfilInclude<ExtArgs> | null
  }



  /**
   * Model Addres
   */

  export type AggregateAddres = {
    _count: AddresCountAggregateOutputType | null
    _avg: AddresAvgAggregateOutputType | null
    _sum: AddresSumAggregateOutputType | null
    _min: AddresMinAggregateOutputType | null
    _max: AddresMaxAggregateOutputType | null
  }

  export type AddresAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddresSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type AddresMinAggregateOutputType = {
    id: bigint | null
    address: string | null
    complement: string | null
    state: string | null
    country: string | null
    userId: bigint | null
  }

  export type AddresMaxAggregateOutputType = {
    id: bigint | null
    address: string | null
    complement: string | null
    state: string | null
    country: string | null
    userId: bigint | null
  }

  export type AddresCountAggregateOutputType = {
    id: number
    address: number
    complement: number
    state: number
    country: number
    userId: number
    _all: number
  }


  export type AddresAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddresSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddresMinAggregateInputType = {
    id?: true
    address?: true
    complement?: true
    state?: true
    country?: true
    userId?: true
  }

  export type AddresMaxAggregateInputType = {
    id?: true
    address?: true
    complement?: true
    state?: true
    country?: true
    userId?: true
  }

  export type AddresCountAggregateInputType = {
    id?: true
    address?: true
    complement?: true
    state?: true
    country?: true
    userId?: true
    _all?: true
  }

  export type AddresAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addres to aggregate.
     */
    where?: AddresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addres to fetch.
     */
    orderBy?: AddresOrderByWithRelationInput | AddresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addres
    **/
    _count?: true | AddresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddresMaxAggregateInputType
  }

  export type GetAddresAggregateType<T extends AddresAggregateArgs> = {
        [P in keyof T & keyof AggregateAddres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddres[P]>
      : GetScalarType<T[P], AggregateAddres[P]>
  }




  export type AddresGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AddresWhereInput
    orderBy?: AddresOrderByWithAggregationInput | AddresOrderByWithAggregationInput[]
    by: AddresScalarFieldEnum[] | AddresScalarFieldEnum
    having?: AddresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddresCountAggregateInputType | true
    _avg?: AddresAvgAggregateInputType
    _sum?: AddresSumAggregateInputType
    _min?: AddresMinAggregateInputType
    _max?: AddresMaxAggregateInputType
  }

  export type AddresGroupByOutputType = {
    id: bigint
    address: string | null
    complement: string | null
    state: string | null
    country: string | null
    userId: bigint | null
    _count: AddresCountAggregateOutputType | null
    _avg: AddresAvgAggregateOutputType | null
    _sum: AddresSumAggregateOutputType | null
    _min: AddresMinAggregateOutputType | null
    _max: AddresMaxAggregateOutputType | null
  }

  type GetAddresGroupByPayload<T extends AddresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddresGroupByOutputType[P]>
            : GetScalarType<T[P], AddresGroupByOutputType[P]>
        }
      >
    >


  export type AddresSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    address?: boolean
    complement?: boolean
    state?: boolean
    country?: boolean
    userId?: boolean
    user?: boolean | Addres$userArgs<ExtArgs>
  }, ExtArgs["result"]["addres"]>

  export type AddresSelectScalar = {
    id?: boolean
    address?: boolean
    complement?: boolean
    state?: boolean
    country?: boolean
    userId?: boolean
  }

  export type AddresInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Addres$userArgs<ExtArgs>
  }


  export type $AddresPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Addres"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      address: string | null
      complement: string | null
      state: string | null
      country: string | null
      userId: bigint | null
    }, ExtArgs["result"]["addres"]>
    composites: {}
  }


  type AddresGetPayload<S extends boolean | null | undefined | AddresDefaultArgs> = $Result.GetResult<Prisma.$AddresPayload, S>

  type AddresCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AddresFindManyArgs, 'select' | 'include'> & {
      select?: AddresCountAggregateInputType | true
    }

  export interface AddresDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Addres'], meta: { name: 'Addres' } }
    /**
     * Find zero or one Addres that matches the filter.
     * @param {AddresFindUniqueArgs} args - Arguments to find a Addres
     * @example
     * // Get one Addres
     * const addres = await prisma.addres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddresFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AddresFindUniqueArgs<ExtArgs>>
    ): Prisma__AddresClient<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Addres that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddresFindUniqueOrThrowArgs} args - Arguments to find a Addres
     * @example
     * // Get one Addres
     * const addres = await prisma.addres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddresFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddresFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AddresClient<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Addres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddresFindFirstArgs} args - Arguments to find a Addres
     * @example
     * // Get one Addres
     * const addres = await prisma.addres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddresFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AddresFindFirstArgs<ExtArgs>>
    ): Prisma__AddresClient<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Addres that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddresFindFirstOrThrowArgs} args - Arguments to find a Addres
     * @example
     * // Get one Addres
     * const addres = await prisma.addres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddresFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddresFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AddresClient<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Addres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addres
     * const addres = await prisma.addres.findMany()
     * 
     * // Get first 10 Addres
     * const addres = await prisma.addres.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addresWithIdOnly = await prisma.addres.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddresFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddresFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Addres.
     * @param {AddresCreateArgs} args - Arguments to create a Addres.
     * @example
     * // Create one Addres
     * const Addres = await prisma.addres.create({
     *   data: {
     *     // ... data to create a Addres
     *   }
     * })
     * 
    **/
    create<T extends AddresCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AddresCreateArgs<ExtArgs>>
    ): Prisma__AddresClient<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Addres.
     *     @param {AddresCreateManyArgs} args - Arguments to create many Addres.
     *     @example
     *     // Create many Addres
     *     const addres = await prisma.addres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddresCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddresCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Addres.
     * @param {AddresDeleteArgs} args - Arguments to delete one Addres.
     * @example
     * // Delete one Addres
     * const Addres = await prisma.addres.delete({
     *   where: {
     *     // ... filter to delete one Addres
     *   }
     * })
     * 
    **/
    delete<T extends AddresDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AddresDeleteArgs<ExtArgs>>
    ): Prisma__AddresClient<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Addres.
     * @param {AddresUpdateArgs} args - Arguments to update one Addres.
     * @example
     * // Update one Addres
     * const addres = await prisma.addres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddresUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AddresUpdateArgs<ExtArgs>>
    ): Prisma__AddresClient<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Addres.
     * @param {AddresDeleteManyArgs} args - Arguments to filter Addres to delete.
     * @example
     * // Delete a few Addres
     * const { count } = await prisma.addres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddresDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddresDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addres
     * const addres = await prisma.addres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddresUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AddresUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Addres.
     * @param {AddresUpsertArgs} args - Arguments to update or create a Addres.
     * @example
     * // Update or create a Addres
     * const addres = await prisma.addres.upsert({
     *   create: {
     *     // ... data to create a Addres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addres we want to update
     *   }
     * })
    **/
    upsert<T extends AddresUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AddresUpsertArgs<ExtArgs>>
    ): Prisma__AddresClient<$Result.GetResult<Prisma.$AddresPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Addres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddresCountArgs} args - Arguments to filter Addres to count.
     * @example
     * // Count the number of Addres
     * const count = await prisma.addres.count({
     *   where: {
     *     // ... the filter for the Addres we want to count
     *   }
     * })
    **/
    count<T extends AddresCountArgs>(
      args?: Subset<T, AddresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddresAggregateArgs>(args: Subset<T, AddresAggregateArgs>): Prisma.PrismaPromise<GetAddresAggregateType<T>>

    /**
     * Group by Addres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddresGroupByArgs} args - Group by arguments.
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
      T extends AddresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddresGroupByArgs['orderBy'] }
        : { orderBy?: AddresGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Addres model
   */
  readonly fields: AddresFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Addres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddresClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Addres$userArgs<ExtArgs> = {}>(args?: Subset<T, Addres$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Addres model
   */ 
  interface AddresFieldRefs {
    readonly id: FieldRef<"Addres", 'BigInt'>
    readonly address: FieldRef<"Addres", 'String'>
    readonly complement: FieldRef<"Addres", 'String'>
    readonly state: FieldRef<"Addres", 'String'>
    readonly country: FieldRef<"Addres", 'String'>
    readonly userId: FieldRef<"Addres", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Addres findUnique
   */
  export type AddresFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * Filter, which Addres to fetch.
     */
    where: AddresWhereUniqueInput
  }


  /**
   * Addres findUniqueOrThrow
   */
  export type AddresFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * Filter, which Addres to fetch.
     */
    where: AddresWhereUniqueInput
  }


  /**
   * Addres findFirst
   */
  export type AddresFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * Filter, which Addres to fetch.
     */
    where?: AddresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addres to fetch.
     */
    orderBy?: AddresOrderByWithRelationInput | AddresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addres.
     */
    cursor?: AddresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addres.
     */
    distinct?: AddresScalarFieldEnum | AddresScalarFieldEnum[]
  }


  /**
   * Addres findFirstOrThrow
   */
  export type AddresFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * Filter, which Addres to fetch.
     */
    where?: AddresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addres to fetch.
     */
    orderBy?: AddresOrderByWithRelationInput | AddresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addres.
     */
    cursor?: AddresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addres.
     */
    distinct?: AddresScalarFieldEnum | AddresScalarFieldEnum[]
  }


  /**
   * Addres findMany
   */
  export type AddresFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * Filter, which Addres to fetch.
     */
    where?: AddresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addres to fetch.
     */
    orderBy?: AddresOrderByWithRelationInput | AddresOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addres.
     */
    cursor?: AddresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addres.
     */
    skip?: number
    distinct?: AddresScalarFieldEnum | AddresScalarFieldEnum[]
  }


  /**
   * Addres create
   */
  export type AddresCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * The data needed to create a Addres.
     */
    data?: XOR<AddresCreateInput, AddresUncheckedCreateInput>
  }


  /**
   * Addres createMany
   */
  export type AddresCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addres.
     */
    data: AddresCreateManyInput | AddresCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Addres update
   */
  export type AddresUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * The data needed to update a Addres.
     */
    data: XOR<AddresUpdateInput, AddresUncheckedUpdateInput>
    /**
     * Choose, which Addres to update.
     */
    where: AddresWhereUniqueInput
  }


  /**
   * Addres updateMany
   */
  export type AddresUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addres.
     */
    data: XOR<AddresUpdateManyMutationInput, AddresUncheckedUpdateManyInput>
    /**
     * Filter which Addres to update
     */
    where?: AddresWhereInput
  }


  /**
   * Addres upsert
   */
  export type AddresUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * The filter to search for the Addres to update in case it exists.
     */
    where: AddresWhereUniqueInput
    /**
     * In case the Addres found by the `where` argument doesn't exist, create a new Addres with this data.
     */
    create: XOR<AddresCreateInput, AddresUncheckedCreateInput>
    /**
     * In case the Addres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddresUpdateInput, AddresUncheckedUpdateInput>
  }


  /**
   * Addres delete
   */
  export type AddresDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
    /**
     * Filter which Addres to delete.
     */
    where: AddresWhereUniqueInput
  }


  /**
   * Addres deleteMany
   */
  export type AddresDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addres to delete
     */
    where?: AddresWhereInput
  }


  /**
   * Addres.user
   */
  export type Addres$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Addres without action
   */
  export type AddresDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Addres
     */
    select?: AddresSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddresInclude<ExtArgs> | null
  }



  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ContactSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type ContactMinAggregateOutputType = {
    id: bigint | null
    email: string | null
    phone: string | null
    another: string | null
    userId: bigint | null
  }

  export type ContactMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    phone: string | null
    another: string | null
    userId: bigint | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    another: number
    userId: number
    _all: number
  }


  export type ContactAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ContactMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    another?: true
    userId?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    another?: true
    userId?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    another?: true
    userId?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContactAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContactSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _avg?: ContactAvgAggregateInputType
    _sum?: ContactSumAggregateInputType
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: bigint
    email: string | null
    phone: string | null
    another: string | null
    userId: bigint | null
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    another?: boolean
    userId?: boolean
    user?: boolean | Contact$userArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    another?: boolean
    userId?: boolean
  }

  export type ContactInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Contact$userArgs<ExtArgs>
  }


  export type $ContactPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      email: string | null
      phone: string | null
      another: string | null
      userId: bigint | null
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }


  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ContactFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Contact that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ContactFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ContactFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
    **/
    create<T extends ContactCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactCreateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Contacts.
     *     @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     *     @example
     *     // Create many Contacts
     *     const contact = await prisma.contact.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ContactCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
    **/
    delete<T extends ContactDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ContactUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ContactDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ContactUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
    **/
    upsert<T extends ContactUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>
    ): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Contact$userArgs<ExtArgs> = {}>(args?: Subset<T, Contact$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Contact model
   */ 
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'BigInt'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly another: FieldRef<"Contact", 'String'>
    readonly userId: FieldRef<"Contact", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }


  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data?: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }


  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
  }


  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }


  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }


  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
  }


  /**
   * Contact.user
   */
  export type Contact$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ContactInclude<ExtArgs> | null
  }



  /**
   * Model Knowledgespace
   */

  export type AggregateKnowledgespace = {
    _count: KnowledgespaceCountAggregateOutputType | null
    _avg: KnowledgespaceAvgAggregateOutputType | null
    _sum: KnowledgespaceSumAggregateOutputType | null
    _min: KnowledgespaceMinAggregateOutputType | null
    _max: KnowledgespaceMaxAggregateOutputType | null
  }

  export type KnowledgespaceAvgAggregateOutputType = {
    id: number | null
  }

  export type KnowledgespaceSumAggregateOutputType = {
    id: bigint | null
  }

  export type KnowledgespaceMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
  }

  export type KnowledgespaceMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
  }

  export type KnowledgespaceCountAggregateOutputType = {
    id: number
    code: number
    description: number
    _all: number
  }


  export type KnowledgespaceAvgAggregateInputType = {
    id?: true
  }

  export type KnowledgespaceSumAggregateInputType = {
    id?: true
  }

  export type KnowledgespaceMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
  }

  export type KnowledgespaceMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
  }

  export type KnowledgespaceCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    _all?: true
  }

  export type KnowledgespaceAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Knowledgespace to aggregate.
     */
    where?: KnowledgespaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledgespaces to fetch.
     */
    orderBy?: KnowledgespaceOrderByWithRelationInput | KnowledgespaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: KnowledgespaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledgespaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledgespaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Knowledgespaces
    **/
    _count?: true | KnowledgespaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: KnowledgespaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: KnowledgespaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: KnowledgespaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: KnowledgespaceMaxAggregateInputType
  }

  export type GetKnowledgespaceAggregateType<T extends KnowledgespaceAggregateArgs> = {
        [P in keyof T & keyof AggregateKnowledgespace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKnowledgespace[P]>
      : GetScalarType<T[P], AggregateKnowledgespace[P]>
  }




  export type KnowledgespaceGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: KnowledgespaceWhereInput
    orderBy?: KnowledgespaceOrderByWithAggregationInput | KnowledgespaceOrderByWithAggregationInput[]
    by: KnowledgespaceScalarFieldEnum[] | KnowledgespaceScalarFieldEnum
    having?: KnowledgespaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: KnowledgespaceCountAggregateInputType | true
    _avg?: KnowledgespaceAvgAggregateInputType
    _sum?: KnowledgespaceSumAggregateInputType
    _min?: KnowledgespaceMinAggregateInputType
    _max?: KnowledgespaceMaxAggregateInputType
  }

  export type KnowledgespaceGroupByOutputType = {
    id: bigint
    code: string | null
    description: string | null
    _count: KnowledgespaceCountAggregateOutputType | null
    _avg: KnowledgespaceAvgAggregateOutputType | null
    _sum: KnowledgespaceSumAggregateOutputType | null
    _min: KnowledgespaceMinAggregateOutputType | null
    _max: KnowledgespaceMaxAggregateOutputType | null
  }

  type GetKnowledgespaceGroupByPayload<T extends KnowledgespaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<KnowledgespaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof KnowledgespaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], KnowledgespaceGroupByOutputType[P]>
            : GetScalarType<T[P], KnowledgespaceGroupByOutputType[P]>
        }
      >
    >


  export type KnowledgespaceSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    degree?: boolean | Knowledgespace$degreeArgs<ExtArgs>
    _count?: boolean | KnowledgespaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgespace"]>

  export type KnowledgespaceSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
  }

  export type KnowledgespaceInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    degree?: boolean | Knowledgespace$degreeArgs<ExtArgs>
    _count?: boolean | KnowledgespaceCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $KnowledgespacePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Knowledgespace"
    objects: {
      degree: Prisma.$DegreePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      code: string | null
      description: string | null
    }, ExtArgs["result"]["knowledgespace"]>
    composites: {}
  }


  type KnowledgespaceGetPayload<S extends boolean | null | undefined | KnowledgespaceDefaultArgs> = $Result.GetResult<Prisma.$KnowledgespacePayload, S>

  type KnowledgespaceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<KnowledgespaceFindManyArgs, 'select' | 'include'> & {
      select?: KnowledgespaceCountAggregateInputType | true
    }

  export interface KnowledgespaceDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Knowledgespace'], meta: { name: 'Knowledgespace' } }
    /**
     * Find zero or one Knowledgespace that matches the filter.
     * @param {KnowledgespaceFindUniqueArgs} args - Arguments to find a Knowledgespace
     * @example
     * // Get one Knowledgespace
     * const knowledgespace = await prisma.knowledgespace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends KnowledgespaceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, KnowledgespaceFindUniqueArgs<ExtArgs>>
    ): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Knowledgespace that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {KnowledgespaceFindUniqueOrThrowArgs} args - Arguments to find a Knowledgespace
     * @example
     * // Get one Knowledgespace
     * const knowledgespace = await prisma.knowledgespace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends KnowledgespaceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KnowledgespaceFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Knowledgespace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgespaceFindFirstArgs} args - Arguments to find a Knowledgespace
     * @example
     * // Get one Knowledgespace
     * const knowledgespace = await prisma.knowledgespace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends KnowledgespaceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, KnowledgespaceFindFirstArgs<ExtArgs>>
    ): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Knowledgespace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgespaceFindFirstOrThrowArgs} args - Arguments to find a Knowledgespace
     * @example
     * // Get one Knowledgespace
     * const knowledgespace = await prisma.knowledgespace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends KnowledgespaceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, KnowledgespaceFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Knowledgespaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgespaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Knowledgespaces
     * const knowledgespaces = await prisma.knowledgespace.findMany()
     * 
     * // Get first 10 Knowledgespaces
     * const knowledgespaces = await prisma.knowledgespace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const knowledgespaceWithIdOnly = await prisma.knowledgespace.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends KnowledgespaceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KnowledgespaceFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Knowledgespace.
     * @param {KnowledgespaceCreateArgs} args - Arguments to create a Knowledgespace.
     * @example
     * // Create one Knowledgespace
     * const Knowledgespace = await prisma.knowledgespace.create({
     *   data: {
     *     // ... data to create a Knowledgespace
     *   }
     * })
     * 
    **/
    create<T extends KnowledgespaceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, KnowledgespaceCreateArgs<ExtArgs>>
    ): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Knowledgespaces.
     *     @param {KnowledgespaceCreateManyArgs} args - Arguments to create many Knowledgespaces.
     *     @example
     *     // Create many Knowledgespaces
     *     const knowledgespace = await prisma.knowledgespace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends KnowledgespaceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KnowledgespaceCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Knowledgespace.
     * @param {KnowledgespaceDeleteArgs} args - Arguments to delete one Knowledgespace.
     * @example
     * // Delete one Knowledgespace
     * const Knowledgespace = await prisma.knowledgespace.delete({
     *   where: {
     *     // ... filter to delete one Knowledgespace
     *   }
     * })
     * 
    **/
    delete<T extends KnowledgespaceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, KnowledgespaceDeleteArgs<ExtArgs>>
    ): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Knowledgespace.
     * @param {KnowledgespaceUpdateArgs} args - Arguments to update one Knowledgespace.
     * @example
     * // Update one Knowledgespace
     * const knowledgespace = await prisma.knowledgespace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends KnowledgespaceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, KnowledgespaceUpdateArgs<ExtArgs>>
    ): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Knowledgespaces.
     * @param {KnowledgespaceDeleteManyArgs} args - Arguments to filter Knowledgespaces to delete.
     * @example
     * // Delete a few Knowledgespaces
     * const { count } = await prisma.knowledgespace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends KnowledgespaceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, KnowledgespaceDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Knowledgespaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgespaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Knowledgespaces
     * const knowledgespace = await prisma.knowledgespace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends KnowledgespaceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, KnowledgespaceUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Knowledgespace.
     * @param {KnowledgespaceUpsertArgs} args - Arguments to update or create a Knowledgespace.
     * @example
     * // Update or create a Knowledgespace
     * const knowledgespace = await prisma.knowledgespace.upsert({
     *   create: {
     *     // ... data to create a Knowledgespace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Knowledgespace we want to update
     *   }
     * })
    **/
    upsert<T extends KnowledgespaceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, KnowledgespaceUpsertArgs<ExtArgs>>
    ): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Knowledgespaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgespaceCountArgs} args - Arguments to filter Knowledgespaces to count.
     * @example
     * // Count the number of Knowledgespaces
     * const count = await prisma.knowledgespace.count({
     *   where: {
     *     // ... the filter for the Knowledgespaces we want to count
     *   }
     * })
    **/
    count<T extends KnowledgespaceCountArgs>(
      args?: Subset<T, KnowledgespaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], KnowledgespaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Knowledgespace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgespaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends KnowledgespaceAggregateArgs>(args: Subset<T, KnowledgespaceAggregateArgs>): Prisma.PrismaPromise<GetKnowledgespaceAggregateType<T>>

    /**
     * Group by Knowledgespace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {KnowledgespaceGroupByArgs} args - Group by arguments.
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
      T extends KnowledgespaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: KnowledgespaceGroupByArgs['orderBy'] }
        : { orderBy?: KnowledgespaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, KnowledgespaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKnowledgespaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Knowledgespace model
   */
  readonly fields: KnowledgespaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Knowledgespace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__KnowledgespaceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    degree<T extends Knowledgespace$degreeArgs<ExtArgs> = {}>(args?: Subset<T, Knowledgespace$degreeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Knowledgespace model
   */ 
  interface KnowledgespaceFieldRefs {
    readonly id: FieldRef<"Knowledgespace", 'BigInt'>
    readonly code: FieldRef<"Knowledgespace", 'String'>
    readonly description: FieldRef<"Knowledgespace", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Knowledgespace findUnique
   */
  export type KnowledgespaceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * Filter, which Knowledgespace to fetch.
     */
    where: KnowledgespaceWhereUniqueInput
  }


  /**
   * Knowledgespace findUniqueOrThrow
   */
  export type KnowledgespaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * Filter, which Knowledgespace to fetch.
     */
    where: KnowledgespaceWhereUniqueInput
  }


  /**
   * Knowledgespace findFirst
   */
  export type KnowledgespaceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * Filter, which Knowledgespace to fetch.
     */
    where?: KnowledgespaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledgespaces to fetch.
     */
    orderBy?: KnowledgespaceOrderByWithRelationInput | KnowledgespaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Knowledgespaces.
     */
    cursor?: KnowledgespaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledgespaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledgespaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Knowledgespaces.
     */
    distinct?: KnowledgespaceScalarFieldEnum | KnowledgespaceScalarFieldEnum[]
  }


  /**
   * Knowledgespace findFirstOrThrow
   */
  export type KnowledgespaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * Filter, which Knowledgespace to fetch.
     */
    where?: KnowledgespaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledgespaces to fetch.
     */
    orderBy?: KnowledgespaceOrderByWithRelationInput | KnowledgespaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Knowledgespaces.
     */
    cursor?: KnowledgespaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledgespaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledgespaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Knowledgespaces.
     */
    distinct?: KnowledgespaceScalarFieldEnum | KnowledgespaceScalarFieldEnum[]
  }


  /**
   * Knowledgespace findMany
   */
  export type KnowledgespaceFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * Filter, which Knowledgespaces to fetch.
     */
    where?: KnowledgespaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Knowledgespaces to fetch.
     */
    orderBy?: KnowledgespaceOrderByWithRelationInput | KnowledgespaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Knowledgespaces.
     */
    cursor?: KnowledgespaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Knowledgespaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Knowledgespaces.
     */
    skip?: number
    distinct?: KnowledgespaceScalarFieldEnum | KnowledgespaceScalarFieldEnum[]
  }


  /**
   * Knowledgespace create
   */
  export type KnowledgespaceCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Knowledgespace.
     */
    data?: XOR<KnowledgespaceCreateInput, KnowledgespaceUncheckedCreateInput>
  }


  /**
   * Knowledgespace createMany
   */
  export type KnowledgespaceCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Knowledgespaces.
     */
    data: KnowledgespaceCreateManyInput | KnowledgespaceCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Knowledgespace update
   */
  export type KnowledgespaceUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Knowledgespace.
     */
    data: XOR<KnowledgespaceUpdateInput, KnowledgespaceUncheckedUpdateInput>
    /**
     * Choose, which Knowledgespace to update.
     */
    where: KnowledgespaceWhereUniqueInput
  }


  /**
   * Knowledgespace updateMany
   */
  export type KnowledgespaceUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Knowledgespaces.
     */
    data: XOR<KnowledgespaceUpdateManyMutationInput, KnowledgespaceUncheckedUpdateManyInput>
    /**
     * Filter which Knowledgespaces to update
     */
    where?: KnowledgespaceWhereInput
  }


  /**
   * Knowledgespace upsert
   */
  export type KnowledgespaceUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Knowledgespace to update in case it exists.
     */
    where: KnowledgespaceWhereUniqueInput
    /**
     * In case the Knowledgespace found by the `where` argument doesn't exist, create a new Knowledgespace with this data.
     */
    create: XOR<KnowledgespaceCreateInput, KnowledgespaceUncheckedCreateInput>
    /**
     * In case the Knowledgespace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<KnowledgespaceUpdateInput, KnowledgespaceUncheckedUpdateInput>
  }


  /**
   * Knowledgespace delete
   */
  export type KnowledgespaceDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    /**
     * Filter which Knowledgespace to delete.
     */
    where: KnowledgespaceWhereUniqueInput
  }


  /**
   * Knowledgespace deleteMany
   */
  export type KnowledgespaceDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Knowledgespaces to delete
     */
    where?: KnowledgespaceWhereInput
  }


  /**
   * Knowledgespace.degree
   */
  export type Knowledgespace$degreeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    where?: DegreeWhereInput
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    cursor?: DegreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DegreeScalarFieldEnum | DegreeScalarFieldEnum[]
  }


  /**
   * Knowledgespace without action
   */
  export type KnowledgespaceDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
  }



  /**
   * Model Degree
   */

  export type AggregateDegree = {
    _count: DegreeCountAggregateOutputType | null
    _avg: DegreeAvgAggregateOutputType | null
    _sum: DegreeSumAggregateOutputType | null
    _min: DegreeMinAggregateOutputType | null
    _max: DegreeMaxAggregateOutputType | null
  }

  export type DegreeAvgAggregateOutputType = {
    id: number | null
    KnowledgespaceId: number | null
    userId: number | null
  }

  export type DegreeSumAggregateOutputType = {
    id: bigint | null
    KnowledgespaceId: bigint | null
    userId: bigint | null
  }

  export type DegreeMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
    KnowledgespaceId: bigint | null
    userId: bigint | null
  }

  export type DegreeMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
    KnowledgespaceId: bigint | null
    userId: bigint | null
  }

  export type DegreeCountAggregateOutputType = {
    id: number
    code: number
    description: number
    KnowledgespaceId: number
    userId: number
    _all: number
  }


  export type DegreeAvgAggregateInputType = {
    id?: true
    KnowledgespaceId?: true
    userId?: true
  }

  export type DegreeSumAggregateInputType = {
    id?: true
    KnowledgespaceId?: true
    userId?: true
  }

  export type DegreeMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    KnowledgespaceId?: true
    userId?: true
  }

  export type DegreeMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    KnowledgespaceId?: true
    userId?: true
  }

  export type DegreeCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    KnowledgespaceId?: true
    userId?: true
    _all?: true
  }

  export type DegreeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Degree to aggregate.
     */
    where?: DegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Degrees to fetch.
     */
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Degrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Degrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Degrees
    **/
    _count?: true | DegreeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DegreeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DegreeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DegreeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DegreeMaxAggregateInputType
  }

  export type GetDegreeAggregateType<T extends DegreeAggregateArgs> = {
        [P in keyof T & keyof AggregateDegree]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDegree[P]>
      : GetScalarType<T[P], AggregateDegree[P]>
  }




  export type DegreeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: DegreeWhereInput
    orderBy?: DegreeOrderByWithAggregationInput | DegreeOrderByWithAggregationInput[]
    by: DegreeScalarFieldEnum[] | DegreeScalarFieldEnum
    having?: DegreeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DegreeCountAggregateInputType | true
    _avg?: DegreeAvgAggregateInputType
    _sum?: DegreeSumAggregateInputType
    _min?: DegreeMinAggregateInputType
    _max?: DegreeMaxAggregateInputType
  }

  export type DegreeGroupByOutputType = {
    id: bigint
    code: string | null
    description: string | null
    KnowledgespaceId: bigint | null
    userId: bigint | null
    _count: DegreeCountAggregateOutputType | null
    _avg: DegreeAvgAggregateOutputType | null
    _sum: DegreeSumAggregateOutputType | null
    _min: DegreeMinAggregateOutputType | null
    _max: DegreeMaxAggregateOutputType | null
  }

  type GetDegreeGroupByPayload<T extends DegreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DegreeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DegreeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DegreeGroupByOutputType[P]>
            : GetScalarType<T[P], DegreeGroupByOutputType[P]>
        }
      >
    >


  export type DegreeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    KnowledgespaceId?: boolean
    userId?: boolean
    Knowledgespace?: boolean | Degree$KnowledgespaceArgs<ExtArgs>
    user?: boolean | Degree$userArgs<ExtArgs>
  }, ExtArgs["result"]["degree"]>

  export type DegreeSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    KnowledgespaceId?: boolean
    userId?: boolean
  }

  export type DegreeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Knowledgespace?: boolean | Degree$KnowledgespaceArgs<ExtArgs>
    user?: boolean | Degree$userArgs<ExtArgs>
  }


  export type $DegreePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Degree"
    objects: {
      Knowledgespace: Prisma.$KnowledgespacePayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      code: string | null
      description: string | null
      KnowledgespaceId: bigint | null
      userId: bigint | null
    }, ExtArgs["result"]["degree"]>
    composites: {}
  }


  type DegreeGetPayload<S extends boolean | null | undefined | DegreeDefaultArgs> = $Result.GetResult<Prisma.$DegreePayload, S>

  type DegreeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DegreeFindManyArgs, 'select' | 'include'> & {
      select?: DegreeCountAggregateInputType | true
    }

  export interface DegreeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Degree'], meta: { name: 'Degree' } }
    /**
     * Find zero or one Degree that matches the filter.
     * @param {DegreeFindUniqueArgs} args - Arguments to find a Degree
     * @example
     * // Get one Degree
     * const degree = await prisma.degree.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DegreeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, DegreeFindUniqueArgs<ExtArgs>>
    ): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Degree that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DegreeFindUniqueOrThrowArgs} args - Arguments to find a Degree
     * @example
     * // Get one Degree
     * const degree = await prisma.degree.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DegreeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DegreeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Degree that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeFindFirstArgs} args - Arguments to find a Degree
     * @example
     * // Get one Degree
     * const degree = await prisma.degree.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DegreeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, DegreeFindFirstArgs<ExtArgs>>
    ): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Degree that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeFindFirstOrThrowArgs} args - Arguments to find a Degree
     * @example
     * // Get one Degree
     * const degree = await prisma.degree.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DegreeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, DegreeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Degrees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Degrees
     * const degrees = await prisma.degree.findMany()
     * 
     * // Get first 10 Degrees
     * const degrees = await prisma.degree.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const degreeWithIdOnly = await prisma.degree.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DegreeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DegreeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Degree.
     * @param {DegreeCreateArgs} args - Arguments to create a Degree.
     * @example
     * // Create one Degree
     * const Degree = await prisma.degree.create({
     *   data: {
     *     // ... data to create a Degree
     *   }
     * })
     * 
    **/
    create<T extends DegreeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, DegreeCreateArgs<ExtArgs>>
    ): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Degrees.
     *     @param {DegreeCreateManyArgs} args - Arguments to create many Degrees.
     *     @example
     *     // Create many Degrees
     *     const degree = await prisma.degree.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DegreeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DegreeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Degree.
     * @param {DegreeDeleteArgs} args - Arguments to delete one Degree.
     * @example
     * // Delete one Degree
     * const Degree = await prisma.degree.delete({
     *   where: {
     *     // ... filter to delete one Degree
     *   }
     * })
     * 
    **/
    delete<T extends DegreeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, DegreeDeleteArgs<ExtArgs>>
    ): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Degree.
     * @param {DegreeUpdateArgs} args - Arguments to update one Degree.
     * @example
     * // Update one Degree
     * const degree = await prisma.degree.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DegreeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, DegreeUpdateArgs<ExtArgs>>
    ): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Degrees.
     * @param {DegreeDeleteManyArgs} args - Arguments to filter Degrees to delete.
     * @example
     * // Delete a few Degrees
     * const { count } = await prisma.degree.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DegreeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, DegreeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Degrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Degrees
     * const degree = await prisma.degree.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DegreeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, DegreeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Degree.
     * @param {DegreeUpsertArgs} args - Arguments to update or create a Degree.
     * @example
     * // Update or create a Degree
     * const degree = await prisma.degree.upsert({
     *   create: {
     *     // ... data to create a Degree
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Degree we want to update
     *   }
     * })
    **/
    upsert<T extends DegreeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, DegreeUpsertArgs<ExtArgs>>
    ): Prisma__DegreeClient<$Result.GetResult<Prisma.$DegreePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Degrees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeCountArgs} args - Arguments to filter Degrees to count.
     * @example
     * // Count the number of Degrees
     * const count = await prisma.degree.count({
     *   where: {
     *     // ... the filter for the Degrees we want to count
     *   }
     * })
    **/
    count<T extends DegreeCountArgs>(
      args?: Subset<T, DegreeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DegreeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Degree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DegreeAggregateArgs>(args: Subset<T, DegreeAggregateArgs>): Prisma.PrismaPromise<GetDegreeAggregateType<T>>

    /**
     * Group by Degree.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DegreeGroupByArgs} args - Group by arguments.
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
      T extends DegreeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DegreeGroupByArgs['orderBy'] }
        : { orderBy?: DegreeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DegreeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDegreeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Degree model
   */
  readonly fields: DegreeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Degree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DegreeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Knowledgespace<T extends Degree$KnowledgespaceArgs<ExtArgs> = {}>(args?: Subset<T, Degree$KnowledgespaceArgs<ExtArgs>>): Prisma__KnowledgespaceClient<$Result.GetResult<Prisma.$KnowledgespacePayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    user<T extends Degree$userArgs<ExtArgs> = {}>(args?: Subset<T, Degree$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Degree model
   */ 
  interface DegreeFieldRefs {
    readonly id: FieldRef<"Degree", 'BigInt'>
    readonly code: FieldRef<"Degree", 'String'>
    readonly description: FieldRef<"Degree", 'String'>
    readonly KnowledgespaceId: FieldRef<"Degree", 'BigInt'>
    readonly userId: FieldRef<"Degree", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Degree findUnique
   */
  export type DegreeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degree to fetch.
     */
    where: DegreeWhereUniqueInput
  }


  /**
   * Degree findUniqueOrThrow
   */
  export type DegreeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degree to fetch.
     */
    where: DegreeWhereUniqueInput
  }


  /**
   * Degree findFirst
   */
  export type DegreeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degree to fetch.
     */
    where?: DegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Degrees to fetch.
     */
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Degrees.
     */
    cursor?: DegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Degrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Degrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Degrees.
     */
    distinct?: DegreeScalarFieldEnum | DegreeScalarFieldEnum[]
  }


  /**
   * Degree findFirstOrThrow
   */
  export type DegreeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degree to fetch.
     */
    where?: DegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Degrees to fetch.
     */
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Degrees.
     */
    cursor?: DegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Degrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Degrees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Degrees.
     */
    distinct?: DegreeScalarFieldEnum | DegreeScalarFieldEnum[]
  }


  /**
   * Degree findMany
   */
  export type DegreeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter, which Degrees to fetch.
     */
    where?: DegreeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Degrees to fetch.
     */
    orderBy?: DegreeOrderByWithRelationInput | DegreeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Degrees.
     */
    cursor?: DegreeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Degrees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Degrees.
     */
    skip?: number
    distinct?: DegreeScalarFieldEnum | DegreeScalarFieldEnum[]
  }


  /**
   * Degree create
   */
  export type DegreeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * The data needed to create a Degree.
     */
    data?: XOR<DegreeCreateInput, DegreeUncheckedCreateInput>
  }


  /**
   * Degree createMany
   */
  export type DegreeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Degrees.
     */
    data: DegreeCreateManyInput | DegreeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Degree update
   */
  export type DegreeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * The data needed to update a Degree.
     */
    data: XOR<DegreeUpdateInput, DegreeUncheckedUpdateInput>
    /**
     * Choose, which Degree to update.
     */
    where: DegreeWhereUniqueInput
  }


  /**
   * Degree updateMany
   */
  export type DegreeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Degrees.
     */
    data: XOR<DegreeUpdateManyMutationInput, DegreeUncheckedUpdateManyInput>
    /**
     * Filter which Degrees to update
     */
    where?: DegreeWhereInput
  }


  /**
   * Degree upsert
   */
  export type DegreeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * The filter to search for the Degree to update in case it exists.
     */
    where: DegreeWhereUniqueInput
    /**
     * In case the Degree found by the `where` argument doesn't exist, create a new Degree with this data.
     */
    create: XOR<DegreeCreateInput, DegreeUncheckedCreateInput>
    /**
     * In case the Degree was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DegreeUpdateInput, DegreeUncheckedUpdateInput>
  }


  /**
   * Degree delete
   */
  export type DegreeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
    /**
     * Filter which Degree to delete.
     */
    where: DegreeWhereUniqueInput
  }


  /**
   * Degree deleteMany
   */
  export type DegreeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Degrees to delete
     */
    where?: DegreeWhereInput
  }


  /**
   * Degree.Knowledgespace
   */
  export type Degree$KnowledgespaceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Knowledgespace
     */
    select?: KnowledgespaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: KnowledgespaceInclude<ExtArgs> | null
    where?: KnowledgespaceWhereInput
  }


  /**
   * Degree.user
   */
  export type Degree$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Degree without action
   */
  export type DegreeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Degree
     */
    select?: DegreeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DegreeInclude<ExtArgs> | null
  }



  /**
   * Model Skills
   */

  export type AggregateSkills = {
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  export type SkillsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type SkillsSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type SkillsMinAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
    userId: bigint | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
    userId: bigint | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    code: number
    description: number
    userId: number
    _all: number
  }


  export type SkillsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SkillsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type SkillsMinAggregateInputType = {
    id?: true
    code?: true
    description?: true
    userId?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    userId?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    userId?: true
    _all?: true
  }

  export type SkillsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to aggregate.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillsMaxAggregateInputType
  }

  export type GetSkillsAggregateType<T extends SkillsAggregateArgs> = {
        [P in keyof T & keyof AggregateSkills]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkills[P]>
      : GetScalarType<T[P], AggregateSkills[P]>
  }




  export type SkillsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SkillsWhereInput
    orderBy?: SkillsOrderByWithAggregationInput | SkillsOrderByWithAggregationInput[]
    by: SkillsScalarFieldEnum[] | SkillsScalarFieldEnum
    having?: SkillsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillsCountAggregateInputType | true
    _avg?: SkillsAvgAggregateInputType
    _sum?: SkillsSumAggregateInputType
    _min?: SkillsMinAggregateInputType
    _max?: SkillsMaxAggregateInputType
  }

  export type SkillsGroupByOutputType = {
    id: bigint
    code: string | null
    description: string | null
    userId: bigint | null
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends SkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillsGroupByOutputType[P]>
            : GetScalarType<T[P], SkillsGroupByOutputType[P]>
        }
      >
    >


  export type SkillsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    description?: boolean
    userId?: boolean
    user?: boolean | Skills$userArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    userId?: boolean
  }

  export type SkillsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Skills$userArgs<ExtArgs>
  }


  export type $SkillsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Skills"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      code: string | null
      description: string | null
      userId: bigint | null
    }, ExtArgs["result"]["skills"]>
    composites: {}
  }


  type SkillsGetPayload<S extends boolean | null | undefined | SkillsDefaultArgs> = $Result.GetResult<Prisma.$SkillsPayload, S>

  type SkillsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SkillsFindManyArgs, 'select' | 'include'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface SkillsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skills'], meta: { name: 'Skills' } }
    /**
     * Find zero or one Skills that matches the filter.
     * @param {SkillsFindUniqueArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends SkillsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsFindUniqueArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Skills that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SkillsFindUniqueOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SkillsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends SkillsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindFirstArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Skills that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindFirstOrThrowArgs} args - Arguments to find a Skills
     * @example
     * // Get one Skills
     * const skills = await prisma.skills.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends SkillsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skills.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skills.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillsWithIdOnly = await prisma.skills.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends SkillsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Skills.
     * @param {SkillsCreateArgs} args - Arguments to create a Skills.
     * @example
     * // Create one Skills
     * const Skills = await prisma.skills.create({
     *   data: {
     *     // ... data to create a Skills
     *   }
     * })
     * 
    **/
    create<T extends SkillsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsCreateArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Skills.
     *     @param {SkillsCreateManyArgs} args - Arguments to create many Skills.
     *     @example
     *     // Create many Skills
     *     const skills = await prisma.skills.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SkillsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skills.
     * @param {SkillsDeleteArgs} args - Arguments to delete one Skills.
     * @example
     * // Delete one Skills
     * const Skills = await prisma.skills.delete({
     *   where: {
     *     // ... filter to delete one Skills
     *   }
     * })
     * 
    **/
    delete<T extends SkillsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsDeleteArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Skills.
     * @param {SkillsUpdateArgs} args - Arguments to update one Skills.
     * @example
     * // Update one Skills
     * const skills = await prisma.skills.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends SkillsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpdateArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Skills.
     * @param {SkillsDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skills.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends SkillsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SkillsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skills = await prisma.skills.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends SkillsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skills.
     * @param {SkillsUpsertArgs} args - Arguments to update or create a Skills.
     * @example
     * // Update or create a Skills
     * const skills = await prisma.skills.upsert({
     *   create: {
     *     // ... data to create a Skills
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skills we want to update
     *   }
     * })
    **/
    upsert<T extends SkillsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SkillsUpsertArgs<ExtArgs>>
    ): Prisma__SkillsClient<$Result.GetResult<Prisma.$SkillsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skills.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillsCountArgs>(
      args?: Subset<T, SkillsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillsAggregateArgs>(args: Subset<T, SkillsAggregateArgs>): Prisma.PrismaPromise<GetSkillsAggregateType<T>>

    /**
     * Group by Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillsGroupByArgs} args - Group by arguments.
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
      T extends SkillsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillsGroupByArgs['orderBy'] }
        : { orderBy?: SkillsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skills model
   */
  readonly fields: SkillsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Skills$userArgs<ExtArgs> = {}>(args?: Subset<T, Skills$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Skills model
   */ 
  interface SkillsFieldRefs {
    readonly id: FieldRef<"Skills", 'BigInt'>
    readonly code: FieldRef<"Skills", 'String'>
    readonly description: FieldRef<"Skills", 'String'>
    readonly userId: FieldRef<"Skills", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Skills findUnique
   */
  export type SkillsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills findUniqueOrThrow
   */
  export type SkillsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills findFirst
   */
  export type SkillsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills findFirstOrThrow
   */
  export type SkillsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills findMany
   */
  export type SkillsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillsOrderByWithRelationInput | SkillsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillsScalarFieldEnum | SkillsScalarFieldEnum[]
  }


  /**
   * Skills create
   */
  export type SkillsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to create a Skills.
     */
    data?: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
  }


  /**
   * Skills createMany
   */
  export type SkillsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillsCreateManyInput | SkillsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Skills update
   */
  export type SkillsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The data needed to update a Skills.
     */
    data: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
    /**
     * Choose, which Skills to update.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills updateMany
   */
  export type SkillsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillsWhereInput
  }


  /**
   * Skills upsert
   */
  export type SkillsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * The filter to search for the Skills to update in case it exists.
     */
    where: SkillsWhereUniqueInput
    /**
     * In case the Skills found by the `where` argument doesn't exist, create a new Skills with this data.
     */
    create: XOR<SkillsCreateInput, SkillsUncheckedCreateInput>
    /**
     * In case the Skills was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillsUpdateInput, SkillsUncheckedUpdateInput>
  }


  /**
   * Skills delete
   */
  export type SkillsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
    /**
     * Filter which Skills to delete.
     */
    where: SkillsWhereUniqueInput
  }


  /**
   * Skills deleteMany
   */
  export type SkillsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillsWhereInput
  }


  /**
   * Skills.user
   */
  export type Skills$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Skills without action
   */
  export type SkillsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skills
     */
    select?: SkillsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SkillsInclude<ExtArgs> | null
  }



  /**
   * Model Experiences
   */

  export type AggregateExperiences = {
    _count: ExperiencesCountAggregateOutputType | null
    _avg: ExperiencesAvgAggregateOutputType | null
    _sum: ExperiencesSumAggregateOutputType | null
    _min: ExperiencesMinAggregateOutputType | null
    _max: ExperiencesMaxAggregateOutputType | null
  }

  export type ExperiencesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ExperiencesSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type ExperiencesMinAggregateOutputType = {
    id: bigint | null
    company: string | null
    start: Date | null
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
  }

  export type ExperiencesMaxAggregateOutputType = {
    id: bigint | null
    company: string | null
    start: Date | null
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
  }

  export type ExperiencesCountAggregateOutputType = {
    id: number
    company: number
    start: number
    end: number
    iscurrent: number
    userId: number
    _all: number
  }


  export type ExperiencesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ExperiencesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ExperiencesMinAggregateInputType = {
    id?: true
    company?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
  }

  export type ExperiencesMaxAggregateInputType = {
    id?: true
    company?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
  }

  export type ExperiencesCountAggregateInputType = {
    id?: true
    company?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
    _all?: true
  }

  export type ExperiencesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to aggregate.
     */
    where?: ExperiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperiencesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperiencesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperiencesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperiencesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperiencesMaxAggregateInputType
  }

  export type GetExperiencesAggregateType<T extends ExperiencesAggregateArgs> = {
        [P in keyof T & keyof AggregateExperiences]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperiences[P]>
      : GetScalarType<T[P], AggregateExperiences[P]>
  }




  export type ExperiencesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ExperiencesWhereInput
    orderBy?: ExperiencesOrderByWithAggregationInput | ExperiencesOrderByWithAggregationInput[]
    by: ExperiencesScalarFieldEnum[] | ExperiencesScalarFieldEnum
    having?: ExperiencesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperiencesCountAggregateInputType | true
    _avg?: ExperiencesAvgAggregateInputType
    _sum?: ExperiencesSumAggregateInputType
    _min?: ExperiencesMinAggregateInputType
    _max?: ExperiencesMaxAggregateInputType
  }

  export type ExperiencesGroupByOutputType = {
    id: bigint
    company: string
    start: Date
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
    _count: ExperiencesCountAggregateOutputType | null
    _avg: ExperiencesAvgAggregateOutputType | null
    _sum: ExperiencesSumAggregateOutputType | null
    _min: ExperiencesMinAggregateOutputType | null
    _max: ExperiencesMaxAggregateOutputType | null
  }

  type GetExperiencesGroupByPayload<T extends ExperiencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperiencesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperiencesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperiencesGroupByOutputType[P]>
            : GetScalarType<T[P], ExperiencesGroupByOutputType[P]>
        }
      >
    >


  export type ExperiencesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company?: boolean
    start?: boolean
    end?: boolean
    iscurrent?: boolean
    userId?: boolean
    user?: boolean | Experiences$userArgs<ExtArgs>
  }, ExtArgs["result"]["experiences"]>

  export type ExperiencesSelectScalar = {
    id?: boolean
    company?: boolean
    start?: boolean
    end?: boolean
    iscurrent?: boolean
    userId?: boolean
  }

  export type ExperiencesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Experiences$userArgs<ExtArgs>
  }


  export type $ExperiencesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Experiences"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      company: string
      start: Date
      end: Date | null
      iscurrent: boolean | null
      userId: bigint | null
    }, ExtArgs["result"]["experiences"]>
    composites: {}
  }


  type ExperiencesGetPayload<S extends boolean | null | undefined | ExperiencesDefaultArgs> = $Result.GetResult<Prisma.$ExperiencesPayload, S>

  type ExperiencesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ExperiencesFindManyArgs, 'select' | 'include'> & {
      select?: ExperiencesCountAggregateInputType | true
    }

  export interface ExperiencesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experiences'], meta: { name: 'Experiences' } }
    /**
     * Find zero or one Experiences that matches the filter.
     * @param {ExperiencesFindUniqueArgs} args - Arguments to find a Experiences
     * @example
     * // Get one Experiences
     * const experiences = await prisma.experiences.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ExperiencesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesFindUniqueArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Experiences that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ExperiencesFindUniqueOrThrowArgs} args - Arguments to find a Experiences
     * @example
     * // Get one Experiences
     * const experiences = await prisma.experiences.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ExperiencesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesFindFirstArgs} args - Arguments to find a Experiences
     * @example
     * // Get one Experiences
     * const experiences = await prisma.experiences.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ExperiencesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesFindFirstArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Experiences that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesFindFirstOrThrowArgs} args - Arguments to find a Experiences
     * @example
     * // Get one Experiences
     * const experiences = await prisma.experiences.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ExperiencesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experiences.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experiences.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experiencesWithIdOnly = await prisma.experiences.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ExperiencesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Experiences.
     * @param {ExperiencesCreateArgs} args - Arguments to create a Experiences.
     * @example
     * // Create one Experiences
     * const Experiences = await prisma.experiences.create({
     *   data: {
     *     // ... data to create a Experiences
     *   }
     * })
     * 
    **/
    create<T extends ExperiencesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesCreateArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Experiences.
     *     @param {ExperiencesCreateManyArgs} args - Arguments to create many Experiences.
     *     @example
     *     // Create many Experiences
     *     const experiences = await prisma.experiences.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ExperiencesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Experiences.
     * @param {ExperiencesDeleteArgs} args - Arguments to delete one Experiences.
     * @example
     * // Delete one Experiences
     * const Experiences = await prisma.experiences.delete({
     *   where: {
     *     // ... filter to delete one Experiences
     *   }
     * })
     * 
    **/
    delete<T extends ExperiencesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesDeleteArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Experiences.
     * @param {ExperiencesUpdateArgs} args - Arguments to update one Experiences.
     * @example
     * // Update one Experiences
     * const experiences = await prisma.experiences.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ExperiencesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesUpdateArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Experiences.
     * @param {ExperiencesDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experiences.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ExperiencesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ExperiencesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experiences = await prisma.experiences.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ExperiencesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Experiences.
     * @param {ExperiencesUpsertArgs} args - Arguments to update or create a Experiences.
     * @example
     * // Update or create a Experiences
     * const experiences = await prisma.experiences.upsert({
     *   create: {
     *     // ... data to create a Experiences
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experiences we want to update
     *   }
     * })
    **/
    upsert<T extends ExperiencesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ExperiencesUpsertArgs<ExtArgs>>
    ): Prisma__ExperiencesClient<$Result.GetResult<Prisma.$ExperiencesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experiences.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperiencesCountArgs>(
      args?: Subset<T, ExperiencesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperiencesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperiencesAggregateArgs>(args: Subset<T, ExperiencesAggregateArgs>): Prisma.PrismaPromise<GetExperiencesAggregateType<T>>

    /**
     * Group by Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperiencesGroupByArgs} args - Group by arguments.
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
      T extends ExperiencesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperiencesGroupByArgs['orderBy'] }
        : { orderBy?: ExperiencesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperiencesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperiencesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experiences model
   */
  readonly fields: ExperiencesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experiences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperiencesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Experiences$userArgs<ExtArgs> = {}>(args?: Subset<T, Experiences$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Experiences model
   */ 
  interface ExperiencesFieldRefs {
    readonly id: FieldRef<"Experiences", 'BigInt'>
    readonly company: FieldRef<"Experiences", 'String'>
    readonly start: FieldRef<"Experiences", 'DateTime'>
    readonly end: FieldRef<"Experiences", 'DateTime'>
    readonly iscurrent: FieldRef<"Experiences", 'Boolean'>
    readonly userId: FieldRef<"Experiences", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Experiences findUnique
   */
  export type ExperiencesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where: ExperiencesWhereUniqueInput
  }


  /**
   * Experiences findUniqueOrThrow
   */
  export type ExperiencesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where: ExperiencesWhereUniqueInput
  }


  /**
   * Experiences findFirst
   */
  export type ExperiencesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperiencesScalarFieldEnum | ExperiencesScalarFieldEnum[]
  }


  /**
   * Experiences findFirstOrThrow
   */
  export type ExperiencesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperiencesScalarFieldEnum | ExperiencesScalarFieldEnum[]
  }


  /**
   * Experiences findMany
   */
  export type ExperiencesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperiencesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperiencesOrderByWithRelationInput | ExperiencesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperiencesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperiencesScalarFieldEnum | ExperiencesScalarFieldEnum[]
  }


  /**
   * Experiences create
   */
  export type ExperiencesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * The data needed to create a Experiences.
     */
    data: XOR<ExperiencesCreateInput, ExperiencesUncheckedCreateInput>
  }


  /**
   * Experiences createMany
   */
  export type ExperiencesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperiencesCreateManyInput | ExperiencesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Experiences update
   */
  export type ExperiencesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * The data needed to update a Experiences.
     */
    data: XOR<ExperiencesUpdateInput, ExperiencesUncheckedUpdateInput>
    /**
     * Choose, which Experiences to update.
     */
    where: ExperiencesWhereUniqueInput
  }


  /**
   * Experiences updateMany
   */
  export type ExperiencesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperiencesUpdateManyMutationInput, ExperiencesUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperiencesWhereInput
  }


  /**
   * Experiences upsert
   */
  export type ExperiencesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * The filter to search for the Experiences to update in case it exists.
     */
    where: ExperiencesWhereUniqueInput
    /**
     * In case the Experiences found by the `where` argument doesn't exist, create a new Experiences with this data.
     */
    create: XOR<ExperiencesCreateInput, ExperiencesUncheckedCreateInput>
    /**
     * In case the Experiences was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperiencesUpdateInput, ExperiencesUncheckedUpdateInput>
  }


  /**
   * Experiences delete
   */
  export type ExperiencesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
    /**
     * Filter which Experiences to delete.
     */
    where: ExperiencesWhereUniqueInput
  }


  /**
   * Experiences deleteMany
   */
  export type ExperiencesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperiencesWhereInput
  }


  /**
   * Experiences.user
   */
  export type Experiences$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Experiences without action
   */
  export type ExperiencesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experiences
     */
    select?: ExperiencesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ExperiencesInclude<ExtArgs> | null
  }



  /**
   * Model Projects
   */

  export type AggregateProjects = {
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  export type ProjectsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ProjectsSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type ProjectsMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    start: Date | null
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    start: Date | null
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    start: number
    end: number
    iscurrent: number
    userId: number
    _all: number
  }


  export type ProjectsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ProjectsMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
    _all?: true
  }

  export type ProjectsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to aggregate.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectsMaxAggregateInputType
  }

  export type GetProjectsAggregateType<T extends ProjectsAggregateArgs> = {
        [P in keyof T & keyof AggregateProjects]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProjects[P]>
      : GetScalarType<T[P], AggregateProjects[P]>
  }




  export type ProjectsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ProjectsWhereInput
    orderBy?: ProjectsOrderByWithAggregationInput | ProjectsOrderByWithAggregationInput[]
    by: ProjectsScalarFieldEnum[] | ProjectsScalarFieldEnum
    having?: ProjectsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectsCountAggregateInputType | true
    _avg?: ProjectsAvgAggregateInputType
    _sum?: ProjectsSumAggregateInputType
    _min?: ProjectsMinAggregateInputType
    _max?: ProjectsMaxAggregateInputType
  }

  export type ProjectsGroupByOutputType = {
    id: bigint
    name: string
    description: string | null
    start: Date
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectsGroupByOutputType[P]>
        }
      >
    >


  export type ProjectsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    start?: boolean
    end?: boolean
    iscurrent?: boolean
    userId?: boolean
    user?: boolean | Projects$userArgs<ExtArgs>
  }, ExtArgs["result"]["projects"]>

  export type ProjectsSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    start?: boolean
    end?: boolean
    iscurrent?: boolean
    userId?: boolean
  }

  export type ProjectsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Projects$userArgs<ExtArgs>
  }


  export type $ProjectsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Projects"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      name: string
      description: string | null
      start: Date
      end: Date | null
      iscurrent: boolean | null
      userId: bigint | null
    }, ExtArgs["result"]["projects"]>
    composites: {}
  }


  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsDefaultArgs> = $Result.GetResult<Prisma.$ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProjectsFindManyArgs, 'select' | 'include'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Projects'], meta: { name: 'Projects' } }
    /**
     * Find zero or one Projects that matches the filter.
     * @param {ProjectsFindUniqueArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProjectsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Projects that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProjectsFindUniqueOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProjectsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProjectsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindFirstOrThrowArgs} args - Arguments to find a Projects
     * @example
     * // Get one Projects
     * const projects = await prisma.projects.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProjectsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.projects.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.projects.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectsWithIdOnly = await prisma.projects.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProjectsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Projects.
     * @param {ProjectsCreateArgs} args - Arguments to create a Projects.
     * @example
     * // Create one Projects
     * const Projects = await prisma.projects.create({
     *   data: {
     *     // ... data to create a Projects
     *   }
     * })
     * 
    **/
    create<T extends ProjectsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsCreateArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Projects.
     *     @param {ProjectsCreateManyArgs} args - Arguments to create many Projects.
     *     @example
     *     // Create many Projects
     *     const projects = await prisma.projects.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProjectsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Projects.
     * @param {ProjectsDeleteArgs} args - Arguments to delete one Projects.
     * @example
     * // Delete one Projects
     * const Projects = await prisma.projects.delete({
     *   where: {
     *     // ... filter to delete one Projects
     *   }
     * })
     * 
    **/
    delete<T extends ProjectsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsDeleteArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Projects.
     * @param {ProjectsUpdateArgs} args - Arguments to update one Projects.
     * @example
     * // Update one Projects
     * const projects = await prisma.projects.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProjectsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpdateArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Projects.
     * @param {ProjectsDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.projects.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProjectsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProjectsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const projects = await prisma.projects.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProjectsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Projects.
     * @param {ProjectsUpsertArgs} args - Arguments to update or create a Projects.
     * @example
     * // Update or create a Projects
     * const projects = await prisma.projects.upsert({
     *   create: {
     *     // ... data to create a Projects
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Projects we want to update
     *   }
     * })
    **/
    upsert<T extends ProjectsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProjectsUpsertArgs<ExtArgs>>
    ): Prisma__ProjectsClient<$Result.GetResult<Prisma.$ProjectsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.projects.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectsCountArgs>(
      args?: Subset<T, ProjectsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectsAggregateArgs>(args: Subset<T, ProjectsAggregateArgs>): Prisma.PrismaPromise<GetProjectsAggregateType<T>>

    /**
     * Group by Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectsGroupByArgs} args - Group by arguments.
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
      T extends ProjectsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectsGroupByArgs['orderBy'] }
        : { orderBy?: ProjectsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Projects model
   */
  readonly fields: ProjectsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Projects$userArgs<ExtArgs> = {}>(args?: Subset<T, Projects$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Projects model
   */ 
  interface ProjectsFieldRefs {
    readonly id: FieldRef<"Projects", 'BigInt'>
    readonly name: FieldRef<"Projects", 'String'>
    readonly description: FieldRef<"Projects", 'String'>
    readonly start: FieldRef<"Projects", 'DateTime'>
    readonly end: FieldRef<"Projects", 'DateTime'>
    readonly iscurrent: FieldRef<"Projects", 'Boolean'>
    readonly userId: FieldRef<"Projects", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Projects findUnique
   */
  export type ProjectsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects findUniqueOrThrow
   */
  export type ProjectsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects findFirst
   */
  export type ProjectsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects findFirstOrThrow
   */
  export type ProjectsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects findMany
   */
  export type ProjectsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectsOrderByWithRelationInput | ProjectsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectsScalarFieldEnum | ProjectsScalarFieldEnum[]
  }


  /**
   * Projects create
   */
  export type ProjectsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to create a Projects.
     */
    data: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
  }


  /**
   * Projects createMany
   */
  export type ProjectsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectsCreateManyInput | ProjectsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Projects update
   */
  export type ProjectsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The data needed to update a Projects.
     */
    data: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
    /**
     * Choose, which Projects to update.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects updateMany
   */
  export type ProjectsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectsWhereInput
  }


  /**
   * Projects upsert
   */
  export type ProjectsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * The filter to search for the Projects to update in case it exists.
     */
    where: ProjectsWhereUniqueInput
    /**
     * In case the Projects found by the `where` argument doesn't exist, create a new Projects with this data.
     */
    create: XOR<ProjectsCreateInput, ProjectsUncheckedCreateInput>
    /**
     * In case the Projects was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectsUpdateInput, ProjectsUncheckedUpdateInput>
  }


  /**
   * Projects delete
   */
  export type ProjectsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
    /**
     * Filter which Projects to delete.
     */
    where: ProjectsWhereUniqueInput
  }


  /**
   * Projects deleteMany
   */
  export type ProjectsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectsWhereInput
  }


  /**
   * Projects.user
   */
  export type Projects$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Projects without action
   */
  export type ProjectsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Projects
     */
    select?: ProjectsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProjectsInclude<ExtArgs> | null
  }



  /**
   * Model Refereces
   */

  export type AggregateRefereces = {
    _count: ReferecesCountAggregateOutputType | null
    _avg: ReferecesAvgAggregateOutputType | null
    _sum: ReferecesSumAggregateOutputType | null
    _min: ReferecesMinAggregateOutputType | null
    _max: ReferecesMaxAggregateOutputType | null
  }

  export type ReferecesAvgAggregateOutputType = {
    id: number | null
    value: number | null
    userId: number | null
  }

  export type ReferecesSumAggregateOutputType = {
    id: bigint | null
    value: number | null
    userId: bigint | null
  }

  export type ReferecesMinAggregateOutputType = {
    id: bigint | null
    description: string | null
    value: number | null
    userId: bigint | null
  }

  export type ReferecesMaxAggregateOutputType = {
    id: bigint | null
    description: string | null
    value: number | null
    userId: bigint | null
  }

  export type ReferecesCountAggregateOutputType = {
    id: number
    description: number
    value: number
    userId: number
    _all: number
  }


  export type ReferecesAvgAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type ReferecesSumAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type ReferecesMinAggregateInputType = {
    id?: true
    description?: true
    value?: true
    userId?: true
  }

  export type ReferecesMaxAggregateInputType = {
    id?: true
    description?: true
    value?: true
    userId?: true
  }

  export type ReferecesCountAggregateInputType = {
    id?: true
    description?: true
    value?: true
    userId?: true
    _all?: true
  }

  export type ReferecesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refereces to aggregate.
     */
    where?: ReferecesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refereces to fetch.
     */
    orderBy?: ReferecesOrderByWithRelationInput | ReferecesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferecesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refereces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refereces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Refereces
    **/
    _count?: true | ReferecesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferecesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferecesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferecesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferecesMaxAggregateInputType
  }

  export type GetReferecesAggregateType<T extends ReferecesAggregateArgs> = {
        [P in keyof T & keyof AggregateRefereces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRefereces[P]>
      : GetScalarType<T[P], AggregateRefereces[P]>
  }




  export type ReferecesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReferecesWhereInput
    orderBy?: ReferecesOrderByWithAggregationInput | ReferecesOrderByWithAggregationInput[]
    by: ReferecesScalarFieldEnum[] | ReferecesScalarFieldEnum
    having?: ReferecesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferecesCountAggregateInputType | true
    _avg?: ReferecesAvgAggregateInputType
    _sum?: ReferecesSumAggregateInputType
    _min?: ReferecesMinAggregateInputType
    _max?: ReferecesMaxAggregateInputType
  }

  export type ReferecesGroupByOutputType = {
    id: bigint
    description: string
    value: number
    userId: bigint | null
    _count: ReferecesCountAggregateOutputType | null
    _avg: ReferecesAvgAggregateOutputType | null
    _sum: ReferecesSumAggregateOutputType | null
    _min: ReferecesMinAggregateOutputType | null
    _max: ReferecesMaxAggregateOutputType | null
  }

  type GetReferecesGroupByPayload<T extends ReferecesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferecesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferecesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferecesGroupByOutputType[P]>
            : GetScalarType<T[P], ReferecesGroupByOutputType[P]>
        }
      >
    >


  export type ReferecesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | Refereces$userArgs<ExtArgs>
  }, ExtArgs["result"]["refereces"]>

  export type ReferecesSelectScalar = {
    id?: boolean
    description?: boolean
    value?: boolean
    userId?: boolean
  }

  export type ReferecesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Refereces$userArgs<ExtArgs>
  }


  export type $ReferecesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Refereces"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      description: string
      value: number
      userId: bigint | null
    }, ExtArgs["result"]["refereces"]>
    composites: {}
  }


  type ReferecesGetPayload<S extends boolean | null | undefined | ReferecesDefaultArgs> = $Result.GetResult<Prisma.$ReferecesPayload, S>

  type ReferecesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReferecesFindManyArgs, 'select' | 'include'> & {
      select?: ReferecesCountAggregateInputType | true
    }

  export interface ReferecesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Refereces'], meta: { name: 'Refereces' } }
    /**
     * Find zero or one Refereces that matches the filter.
     * @param {ReferecesFindUniqueArgs} args - Arguments to find a Refereces
     * @example
     * // Get one Refereces
     * const refereces = await prisma.refereces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReferecesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecesFindUniqueArgs<ExtArgs>>
    ): Prisma__ReferecesClient<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Refereces that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReferecesFindUniqueOrThrowArgs} args - Arguments to find a Refereces
     * @example
     * // Get one Refereces
     * const refereces = await prisma.refereces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReferecesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReferecesClient<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Refereces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecesFindFirstArgs} args - Arguments to find a Refereces
     * @example
     * // Get one Refereces
     * const refereces = await prisma.refereces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReferecesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecesFindFirstArgs<ExtArgs>>
    ): Prisma__ReferecesClient<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Refereces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecesFindFirstOrThrowArgs} args - Arguments to find a Refereces
     * @example
     * // Get one Refereces
     * const refereces = await prisma.refereces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReferecesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReferecesClient<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Refereces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Refereces
     * const refereces = await prisma.refereces.findMany()
     * 
     * // Get first 10 Refereces
     * const refereces = await prisma.refereces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referecesWithIdOnly = await prisma.refereces.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReferecesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Refereces.
     * @param {ReferecesCreateArgs} args - Arguments to create a Refereces.
     * @example
     * // Create one Refereces
     * const Refereces = await prisma.refereces.create({
     *   data: {
     *     // ... data to create a Refereces
     *   }
     * })
     * 
    **/
    create<T extends ReferecesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecesCreateArgs<ExtArgs>>
    ): Prisma__ReferecesClient<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Refereces.
     *     @param {ReferecesCreateManyArgs} args - Arguments to create many Refereces.
     *     @example
     *     // Create many Refereces
     *     const refereces = await prisma.refereces.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReferecesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Refereces.
     * @param {ReferecesDeleteArgs} args - Arguments to delete one Refereces.
     * @example
     * // Delete one Refereces
     * const Refereces = await prisma.refereces.delete({
     *   where: {
     *     // ... filter to delete one Refereces
     *   }
     * })
     * 
    **/
    delete<T extends ReferecesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecesDeleteArgs<ExtArgs>>
    ): Prisma__ReferecesClient<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Refereces.
     * @param {ReferecesUpdateArgs} args - Arguments to update one Refereces.
     * @example
     * // Update one Refereces
     * const refereces = await prisma.refereces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReferecesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecesUpdateArgs<ExtArgs>>
    ): Prisma__ReferecesClient<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Refereces.
     * @param {ReferecesDeleteManyArgs} args - Arguments to filter Refereces to delete.
     * @example
     * // Delete a few Refereces
     * const { count } = await prisma.refereces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReferecesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Refereces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Refereces
     * const refereces = await prisma.refereces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReferecesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Refereces.
     * @param {ReferecesUpsertArgs} args - Arguments to update or create a Refereces.
     * @example
     * // Update or create a Refereces
     * const refereces = await prisma.refereces.upsert({
     *   create: {
     *     // ... data to create a Refereces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Refereces we want to update
     *   }
     * })
    **/
    upsert<T extends ReferecesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecesUpsertArgs<ExtArgs>>
    ): Prisma__ReferecesClient<$Result.GetResult<Prisma.$ReferecesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Refereces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecesCountArgs} args - Arguments to filter Refereces to count.
     * @example
     * // Count the number of Refereces
     * const count = await prisma.refereces.count({
     *   where: {
     *     // ... the filter for the Refereces we want to count
     *   }
     * })
    **/
    count<T extends ReferecesCountArgs>(
      args?: Subset<T, ReferecesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferecesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Refereces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferecesAggregateArgs>(args: Subset<T, ReferecesAggregateArgs>): Prisma.PrismaPromise<GetReferecesAggregateType<T>>

    /**
     * Group by Refereces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecesGroupByArgs} args - Group by arguments.
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
      T extends ReferecesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferecesGroupByArgs['orderBy'] }
        : { orderBy?: ReferecesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferecesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferecesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Refereces model
   */
  readonly fields: ReferecesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Refereces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferecesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Refereces$userArgs<ExtArgs> = {}>(args?: Subset<T, Refereces$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Refereces model
   */ 
  interface ReferecesFieldRefs {
    readonly id: FieldRef<"Refereces", 'BigInt'>
    readonly description: FieldRef<"Refereces", 'String'>
    readonly value: FieldRef<"Refereces", 'Float'>
    readonly userId: FieldRef<"Refereces", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Refereces findUnique
   */
  export type ReferecesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * Filter, which Refereces to fetch.
     */
    where: ReferecesWhereUniqueInput
  }


  /**
   * Refereces findUniqueOrThrow
   */
  export type ReferecesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * Filter, which Refereces to fetch.
     */
    where: ReferecesWhereUniqueInput
  }


  /**
   * Refereces findFirst
   */
  export type ReferecesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * Filter, which Refereces to fetch.
     */
    where?: ReferecesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refereces to fetch.
     */
    orderBy?: ReferecesOrderByWithRelationInput | ReferecesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refereces.
     */
    cursor?: ReferecesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refereces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refereces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refereces.
     */
    distinct?: ReferecesScalarFieldEnum | ReferecesScalarFieldEnum[]
  }


  /**
   * Refereces findFirstOrThrow
   */
  export type ReferecesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * Filter, which Refereces to fetch.
     */
    where?: ReferecesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refereces to fetch.
     */
    orderBy?: ReferecesOrderByWithRelationInput | ReferecesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Refereces.
     */
    cursor?: ReferecesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refereces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refereces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Refereces.
     */
    distinct?: ReferecesScalarFieldEnum | ReferecesScalarFieldEnum[]
  }


  /**
   * Refereces findMany
   */
  export type ReferecesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * Filter, which Refereces to fetch.
     */
    where?: ReferecesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Refereces to fetch.
     */
    orderBy?: ReferecesOrderByWithRelationInput | ReferecesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Refereces.
     */
    cursor?: ReferecesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Refereces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Refereces.
     */
    skip?: number
    distinct?: ReferecesScalarFieldEnum | ReferecesScalarFieldEnum[]
  }


  /**
   * Refereces create
   */
  export type ReferecesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * The data needed to create a Refereces.
     */
    data: XOR<ReferecesCreateInput, ReferecesUncheckedCreateInput>
  }


  /**
   * Refereces createMany
   */
  export type ReferecesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Refereces.
     */
    data: ReferecesCreateManyInput | ReferecesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Refereces update
   */
  export type ReferecesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * The data needed to update a Refereces.
     */
    data: XOR<ReferecesUpdateInput, ReferecesUncheckedUpdateInput>
    /**
     * Choose, which Refereces to update.
     */
    where: ReferecesWhereUniqueInput
  }


  /**
   * Refereces updateMany
   */
  export type ReferecesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Refereces.
     */
    data: XOR<ReferecesUpdateManyMutationInput, ReferecesUncheckedUpdateManyInput>
    /**
     * Filter which Refereces to update
     */
    where?: ReferecesWhereInput
  }


  /**
   * Refereces upsert
   */
  export type ReferecesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * The filter to search for the Refereces to update in case it exists.
     */
    where: ReferecesWhereUniqueInput
    /**
     * In case the Refereces found by the `where` argument doesn't exist, create a new Refereces with this data.
     */
    create: XOR<ReferecesCreateInput, ReferecesUncheckedCreateInput>
    /**
     * In case the Refereces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferecesUpdateInput, ReferecesUncheckedUpdateInput>
  }


  /**
   * Refereces delete
   */
  export type ReferecesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
    /**
     * Filter which Refereces to delete.
     */
    where: ReferecesWhereUniqueInput
  }


  /**
   * Refereces deleteMany
   */
  export type ReferecesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Refereces to delete
     */
    where?: ReferecesWhereInput
  }


  /**
   * Refereces.user
   */
  export type Refereces$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Refereces without action
   */
  export type ReferecesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Refereces
     */
    select?: ReferecesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecesInclude<ExtArgs> | null
  }



  /**
   * Model ReferecePrices
   */

  export type AggregateReferecePrices = {
    _count: ReferecePricesCountAggregateOutputType | null
    _avg: ReferecePricesAvgAggregateOutputType | null
    _sum: ReferecePricesSumAggregateOutputType | null
    _min: ReferecePricesMinAggregateOutputType | null
    _max: ReferecePricesMaxAggregateOutputType | null
  }

  export type ReferecePricesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type ReferecePricesSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type ReferecePricesMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    contacts: string | null
    userId: bigint | null
  }

  export type ReferecePricesMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    contacts: string | null
    userId: bigint | null
  }

  export type ReferecePricesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    contacts: number
    userId: number
    _all: number
  }


  export type ReferecePricesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ReferecePricesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type ReferecePricesMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    contacts?: true
    userId?: true
  }

  export type ReferecePricesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    contacts?: true
    userId?: true
  }

  export type ReferecePricesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    contacts?: true
    userId?: true
    _all?: true
  }

  export type ReferecePricesAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferecePrices to aggregate.
     */
    where?: ReferecePricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferecePrices to fetch.
     */
    orderBy?: ReferecePricesOrderByWithRelationInput | ReferecePricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferecePricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferecePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferecePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferecePrices
    **/
    _count?: true | ReferecePricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferecePricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferecePricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferecePricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferecePricesMaxAggregateInputType
  }

  export type GetReferecePricesAggregateType<T extends ReferecePricesAggregateArgs> = {
        [P in keyof T & keyof AggregateReferecePrices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferecePrices[P]>
      : GetScalarType<T[P], AggregateReferecePrices[P]>
  }




  export type ReferecePricesGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: ReferecePricesWhereInput
    orderBy?: ReferecePricesOrderByWithAggregationInput | ReferecePricesOrderByWithAggregationInput[]
    by: ReferecePricesScalarFieldEnum[] | ReferecePricesScalarFieldEnum
    having?: ReferecePricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferecePricesCountAggregateInputType | true
    _avg?: ReferecePricesAvgAggregateInputType
    _sum?: ReferecePricesSumAggregateInputType
    _min?: ReferecePricesMinAggregateInputType
    _max?: ReferecePricesMaxAggregateInputType
  }

  export type ReferecePricesGroupByOutputType = {
    id: bigint
    name: string
    description: string
    contacts: string
    userId: bigint | null
    _count: ReferecePricesCountAggregateOutputType | null
    _avg: ReferecePricesAvgAggregateOutputType | null
    _sum: ReferecePricesSumAggregateOutputType | null
    _min: ReferecePricesMinAggregateOutputType | null
    _max: ReferecePricesMaxAggregateOutputType | null
  }

  type GetReferecePricesGroupByPayload<T extends ReferecePricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferecePricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferecePricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferecePricesGroupByOutputType[P]>
            : GetScalarType<T[P], ReferecePricesGroupByOutputType[P]>
        }
      >
    >


  export type ReferecePricesSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    contacts?: boolean
    userId?: boolean
    user?: boolean | ReferecePrices$userArgs<ExtArgs>
  }, ExtArgs["result"]["referecePrices"]>

  export type ReferecePricesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    contacts?: boolean
    userId?: boolean
  }

  export type ReferecePricesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | ReferecePrices$userArgs<ExtArgs>
  }


  export type $ReferecePricesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "ReferecePrices"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      name: string
      description: string
      contacts: string
      userId: bigint | null
    }, ExtArgs["result"]["referecePrices"]>
    composites: {}
  }


  type ReferecePricesGetPayload<S extends boolean | null | undefined | ReferecePricesDefaultArgs> = $Result.GetResult<Prisma.$ReferecePricesPayload, S>

  type ReferecePricesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReferecePricesFindManyArgs, 'select' | 'include'> & {
      select?: ReferecePricesCountAggregateInputType | true
    }

  export interface ReferecePricesDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferecePrices'], meta: { name: 'ReferecePrices' } }
    /**
     * Find zero or one ReferecePrices that matches the filter.
     * @param {ReferecePricesFindUniqueArgs} args - Arguments to find a ReferecePrices
     * @example
     * // Get one ReferecePrices
     * const referecePrices = await prisma.referecePrices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReferecePricesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecePricesFindUniqueArgs<ExtArgs>>
    ): Prisma__ReferecePricesClient<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ReferecePrices that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReferecePricesFindUniqueOrThrowArgs} args - Arguments to find a ReferecePrices
     * @example
     * // Get one ReferecePrices
     * const referecePrices = await prisma.referecePrices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReferecePricesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecePricesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReferecePricesClient<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ReferecePrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecePricesFindFirstArgs} args - Arguments to find a ReferecePrices
     * @example
     * // Get one ReferecePrices
     * const referecePrices = await prisma.referecePrices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReferecePricesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecePricesFindFirstArgs<ExtArgs>>
    ): Prisma__ReferecePricesClient<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ReferecePrices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecePricesFindFirstOrThrowArgs} args - Arguments to find a ReferecePrices
     * @example
     * // Get one ReferecePrices
     * const referecePrices = await prisma.referecePrices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReferecePricesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecePricesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReferecePricesClient<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ReferecePrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecePricesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferecePrices
     * const referecePrices = await prisma.referecePrices.findMany()
     * 
     * // Get first 10 ReferecePrices
     * const referecePrices = await prisma.referecePrices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referecePricesWithIdOnly = await prisma.referecePrices.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReferecePricesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecePricesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ReferecePrices.
     * @param {ReferecePricesCreateArgs} args - Arguments to create a ReferecePrices.
     * @example
     * // Create one ReferecePrices
     * const ReferecePrices = await prisma.referecePrices.create({
     *   data: {
     *     // ... data to create a ReferecePrices
     *   }
     * })
     * 
    **/
    create<T extends ReferecePricesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecePricesCreateArgs<ExtArgs>>
    ): Prisma__ReferecePricesClient<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ReferecePrices.
     *     @param {ReferecePricesCreateManyArgs} args - Arguments to create many ReferecePrices.
     *     @example
     *     // Create many ReferecePrices
     *     const referecePrices = await prisma.referecePrices.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReferecePricesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecePricesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ReferecePrices.
     * @param {ReferecePricesDeleteArgs} args - Arguments to delete one ReferecePrices.
     * @example
     * // Delete one ReferecePrices
     * const ReferecePrices = await prisma.referecePrices.delete({
     *   where: {
     *     // ... filter to delete one ReferecePrices
     *   }
     * })
     * 
    **/
    delete<T extends ReferecePricesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecePricesDeleteArgs<ExtArgs>>
    ): Prisma__ReferecePricesClient<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ReferecePrices.
     * @param {ReferecePricesUpdateArgs} args - Arguments to update one ReferecePrices.
     * @example
     * // Update one ReferecePrices
     * const referecePrices = await prisma.referecePrices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReferecePricesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecePricesUpdateArgs<ExtArgs>>
    ): Prisma__ReferecePricesClient<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ReferecePrices.
     * @param {ReferecePricesDeleteManyArgs} args - Arguments to filter ReferecePrices to delete.
     * @example
     * // Delete a few ReferecePrices
     * const { count } = await prisma.referecePrices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReferecePricesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReferecePricesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferecePrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecePricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferecePrices
     * const referecePrices = await prisma.referecePrices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReferecePricesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecePricesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReferecePrices.
     * @param {ReferecePricesUpsertArgs} args - Arguments to update or create a ReferecePrices.
     * @example
     * // Update or create a ReferecePrices
     * const referecePrices = await prisma.referecePrices.upsert({
     *   create: {
     *     // ... data to create a ReferecePrices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferecePrices we want to update
     *   }
     * })
    **/
    upsert<T extends ReferecePricesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReferecePricesUpsertArgs<ExtArgs>>
    ): Prisma__ReferecePricesClient<$Result.GetResult<Prisma.$ReferecePricesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of ReferecePrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecePricesCountArgs} args - Arguments to filter ReferecePrices to count.
     * @example
     * // Count the number of ReferecePrices
     * const count = await prisma.referecePrices.count({
     *   where: {
     *     // ... the filter for the ReferecePrices we want to count
     *   }
     * })
    **/
    count<T extends ReferecePricesCountArgs>(
      args?: Subset<T, ReferecePricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferecePricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferecePrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecePricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferecePricesAggregateArgs>(args: Subset<T, ReferecePricesAggregateArgs>): Prisma.PrismaPromise<GetReferecePricesAggregateType<T>>

    /**
     * Group by ReferecePrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferecePricesGroupByArgs} args - Group by arguments.
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
      T extends ReferecePricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferecePricesGroupByArgs['orderBy'] }
        : { orderBy?: ReferecePricesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferecePricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferecePricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferecePrices model
   */
  readonly fields: ReferecePricesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferecePrices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferecePricesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends ReferecePrices$userArgs<ExtArgs> = {}>(args?: Subset<T, ReferecePrices$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ReferecePrices model
   */ 
  interface ReferecePricesFieldRefs {
    readonly id: FieldRef<"ReferecePrices", 'BigInt'>
    readonly name: FieldRef<"ReferecePrices", 'String'>
    readonly description: FieldRef<"ReferecePrices", 'String'>
    readonly contacts: FieldRef<"ReferecePrices", 'String'>
    readonly userId: FieldRef<"ReferecePrices", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * ReferecePrices findUnique
   */
  export type ReferecePricesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * Filter, which ReferecePrices to fetch.
     */
    where: ReferecePricesWhereUniqueInput
  }


  /**
   * ReferecePrices findUniqueOrThrow
   */
  export type ReferecePricesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * Filter, which ReferecePrices to fetch.
     */
    where: ReferecePricesWhereUniqueInput
  }


  /**
   * ReferecePrices findFirst
   */
  export type ReferecePricesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * Filter, which ReferecePrices to fetch.
     */
    where?: ReferecePricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferecePrices to fetch.
     */
    orderBy?: ReferecePricesOrderByWithRelationInput | ReferecePricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferecePrices.
     */
    cursor?: ReferecePricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferecePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferecePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferecePrices.
     */
    distinct?: ReferecePricesScalarFieldEnum | ReferecePricesScalarFieldEnum[]
  }


  /**
   * ReferecePrices findFirstOrThrow
   */
  export type ReferecePricesFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * Filter, which ReferecePrices to fetch.
     */
    where?: ReferecePricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferecePrices to fetch.
     */
    orderBy?: ReferecePricesOrderByWithRelationInput | ReferecePricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferecePrices.
     */
    cursor?: ReferecePricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferecePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferecePrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferecePrices.
     */
    distinct?: ReferecePricesScalarFieldEnum | ReferecePricesScalarFieldEnum[]
  }


  /**
   * ReferecePrices findMany
   */
  export type ReferecePricesFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * Filter, which ReferecePrices to fetch.
     */
    where?: ReferecePricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferecePrices to fetch.
     */
    orderBy?: ReferecePricesOrderByWithRelationInput | ReferecePricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferecePrices.
     */
    cursor?: ReferecePricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferecePrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferecePrices.
     */
    skip?: number
    distinct?: ReferecePricesScalarFieldEnum | ReferecePricesScalarFieldEnum[]
  }


  /**
   * ReferecePrices create
   */
  export type ReferecePricesCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * The data needed to create a ReferecePrices.
     */
    data: XOR<ReferecePricesCreateInput, ReferecePricesUncheckedCreateInput>
  }


  /**
   * ReferecePrices createMany
   */
  export type ReferecePricesCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferecePrices.
     */
    data: ReferecePricesCreateManyInput | ReferecePricesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * ReferecePrices update
   */
  export type ReferecePricesUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * The data needed to update a ReferecePrices.
     */
    data: XOR<ReferecePricesUpdateInput, ReferecePricesUncheckedUpdateInput>
    /**
     * Choose, which ReferecePrices to update.
     */
    where: ReferecePricesWhereUniqueInput
  }


  /**
   * ReferecePrices updateMany
   */
  export type ReferecePricesUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferecePrices.
     */
    data: XOR<ReferecePricesUpdateManyMutationInput, ReferecePricesUncheckedUpdateManyInput>
    /**
     * Filter which ReferecePrices to update
     */
    where?: ReferecePricesWhereInput
  }


  /**
   * ReferecePrices upsert
   */
  export type ReferecePricesUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * The filter to search for the ReferecePrices to update in case it exists.
     */
    where: ReferecePricesWhereUniqueInput
    /**
     * In case the ReferecePrices found by the `where` argument doesn't exist, create a new ReferecePrices with this data.
     */
    create: XOR<ReferecePricesCreateInput, ReferecePricesUncheckedCreateInput>
    /**
     * In case the ReferecePrices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferecePricesUpdateInput, ReferecePricesUncheckedUpdateInput>
  }


  /**
   * ReferecePrices delete
   */
  export type ReferecePricesDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
    /**
     * Filter which ReferecePrices to delete.
     */
    where: ReferecePricesWhereUniqueInput
  }


  /**
   * ReferecePrices deleteMany
   */
  export type ReferecePricesDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferecePrices to delete
     */
    where?: ReferecePricesWhereInput
  }


  /**
   * ReferecePrices.user
   */
  export type ReferecePrices$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * ReferecePrices without action
   */
  export type ReferecePricesDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferecePrices
     */
    select?: ReferecePricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReferecePricesInclude<ExtArgs> | null
  }



  /**
   * Model UserPoints
   */

  export type AggregateUserPoints = {
    _count: UserPointsCountAggregateOutputType | null
    _avg: UserPointsAvgAggregateOutputType | null
    _sum: UserPointsSumAggregateOutputType | null
    _min: UserPointsMinAggregateOutputType | null
    _max: UserPointsMaxAggregateOutputType | null
  }

  export type UserPointsAvgAggregateOutputType = {
    id: number | null
    value: number | null
    userId: number | null
  }

  export type UserPointsSumAggregateOutputType = {
    id: bigint | null
    value: bigint | null
    userId: bigint | null
  }

  export type UserPointsMinAggregateOutputType = {
    id: bigint | null
    value: bigint | null
    userId: bigint | null
  }

  export type UserPointsMaxAggregateOutputType = {
    id: bigint | null
    value: bigint | null
    userId: bigint | null
  }

  export type UserPointsCountAggregateOutputType = {
    id: number
    value: number
    userId: number
    _all: number
  }


  export type UserPointsAvgAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type UserPointsSumAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type UserPointsMinAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type UserPointsMaxAggregateInputType = {
    id?: true
    value?: true
    userId?: true
  }

  export type UserPointsCountAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    _all?: true
  }

  export type UserPointsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPoints to aggregate.
     */
    where?: UserPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointsOrderByWithRelationInput | UserPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserPoints
    **/
    _count?: true | UserPointsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserPointsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserPointsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserPointsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserPointsMaxAggregateInputType
  }

  export type GetUserPointsAggregateType<T extends UserPointsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserPoints]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserPoints[P]>
      : GetScalarType<T[P], AggregateUserPoints[P]>
  }




  export type UserPointsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserPointsWhereInput
    orderBy?: UserPointsOrderByWithAggregationInput | UserPointsOrderByWithAggregationInput[]
    by: UserPointsScalarFieldEnum[] | UserPointsScalarFieldEnum
    having?: UserPointsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserPointsCountAggregateInputType | true
    _avg?: UserPointsAvgAggregateInputType
    _sum?: UserPointsSumAggregateInputType
    _min?: UserPointsMinAggregateInputType
    _max?: UserPointsMaxAggregateInputType
  }

  export type UserPointsGroupByOutputType = {
    id: bigint
    value: bigint
    userId: bigint | null
    _count: UserPointsCountAggregateOutputType | null
    _avg: UserPointsAvgAggregateOutputType | null
    _sum: UserPointsSumAggregateOutputType | null
    _min: UserPointsMinAggregateOutputType | null
    _max: UserPointsMaxAggregateOutputType | null
  }

  type GetUserPointsGroupByPayload<T extends UserPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserPointsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserPointsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserPointsGroupByOutputType[P]>
            : GetScalarType<T[P], UserPointsGroupByOutputType[P]>
        }
      >
    >


  export type UserPointsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    userId?: boolean
    user?: boolean | UserPoints$userArgs<ExtArgs>
  }, ExtArgs["result"]["userPoints"]>

  export type UserPointsSelectScalar = {
    id?: boolean
    value?: boolean
    userId?: boolean
  }

  export type UserPointsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserPoints$userArgs<ExtArgs>
  }


  export type $UserPointsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "UserPoints"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      value: bigint
      userId: bigint | null
    }, ExtArgs["result"]["userPoints"]>
    composites: {}
  }


  type UserPointsGetPayload<S extends boolean | null | undefined | UserPointsDefaultArgs> = $Result.GetResult<Prisma.$UserPointsPayload, S>

  type UserPointsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserPointsFindManyArgs, 'select' | 'include'> & {
      select?: UserPointsCountAggregateInputType | true
    }

  export interface UserPointsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserPoints'], meta: { name: 'UserPoints' } }
    /**
     * Find zero or one UserPoints that matches the filter.
     * @param {UserPointsFindUniqueArgs} args - Arguments to find a UserPoints
     * @example
     * // Get one UserPoints
     * const userPoints = await prisma.userPoints.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserPointsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserPointsFindUniqueArgs<ExtArgs>>
    ): Prisma__UserPointsClient<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserPoints that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserPointsFindUniqueOrThrowArgs} args - Arguments to find a UserPoints
     * @example
     * // Get one UserPoints
     * const userPoints = await prisma.userPoints.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserPointsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPointsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserPointsClient<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointsFindFirstArgs} args - Arguments to find a UserPoints
     * @example
     * // Get one UserPoints
     * const userPoints = await prisma.userPoints.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserPointsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPointsFindFirstArgs<ExtArgs>>
    ): Prisma__UserPointsClient<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserPoints that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointsFindFirstOrThrowArgs} args - Arguments to find a UserPoints
     * @example
     * // Get one UserPoints
     * const userPoints = await prisma.userPoints.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserPointsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPointsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserPointsClient<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserPoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserPoints
     * const userPoints = await prisma.userPoints.findMany()
     * 
     * // Get first 10 UserPoints
     * const userPoints = await prisma.userPoints.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userPointsWithIdOnly = await prisma.userPoints.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserPointsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPointsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserPoints.
     * @param {UserPointsCreateArgs} args - Arguments to create a UserPoints.
     * @example
     * // Create one UserPoints
     * const UserPoints = await prisma.userPoints.create({
     *   data: {
     *     // ... data to create a UserPoints
     *   }
     * })
     * 
    **/
    create<T extends UserPointsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserPointsCreateArgs<ExtArgs>>
    ): Prisma__UserPointsClient<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserPoints.
     *     @param {UserPointsCreateManyArgs} args - Arguments to create many UserPoints.
     *     @example
     *     // Create many UserPoints
     *     const userPoints = await prisma.userPoints.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserPointsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPointsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserPoints.
     * @param {UserPointsDeleteArgs} args - Arguments to delete one UserPoints.
     * @example
     * // Delete one UserPoints
     * const UserPoints = await prisma.userPoints.delete({
     *   where: {
     *     // ... filter to delete one UserPoints
     *   }
     * })
     * 
    **/
    delete<T extends UserPointsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserPointsDeleteArgs<ExtArgs>>
    ): Prisma__UserPointsClient<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserPoints.
     * @param {UserPointsUpdateArgs} args - Arguments to update one UserPoints.
     * @example
     * // Update one UserPoints
     * const userPoints = await prisma.userPoints.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserPointsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserPointsUpdateArgs<ExtArgs>>
    ): Prisma__UserPointsClient<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserPoints.
     * @param {UserPointsDeleteManyArgs} args - Arguments to filter UserPoints to delete.
     * @example
     * // Delete a few UserPoints
     * const { count } = await prisma.userPoints.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserPointsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserPointsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserPoints
     * const userPoints = await prisma.userPoints.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserPointsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserPointsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserPoints.
     * @param {UserPointsUpsertArgs} args - Arguments to update or create a UserPoints.
     * @example
     * // Update or create a UserPoints
     * const userPoints = await prisma.userPoints.upsert({
     *   create: {
     *     // ... data to create a UserPoints
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserPoints we want to update
     *   }
     * })
    **/
    upsert<T extends UserPointsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserPointsUpsertArgs<ExtArgs>>
    ): Prisma__UserPointsClient<$Result.GetResult<Prisma.$UserPointsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointsCountArgs} args - Arguments to filter UserPoints to count.
     * @example
     * // Count the number of UserPoints
     * const count = await prisma.userPoints.count({
     *   where: {
     *     // ... the filter for the UserPoints we want to count
     *   }
     * })
    **/
    count<T extends UserPointsCountArgs>(
      args?: Subset<T, UserPointsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserPointsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserPointsAggregateArgs>(args: Subset<T, UserPointsAggregateArgs>): Prisma.PrismaPromise<GetUserPointsAggregateType<T>>

    /**
     * Group by UserPoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserPointsGroupByArgs} args - Group by arguments.
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
      T extends UserPointsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserPointsGroupByArgs['orderBy'] }
        : { orderBy?: UserPointsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserPointsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserPointsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserPoints model
   */
  readonly fields: UserPointsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserPointsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserPoints$userArgs<ExtArgs> = {}>(args?: Subset<T, UserPoints$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserPoints model
   */ 
  interface UserPointsFieldRefs {
    readonly id: FieldRef<"UserPoints", 'BigInt'>
    readonly value: FieldRef<"UserPoints", 'BigInt'>
    readonly userId: FieldRef<"UserPoints", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * UserPoints findUnique
   */
  export type UserPointsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * Filter, which UserPoints to fetch.
     */
    where: UserPointsWhereUniqueInput
  }


  /**
   * UserPoints findUniqueOrThrow
   */
  export type UserPointsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * Filter, which UserPoints to fetch.
     */
    where: UserPointsWhereUniqueInput
  }


  /**
   * UserPoints findFirst
   */
  export type UserPointsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * Filter, which UserPoints to fetch.
     */
    where?: UserPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointsOrderByWithRelationInput | UserPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPoints.
     */
    cursor?: UserPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPoints.
     */
    distinct?: UserPointsScalarFieldEnum | UserPointsScalarFieldEnum[]
  }


  /**
   * UserPoints findFirstOrThrow
   */
  export type UserPointsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * Filter, which UserPoints to fetch.
     */
    where?: UserPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointsOrderByWithRelationInput | UserPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserPoints.
     */
    cursor?: UserPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserPoints.
     */
    distinct?: UserPointsScalarFieldEnum | UserPointsScalarFieldEnum[]
  }


  /**
   * UserPoints findMany
   */
  export type UserPointsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * Filter, which UserPoints to fetch.
     */
    where?: UserPointsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserPoints to fetch.
     */
    orderBy?: UserPointsOrderByWithRelationInput | UserPointsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserPoints.
     */
    cursor?: UserPointsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserPoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserPoints.
     */
    skip?: number
    distinct?: UserPointsScalarFieldEnum | UserPointsScalarFieldEnum[]
  }


  /**
   * UserPoints create
   */
  export type UserPointsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserPoints.
     */
    data: XOR<UserPointsCreateInput, UserPointsUncheckedCreateInput>
  }


  /**
   * UserPoints createMany
   */
  export type UserPointsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserPoints.
     */
    data: UserPointsCreateManyInput | UserPointsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserPoints update
   */
  export type UserPointsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserPoints.
     */
    data: XOR<UserPointsUpdateInput, UserPointsUncheckedUpdateInput>
    /**
     * Choose, which UserPoints to update.
     */
    where: UserPointsWhereUniqueInput
  }


  /**
   * UserPoints updateMany
   */
  export type UserPointsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserPoints.
     */
    data: XOR<UserPointsUpdateManyMutationInput, UserPointsUncheckedUpdateManyInput>
    /**
     * Filter which UserPoints to update
     */
    where?: UserPointsWhereInput
  }


  /**
   * UserPoints upsert
   */
  export type UserPointsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserPoints to update in case it exists.
     */
    where: UserPointsWhereUniqueInput
    /**
     * In case the UserPoints found by the `where` argument doesn't exist, create a new UserPoints with this data.
     */
    create: XOR<UserPointsCreateInput, UserPointsUncheckedCreateInput>
    /**
     * In case the UserPoints was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserPointsUpdateInput, UserPointsUncheckedUpdateInput>
  }


  /**
   * UserPoints delete
   */
  export type UserPointsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
    /**
     * Filter which UserPoints to delete.
     */
    where: UserPointsWhereUniqueInput
  }


  /**
   * UserPoints deleteMany
   */
  export type UserPointsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserPoints to delete
     */
    where?: UserPointsWhereInput
  }


  /**
   * UserPoints.user
   */
  export type UserPoints$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * UserPoints without action
   */
  export type UserPointsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserPoints
     */
    select?: UserPointsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserPointsInclude<ExtArgs> | null
  }



  /**
   * Model Feed
   */

  export type AggregateFeed = {
    _count: FeedCountAggregateOutputType | null
    _avg: FeedAvgAggregateOutputType | null
    _sum: FeedSumAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  export type FeedAvgAggregateOutputType = {
    id: number | null
    react_positive: number | null
    react_negative: number | null
    react_smile: number | null
    react_lovely: number | null
    userId: number | null
  }

  export type FeedSumAggregateOutputType = {
    id: bigint | null
    react_positive: bigint | null
    react_negative: bigint | null
    react_smile: bigint | null
    react_lovely: bigint | null
    userId: bigint | null
  }

  export type FeedMinAggregateOutputType = {
    id: bigint | null
    title: string | null
    img: string | null
    description: string | null
    react_positive: bigint | null
    react_negative: bigint | null
    react_smile: bigint | null
    react_lovely: bigint | null
    userId: bigint | null
  }

  export type FeedMaxAggregateOutputType = {
    id: bigint | null
    title: string | null
    img: string | null
    description: string | null
    react_positive: bigint | null
    react_negative: bigint | null
    react_smile: bigint | null
    react_lovely: bigint | null
    userId: bigint | null
  }

  export type FeedCountAggregateOutputType = {
    id: number
    title: number
    img: number
    description: number
    react_positive: number
    react_negative: number
    react_smile: number
    react_lovely: number
    userId: number
    _all: number
  }


  export type FeedAvgAggregateInputType = {
    id?: true
    react_positive?: true
    react_negative?: true
    react_smile?: true
    react_lovely?: true
    userId?: true
  }

  export type FeedSumAggregateInputType = {
    id?: true
    react_positive?: true
    react_negative?: true
    react_smile?: true
    react_lovely?: true
    userId?: true
  }

  export type FeedMinAggregateInputType = {
    id?: true
    title?: true
    img?: true
    description?: true
    react_positive?: true
    react_negative?: true
    react_smile?: true
    react_lovely?: true
    userId?: true
  }

  export type FeedMaxAggregateInputType = {
    id?: true
    title?: true
    img?: true
    description?: true
    react_positive?: true
    react_negative?: true
    react_smile?: true
    react_lovely?: true
    userId?: true
  }

  export type FeedCountAggregateInputType = {
    id?: true
    title?: true
    img?: true
    description?: true
    react_positive?: true
    react_negative?: true
    react_smile?: true
    react_lovely?: true
    userId?: true
    _all?: true
  }

  export type FeedAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feed to aggregate.
     */
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Feeds
    **/
    _count?: true | FeedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedMaxAggregateInputType
  }

  export type GetFeedAggregateType<T extends FeedAggregateArgs> = {
        [P in keyof T & keyof AggregateFeed]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeed[P]>
      : GetScalarType<T[P], AggregateFeed[P]>
  }




  export type FeedGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FeedWhereInput
    orderBy?: FeedOrderByWithAggregationInput | FeedOrderByWithAggregationInput[]
    by: FeedScalarFieldEnum[] | FeedScalarFieldEnum
    having?: FeedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedCountAggregateInputType | true
    _avg?: FeedAvgAggregateInputType
    _sum?: FeedSumAggregateInputType
    _min?: FeedMinAggregateInputType
    _max?: FeedMaxAggregateInputType
  }

  export type FeedGroupByOutputType = {
    id: bigint
    title: string
    img: string | null
    description: string | null
    react_positive: bigint | null
    react_negative: bigint | null
    react_smile: bigint | null
    react_lovely: bigint | null
    userId: bigint | null
    _count: FeedCountAggregateOutputType | null
    _avg: FeedAvgAggregateOutputType | null
    _sum: FeedSumAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  type GetFeedGroupByPayload<T extends FeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedGroupByOutputType[P]>
            : GetScalarType<T[P], FeedGroupByOutputType[P]>
        }
      >
    >


  export type FeedSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    img?: boolean
    description?: boolean
    react_positive?: boolean
    react_negative?: boolean
    react_smile?: boolean
    react_lovely?: boolean
    userId?: boolean
    user?: boolean | Feed$userArgs<ExtArgs>
  }, ExtArgs["result"]["feed"]>

  export type FeedSelectScalar = {
    id?: boolean
    title?: boolean
    img?: boolean
    description?: boolean
    react_positive?: boolean
    react_negative?: boolean
    react_smile?: boolean
    react_lovely?: boolean
    userId?: boolean
  }

  export type FeedInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Feed$userArgs<ExtArgs>
  }


  export type $FeedPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Feed"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      title: string
      img: string | null
      description: string | null
      react_positive: bigint | null
      react_negative: bigint | null
      react_smile: bigint | null
      react_lovely: bigint | null
      userId: bigint | null
    }, ExtArgs["result"]["feed"]>
    composites: {}
  }


  type FeedGetPayload<S extends boolean | null | undefined | FeedDefaultArgs> = $Result.GetResult<Prisma.$FeedPayload, S>

  type FeedCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FeedFindManyArgs, 'select' | 'include'> & {
      select?: FeedCountAggregateInputType | true
    }

  export interface FeedDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Feed'], meta: { name: 'Feed' } }
    /**
     * Find zero or one Feed that matches the filter.
     * @param {FeedFindUniqueArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeedFindUniqueArgs<ExtArgs>>
    ): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Feed that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeedFindUniqueOrThrowArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Feed that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindFirstArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedFindFirstArgs<ExtArgs>>
    ): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Feed that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindFirstOrThrowArgs} args - Arguments to find a Feed
     * @example
     * // Get one Feed
     * const feed = await prisma.feed.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Feeds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Feeds
     * const feeds = await prisma.feed.findMany()
     * 
     * // Get first 10 Feeds
     * const feeds = await prisma.feed.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedWithIdOnly = await prisma.feed.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Feed.
     * @param {FeedCreateArgs} args - Arguments to create a Feed.
     * @example
     * // Create one Feed
     * const Feed = await prisma.feed.create({
     *   data: {
     *     // ... data to create a Feed
     *   }
     * })
     * 
    **/
    create<T extends FeedCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedCreateArgs<ExtArgs>>
    ): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Feeds.
     *     @param {FeedCreateManyArgs} args - Arguments to create many Feeds.
     *     @example
     *     // Create many Feeds
     *     const feed = await prisma.feed.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Feed.
     * @param {FeedDeleteArgs} args - Arguments to delete one Feed.
     * @example
     * // Delete one Feed
     * const Feed = await prisma.feed.delete({
     *   where: {
     *     // ... filter to delete one Feed
     *   }
     * })
     * 
    **/
    delete<T extends FeedDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeedDeleteArgs<ExtArgs>>
    ): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Feed.
     * @param {FeedUpdateArgs} args - Arguments to update one Feed.
     * @example
     * // Update one Feed
     * const feed = await prisma.feed.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedUpdateArgs<ExtArgs>>
    ): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Feeds.
     * @param {FeedDeleteManyArgs} args - Arguments to filter Feeds to delete.
     * @example
     * // Delete a few Feeds
     * const { count } = await prisma.feed.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Feeds
     * const feed = await prisma.feed.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeedUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Feed.
     * @param {FeedUpsertArgs} args - Arguments to update or create a Feed.
     * @example
     * // Update or create a Feed
     * const feed = await prisma.feed.upsert({
     *   create: {
     *     // ... data to create a Feed
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Feed we want to update
     *   }
     * })
    **/
    upsert<T extends FeedUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeedUpsertArgs<ExtArgs>>
    ): Prisma__FeedClient<$Result.GetResult<Prisma.$FeedPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Feeds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCountArgs} args - Arguments to filter Feeds to count.
     * @example
     * // Count the number of Feeds
     * const count = await prisma.feed.count({
     *   where: {
     *     // ... the filter for the Feeds we want to count
     *   }
     * })
    **/
    count<T extends FeedCountArgs>(
      args?: Subset<T, FeedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedAggregateArgs>(args: Subset<T, FeedAggregateArgs>): Prisma.PrismaPromise<GetFeedAggregateType<T>>

    /**
     * Group by Feed.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedGroupByArgs} args - Group by arguments.
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
      T extends FeedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedGroupByArgs['orderBy'] }
        : { orderBy?: FeedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Feed model
   */
  readonly fields: FeedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Feed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends Feed$userArgs<ExtArgs> = {}>(args?: Subset<T, Feed$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Feed model
   */ 
  interface FeedFieldRefs {
    readonly id: FieldRef<"Feed", 'BigInt'>
    readonly title: FieldRef<"Feed", 'String'>
    readonly img: FieldRef<"Feed", 'String'>
    readonly description: FieldRef<"Feed", 'String'>
    readonly react_positive: FieldRef<"Feed", 'BigInt'>
    readonly react_negative: FieldRef<"Feed", 'BigInt'>
    readonly react_smile: FieldRef<"Feed", 'BigInt'>
    readonly react_lovely: FieldRef<"Feed", 'BigInt'>
    readonly userId: FieldRef<"Feed", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * Feed findUnique
   */
  export type FeedFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where: FeedWhereUniqueInput
  }


  /**
   * Feed findUniqueOrThrow
   */
  export type FeedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where: FeedWhereUniqueInput
  }


  /**
   * Feed findFirst
   */
  export type FeedFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feeds.
     */
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feeds.
     */
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }


  /**
   * Feed findFirstOrThrow
   */
  export type FeedFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feed to fetch.
     */
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Feeds.
     */
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Feeds.
     */
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }


  /**
   * Feed findMany
   */
  export type FeedFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter, which Feeds to fetch.
     */
    where?: FeedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Feeds to fetch.
     */
    orderBy?: FeedOrderByWithRelationInput | FeedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Feeds.
     */
    cursor?: FeedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Feeds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Feeds.
     */
    skip?: number
    distinct?: FeedScalarFieldEnum | FeedScalarFieldEnum[]
  }


  /**
   * Feed create
   */
  export type FeedCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The data needed to create a Feed.
     */
    data: XOR<FeedCreateInput, FeedUncheckedCreateInput>
  }


  /**
   * Feed createMany
   */
  export type FeedCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Feeds.
     */
    data: FeedCreateManyInput | FeedCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Feed update
   */
  export type FeedUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The data needed to update a Feed.
     */
    data: XOR<FeedUpdateInput, FeedUncheckedUpdateInput>
    /**
     * Choose, which Feed to update.
     */
    where: FeedWhereUniqueInput
  }


  /**
   * Feed updateMany
   */
  export type FeedUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Feeds.
     */
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyInput>
    /**
     * Filter which Feeds to update
     */
    where?: FeedWhereInput
  }


  /**
   * Feed upsert
   */
  export type FeedUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * The filter to search for the Feed to update in case it exists.
     */
    where: FeedWhereUniqueInput
    /**
     * In case the Feed found by the `where` argument doesn't exist, create a new Feed with this data.
     */
    create: XOR<FeedCreateInput, FeedUncheckedCreateInput>
    /**
     * In case the Feed was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedUpdateInput, FeedUncheckedUpdateInput>
  }


  /**
   * Feed delete
   */
  export type FeedDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
    /**
     * Filter which Feed to delete.
     */
    where: FeedWhereUniqueInput
  }


  /**
   * Feed deleteMany
   */
  export type FeedDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Feeds to delete
     */
    where?: FeedWhereInput
  }


  /**
   * Feed.user
   */
  export type Feed$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * Feed without action
   */
  export type FeedDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Feed
     */
    select?: FeedSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedInclude<ExtArgs> | null
  }



  /**
   * Model FeedComments
   */

  export type AggregateFeedComments = {
    _count: FeedCommentsCountAggregateOutputType | null
    _avg: FeedCommentsAvgAggregateOutputType | null
    _sum: FeedCommentsSumAggregateOutputType | null
    _min: FeedCommentsMinAggregateOutputType | null
    _max: FeedCommentsMaxAggregateOutputType | null
  }

  export type FeedCommentsAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type FeedCommentsSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type FeedCommentsMinAggregateOutputType = {
    id: bigint | null
    comment: string | null
    userId: bigint | null
  }

  export type FeedCommentsMaxAggregateOutputType = {
    id: bigint | null
    comment: string | null
    userId: bigint | null
  }

  export type FeedCommentsCountAggregateOutputType = {
    id: number
    comment: number
    userId: number
    _all: number
  }


  export type FeedCommentsAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FeedCommentsSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type FeedCommentsMinAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
  }

  export type FeedCommentsMaxAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
  }

  export type FeedCommentsCountAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    _all?: true
  }

  export type FeedCommentsAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedComments to aggregate.
     */
    where?: FeedCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedComments to fetch.
     */
    orderBy?: FeedCommentsOrderByWithRelationInput | FeedCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FeedCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FeedComments
    **/
    _count?: true | FeedCommentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FeedCommentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FeedCommentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FeedCommentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FeedCommentsMaxAggregateInputType
  }

  export type GetFeedCommentsAggregateType<T extends FeedCommentsAggregateArgs> = {
        [P in keyof T & keyof AggregateFeedComments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFeedComments[P]>
      : GetScalarType<T[P], AggregateFeedComments[P]>
  }




  export type FeedCommentsGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FeedCommentsWhereInput
    orderBy?: FeedCommentsOrderByWithAggregationInput | FeedCommentsOrderByWithAggregationInput[]
    by: FeedCommentsScalarFieldEnum[] | FeedCommentsScalarFieldEnum
    having?: FeedCommentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FeedCommentsCountAggregateInputType | true
    _avg?: FeedCommentsAvgAggregateInputType
    _sum?: FeedCommentsSumAggregateInputType
    _min?: FeedCommentsMinAggregateInputType
    _max?: FeedCommentsMaxAggregateInputType
  }

  export type FeedCommentsGroupByOutputType = {
    id: bigint
    comment: string
    userId: bigint
    _count: FeedCommentsCountAggregateOutputType | null
    _avg: FeedCommentsAvgAggregateOutputType | null
    _sum: FeedCommentsSumAggregateOutputType | null
    _min: FeedCommentsMinAggregateOutputType | null
    _max: FeedCommentsMaxAggregateOutputType | null
  }

  type GetFeedCommentsGroupByPayload<T extends FeedCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FeedCommentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FeedCommentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FeedCommentsGroupByOutputType[P]>
            : GetScalarType<T[P], FeedCommentsGroupByOutputType[P]>
        }
      >
    >


  export type FeedCommentsSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    comment?: boolean
    userId?: boolean
    user?: boolean | FeedComments$userArgs<ExtArgs>
  }, ExtArgs["result"]["feedComments"]>

  export type FeedCommentsSelectScalar = {
    id?: boolean
    comment?: boolean
    userId?: boolean
  }

  export type FeedCommentsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | FeedComments$userArgs<ExtArgs>
  }


  export type $FeedCommentsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "FeedComments"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetResult<{
      id: bigint
      comment: string
      userId: bigint
    }, ExtArgs["result"]["feedComments"]>
    composites: {}
  }


  type FeedCommentsGetPayload<S extends boolean | null | undefined | FeedCommentsDefaultArgs> = $Result.GetResult<Prisma.$FeedCommentsPayload, S>

  type FeedCommentsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FeedCommentsFindManyArgs, 'select' | 'include'> & {
      select?: FeedCommentsCountAggregateInputType | true
    }

  export interface FeedCommentsDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FeedComments'], meta: { name: 'FeedComments' } }
    /**
     * Find zero or one FeedComments that matches the filter.
     * @param {FeedCommentsFindUniqueArgs} args - Arguments to find a FeedComments
     * @example
     * // Get one FeedComments
     * const feedComments = await prisma.feedComments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FeedCommentsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FeedCommentsFindUniqueArgs<ExtArgs>>
    ): Prisma__FeedCommentsClient<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one FeedComments that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FeedCommentsFindUniqueOrThrowArgs} args - Arguments to find a FeedComments
     * @example
     * // Get one FeedComments
     * const feedComments = await prisma.feedComments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FeedCommentsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedCommentsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FeedCommentsClient<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first FeedComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentsFindFirstArgs} args - Arguments to find a FeedComments
     * @example
     * // Get one FeedComments
     * const feedComments = await prisma.feedComments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FeedCommentsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedCommentsFindFirstArgs<ExtArgs>>
    ): Prisma__FeedCommentsClient<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first FeedComments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentsFindFirstOrThrowArgs} args - Arguments to find a FeedComments
     * @example
     * // Get one FeedComments
     * const feedComments = await prisma.feedComments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FeedCommentsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedCommentsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FeedCommentsClient<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more FeedComments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FeedComments
     * const feedComments = await prisma.feedComments.findMany()
     * 
     * // Get first 10 FeedComments
     * const feedComments = await prisma.feedComments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const feedCommentsWithIdOnly = await prisma.feedComments.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FeedCommentsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedCommentsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a FeedComments.
     * @param {FeedCommentsCreateArgs} args - Arguments to create a FeedComments.
     * @example
     * // Create one FeedComments
     * const FeedComments = await prisma.feedComments.create({
     *   data: {
     *     // ... data to create a FeedComments
     *   }
     * })
     * 
    **/
    create<T extends FeedCommentsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedCommentsCreateArgs<ExtArgs>>
    ): Prisma__FeedCommentsClient<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many FeedComments.
     *     @param {FeedCommentsCreateManyArgs} args - Arguments to create many FeedComments.
     *     @example
     *     // Create many FeedComments
     *     const feedComments = await prisma.feedComments.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FeedCommentsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedCommentsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FeedComments.
     * @param {FeedCommentsDeleteArgs} args - Arguments to delete one FeedComments.
     * @example
     * // Delete one FeedComments
     * const FeedComments = await prisma.feedComments.delete({
     *   where: {
     *     // ... filter to delete one FeedComments
     *   }
     * })
     * 
    **/
    delete<T extends FeedCommentsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FeedCommentsDeleteArgs<ExtArgs>>
    ): Prisma__FeedCommentsClient<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one FeedComments.
     * @param {FeedCommentsUpdateArgs} args - Arguments to update one FeedComments.
     * @example
     * // Update one FeedComments
     * const feedComments = await prisma.feedComments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FeedCommentsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FeedCommentsUpdateArgs<ExtArgs>>
    ): Prisma__FeedCommentsClient<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more FeedComments.
     * @param {FeedCommentsDeleteManyArgs} args - Arguments to filter FeedComments to delete.
     * @example
     * // Delete a few FeedComments
     * const { count } = await prisma.feedComments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FeedCommentsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FeedCommentsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FeedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FeedComments
     * const feedComments = await prisma.feedComments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FeedCommentsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FeedCommentsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FeedComments.
     * @param {FeedCommentsUpsertArgs} args - Arguments to update or create a FeedComments.
     * @example
     * // Update or create a FeedComments
     * const feedComments = await prisma.feedComments.upsert({
     *   create: {
     *     // ... data to create a FeedComments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FeedComments we want to update
     *   }
     * })
    **/
    upsert<T extends FeedCommentsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FeedCommentsUpsertArgs<ExtArgs>>
    ): Prisma__FeedCommentsClient<$Result.GetResult<Prisma.$FeedCommentsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of FeedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentsCountArgs} args - Arguments to filter FeedComments to count.
     * @example
     * // Count the number of FeedComments
     * const count = await prisma.feedComments.count({
     *   where: {
     *     // ... the filter for the FeedComments we want to count
     *   }
     * })
    **/
    count<T extends FeedCommentsCountArgs>(
      args?: Subset<T, FeedCommentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FeedCommentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FeedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FeedCommentsAggregateArgs>(args: Subset<T, FeedCommentsAggregateArgs>): Prisma.PrismaPromise<GetFeedCommentsAggregateType<T>>

    /**
     * Group by FeedComments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FeedCommentsGroupByArgs} args - Group by arguments.
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
      T extends FeedCommentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FeedCommentsGroupByArgs['orderBy'] }
        : { orderBy?: FeedCommentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, FeedCommentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFeedCommentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FeedComments model
   */
  readonly fields: FeedCommentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FeedCommentsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends FeedComments$userArgs<ExtArgs> = {}>(args?: Subset<T, FeedComments$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the FeedComments model
   */ 
  interface FeedCommentsFieldRefs {
    readonly id: FieldRef<"FeedComments", 'BigInt'>
    readonly comment: FieldRef<"FeedComments", 'String'>
    readonly userId: FieldRef<"FeedComments", 'BigInt'>
  }
    

  // Custom InputTypes

  /**
   * FeedComments findUnique
   */
  export type FeedCommentsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which FeedComments to fetch.
     */
    where: FeedCommentsWhereUniqueInput
  }


  /**
   * FeedComments findUniqueOrThrow
   */
  export type FeedCommentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which FeedComments to fetch.
     */
    where: FeedCommentsWhereUniqueInput
  }


  /**
   * FeedComments findFirst
   */
  export type FeedCommentsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which FeedComments to fetch.
     */
    where?: FeedCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedComments to fetch.
     */
    orderBy?: FeedCommentsOrderByWithRelationInput | FeedCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedComments.
     */
    cursor?: FeedCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedComments.
     */
    distinct?: FeedCommentsScalarFieldEnum | FeedCommentsScalarFieldEnum[]
  }


  /**
   * FeedComments findFirstOrThrow
   */
  export type FeedCommentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which FeedComments to fetch.
     */
    where?: FeedCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedComments to fetch.
     */
    orderBy?: FeedCommentsOrderByWithRelationInput | FeedCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FeedComments.
     */
    cursor?: FeedCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedComments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FeedComments.
     */
    distinct?: FeedCommentsScalarFieldEnum | FeedCommentsScalarFieldEnum[]
  }


  /**
   * FeedComments findMany
   */
  export type FeedCommentsFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * Filter, which FeedComments to fetch.
     */
    where?: FeedCommentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FeedComments to fetch.
     */
    orderBy?: FeedCommentsOrderByWithRelationInput | FeedCommentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FeedComments.
     */
    cursor?: FeedCommentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FeedComments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FeedComments.
     */
    skip?: number
    distinct?: FeedCommentsScalarFieldEnum | FeedCommentsScalarFieldEnum[]
  }


  /**
   * FeedComments create
   */
  export type FeedCommentsCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * The data needed to create a FeedComments.
     */
    data: XOR<FeedCommentsCreateInput, FeedCommentsUncheckedCreateInput>
  }


  /**
   * FeedComments createMany
   */
  export type FeedCommentsCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FeedComments.
     */
    data: FeedCommentsCreateManyInput | FeedCommentsCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * FeedComments update
   */
  export type FeedCommentsUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * The data needed to update a FeedComments.
     */
    data: XOR<FeedCommentsUpdateInput, FeedCommentsUncheckedUpdateInput>
    /**
     * Choose, which FeedComments to update.
     */
    where: FeedCommentsWhereUniqueInput
  }


  /**
   * FeedComments updateMany
   */
  export type FeedCommentsUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FeedComments.
     */
    data: XOR<FeedCommentsUpdateManyMutationInput, FeedCommentsUncheckedUpdateManyInput>
    /**
     * Filter which FeedComments to update
     */
    where?: FeedCommentsWhereInput
  }


  /**
   * FeedComments upsert
   */
  export type FeedCommentsUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * The filter to search for the FeedComments to update in case it exists.
     */
    where: FeedCommentsWhereUniqueInput
    /**
     * In case the FeedComments found by the `where` argument doesn't exist, create a new FeedComments with this data.
     */
    create: XOR<FeedCommentsCreateInput, FeedCommentsUncheckedCreateInput>
    /**
     * In case the FeedComments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FeedCommentsUpdateInput, FeedCommentsUncheckedUpdateInput>
  }


  /**
   * FeedComments delete
   */
  export type FeedCommentsDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
    /**
     * Filter which FeedComments to delete.
     */
    where: FeedCommentsWhereUniqueInput
  }


  /**
   * FeedComments deleteMany
   */
  export type FeedCommentsDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which FeedComments to delete
     */
    where?: FeedCommentsWhereInput
  }


  /**
   * FeedComments.user
   */
  export type FeedComments$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }


  /**
   * FeedComments without action
   */
  export type FeedCommentsDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FeedComments
     */
    select?: FeedCommentsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FeedCommentsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    photo: 'photo',
    name: 'name',
    secondname: 'secondname',
    socialname: 'socialname',
    birthday: 'birthday',
    userId: 'userId'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const AddresScalarFieldEnum: {
    id: 'id',
    address: 'address',
    complement: 'complement',
    state: 'state',
    country: 'country',
    userId: 'userId'
  };

  export type AddresScalarFieldEnum = (typeof AddresScalarFieldEnum)[keyof typeof AddresScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    another: 'another',
    userId: 'userId'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const KnowledgespaceScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description'
  };

  export type KnowledgespaceScalarFieldEnum = (typeof KnowledgespaceScalarFieldEnum)[keyof typeof KnowledgespaceScalarFieldEnum]


  export const DegreeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    KnowledgespaceId: 'KnowledgespaceId',
    userId: 'userId'
  };

  export type DegreeScalarFieldEnum = (typeof DegreeScalarFieldEnum)[keyof typeof DegreeScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    userId: 'userId'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const ExperiencesScalarFieldEnum: {
    id: 'id',
    company: 'company',
    start: 'start',
    end: 'end',
    iscurrent: 'iscurrent',
    userId: 'userId'
  };

  export type ExperiencesScalarFieldEnum = (typeof ExperiencesScalarFieldEnum)[keyof typeof ExperiencesScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    start: 'start',
    end: 'end',
    iscurrent: 'iscurrent',
    userId: 'userId'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const ReferecesScalarFieldEnum: {
    id: 'id',
    description: 'description',
    value: 'value',
    userId: 'userId'
  };

  export type ReferecesScalarFieldEnum = (typeof ReferecesScalarFieldEnum)[keyof typeof ReferecesScalarFieldEnum]


  export const ReferecePricesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    contacts: 'contacts',
    userId: 'userId'
  };

  export type ReferecePricesScalarFieldEnum = (typeof ReferecePricesScalarFieldEnum)[keyof typeof ReferecePricesScalarFieldEnum]


  export const UserPointsScalarFieldEnum: {
    id: 'id',
    value: 'value',
    userId: 'userId'
  };

  export type UserPointsScalarFieldEnum = (typeof UserPointsScalarFieldEnum)[keyof typeof UserPointsScalarFieldEnum]


  export const FeedScalarFieldEnum: {
    id: 'id',
    title: 'title',
    img: 'img',
    description: 'description',
    react_positive: 'react_positive',
    react_negative: 'react_negative',
    react_smile: 'react_smile',
    react_lovely: 'react_lovely',
    userId: 'userId'
  };

  export type FeedScalarFieldEnum = (typeof FeedScalarFieldEnum)[keyof typeof FeedScalarFieldEnum]


  export const FeedCommentsScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    userId: 'userId'
  };

  export type FeedCommentsScalarFieldEnum = (typeof FeedCommentsScalarFieldEnum)[keyof typeof FeedCommentsScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    perfil?: XOR<PerfilNullableRelationFilter, PerfilWhereInput> | null
    addres?: AddresListRelationFilter
    contact?: ContactListRelationFilter
    degree?: DegreeListRelationFilter
    skills?: SkillsListRelationFilter
    experiences?: ExperiencesListRelationFilter
    projects?: ProjectsListRelationFilter
    referecePrices?: ReferecePricesListRelationFilter
    refereces?: ReferecesListRelationFilter
    userPoints?: UserPointsListRelationFilter
    feeds?: FeedListRelationFilter
    comments?: FeedCommentsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    perfil?: PerfilOrderByWithRelationInput
    addres?: AddresOrderByRelationAggregateInput
    contact?: ContactOrderByRelationAggregateInput
    degree?: DegreeOrderByRelationAggregateInput
    skills?: SkillsOrderByRelationAggregateInput
    experiences?: ExperiencesOrderByRelationAggregateInput
    projects?: ProjectsOrderByRelationAggregateInput
    referecePrices?: ReferecePricesOrderByRelationAggregateInput
    refereces?: ReferecesOrderByRelationAggregateInput
    userPoints?: UserPointsOrderByRelationAggregateInput
    feeds?: FeedOrderByRelationAggregateInput
    comments?: FeedCommentsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    perfil?: XOR<PerfilNullableRelationFilter, PerfilWhereInput> | null
    addres?: AddresListRelationFilter
    contact?: ContactListRelationFilter
    degree?: DegreeListRelationFilter
    skills?: SkillsListRelationFilter
    experiences?: ExperiencesListRelationFilter
    projects?: ProjectsListRelationFilter
    referecePrices?: ReferecePricesListRelationFilter
    refereces?: ReferecesListRelationFilter
    userPoints?: UserPointsListRelationFilter
    feeds?: FeedListRelationFilter
    comments?: FeedCommentsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
  }

  export type PerfilWhereInput = {
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    id?: BigIntFilter<"Perfil"> | bigint | number
    photo?: StringNullableFilter<"Perfil"> | string | null
    name?: StringNullableFilter<"Perfil"> | string | null
    secondname?: StringNullableFilter<"Perfil"> | string | null
    socialname?: StringNullableFilter<"Perfil"> | string | null
    birthday?: DateTimeNullableFilter<"Perfil"> | Date | string | null
    userId?: BigIntNullableFilter<"Perfil"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type PerfilOrderByWithRelationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    secondname?: SortOrderInput | SortOrder
    socialname?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    userId?: bigint | number
    AND?: PerfilWhereInput | PerfilWhereInput[]
    OR?: PerfilWhereInput[]
    NOT?: PerfilWhereInput | PerfilWhereInput[]
    photo?: StringNullableFilter<"Perfil"> | string | null
    name?: StringNullableFilter<"Perfil"> | string | null
    secondname?: StringNullableFilter<"Perfil"> | string | null
    socialname?: StringNullableFilter<"Perfil"> | string | null
    birthday?: DateTimeNullableFilter<"Perfil"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "userId">

  export type PerfilOrderByWithAggregationInput = {
    id?: SortOrder
    photo?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    secondname?: SortOrderInput | SortOrder
    socialname?: SortOrderInput | SortOrder
    birthday?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _avg?: PerfilAvgOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
    _sum?: PerfilSumOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    OR?: PerfilScalarWhereWithAggregatesInput[]
    NOT?: PerfilScalarWhereWithAggregatesInput | PerfilScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Perfil"> | bigint | number
    photo?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    name?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    secondname?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    socialname?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"Perfil"> | Date | string | null
    userId?: BigIntNullableWithAggregatesFilter<"Perfil"> | bigint | number | null
  }

  export type AddresWhereInput = {
    AND?: AddresWhereInput | AddresWhereInput[]
    OR?: AddresWhereInput[]
    NOT?: AddresWhereInput | AddresWhereInput[]
    id?: BigIntFilter<"Addres"> | bigint | number
    address?: StringNullableFilter<"Addres"> | string | null
    complement?: StringNullableFilter<"Addres"> | string | null
    state?: StringNullableFilter<"Addres"> | string | null
    country?: StringNullableFilter<"Addres"> | string | null
    userId?: BigIntNullableFilter<"Addres"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AddresOrderByWithRelationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddresWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: AddresWhereInput | AddresWhereInput[]
    OR?: AddresWhereInput[]
    NOT?: AddresWhereInput | AddresWhereInput[]
    address?: StringNullableFilter<"Addres"> | string | null
    complement?: StringNullableFilter<"Addres"> | string | null
    state?: StringNullableFilter<"Addres"> | string | null
    country?: StringNullableFilter<"Addres"> | string | null
    userId?: BigIntNullableFilter<"Addres"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AddresOrderByWithAggregationInput = {
    id?: SortOrder
    address?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: AddresCountOrderByAggregateInput
    _avg?: AddresAvgOrderByAggregateInput
    _max?: AddresMaxOrderByAggregateInput
    _min?: AddresMinOrderByAggregateInput
    _sum?: AddresSumOrderByAggregateInput
  }

  export type AddresScalarWhereWithAggregatesInput = {
    AND?: AddresScalarWhereWithAggregatesInput | AddresScalarWhereWithAggregatesInput[]
    OR?: AddresScalarWhereWithAggregatesInput[]
    NOT?: AddresScalarWhereWithAggregatesInput | AddresScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Addres"> | bigint | number
    address?: StringNullableWithAggregatesFilter<"Addres"> | string | null
    complement?: StringNullableWithAggregatesFilter<"Addres"> | string | null
    state?: StringNullableWithAggregatesFilter<"Addres"> | string | null
    country?: StringNullableWithAggregatesFilter<"Addres"> | string | null
    userId?: BigIntNullableWithAggregatesFilter<"Addres"> | bigint | number | null
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: BigIntFilter<"Contact"> | bigint | number
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    another?: StringNullableFilter<"Contact"> | string | null
    userId?: BigIntNullableFilter<"Contact"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    another?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    another?: StringNullableFilter<"Contact"> | string | null
    userId?: BigIntNullableFilter<"Contact"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    another?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Contact"> | bigint | number
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    another?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    userId?: BigIntNullableWithAggregatesFilter<"Contact"> | bigint | number | null
  }

  export type KnowledgespaceWhereInput = {
    AND?: KnowledgespaceWhereInput | KnowledgespaceWhereInput[]
    OR?: KnowledgespaceWhereInput[]
    NOT?: KnowledgespaceWhereInput | KnowledgespaceWhereInput[]
    id?: BigIntFilter<"Knowledgespace"> | bigint | number
    code?: StringNullableFilter<"Knowledgespace"> | string | null
    description?: StringNullableFilter<"Knowledgespace"> | string | null
    degree?: DegreeListRelationFilter
  }

  export type KnowledgespaceOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    degree?: DegreeOrderByRelationAggregateInput
  }

  export type KnowledgespaceWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: KnowledgespaceWhereInput | KnowledgespaceWhereInput[]
    OR?: KnowledgespaceWhereInput[]
    NOT?: KnowledgespaceWhereInput | KnowledgespaceWhereInput[]
    code?: StringNullableFilter<"Knowledgespace"> | string | null
    description?: StringNullableFilter<"Knowledgespace"> | string | null
    degree?: DegreeListRelationFilter
  }, "id">

  export type KnowledgespaceOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: KnowledgespaceCountOrderByAggregateInput
    _avg?: KnowledgespaceAvgOrderByAggregateInput
    _max?: KnowledgespaceMaxOrderByAggregateInput
    _min?: KnowledgespaceMinOrderByAggregateInput
    _sum?: KnowledgespaceSumOrderByAggregateInput
  }

  export type KnowledgespaceScalarWhereWithAggregatesInput = {
    AND?: KnowledgespaceScalarWhereWithAggregatesInput | KnowledgespaceScalarWhereWithAggregatesInput[]
    OR?: KnowledgespaceScalarWhereWithAggregatesInput[]
    NOT?: KnowledgespaceScalarWhereWithAggregatesInput | KnowledgespaceScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Knowledgespace"> | bigint | number
    code?: StringNullableWithAggregatesFilter<"Knowledgespace"> | string | null
    description?: StringNullableWithAggregatesFilter<"Knowledgespace"> | string | null
  }

  export type DegreeWhereInput = {
    AND?: DegreeWhereInput | DegreeWhereInput[]
    OR?: DegreeWhereInput[]
    NOT?: DegreeWhereInput | DegreeWhereInput[]
    id?: BigIntFilter<"Degree"> | bigint | number
    code?: StringNullableFilter<"Degree"> | string | null
    description?: StringNullableFilter<"Degree"> | string | null
    KnowledgespaceId?: BigIntNullableFilter<"Degree"> | bigint | number | null
    userId?: BigIntNullableFilter<"Degree"> | bigint | number | null
    Knowledgespace?: XOR<KnowledgespaceNullableRelationFilter, KnowledgespaceWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type DegreeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    KnowledgespaceId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    Knowledgespace?: KnowledgespaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DegreeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    KnowledgespaceId?: bigint | number
    userId?: bigint | number
    AND?: DegreeWhereInput | DegreeWhereInput[]
    OR?: DegreeWhereInput[]
    NOT?: DegreeWhereInput | DegreeWhereInput[]
    code?: StringNullableFilter<"Degree"> | string | null
    description?: StringNullableFilter<"Degree"> | string | null
    Knowledgespace?: XOR<KnowledgespaceNullableRelationFilter, KnowledgespaceWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "KnowledgespaceId" | "userId">

  export type DegreeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    KnowledgespaceId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: DegreeCountOrderByAggregateInput
    _avg?: DegreeAvgOrderByAggregateInput
    _max?: DegreeMaxOrderByAggregateInput
    _min?: DegreeMinOrderByAggregateInput
    _sum?: DegreeSumOrderByAggregateInput
  }

  export type DegreeScalarWhereWithAggregatesInput = {
    AND?: DegreeScalarWhereWithAggregatesInput | DegreeScalarWhereWithAggregatesInput[]
    OR?: DegreeScalarWhereWithAggregatesInput[]
    NOT?: DegreeScalarWhereWithAggregatesInput | DegreeScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Degree"> | bigint | number
    code?: StringNullableWithAggregatesFilter<"Degree"> | string | null
    description?: StringNullableWithAggregatesFilter<"Degree"> | string | null
    KnowledgespaceId?: BigIntNullableWithAggregatesFilter<"Degree"> | bigint | number | null
    userId?: BigIntNullableWithAggregatesFilter<"Degree"> | bigint | number | null
  }

  export type SkillsWhereInput = {
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    id?: BigIntFilter<"Skills"> | bigint | number
    code?: StringNullableFilter<"Skills"> | string | null
    description?: StringNullableFilter<"Skills"> | string | null
    userId?: BigIntNullableFilter<"Skills"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type SkillsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: SkillsWhereInput | SkillsWhereInput[]
    OR?: SkillsWhereInput[]
    NOT?: SkillsWhereInput | SkillsWhereInput[]
    code?: StringNullableFilter<"Skills"> | string | null
    description?: StringNullableFilter<"Skills"> | string | null
    userId?: BigIntNullableFilter<"Skills"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type SkillsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: SkillsCountOrderByAggregateInput
    _avg?: SkillsAvgOrderByAggregateInput
    _max?: SkillsMaxOrderByAggregateInput
    _min?: SkillsMinOrderByAggregateInput
    _sum?: SkillsSumOrderByAggregateInput
  }

  export type SkillsScalarWhereWithAggregatesInput = {
    AND?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    OR?: SkillsScalarWhereWithAggregatesInput[]
    NOT?: SkillsScalarWhereWithAggregatesInput | SkillsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Skills"> | bigint | number
    code?: StringNullableWithAggregatesFilter<"Skills"> | string | null
    description?: StringNullableWithAggregatesFilter<"Skills"> | string | null
    userId?: BigIntNullableWithAggregatesFilter<"Skills"> | bigint | number | null
  }

  export type ExperiencesWhereInput = {
    AND?: ExperiencesWhereInput | ExperiencesWhereInput[]
    OR?: ExperiencesWhereInput[]
    NOT?: ExperiencesWhereInput | ExperiencesWhereInput[]
    id?: BigIntFilter<"Experiences"> | bigint | number
    company?: StringFilter<"Experiences"> | string
    start?: DateTimeFilter<"Experiences"> | Date | string
    end?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Experiences"> | boolean | null
    userId?: BigIntNullableFilter<"Experiences"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ExperiencesOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    iscurrent?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExperiencesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ExperiencesWhereInput | ExperiencesWhereInput[]
    OR?: ExperiencesWhereInput[]
    NOT?: ExperiencesWhereInput | ExperiencesWhereInput[]
    company?: StringFilter<"Experiences"> | string
    start?: DateTimeFilter<"Experiences"> | Date | string
    end?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Experiences"> | boolean | null
    userId?: BigIntNullableFilter<"Experiences"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ExperiencesOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    iscurrent?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ExperiencesCountOrderByAggregateInput
    _avg?: ExperiencesAvgOrderByAggregateInput
    _max?: ExperiencesMaxOrderByAggregateInput
    _min?: ExperiencesMinOrderByAggregateInput
    _sum?: ExperiencesSumOrderByAggregateInput
  }

  export type ExperiencesScalarWhereWithAggregatesInput = {
    AND?: ExperiencesScalarWhereWithAggregatesInput | ExperiencesScalarWhereWithAggregatesInput[]
    OR?: ExperiencesScalarWhereWithAggregatesInput[]
    NOT?: ExperiencesScalarWhereWithAggregatesInput | ExperiencesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Experiences"> | bigint | number
    company?: StringWithAggregatesFilter<"Experiences"> | string
    start?: DateTimeWithAggregatesFilter<"Experiences"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"Experiences"> | Date | string | null
    iscurrent?: BoolNullableWithAggregatesFilter<"Experiences"> | boolean | null
    userId?: BigIntNullableWithAggregatesFilter<"Experiences"> | bigint | number | null
  }

  export type ProjectsWhereInput = {
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    id?: BigIntFilter<"Projects"> | bigint | number
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    start?: DateTimeFilter<"Projects"> | Date | string
    end?: DateTimeNullableFilter<"Projects"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Projects"> | boolean | null
    userId?: BigIntNullableFilter<"Projects"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ProjectsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    iscurrent?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ProjectsWhereInput | ProjectsWhereInput[]
    OR?: ProjectsWhereInput[]
    NOT?: ProjectsWhereInput | ProjectsWhereInput[]
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    start?: DateTimeFilter<"Projects"> | Date | string
    end?: DateTimeNullableFilter<"Projects"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Projects"> | boolean | null
    userId?: BigIntNullableFilter<"Projects"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ProjectsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    iscurrent?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _avg?: ProjectsAvgOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
    _sum?: ProjectsSumOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    OR?: ProjectsScalarWhereWithAggregatesInput[]
    NOT?: ProjectsScalarWhereWithAggregatesInput | ProjectsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Projects"> | bigint | number
    name?: StringWithAggregatesFilter<"Projects"> | string
    description?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    start?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"Projects"> | Date | string | null
    iscurrent?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
    userId?: BigIntNullableWithAggregatesFilter<"Projects"> | bigint | number | null
  }

  export type ReferecesWhereInput = {
    AND?: ReferecesWhereInput | ReferecesWhereInput[]
    OR?: ReferecesWhereInput[]
    NOT?: ReferecesWhereInput | ReferecesWhereInput[]
    id?: BigIntFilter<"Refereces"> | bigint | number
    description?: StringFilter<"Refereces"> | string
    value?: FloatFilter<"Refereces"> | number
    userId?: BigIntNullableFilter<"Refereces"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ReferecesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReferecesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReferecesWhereInput | ReferecesWhereInput[]
    OR?: ReferecesWhereInput[]
    NOT?: ReferecesWhereInput | ReferecesWhereInput[]
    description?: StringFilter<"Refereces"> | string
    value?: FloatFilter<"Refereces"> | number
    userId?: BigIntNullableFilter<"Refereces"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReferecesOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ReferecesCountOrderByAggregateInput
    _avg?: ReferecesAvgOrderByAggregateInput
    _max?: ReferecesMaxOrderByAggregateInput
    _min?: ReferecesMinOrderByAggregateInput
    _sum?: ReferecesSumOrderByAggregateInput
  }

  export type ReferecesScalarWhereWithAggregatesInput = {
    AND?: ReferecesScalarWhereWithAggregatesInput | ReferecesScalarWhereWithAggregatesInput[]
    OR?: ReferecesScalarWhereWithAggregatesInput[]
    NOT?: ReferecesScalarWhereWithAggregatesInput | ReferecesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Refereces"> | bigint | number
    description?: StringWithAggregatesFilter<"Refereces"> | string
    value?: FloatWithAggregatesFilter<"Refereces"> | number
    userId?: BigIntNullableWithAggregatesFilter<"Refereces"> | bigint | number | null
  }

  export type ReferecePricesWhereInput = {
    AND?: ReferecePricesWhereInput | ReferecePricesWhereInput[]
    OR?: ReferecePricesWhereInput[]
    NOT?: ReferecePricesWhereInput | ReferecePricesWhereInput[]
    id?: BigIntFilter<"ReferecePrices"> | bigint | number
    name?: StringFilter<"ReferecePrices"> | string
    description?: StringFilter<"ReferecePrices"> | string
    contacts?: StringFilter<"ReferecePrices"> | string
    userId?: BigIntNullableFilter<"ReferecePrices"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ReferecePricesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contacts?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReferecePricesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: ReferecePricesWhereInput | ReferecePricesWhereInput[]
    OR?: ReferecePricesWhereInput[]
    NOT?: ReferecePricesWhereInput | ReferecePricesWhereInput[]
    name?: StringFilter<"ReferecePrices"> | string
    description?: StringFilter<"ReferecePrices"> | string
    contacts?: StringFilter<"ReferecePrices"> | string
    userId?: BigIntNullableFilter<"ReferecePrices"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReferecePricesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contacts?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: ReferecePricesCountOrderByAggregateInput
    _avg?: ReferecePricesAvgOrderByAggregateInput
    _max?: ReferecePricesMaxOrderByAggregateInput
    _min?: ReferecePricesMinOrderByAggregateInput
    _sum?: ReferecePricesSumOrderByAggregateInput
  }

  export type ReferecePricesScalarWhereWithAggregatesInput = {
    AND?: ReferecePricesScalarWhereWithAggregatesInput | ReferecePricesScalarWhereWithAggregatesInput[]
    OR?: ReferecePricesScalarWhereWithAggregatesInput[]
    NOT?: ReferecePricesScalarWhereWithAggregatesInput | ReferecePricesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ReferecePrices"> | bigint | number
    name?: StringWithAggregatesFilter<"ReferecePrices"> | string
    description?: StringWithAggregatesFilter<"ReferecePrices"> | string
    contacts?: StringWithAggregatesFilter<"ReferecePrices"> | string
    userId?: BigIntNullableWithAggregatesFilter<"ReferecePrices"> | bigint | number | null
  }

  export type UserPointsWhereInput = {
    AND?: UserPointsWhereInput | UserPointsWhereInput[]
    OR?: UserPointsWhereInput[]
    NOT?: UserPointsWhereInput | UserPointsWhereInput[]
    id?: BigIntFilter<"UserPoints"> | bigint | number
    value?: BigIntFilter<"UserPoints"> | bigint | number
    userId?: BigIntNullableFilter<"UserPoints"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type UserPointsOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: UserPointsWhereInput | UserPointsWhereInput[]
    OR?: UserPointsWhereInput[]
    NOT?: UserPointsWhereInput | UserPointsWhereInput[]
    value?: BigIntFilter<"UserPoints"> | bigint | number
    userId?: BigIntNullableFilter<"UserPoints"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type UserPointsOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: UserPointsCountOrderByAggregateInput
    _avg?: UserPointsAvgOrderByAggregateInput
    _max?: UserPointsMaxOrderByAggregateInput
    _min?: UserPointsMinOrderByAggregateInput
    _sum?: UserPointsSumOrderByAggregateInput
  }

  export type UserPointsScalarWhereWithAggregatesInput = {
    AND?: UserPointsScalarWhereWithAggregatesInput | UserPointsScalarWhereWithAggregatesInput[]
    OR?: UserPointsScalarWhereWithAggregatesInput[]
    NOT?: UserPointsScalarWhereWithAggregatesInput | UserPointsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"UserPoints"> | bigint | number
    value?: BigIntWithAggregatesFilter<"UserPoints"> | bigint | number
    userId?: BigIntNullableWithAggregatesFilter<"UserPoints"> | bigint | number | null
  }

  export type FeedWhereInput = {
    AND?: FeedWhereInput | FeedWhereInput[]
    OR?: FeedWhereInput[]
    NOT?: FeedWhereInput | FeedWhereInput[]
    id?: BigIntFilter<"Feed"> | bigint | number
    title?: StringFilter<"Feed"> | string
    img?: StringNullableFilter<"Feed"> | string | null
    description?: StringNullableFilter<"Feed"> | string | null
    react_positive?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_negative?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_smile?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_lovely?: BigIntNullableFilter<"Feed"> | bigint | number | null
    userId?: BigIntNullableFilter<"Feed"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type FeedOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    react_positive?: SortOrderInput | SortOrder
    react_negative?: SortOrderInput | SortOrder
    react_smile?: SortOrderInput | SortOrder
    react_lovely?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FeedWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FeedWhereInput | FeedWhereInput[]
    OR?: FeedWhereInput[]
    NOT?: FeedWhereInput | FeedWhereInput[]
    title?: StringFilter<"Feed"> | string
    img?: StringNullableFilter<"Feed"> | string | null
    description?: StringNullableFilter<"Feed"> | string | null
    react_positive?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_negative?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_smile?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_lovely?: BigIntNullableFilter<"Feed"> | bigint | number | null
    userId?: BigIntNullableFilter<"Feed"> | bigint | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type FeedOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    react_positive?: SortOrderInput | SortOrder
    react_negative?: SortOrderInput | SortOrder
    react_smile?: SortOrderInput | SortOrder
    react_lovely?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: FeedCountOrderByAggregateInput
    _avg?: FeedAvgOrderByAggregateInput
    _max?: FeedMaxOrderByAggregateInput
    _min?: FeedMinOrderByAggregateInput
    _sum?: FeedSumOrderByAggregateInput
  }

  export type FeedScalarWhereWithAggregatesInput = {
    AND?: FeedScalarWhereWithAggregatesInput | FeedScalarWhereWithAggregatesInput[]
    OR?: FeedScalarWhereWithAggregatesInput[]
    NOT?: FeedScalarWhereWithAggregatesInput | FeedScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"Feed"> | bigint | number
    title?: StringWithAggregatesFilter<"Feed"> | string
    img?: StringNullableWithAggregatesFilter<"Feed"> | string | null
    description?: StringNullableWithAggregatesFilter<"Feed"> | string | null
    react_positive?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    react_negative?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    react_smile?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    react_lovely?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    userId?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
  }

  export type FeedCommentsWhereInput = {
    AND?: FeedCommentsWhereInput | FeedCommentsWhereInput[]
    OR?: FeedCommentsWhereInput[]
    NOT?: FeedCommentsWhereInput | FeedCommentsWhereInput[]
    id?: BigIntFilter<"FeedComments"> | bigint | number
    comment?: StringFilter<"FeedComments"> | string
    userId?: BigIntFilter<"FeedComments"> | bigint | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type FeedCommentsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FeedCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: FeedCommentsWhereInput | FeedCommentsWhereInput[]
    OR?: FeedCommentsWhereInput[]
    NOT?: FeedCommentsWhereInput | FeedCommentsWhereInput[]
    comment?: StringFilter<"FeedComments"> | string
    userId?: BigIntFilter<"FeedComments"> | bigint | number
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type FeedCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    _count?: FeedCommentsCountOrderByAggregateInput
    _avg?: FeedCommentsAvgOrderByAggregateInput
    _max?: FeedCommentsMaxOrderByAggregateInput
    _min?: FeedCommentsMinOrderByAggregateInput
    _sum?: FeedCommentsSumOrderByAggregateInput
  }

  export type FeedCommentsScalarWhereWithAggregatesInput = {
    AND?: FeedCommentsScalarWhereWithAggregatesInput | FeedCommentsScalarWhereWithAggregatesInput[]
    OR?: FeedCommentsScalarWhereWithAggregatesInput[]
    NOT?: FeedCommentsScalarWhereWithAggregatesInput | FeedCommentsScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"FeedComments"> | bigint | number
    comment?: StringWithAggregatesFilter<"FeedComments"> | string
    userId?: BigIntWithAggregatesFilter<"FeedComments"> | bigint | number
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: bigint | number
    email: string
    password: string
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type PerfilCreateInput = {
    id?: bigint | number
    photo?: string | null
    name?: string | null
    secondname?: string | null
    socialname?: string | null
    birthday?: Date | string | null
    user?: UserCreateNestedOneWithoutPerfilInput
  }

  export type PerfilUncheckedCreateInput = {
    id?: bigint | number
    photo?: string | null
    name?: string | null
    secondname?: string | null
    socialname?: string | null
    birthday?: Date | string | null
    userId?: bigint | number | null
  }

  export type PerfilUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutPerfilNestedInput
  }

  export type PerfilUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type PerfilCreateManyInput = {
    id?: bigint | number
    photo?: string | null
    name?: string | null
    secondname?: string | null
    socialname?: string | null
    birthday?: Date | string | null
    userId?: bigint | number | null
  }

  export type PerfilUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PerfilUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type AddresCreateInput = {
    id?: bigint | number
    address?: string | null
    complement?: string | null
    state?: string | null
    country?: string | null
    user?: UserCreateNestedOneWithoutAddresInput
  }

  export type AddresUncheckedCreateInput = {
    id?: bigint | number
    address?: string | null
    complement?: string | null
    state?: string | null
    country?: string | null
    userId?: bigint | number | null
  }

  export type AddresUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutAddresNestedInput
  }

  export type AddresUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type AddresCreateManyInput = {
    id?: bigint | number
    address?: string | null
    complement?: string | null
    state?: string | null
    country?: string | null
    userId?: bigint | number | null
  }

  export type AddresUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddresUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ContactCreateInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    user?: UserCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    userId?: bigint | number | null
  }

  export type ContactUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ContactCreateManyInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    userId?: bigint | number | null
  }

  export type ContactUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type KnowledgespaceCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    degree?: DegreeCreateNestedManyWithoutKnowledgespaceInput
  }

  export type KnowledgespaceUncheckedCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    degree?: DegreeUncheckedCreateNestedManyWithoutKnowledgespaceInput
  }

  export type KnowledgespaceUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: DegreeUpdateManyWithoutKnowledgespaceNestedInput
  }

  export type KnowledgespaceUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    degree?: DegreeUncheckedUpdateManyWithoutKnowledgespaceNestedInput
  }

  export type KnowledgespaceCreateManyInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
  }

  export type KnowledgespaceUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KnowledgespaceUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DegreeCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    Knowledgespace?: KnowledgespaceCreateNestedOneWithoutDegreeInput
    user?: UserCreateNestedOneWithoutDegreeInput
  }

  export type DegreeUncheckedCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    KnowledgespaceId?: bigint | number | null
    userId?: bigint | number | null
  }

  export type DegreeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Knowledgespace?: KnowledgespaceUpdateOneWithoutDegreeNestedInput
    user?: UserUpdateOneWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    KnowledgespaceId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DegreeCreateManyInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    KnowledgespaceId?: bigint | number | null
    userId?: bigint | number | null
  }

  export type DegreeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DegreeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    KnowledgespaceId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SkillsCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    user?: UserCreateNestedOneWithoutSkillsInput
  }

  export type SkillsUncheckedCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    userId?: bigint | number | null
  }

  export type SkillsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutSkillsNestedInput
  }

  export type SkillsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SkillsCreateManyInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    userId?: bigint | number | null
  }

  export type SkillsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ExperiencesCreateInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    user?: UserCreateNestedOneWithoutExperiencesInput
  }

  export type ExperiencesUncheckedCreateInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    userId?: bigint | number | null
  }

  export type ExperiencesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneWithoutExperiencesNestedInput
  }

  export type ExperiencesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ExperiencesCreateManyInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    userId?: bigint | number | null
  }

  export type ExperiencesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ExperiencesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ProjectsCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    user?: UserCreateNestedOneWithoutProjectsInput
  }

  export type ProjectsUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    userId?: bigint | number | null
  }

  export type ProjectsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    user?: UserUpdateOneWithoutProjectsNestedInput
  }

  export type ProjectsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ProjectsCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    userId?: bigint | number | null
  }

  export type ProjectsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ReferecesCreateInput = {
    id?: bigint | number
    description: string
    value: number
    user?: UserCreateNestedOneWithoutReferecesInput
  }

  export type ReferecesUncheckedCreateInput = {
    id?: bigint | number
    description: string
    value: number
    userId?: bigint | number | null
  }

  export type ReferecesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    user?: UserUpdateOneWithoutReferecesNestedInput
  }

  export type ReferecesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ReferecesCreateManyInput = {
    id?: bigint | number
    description: string
    value: number
    userId?: bigint | number | null
  }

  export type ReferecesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ReferecesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ReferecePricesCreateInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    user?: UserCreateNestedOneWithoutReferecePricesInput
  }

  export type ReferecePricesUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    userId?: bigint | number | null
  }

  export type ReferecePricesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutReferecePricesNestedInput
  }

  export type ReferecePricesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type ReferecePricesCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    userId?: bigint | number | null
  }

  export type ReferecePricesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
  }

  export type ReferecePricesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type UserPointsCreateInput = {
    id?: bigint | number
    value: bigint | number
    user?: UserCreateNestedOneWithoutUserPointsInput
  }

  export type UserPointsUncheckedCreateInput = {
    id?: bigint | number
    value: bigint | number
    userId?: bigint | number | null
  }

  export type UserPointsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    user?: UserUpdateOneWithoutUserPointsNestedInput
  }

  export type UserPointsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type UserPointsCreateManyInput = {
    id?: bigint | number
    value: bigint | number
    userId?: bigint | number | null
  }

  export type UserPointsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserPointsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type FeedCreateInput = {
    id?: bigint | number
    title: string
    img?: string | null
    description?: string | null
    react_positive?: bigint | number | null
    react_negative?: bigint | number | null
    react_smile?: bigint | number | null
    react_lovely?: bigint | number | null
    user?: UserCreateNestedOneWithoutFeedsInput
  }

  export type FeedUncheckedCreateInput = {
    id?: bigint | number
    title: string
    img?: string | null
    description?: string | null
    react_positive?: bigint | number | null
    react_negative?: bigint | number | null
    react_smile?: bigint | number | null
    react_lovely?: bigint | number | null
    userId?: bigint | number | null
  }

  export type FeedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    react_positive?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_negative?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_smile?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_lovely?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    user?: UserUpdateOneWithoutFeedsNestedInput
  }

  export type FeedUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    react_positive?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_negative?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_smile?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_lovely?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type FeedCreateManyInput = {
    id?: bigint | number
    title: string
    img?: string | null
    description?: string | null
    react_positive?: bigint | number | null
    react_negative?: bigint | number | null
    react_smile?: bigint | number | null
    react_lovely?: bigint | number | null
    userId?: bigint | number | null
  }

  export type FeedUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    react_positive?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_negative?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_smile?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_lovely?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type FeedUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    react_positive?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_negative?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_smile?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_lovely?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type FeedCommentsCreateInput = {
    id?: bigint | number
    comment: string
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type FeedCommentsUncheckedCreateInput = {
    id?: bigint | number
    comment: string
    userId: bigint | number
  }

  export type FeedCommentsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type FeedCommentsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FeedCommentsCreateManyInput = {
    id?: bigint | number
    comment: string
    userId: bigint | number
  }

  export type FeedCommentsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FeedCommentsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type PerfilNullableRelationFilter = {
    is?: PerfilWhereInput | null
    isNot?: PerfilWhereInput | null
  }

  export type AddresListRelationFilter = {
    every?: AddresWhereInput
    some?: AddresWhereInput
    none?: AddresWhereInput
  }

  export type ContactListRelationFilter = {
    every?: ContactWhereInput
    some?: ContactWhereInput
    none?: ContactWhereInput
  }

  export type DegreeListRelationFilter = {
    every?: DegreeWhereInput
    some?: DegreeWhereInput
    none?: DegreeWhereInput
  }

  export type SkillsListRelationFilter = {
    every?: SkillsWhereInput
    some?: SkillsWhereInput
    none?: SkillsWhereInput
  }

  export type ExperiencesListRelationFilter = {
    every?: ExperiencesWhereInput
    some?: ExperiencesWhereInput
    none?: ExperiencesWhereInput
  }

  export type ProjectsListRelationFilter = {
    every?: ProjectsWhereInput
    some?: ProjectsWhereInput
    none?: ProjectsWhereInput
  }

  export type ReferecePricesListRelationFilter = {
    every?: ReferecePricesWhereInput
    some?: ReferecePricesWhereInput
    none?: ReferecePricesWhereInput
  }

  export type ReferecesListRelationFilter = {
    every?: ReferecesWhereInput
    some?: ReferecesWhereInput
    none?: ReferecesWhereInput
  }

  export type UserPointsListRelationFilter = {
    every?: UserPointsWhereInput
    some?: UserPointsWhereInput
    none?: UserPointsWhereInput
  }

  export type FeedListRelationFilter = {
    every?: FeedWhereInput
    some?: FeedWhereInput
    none?: FeedWhereInput
  }

  export type FeedCommentsListRelationFilter = {
    every?: FeedCommentsWhereInput
    some?: FeedCommentsWhereInput
    none?: FeedCommentsWhereInput
  }

  export type AddresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DegreeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SkillsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExperiencesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferecePricesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReferecesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserPointsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FeedCommentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    secondname?: SortOrder
    socialname?: SortOrder
    birthday?: SortOrder
    userId?: SortOrder
  }

  export type PerfilAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PerfilMaxOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    secondname?: SortOrder
    socialname?: SortOrder
    birthday?: SortOrder
    userId?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    secondname?: SortOrder
    socialname?: SortOrder
    birthday?: SortOrder
    userId?: SortOrder
  }

  export type PerfilSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type AddresCountOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    complement?: SortOrder
    state?: SortOrder
    country?: SortOrder
    userId?: SortOrder
  }

  export type AddresAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddresMaxOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    complement?: SortOrder
    state?: SortOrder
    country?: SortOrder
    userId?: SortOrder
  }

  export type AddresMinOrderByAggregateInput = {
    id?: SortOrder
    address?: SortOrder
    complement?: SortOrder
    state?: SortOrder
    country?: SortOrder
    userId?: SortOrder
  }

  export type AddresSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    another?: SortOrder
    userId?: SortOrder
  }

  export type ContactAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    another?: SortOrder
    userId?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    another?: SortOrder
    userId?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type KnowledgespaceCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type KnowledgespaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KnowledgespaceMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type KnowledgespaceMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
  }

  export type KnowledgespaceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KnowledgespaceNullableRelationFilter = {
    is?: KnowledgespaceWhereInput | null
    isNot?: KnowledgespaceWhereInput | null
  }

  export type DegreeCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    KnowledgespaceId?: SortOrder
    userId?: SortOrder
  }

  export type DegreeAvgOrderByAggregateInput = {
    id?: SortOrder
    KnowledgespaceId?: SortOrder
    userId?: SortOrder
  }

  export type DegreeMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    KnowledgespaceId?: SortOrder
    userId?: SortOrder
  }

  export type DegreeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    KnowledgespaceId?: SortOrder
    userId?: SortOrder
  }

  export type DegreeSumOrderByAggregateInput = {
    id?: SortOrder
    KnowledgespaceId?: SortOrder
    userId?: SortOrder
  }

  export type SkillsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type SkillsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type SkillsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type SkillsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    userId?: SortOrder
  }

  export type SkillsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type ExperiencesCountOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    start?: SortOrder
    end?: SortOrder
    iscurrent?: SortOrder
    userId?: SortOrder
  }

  export type ExperiencesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ExperiencesMaxOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    start?: SortOrder
    end?: SortOrder
    iscurrent?: SortOrder
    userId?: SortOrder
  }

  export type ExperiencesMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    start?: SortOrder
    end?: SortOrder
    iscurrent?: SortOrder
    userId?: SortOrder
  }

  export type ExperiencesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type ProjectsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start?: SortOrder
    end?: SortOrder
    iscurrent?: SortOrder
    userId?: SortOrder
  }

  export type ProjectsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ProjectsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start?: SortOrder
    end?: SortOrder
    iscurrent?: SortOrder
    userId?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start?: SortOrder
    end?: SortOrder
    iscurrent?: SortOrder
    userId?: SortOrder
  }

  export type ProjectsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ReferecesCountOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ReferecesAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ReferecesMaxOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ReferecesMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type ReferecesSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ReferecePricesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contacts?: SortOrder
    userId?: SortOrder
  }

  export type ReferecePricesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ReferecePricesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contacts?: SortOrder
    userId?: SortOrder
  }

  export type ReferecePricesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contacts?: SortOrder
    userId?: SortOrder
  }

  export type ReferecePricesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserPointsCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type UserPointsAvgOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type UserPointsMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type UserPointsMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type UserPointsSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type FeedCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    description?: SortOrder
    react_positive?: SortOrder
    react_negative?: SortOrder
    react_smile?: SortOrder
    react_lovely?: SortOrder
    userId?: SortOrder
  }

  export type FeedAvgOrderByAggregateInput = {
    id?: SortOrder
    react_positive?: SortOrder
    react_negative?: SortOrder
    react_smile?: SortOrder
    react_lovely?: SortOrder
    userId?: SortOrder
  }

  export type FeedMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    description?: SortOrder
    react_positive?: SortOrder
    react_negative?: SortOrder
    react_smile?: SortOrder
    react_lovely?: SortOrder
    userId?: SortOrder
  }

  export type FeedMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    img?: SortOrder
    description?: SortOrder
    react_positive?: SortOrder
    react_negative?: SortOrder
    react_smile?: SortOrder
    react_lovely?: SortOrder
    userId?: SortOrder
  }

  export type FeedSumOrderByAggregateInput = {
    id?: SortOrder
    react_positive?: SortOrder
    react_negative?: SortOrder
    react_smile?: SortOrder
    react_lovely?: SortOrder
    userId?: SortOrder
  }

  export type FeedCommentsCountOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type FeedCommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FeedCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type FeedCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
  }

  export type FeedCommentsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type PerfilCreateNestedOneWithoutUserInput = {
    create?: XOR<PerfilCreateWithoutUserInput, PerfilUncheckedCreateWithoutUserInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUserInput
    connect?: PerfilWhereUniqueInput
  }

  export type AddresCreateNestedManyWithoutUserInput = {
    create?: XOR<AddresCreateWithoutUserInput, AddresUncheckedCreateWithoutUserInput> | AddresCreateWithoutUserInput[] | AddresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddresCreateOrConnectWithoutUserInput | AddresCreateOrConnectWithoutUserInput[]
    createMany?: AddresCreateManyUserInputEnvelope
    connect?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
  }

  export type ContactCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type DegreeCreateNestedManyWithoutUserInput = {
    create?: XOR<DegreeCreateWithoutUserInput, DegreeUncheckedCreateWithoutUserInput> | DegreeCreateWithoutUserInput[] | DegreeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DegreeCreateOrConnectWithoutUserInput | DegreeCreateOrConnectWithoutUserInput[]
    createMany?: DegreeCreateManyUserInputEnvelope
    connect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
  }

  export type SkillsCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput> | SkillsCreateWithoutUserInput[] | SkillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutUserInput | SkillsCreateOrConnectWithoutUserInput[]
    createMany?: SkillsCreateManyUserInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type ExperiencesCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperiencesCreateWithoutUserInput, ExperiencesUncheckedCreateWithoutUserInput> | ExperiencesCreateWithoutUserInput[] | ExperiencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperiencesCreateOrConnectWithoutUserInput | ExperiencesCreateOrConnectWithoutUserInput[]
    createMany?: ExperiencesCreateManyUserInputEnvelope
    connect?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
  }

  export type ProjectsCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ReferecePricesCreateNestedManyWithoutUserInput = {
    create?: XOR<ReferecePricesCreateWithoutUserInput, ReferecePricesUncheckedCreateWithoutUserInput> | ReferecePricesCreateWithoutUserInput[] | ReferecePricesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferecePricesCreateOrConnectWithoutUserInput | ReferecePricesCreateOrConnectWithoutUserInput[]
    createMany?: ReferecePricesCreateManyUserInputEnvelope
    connect?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
  }

  export type ReferecesCreateNestedManyWithoutUserInput = {
    create?: XOR<ReferecesCreateWithoutUserInput, ReferecesUncheckedCreateWithoutUserInput> | ReferecesCreateWithoutUserInput[] | ReferecesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferecesCreateOrConnectWithoutUserInput | ReferecesCreateOrConnectWithoutUserInput[]
    createMany?: ReferecesCreateManyUserInputEnvelope
    connect?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
  }

  export type UserPointsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPointsCreateWithoutUserInput, UserPointsUncheckedCreateWithoutUserInput> | UserPointsCreateWithoutUserInput[] | UserPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointsCreateOrConnectWithoutUserInput | UserPointsCreateOrConnectWithoutUserInput[]
    createMany?: UserPointsCreateManyUserInputEnvelope
    connect?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
  }

  export type FeedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput> | FeedCreateWithoutUserInput[] | FeedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutUserInput | FeedCreateOrConnectWithoutUserInput[]
    createMany?: FeedCreateManyUserInputEnvelope
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
  }

  export type FeedCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedCommentsCreateWithoutUserInput, FeedCommentsUncheckedCreateWithoutUserInput> | FeedCommentsCreateWithoutUserInput[] | FeedCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedCommentsCreateOrConnectWithoutUserInput | FeedCommentsCreateOrConnectWithoutUserInput[]
    createMany?: FeedCommentsCreateManyUserInputEnvelope
    connect?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
  }

  export type PerfilUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PerfilCreateWithoutUserInput, PerfilUncheckedCreateWithoutUserInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUserInput
    connect?: PerfilWhereUniqueInput
  }

  export type AddresUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AddresCreateWithoutUserInput, AddresUncheckedCreateWithoutUserInput> | AddresCreateWithoutUserInput[] | AddresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddresCreateOrConnectWithoutUserInput | AddresCreateOrConnectWithoutUserInput[]
    createMany?: AddresCreateManyUserInputEnvelope
    connect?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
  }

  export type ContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
  }

  export type DegreeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DegreeCreateWithoutUserInput, DegreeUncheckedCreateWithoutUserInput> | DegreeCreateWithoutUserInput[] | DegreeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DegreeCreateOrConnectWithoutUserInput | DegreeCreateOrConnectWithoutUserInput[]
    createMany?: DegreeCreateManyUserInputEnvelope
    connect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
  }

  export type SkillsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput> | SkillsCreateWithoutUserInput[] | SkillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutUserInput | SkillsCreateOrConnectWithoutUserInput[]
    createMany?: SkillsCreateManyUserInputEnvelope
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
  }

  export type ExperiencesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExperiencesCreateWithoutUserInput, ExperiencesUncheckedCreateWithoutUserInput> | ExperiencesCreateWithoutUserInput[] | ExperiencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperiencesCreateOrConnectWithoutUserInput | ExperiencesCreateOrConnectWithoutUserInput[]
    createMany?: ExperiencesCreateManyUserInputEnvelope
    connect?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
  }

  export type ProjectsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
  }

  export type ReferecePricesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReferecePricesCreateWithoutUserInput, ReferecePricesUncheckedCreateWithoutUserInput> | ReferecePricesCreateWithoutUserInput[] | ReferecePricesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferecePricesCreateOrConnectWithoutUserInput | ReferecePricesCreateOrConnectWithoutUserInput[]
    createMany?: ReferecePricesCreateManyUserInputEnvelope
    connect?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
  }

  export type ReferecesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReferecesCreateWithoutUserInput, ReferecesUncheckedCreateWithoutUserInput> | ReferecesCreateWithoutUserInput[] | ReferecesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferecesCreateOrConnectWithoutUserInput | ReferecesCreateOrConnectWithoutUserInput[]
    createMany?: ReferecesCreateManyUserInputEnvelope
    connect?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
  }

  export type UserPointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserPointsCreateWithoutUserInput, UserPointsUncheckedCreateWithoutUserInput> | UserPointsCreateWithoutUserInput[] | UserPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointsCreateOrConnectWithoutUserInput | UserPointsCreateOrConnectWithoutUserInput[]
    createMany?: UserPointsCreateManyUserInputEnvelope
    connect?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
  }

  export type FeedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput> | FeedCreateWithoutUserInput[] | FeedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutUserInput | FeedCreateOrConnectWithoutUserInput[]
    createMany?: FeedCreateManyUserInputEnvelope
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
  }

  export type FeedCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FeedCommentsCreateWithoutUserInput, FeedCommentsUncheckedCreateWithoutUserInput> | FeedCommentsCreateWithoutUserInput[] | FeedCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedCommentsCreateOrConnectWithoutUserInput | FeedCommentsCreateOrConnectWithoutUserInput[]
    createMany?: FeedCommentsCreateManyUserInputEnvelope
    connect?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type PerfilUpdateOneWithoutUserNestedInput = {
    create?: XOR<PerfilCreateWithoutUserInput, PerfilUncheckedCreateWithoutUserInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUserInput
    upsert?: PerfilUpsertWithoutUserInput
    disconnect?: PerfilWhereInput | boolean
    delete?: PerfilWhereInput | boolean
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUserInput, PerfilUpdateWithoutUserInput>, PerfilUncheckedUpdateWithoutUserInput>
  }

  export type AddresUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddresCreateWithoutUserInput, AddresUncheckedCreateWithoutUserInput> | AddresCreateWithoutUserInput[] | AddresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddresCreateOrConnectWithoutUserInput | AddresCreateOrConnectWithoutUserInput[]
    upsert?: AddresUpsertWithWhereUniqueWithoutUserInput | AddresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddresCreateManyUserInputEnvelope
    set?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
    disconnect?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
    delete?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
    connect?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
    update?: AddresUpdateWithWhereUniqueWithoutUserInput | AddresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddresUpdateManyWithWhereWithoutUserInput | AddresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddresScalarWhereInput | AddresScalarWhereInput[]
  }

  export type ContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput | ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUserInput | ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUserInput | ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type DegreeUpdateManyWithoutUserNestedInput = {
    create?: XOR<DegreeCreateWithoutUserInput, DegreeUncheckedCreateWithoutUserInput> | DegreeCreateWithoutUserInput[] | DegreeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DegreeCreateOrConnectWithoutUserInput | DegreeCreateOrConnectWithoutUserInput[]
    upsert?: DegreeUpsertWithWhereUniqueWithoutUserInput | DegreeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DegreeCreateManyUserInputEnvelope
    set?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    disconnect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    delete?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    connect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    update?: DegreeUpdateWithWhereUniqueWithoutUserInput | DegreeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DegreeUpdateManyWithWhereWithoutUserInput | DegreeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DegreeScalarWhereInput | DegreeScalarWhereInput[]
  }

  export type SkillsUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput> | SkillsCreateWithoutUserInput[] | SkillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutUserInput | SkillsCreateOrConnectWithoutUserInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutUserInput | SkillsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillsCreateManyUserInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutUserInput | SkillsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutUserInput | SkillsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type ExperiencesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperiencesCreateWithoutUserInput, ExperiencesUncheckedCreateWithoutUserInput> | ExperiencesCreateWithoutUserInput[] | ExperiencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperiencesCreateOrConnectWithoutUserInput | ExperiencesCreateOrConnectWithoutUserInput[]
    upsert?: ExperiencesUpsertWithWhereUniqueWithoutUserInput | ExperiencesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperiencesCreateManyUserInputEnvelope
    set?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
    disconnect?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
    delete?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
    connect?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
    update?: ExperiencesUpdateWithWhereUniqueWithoutUserInput | ExperiencesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperiencesUpdateManyWithWhereWithoutUserInput | ExperiencesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperiencesScalarWhereInput | ExperiencesScalarWhereInput[]
  }

  export type ProjectsUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutUserInput | ProjectsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutUserInput | ProjectsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutUserInput | ProjectsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ReferecePricesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReferecePricesCreateWithoutUserInput, ReferecePricesUncheckedCreateWithoutUserInput> | ReferecePricesCreateWithoutUserInput[] | ReferecePricesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferecePricesCreateOrConnectWithoutUserInput | ReferecePricesCreateOrConnectWithoutUserInput[]
    upsert?: ReferecePricesUpsertWithWhereUniqueWithoutUserInput | ReferecePricesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReferecePricesCreateManyUserInputEnvelope
    set?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
    disconnect?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
    delete?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
    connect?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
    update?: ReferecePricesUpdateWithWhereUniqueWithoutUserInput | ReferecePricesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReferecePricesUpdateManyWithWhereWithoutUserInput | ReferecePricesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReferecePricesScalarWhereInput | ReferecePricesScalarWhereInput[]
  }

  export type ReferecesUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReferecesCreateWithoutUserInput, ReferecesUncheckedCreateWithoutUserInput> | ReferecesCreateWithoutUserInput[] | ReferecesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferecesCreateOrConnectWithoutUserInput | ReferecesCreateOrConnectWithoutUserInput[]
    upsert?: ReferecesUpsertWithWhereUniqueWithoutUserInput | ReferecesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReferecesCreateManyUserInputEnvelope
    set?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
    disconnect?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
    delete?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
    connect?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
    update?: ReferecesUpdateWithWhereUniqueWithoutUserInput | ReferecesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReferecesUpdateManyWithWhereWithoutUserInput | ReferecesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReferecesScalarWhereInput | ReferecesScalarWhereInput[]
  }

  export type UserPointsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPointsCreateWithoutUserInput, UserPointsUncheckedCreateWithoutUserInput> | UserPointsCreateWithoutUserInput[] | UserPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointsCreateOrConnectWithoutUserInput | UserPointsCreateOrConnectWithoutUserInput[]
    upsert?: UserPointsUpsertWithWhereUniqueWithoutUserInput | UserPointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPointsCreateManyUserInputEnvelope
    set?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
    disconnect?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
    delete?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
    connect?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
    update?: UserPointsUpdateWithWhereUniqueWithoutUserInput | UserPointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPointsUpdateManyWithWhereWithoutUserInput | UserPointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPointsScalarWhereInput | UserPointsScalarWhereInput[]
  }

  export type FeedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput> | FeedCreateWithoutUserInput[] | FeedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutUserInput | FeedCreateOrConnectWithoutUserInput[]
    upsert?: FeedUpsertWithWhereUniqueWithoutUserInput | FeedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedCreateManyUserInputEnvelope
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    update?: FeedUpdateWithWhereUniqueWithoutUserInput | FeedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedUpdateManyWithWhereWithoutUserInput | FeedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[]
  }

  export type FeedCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedCommentsCreateWithoutUserInput, FeedCommentsUncheckedCreateWithoutUserInput> | FeedCommentsCreateWithoutUserInput[] | FeedCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedCommentsCreateOrConnectWithoutUserInput | FeedCommentsCreateOrConnectWithoutUserInput[]
    upsert?: FeedCommentsUpsertWithWhereUniqueWithoutUserInput | FeedCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedCommentsCreateManyUserInputEnvelope
    set?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
    disconnect?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
    delete?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
    connect?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
    update?: FeedCommentsUpdateWithWhereUniqueWithoutUserInput | FeedCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedCommentsUpdateManyWithWhereWithoutUserInput | FeedCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedCommentsScalarWhereInput | FeedCommentsScalarWhereInput[]
  }

  export type PerfilUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PerfilCreateWithoutUserInput, PerfilUncheckedCreateWithoutUserInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUserInput
    upsert?: PerfilUpsertWithoutUserInput
    disconnect?: PerfilWhereInput | boolean
    delete?: PerfilWhereInput | boolean
    connect?: PerfilWhereUniqueInput
    update?: XOR<XOR<PerfilUpdateToOneWithWhereWithoutUserInput, PerfilUpdateWithoutUserInput>, PerfilUncheckedUpdateWithoutUserInput>
  }

  export type AddresUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AddresCreateWithoutUserInput, AddresUncheckedCreateWithoutUserInput> | AddresCreateWithoutUserInput[] | AddresUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AddresCreateOrConnectWithoutUserInput | AddresCreateOrConnectWithoutUserInput[]
    upsert?: AddresUpsertWithWhereUniqueWithoutUserInput | AddresUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AddresCreateManyUserInputEnvelope
    set?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
    disconnect?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
    delete?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
    connect?: AddresWhereUniqueInput | AddresWhereUniqueInput[]
    update?: AddresUpdateWithWhereUniqueWithoutUserInput | AddresUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AddresUpdateManyWithWhereWithoutUserInput | AddresUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AddresScalarWhereInput | AddresScalarWhereInput[]
  }

  export type ContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput> | ContactCreateWithoutUserInput[] | ContactUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ContactCreateOrConnectWithoutUserInput | ContactCreateOrConnectWithoutUserInput[]
    upsert?: ContactUpsertWithWhereUniqueWithoutUserInput | ContactUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ContactCreateManyUserInputEnvelope
    set?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    disconnect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    delete?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    connect?: ContactWhereUniqueInput | ContactWhereUniqueInput[]
    update?: ContactUpdateWithWhereUniqueWithoutUserInput | ContactUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ContactUpdateManyWithWhereWithoutUserInput | ContactUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ContactScalarWhereInput | ContactScalarWhereInput[]
  }

  export type DegreeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DegreeCreateWithoutUserInput, DegreeUncheckedCreateWithoutUserInput> | DegreeCreateWithoutUserInput[] | DegreeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DegreeCreateOrConnectWithoutUserInput | DegreeCreateOrConnectWithoutUserInput[]
    upsert?: DegreeUpsertWithWhereUniqueWithoutUserInput | DegreeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DegreeCreateManyUserInputEnvelope
    set?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    disconnect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    delete?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    connect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    update?: DegreeUpdateWithWhereUniqueWithoutUserInput | DegreeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DegreeUpdateManyWithWhereWithoutUserInput | DegreeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DegreeScalarWhereInput | DegreeScalarWhereInput[]
  }

  export type SkillsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput> | SkillsCreateWithoutUserInput[] | SkillsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SkillsCreateOrConnectWithoutUserInput | SkillsCreateOrConnectWithoutUserInput[]
    upsert?: SkillsUpsertWithWhereUniqueWithoutUserInput | SkillsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SkillsCreateManyUserInputEnvelope
    set?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    disconnect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    delete?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    connect?: SkillsWhereUniqueInput | SkillsWhereUniqueInput[]
    update?: SkillsUpdateWithWhereUniqueWithoutUserInput | SkillsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SkillsUpdateManyWithWhereWithoutUserInput | SkillsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
  }

  export type ExperiencesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExperiencesCreateWithoutUserInput, ExperiencesUncheckedCreateWithoutUserInput> | ExperiencesCreateWithoutUserInput[] | ExperiencesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExperiencesCreateOrConnectWithoutUserInput | ExperiencesCreateOrConnectWithoutUserInput[]
    upsert?: ExperiencesUpsertWithWhereUniqueWithoutUserInput | ExperiencesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExperiencesCreateManyUserInputEnvelope
    set?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
    disconnect?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
    delete?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
    connect?: ExperiencesWhereUniqueInput | ExperiencesWhereUniqueInput[]
    update?: ExperiencesUpdateWithWhereUniqueWithoutUserInput | ExperiencesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExperiencesUpdateManyWithWhereWithoutUserInput | ExperiencesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExperiencesScalarWhereInput | ExperiencesScalarWhereInput[]
  }

  export type ProjectsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput> | ProjectsCreateWithoutUserInput[] | ProjectsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProjectsCreateOrConnectWithoutUserInput | ProjectsCreateOrConnectWithoutUserInput[]
    upsert?: ProjectsUpsertWithWhereUniqueWithoutUserInput | ProjectsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProjectsCreateManyUserInputEnvelope
    set?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    disconnect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    delete?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    connect?: ProjectsWhereUniqueInput | ProjectsWhereUniqueInput[]
    update?: ProjectsUpdateWithWhereUniqueWithoutUserInput | ProjectsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProjectsUpdateManyWithWhereWithoutUserInput | ProjectsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
  }

  export type ReferecePricesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReferecePricesCreateWithoutUserInput, ReferecePricesUncheckedCreateWithoutUserInput> | ReferecePricesCreateWithoutUserInput[] | ReferecePricesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferecePricesCreateOrConnectWithoutUserInput | ReferecePricesCreateOrConnectWithoutUserInput[]
    upsert?: ReferecePricesUpsertWithWhereUniqueWithoutUserInput | ReferecePricesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReferecePricesCreateManyUserInputEnvelope
    set?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
    disconnect?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
    delete?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
    connect?: ReferecePricesWhereUniqueInput | ReferecePricesWhereUniqueInput[]
    update?: ReferecePricesUpdateWithWhereUniqueWithoutUserInput | ReferecePricesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReferecePricesUpdateManyWithWhereWithoutUserInput | ReferecePricesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReferecePricesScalarWhereInput | ReferecePricesScalarWhereInput[]
  }

  export type ReferecesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReferecesCreateWithoutUserInput, ReferecesUncheckedCreateWithoutUserInput> | ReferecesCreateWithoutUserInput[] | ReferecesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReferecesCreateOrConnectWithoutUserInput | ReferecesCreateOrConnectWithoutUserInput[]
    upsert?: ReferecesUpsertWithWhereUniqueWithoutUserInput | ReferecesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReferecesCreateManyUserInputEnvelope
    set?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
    disconnect?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
    delete?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
    connect?: ReferecesWhereUniqueInput | ReferecesWhereUniqueInput[]
    update?: ReferecesUpdateWithWhereUniqueWithoutUserInput | ReferecesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReferecesUpdateManyWithWhereWithoutUserInput | ReferecesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReferecesScalarWhereInput | ReferecesScalarWhereInput[]
  }

  export type UserPointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserPointsCreateWithoutUserInput, UserPointsUncheckedCreateWithoutUserInput> | UserPointsCreateWithoutUserInput[] | UserPointsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserPointsCreateOrConnectWithoutUserInput | UserPointsCreateOrConnectWithoutUserInput[]
    upsert?: UserPointsUpsertWithWhereUniqueWithoutUserInput | UserPointsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserPointsCreateManyUserInputEnvelope
    set?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
    disconnect?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
    delete?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
    connect?: UserPointsWhereUniqueInput | UserPointsWhereUniqueInput[]
    update?: UserPointsUpdateWithWhereUniqueWithoutUserInput | UserPointsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserPointsUpdateManyWithWhereWithoutUserInput | UserPointsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserPointsScalarWhereInput | UserPointsScalarWhereInput[]
  }

  export type FeedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput> | FeedCreateWithoutUserInput[] | FeedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedCreateOrConnectWithoutUserInput | FeedCreateOrConnectWithoutUserInput[]
    upsert?: FeedUpsertWithWhereUniqueWithoutUserInput | FeedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedCreateManyUserInputEnvelope
    set?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    disconnect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    delete?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    connect?: FeedWhereUniqueInput | FeedWhereUniqueInput[]
    update?: FeedUpdateWithWhereUniqueWithoutUserInput | FeedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedUpdateManyWithWhereWithoutUserInput | FeedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedScalarWhereInput | FeedScalarWhereInput[]
  }

  export type FeedCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FeedCommentsCreateWithoutUserInput, FeedCommentsUncheckedCreateWithoutUserInput> | FeedCommentsCreateWithoutUserInput[] | FeedCommentsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FeedCommentsCreateOrConnectWithoutUserInput | FeedCommentsCreateOrConnectWithoutUserInput[]
    upsert?: FeedCommentsUpsertWithWhereUniqueWithoutUserInput | FeedCommentsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FeedCommentsCreateManyUserInputEnvelope
    set?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
    disconnect?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
    delete?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
    connect?: FeedCommentsWhereUniqueInput | FeedCommentsWhereUniqueInput[]
    update?: FeedCommentsUpdateWithWhereUniqueWithoutUserInput | FeedCommentsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FeedCommentsUpdateManyWithWhereWithoutUserInput | FeedCommentsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FeedCommentsScalarWhereInput | FeedCommentsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPerfilInput = {
    create?: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerfilInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserUpdateOneWithoutPerfilNestedInput = {
    create?: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerfilInput
    upsert?: UserUpsertWithoutPerfilInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPerfilInput, UserUpdateWithoutPerfilInput>, UserUncheckedUpdateWithoutPerfilInput>
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type UserCreateNestedOneWithoutAddresInput = {
    create?: XOR<UserCreateWithoutAddresInput, UserUncheckedCreateWithoutAddresInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddresInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAddresNestedInput = {
    create?: XOR<UserCreateWithoutAddresInput, UserUncheckedCreateWithoutAddresInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddresInput
    upsert?: UserUpsertWithoutAddresInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddresInput, UserUpdateWithoutAddresInput>, UserUncheckedUpdateWithoutAddresInput>
  }

  export type UserCreateNestedOneWithoutContactInput = {
    create?: XOR<UserCreateWithoutContactInput, UserUncheckedCreateWithoutContactInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutContactNestedInput = {
    create?: XOR<UserCreateWithoutContactInput, UserUncheckedCreateWithoutContactInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactInput
    upsert?: UserUpsertWithoutContactInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactInput, UserUpdateWithoutContactInput>, UserUncheckedUpdateWithoutContactInput>
  }

  export type DegreeCreateNestedManyWithoutKnowledgespaceInput = {
    create?: XOR<DegreeCreateWithoutKnowledgespaceInput, DegreeUncheckedCreateWithoutKnowledgespaceInput> | DegreeCreateWithoutKnowledgespaceInput[] | DegreeUncheckedCreateWithoutKnowledgespaceInput[]
    connectOrCreate?: DegreeCreateOrConnectWithoutKnowledgespaceInput | DegreeCreateOrConnectWithoutKnowledgespaceInput[]
    createMany?: DegreeCreateManyKnowledgespaceInputEnvelope
    connect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
  }

  export type DegreeUncheckedCreateNestedManyWithoutKnowledgespaceInput = {
    create?: XOR<DegreeCreateWithoutKnowledgespaceInput, DegreeUncheckedCreateWithoutKnowledgespaceInput> | DegreeCreateWithoutKnowledgespaceInput[] | DegreeUncheckedCreateWithoutKnowledgespaceInput[]
    connectOrCreate?: DegreeCreateOrConnectWithoutKnowledgespaceInput | DegreeCreateOrConnectWithoutKnowledgespaceInput[]
    createMany?: DegreeCreateManyKnowledgespaceInputEnvelope
    connect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
  }

  export type DegreeUpdateManyWithoutKnowledgespaceNestedInput = {
    create?: XOR<DegreeCreateWithoutKnowledgespaceInput, DegreeUncheckedCreateWithoutKnowledgespaceInput> | DegreeCreateWithoutKnowledgespaceInput[] | DegreeUncheckedCreateWithoutKnowledgespaceInput[]
    connectOrCreate?: DegreeCreateOrConnectWithoutKnowledgespaceInput | DegreeCreateOrConnectWithoutKnowledgespaceInput[]
    upsert?: DegreeUpsertWithWhereUniqueWithoutKnowledgespaceInput | DegreeUpsertWithWhereUniqueWithoutKnowledgespaceInput[]
    createMany?: DegreeCreateManyKnowledgespaceInputEnvelope
    set?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    disconnect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    delete?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    connect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    update?: DegreeUpdateWithWhereUniqueWithoutKnowledgespaceInput | DegreeUpdateWithWhereUniqueWithoutKnowledgespaceInput[]
    updateMany?: DegreeUpdateManyWithWhereWithoutKnowledgespaceInput | DegreeUpdateManyWithWhereWithoutKnowledgespaceInput[]
    deleteMany?: DegreeScalarWhereInput | DegreeScalarWhereInput[]
  }

  export type DegreeUncheckedUpdateManyWithoutKnowledgespaceNestedInput = {
    create?: XOR<DegreeCreateWithoutKnowledgespaceInput, DegreeUncheckedCreateWithoutKnowledgespaceInput> | DegreeCreateWithoutKnowledgespaceInput[] | DegreeUncheckedCreateWithoutKnowledgespaceInput[]
    connectOrCreate?: DegreeCreateOrConnectWithoutKnowledgespaceInput | DegreeCreateOrConnectWithoutKnowledgespaceInput[]
    upsert?: DegreeUpsertWithWhereUniqueWithoutKnowledgespaceInput | DegreeUpsertWithWhereUniqueWithoutKnowledgespaceInput[]
    createMany?: DegreeCreateManyKnowledgespaceInputEnvelope
    set?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    disconnect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    delete?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    connect?: DegreeWhereUniqueInput | DegreeWhereUniqueInput[]
    update?: DegreeUpdateWithWhereUniqueWithoutKnowledgespaceInput | DegreeUpdateWithWhereUniqueWithoutKnowledgespaceInput[]
    updateMany?: DegreeUpdateManyWithWhereWithoutKnowledgespaceInput | DegreeUpdateManyWithWhereWithoutKnowledgespaceInput[]
    deleteMany?: DegreeScalarWhereInput | DegreeScalarWhereInput[]
  }

  export type KnowledgespaceCreateNestedOneWithoutDegreeInput = {
    create?: XOR<KnowledgespaceCreateWithoutDegreeInput, KnowledgespaceUncheckedCreateWithoutDegreeInput>
    connectOrCreate?: KnowledgespaceCreateOrConnectWithoutDegreeInput
    connect?: KnowledgespaceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDegreeInput = {
    create?: XOR<UserCreateWithoutDegreeInput, UserUncheckedCreateWithoutDegreeInput>
    connectOrCreate?: UserCreateOrConnectWithoutDegreeInput
    connect?: UserWhereUniqueInput
  }

  export type KnowledgespaceUpdateOneWithoutDegreeNestedInput = {
    create?: XOR<KnowledgespaceCreateWithoutDegreeInput, KnowledgespaceUncheckedCreateWithoutDegreeInput>
    connectOrCreate?: KnowledgespaceCreateOrConnectWithoutDegreeInput
    upsert?: KnowledgespaceUpsertWithoutDegreeInput
    disconnect?: KnowledgespaceWhereInput | boolean
    delete?: KnowledgespaceWhereInput | boolean
    connect?: KnowledgespaceWhereUniqueInput
    update?: XOR<XOR<KnowledgespaceUpdateToOneWithWhereWithoutDegreeInput, KnowledgespaceUpdateWithoutDegreeInput>, KnowledgespaceUncheckedUpdateWithoutDegreeInput>
  }

  export type UserUpdateOneWithoutDegreeNestedInput = {
    create?: XOR<UserCreateWithoutDegreeInput, UserUncheckedCreateWithoutDegreeInput>
    connectOrCreate?: UserCreateOrConnectWithoutDegreeInput
    upsert?: UserUpsertWithoutDegreeInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDegreeInput, UserUpdateWithoutDegreeInput>, UserUncheckedUpdateWithoutDegreeInput>
  }

  export type UserCreateNestedOneWithoutSkillsInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutSkillsNestedInput = {
    create?: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSkillsInput
    upsert?: UserUpsertWithoutSkillsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSkillsInput, UserUpdateWithoutSkillsInput>, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserCreateNestedOneWithoutExperiencesInput = {
    create?: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput
    connect?: UserWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type UserUpdateOneWithoutExperiencesNestedInput = {
    create?: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    connectOrCreate?: UserCreateOrConnectWithoutExperiencesInput
    upsert?: UserUpsertWithoutExperiencesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExperiencesInput, UserUpdateWithoutExperiencesInput>, UserUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserCreateNestedOneWithoutReferecesInput = {
    create?: XOR<UserCreateWithoutReferecesInput, UserUncheckedCreateWithoutReferecesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferecesInput
    connect?: UserWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutReferecesNestedInput = {
    create?: XOR<UserCreateWithoutReferecesInput, UserUncheckedCreateWithoutReferecesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferecesInput
    upsert?: UserUpsertWithoutReferecesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferecesInput, UserUpdateWithoutReferecesInput>, UserUncheckedUpdateWithoutReferecesInput>
  }

  export type UserCreateNestedOneWithoutReferecePricesInput = {
    create?: XOR<UserCreateWithoutReferecePricesInput, UserUncheckedCreateWithoutReferecePricesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferecePricesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutReferecePricesNestedInput = {
    create?: XOR<UserCreateWithoutReferecePricesInput, UserUncheckedCreateWithoutReferecePricesInput>
    connectOrCreate?: UserCreateOrConnectWithoutReferecePricesInput
    upsert?: UserUpsertWithoutReferecePricesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReferecePricesInput, UserUpdateWithoutReferecePricesInput>, UserUncheckedUpdateWithoutReferecePricesInput>
  }

  export type UserCreateNestedOneWithoutUserPointsInput = {
    create?: XOR<UserCreateWithoutUserPointsInput, UserUncheckedCreateWithoutUserPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPointsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutUserPointsNestedInput = {
    create?: XOR<UserCreateWithoutUserPointsInput, UserUncheckedCreateWithoutUserPointsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserPointsInput
    upsert?: UserUpsertWithoutUserPointsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserPointsInput, UserUpdateWithoutUserPointsInput>, UserUncheckedUpdateWithoutUserPointsInput>
  }

  export type UserCreateNestedOneWithoutFeedsInput = {
    create?: XOR<UserCreateWithoutFeedsInput, UserUncheckedCreateWithoutFeedsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutFeedsNestedInput = {
    create?: XOR<UserCreateWithoutFeedsInput, UserUncheckedCreateWithoutFeedsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFeedsInput
    upsert?: UserUpsertWithoutFeedsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFeedsInput, UserUpdateWithoutFeedsInput>, UserUncheckedUpdateWithoutFeedsInput>
  }

  export type UserCreateNestedOneWithoutCommentsInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutCommentsNestedInput = {
    create?: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCommentsInput
    upsert?: UserUpsertWithoutCommentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCommentsInput, UserUpdateWithoutCommentsInput>, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[]
    notIn?: bigint[] | number[]
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
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

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type PerfilCreateWithoutUserInput = {
    id?: bigint | number
    photo?: string | null
    name?: string | null
    secondname?: string | null
    socialname?: string | null
    birthday?: Date | string | null
  }

  export type PerfilUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    photo?: string | null
    name?: string | null
    secondname?: string | null
    socialname?: string | null
    birthday?: Date | string | null
  }

  export type PerfilCreateOrConnectWithoutUserInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutUserInput, PerfilUncheckedCreateWithoutUserInput>
  }

  export type AddresCreateWithoutUserInput = {
    id?: bigint | number
    address?: string | null
    complement?: string | null
    state?: string | null
    country?: string | null
  }

  export type AddresUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    address?: string | null
    complement?: string | null
    state?: string | null
    country?: string | null
  }

  export type AddresCreateOrConnectWithoutUserInput = {
    where: AddresWhereUniqueInput
    create: XOR<AddresCreateWithoutUserInput, AddresUncheckedCreateWithoutUserInput>
  }

  export type AddresCreateManyUserInputEnvelope = {
    data: AddresCreateManyUserInput | AddresCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutUserInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
  }

  export type ContactUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
  }

  export type ContactCreateOrConnectWithoutUserInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactCreateManyUserInputEnvelope = {
    data: ContactCreateManyUserInput | ContactCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DegreeCreateWithoutUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    Knowledgespace?: KnowledgespaceCreateNestedOneWithoutDegreeInput
  }

  export type DegreeUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    KnowledgespaceId?: bigint | number | null
  }

  export type DegreeCreateOrConnectWithoutUserInput = {
    where: DegreeWhereUniqueInput
    create: XOR<DegreeCreateWithoutUserInput, DegreeUncheckedCreateWithoutUserInput>
  }

  export type DegreeCreateManyUserInputEnvelope = {
    data: DegreeCreateManyUserInput | DegreeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SkillsCreateWithoutUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
  }

  export type SkillsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
  }

  export type SkillsCreateOrConnectWithoutUserInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput>
  }

  export type SkillsCreateManyUserInputEnvelope = {
    data: SkillsCreateManyUserInput | SkillsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExperiencesCreateWithoutUserInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
  }

  export type ExperiencesUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
  }

  export type ExperiencesCreateOrConnectWithoutUserInput = {
    where: ExperiencesWhereUniqueInput
    create: XOR<ExperiencesCreateWithoutUserInput, ExperiencesUncheckedCreateWithoutUserInput>
  }

  export type ExperiencesCreateManyUserInputEnvelope = {
    data: ExperiencesCreateManyUserInput | ExperiencesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ProjectsCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
  }

  export type ProjectsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
  }

  export type ProjectsCreateOrConnectWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput>
  }

  export type ProjectsCreateManyUserInputEnvelope = {
    data: ProjectsCreateManyUserInput | ProjectsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferecePricesCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
  }

  export type ReferecePricesUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
  }

  export type ReferecePricesCreateOrConnectWithoutUserInput = {
    where: ReferecePricesWhereUniqueInput
    create: XOR<ReferecePricesCreateWithoutUserInput, ReferecePricesUncheckedCreateWithoutUserInput>
  }

  export type ReferecePricesCreateManyUserInputEnvelope = {
    data: ReferecePricesCreateManyUserInput | ReferecePricesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReferecesCreateWithoutUserInput = {
    id?: bigint | number
    description: string
    value: number
  }

  export type ReferecesUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    description: string
    value: number
  }

  export type ReferecesCreateOrConnectWithoutUserInput = {
    where: ReferecesWhereUniqueInput
    create: XOR<ReferecesCreateWithoutUserInput, ReferecesUncheckedCreateWithoutUserInput>
  }

  export type ReferecesCreateManyUserInputEnvelope = {
    data: ReferecesCreateManyUserInput | ReferecesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserPointsCreateWithoutUserInput = {
    id?: bigint | number
    value: bigint | number
  }

  export type UserPointsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    value: bigint | number
  }

  export type UserPointsCreateOrConnectWithoutUserInput = {
    where: UserPointsWhereUniqueInput
    create: XOR<UserPointsCreateWithoutUserInput, UserPointsUncheckedCreateWithoutUserInput>
  }

  export type UserPointsCreateManyUserInputEnvelope = {
    data: UserPointsCreateManyUserInput | UserPointsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    img?: string | null
    description?: string | null
    react_positive?: bigint | number | null
    react_negative?: bigint | number | null
    react_smile?: bigint | number | null
    react_lovely?: bigint | number | null
  }

  export type FeedUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    title: string
    img?: string | null
    description?: string | null
    react_positive?: bigint | number | null
    react_negative?: bigint | number | null
    react_smile?: bigint | number | null
    react_lovely?: bigint | number | null
  }

  export type FeedCreateOrConnectWithoutUserInput = {
    where: FeedWhereUniqueInput
    create: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput>
  }

  export type FeedCreateManyUserInputEnvelope = {
    data: FeedCreateManyUserInput | FeedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FeedCommentsCreateWithoutUserInput = {
    id?: bigint | number
    comment: string
  }

  export type FeedCommentsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    comment: string
  }

  export type FeedCommentsCreateOrConnectWithoutUserInput = {
    where: FeedCommentsWhereUniqueInput
    create: XOR<FeedCommentsCreateWithoutUserInput, FeedCommentsUncheckedCreateWithoutUserInput>
  }

  export type FeedCommentsCreateManyUserInputEnvelope = {
    data: FeedCommentsCreateManyUserInput | FeedCommentsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PerfilUpsertWithoutUserInput = {
    update: XOR<PerfilUpdateWithoutUserInput, PerfilUncheckedUpdateWithoutUserInput>
    create: XOR<PerfilCreateWithoutUserInput, PerfilUncheckedCreateWithoutUserInput>
    where?: PerfilWhereInput
  }

  export type PerfilUpdateToOneWithWhereWithoutUserInput = {
    where?: PerfilWhereInput
    data: XOR<PerfilUpdateWithoutUserInput, PerfilUncheckedUpdateWithoutUserInput>
  }

  export type PerfilUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PerfilUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddresUpsertWithWhereUniqueWithoutUserInput = {
    where: AddresWhereUniqueInput
    update: XOR<AddresUpdateWithoutUserInput, AddresUncheckedUpdateWithoutUserInput>
    create: XOR<AddresCreateWithoutUserInput, AddresUncheckedCreateWithoutUserInput>
  }

  export type AddresUpdateWithWhereUniqueWithoutUserInput = {
    where: AddresWhereUniqueInput
    data: XOR<AddresUpdateWithoutUserInput, AddresUncheckedUpdateWithoutUserInput>
  }

  export type AddresUpdateManyWithWhereWithoutUserInput = {
    where: AddresScalarWhereInput
    data: XOR<AddresUpdateManyMutationInput, AddresUncheckedUpdateManyWithoutUserInput>
  }

  export type AddresScalarWhereInput = {
    AND?: AddresScalarWhereInput | AddresScalarWhereInput[]
    OR?: AddresScalarWhereInput[]
    NOT?: AddresScalarWhereInput | AddresScalarWhereInput[]
    id?: BigIntFilter<"Addres"> | bigint | number
    address?: StringNullableFilter<"Addres"> | string | null
    complement?: StringNullableFilter<"Addres"> | string | null
    state?: StringNullableFilter<"Addres"> | string | null
    country?: StringNullableFilter<"Addres"> | string | null
    userId?: BigIntNullableFilter<"Addres"> | bigint | number | null
  }

  export type ContactUpsertWithWhereUniqueWithoutUserInput = {
    where: ContactWhereUniqueInput
    update: XOR<ContactUpdateWithoutUserInput, ContactUncheckedUpdateWithoutUserInput>
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactUpdateWithWhereUniqueWithoutUserInput = {
    where: ContactWhereUniqueInput
    data: XOR<ContactUpdateWithoutUserInput, ContactUncheckedUpdateWithoutUserInput>
  }

  export type ContactUpdateManyWithWhereWithoutUserInput = {
    where: ContactScalarWhereInput
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyWithoutUserInput>
  }

  export type ContactScalarWhereInput = {
    AND?: ContactScalarWhereInput | ContactScalarWhereInput[]
    OR?: ContactScalarWhereInput[]
    NOT?: ContactScalarWhereInput | ContactScalarWhereInput[]
    id?: BigIntFilter<"Contact"> | bigint | number
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    another?: StringNullableFilter<"Contact"> | string | null
    userId?: BigIntNullableFilter<"Contact"> | bigint | number | null
  }

  export type DegreeUpsertWithWhereUniqueWithoutUserInput = {
    where: DegreeWhereUniqueInput
    update: XOR<DegreeUpdateWithoutUserInput, DegreeUncheckedUpdateWithoutUserInput>
    create: XOR<DegreeCreateWithoutUserInput, DegreeUncheckedCreateWithoutUserInput>
  }

  export type DegreeUpdateWithWhereUniqueWithoutUserInput = {
    where: DegreeWhereUniqueInput
    data: XOR<DegreeUpdateWithoutUserInput, DegreeUncheckedUpdateWithoutUserInput>
  }

  export type DegreeUpdateManyWithWhereWithoutUserInput = {
    where: DegreeScalarWhereInput
    data: XOR<DegreeUpdateManyMutationInput, DegreeUncheckedUpdateManyWithoutUserInput>
  }

  export type DegreeScalarWhereInput = {
    AND?: DegreeScalarWhereInput | DegreeScalarWhereInput[]
    OR?: DegreeScalarWhereInput[]
    NOT?: DegreeScalarWhereInput | DegreeScalarWhereInput[]
    id?: BigIntFilter<"Degree"> | bigint | number
    code?: StringNullableFilter<"Degree"> | string | null
    description?: StringNullableFilter<"Degree"> | string | null
    KnowledgespaceId?: BigIntNullableFilter<"Degree"> | bigint | number | null
    userId?: BigIntNullableFilter<"Degree"> | bigint | number | null
  }

  export type SkillsUpsertWithWhereUniqueWithoutUserInput = {
    where: SkillsWhereUniqueInput
    update: XOR<SkillsUpdateWithoutUserInput, SkillsUncheckedUpdateWithoutUserInput>
    create: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput>
  }

  export type SkillsUpdateWithWhereUniqueWithoutUserInput = {
    where: SkillsWhereUniqueInput
    data: XOR<SkillsUpdateWithoutUserInput, SkillsUncheckedUpdateWithoutUserInput>
  }

  export type SkillsUpdateManyWithWhereWithoutUserInput = {
    where: SkillsScalarWhereInput
    data: XOR<SkillsUpdateManyMutationInput, SkillsUncheckedUpdateManyWithoutUserInput>
  }

  export type SkillsScalarWhereInput = {
    AND?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    OR?: SkillsScalarWhereInput[]
    NOT?: SkillsScalarWhereInput | SkillsScalarWhereInput[]
    id?: BigIntFilter<"Skills"> | bigint | number
    code?: StringNullableFilter<"Skills"> | string | null
    description?: StringNullableFilter<"Skills"> | string | null
    userId?: BigIntNullableFilter<"Skills"> | bigint | number | null
  }

  export type ExperiencesUpsertWithWhereUniqueWithoutUserInput = {
    where: ExperiencesWhereUniqueInput
    update: XOR<ExperiencesUpdateWithoutUserInput, ExperiencesUncheckedUpdateWithoutUserInput>
    create: XOR<ExperiencesCreateWithoutUserInput, ExperiencesUncheckedCreateWithoutUserInput>
  }

  export type ExperiencesUpdateWithWhereUniqueWithoutUserInput = {
    where: ExperiencesWhereUniqueInput
    data: XOR<ExperiencesUpdateWithoutUserInput, ExperiencesUncheckedUpdateWithoutUserInput>
  }

  export type ExperiencesUpdateManyWithWhereWithoutUserInput = {
    where: ExperiencesScalarWhereInput
    data: XOR<ExperiencesUpdateManyMutationInput, ExperiencesUncheckedUpdateManyWithoutUserInput>
  }

  export type ExperiencesScalarWhereInput = {
    AND?: ExperiencesScalarWhereInput | ExperiencesScalarWhereInput[]
    OR?: ExperiencesScalarWhereInput[]
    NOT?: ExperiencesScalarWhereInput | ExperiencesScalarWhereInput[]
    id?: BigIntFilter<"Experiences"> | bigint | number
    company?: StringFilter<"Experiences"> | string
    start?: DateTimeFilter<"Experiences"> | Date | string
    end?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Experiences"> | boolean | null
    userId?: BigIntNullableFilter<"Experiences"> | bigint | number | null
  }

  export type ProjectsUpsertWithWhereUniqueWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    update: XOR<ProjectsUpdateWithoutUserInput, ProjectsUncheckedUpdateWithoutUserInput>
    create: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput>
  }

  export type ProjectsUpdateWithWhereUniqueWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    data: XOR<ProjectsUpdateWithoutUserInput, ProjectsUncheckedUpdateWithoutUserInput>
  }

  export type ProjectsUpdateManyWithWhereWithoutUserInput = {
    where: ProjectsScalarWhereInput
    data: XOR<ProjectsUpdateManyMutationInput, ProjectsUncheckedUpdateManyWithoutUserInput>
  }

  export type ProjectsScalarWhereInput = {
    AND?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    OR?: ProjectsScalarWhereInput[]
    NOT?: ProjectsScalarWhereInput | ProjectsScalarWhereInput[]
    id?: BigIntFilter<"Projects"> | bigint | number
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    start?: DateTimeFilter<"Projects"> | Date | string
    end?: DateTimeNullableFilter<"Projects"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Projects"> | boolean | null
    userId?: BigIntNullableFilter<"Projects"> | bigint | number | null
  }

  export type ReferecePricesUpsertWithWhereUniqueWithoutUserInput = {
    where: ReferecePricesWhereUniqueInput
    update: XOR<ReferecePricesUpdateWithoutUserInput, ReferecePricesUncheckedUpdateWithoutUserInput>
    create: XOR<ReferecePricesCreateWithoutUserInput, ReferecePricesUncheckedCreateWithoutUserInput>
  }

  export type ReferecePricesUpdateWithWhereUniqueWithoutUserInput = {
    where: ReferecePricesWhereUniqueInput
    data: XOR<ReferecePricesUpdateWithoutUserInput, ReferecePricesUncheckedUpdateWithoutUserInput>
  }

  export type ReferecePricesUpdateManyWithWhereWithoutUserInput = {
    where: ReferecePricesScalarWhereInput
    data: XOR<ReferecePricesUpdateManyMutationInput, ReferecePricesUncheckedUpdateManyWithoutUserInput>
  }

  export type ReferecePricesScalarWhereInput = {
    AND?: ReferecePricesScalarWhereInput | ReferecePricesScalarWhereInput[]
    OR?: ReferecePricesScalarWhereInput[]
    NOT?: ReferecePricesScalarWhereInput | ReferecePricesScalarWhereInput[]
    id?: BigIntFilter<"ReferecePrices"> | bigint | number
    name?: StringFilter<"ReferecePrices"> | string
    description?: StringFilter<"ReferecePrices"> | string
    contacts?: StringFilter<"ReferecePrices"> | string
    userId?: BigIntNullableFilter<"ReferecePrices"> | bigint | number | null
  }

  export type ReferecesUpsertWithWhereUniqueWithoutUserInput = {
    where: ReferecesWhereUniqueInput
    update: XOR<ReferecesUpdateWithoutUserInput, ReferecesUncheckedUpdateWithoutUserInput>
    create: XOR<ReferecesCreateWithoutUserInput, ReferecesUncheckedCreateWithoutUserInput>
  }

  export type ReferecesUpdateWithWhereUniqueWithoutUserInput = {
    where: ReferecesWhereUniqueInput
    data: XOR<ReferecesUpdateWithoutUserInput, ReferecesUncheckedUpdateWithoutUserInput>
  }

  export type ReferecesUpdateManyWithWhereWithoutUserInput = {
    where: ReferecesScalarWhereInput
    data: XOR<ReferecesUpdateManyMutationInput, ReferecesUncheckedUpdateManyWithoutUserInput>
  }

  export type ReferecesScalarWhereInput = {
    AND?: ReferecesScalarWhereInput | ReferecesScalarWhereInput[]
    OR?: ReferecesScalarWhereInput[]
    NOT?: ReferecesScalarWhereInput | ReferecesScalarWhereInput[]
    id?: BigIntFilter<"Refereces"> | bigint | number
    description?: StringFilter<"Refereces"> | string
    value?: FloatFilter<"Refereces"> | number
    userId?: BigIntNullableFilter<"Refereces"> | bigint | number | null
  }

  export type UserPointsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserPointsWhereUniqueInput
    update: XOR<UserPointsUpdateWithoutUserInput, UserPointsUncheckedUpdateWithoutUserInput>
    create: XOR<UserPointsCreateWithoutUserInput, UserPointsUncheckedCreateWithoutUserInput>
  }

  export type UserPointsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserPointsWhereUniqueInput
    data: XOR<UserPointsUpdateWithoutUserInput, UserPointsUncheckedUpdateWithoutUserInput>
  }

  export type UserPointsUpdateManyWithWhereWithoutUserInput = {
    where: UserPointsScalarWhereInput
    data: XOR<UserPointsUpdateManyMutationInput, UserPointsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserPointsScalarWhereInput = {
    AND?: UserPointsScalarWhereInput | UserPointsScalarWhereInput[]
    OR?: UserPointsScalarWhereInput[]
    NOT?: UserPointsScalarWhereInput | UserPointsScalarWhereInput[]
    id?: BigIntFilter<"UserPoints"> | bigint | number
    value?: BigIntFilter<"UserPoints"> | bigint | number
    userId?: BigIntNullableFilter<"UserPoints"> | bigint | number | null
  }

  export type FeedUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedWhereUniqueInput
    update: XOR<FeedUpdateWithoutUserInput, FeedUncheckedUpdateWithoutUserInput>
    create: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput>
  }

  export type FeedUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedWhereUniqueInput
    data: XOR<FeedUpdateWithoutUserInput, FeedUncheckedUpdateWithoutUserInput>
  }

  export type FeedUpdateManyWithWhereWithoutUserInput = {
    where: FeedScalarWhereInput
    data: XOR<FeedUpdateManyMutationInput, FeedUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedScalarWhereInput = {
    AND?: FeedScalarWhereInput | FeedScalarWhereInput[]
    OR?: FeedScalarWhereInput[]
    NOT?: FeedScalarWhereInput | FeedScalarWhereInput[]
    id?: BigIntFilter<"Feed"> | bigint | number
    title?: StringFilter<"Feed"> | string
    img?: StringNullableFilter<"Feed"> | string | null
    description?: StringNullableFilter<"Feed"> | string | null
    react_positive?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_negative?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_smile?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_lovely?: BigIntNullableFilter<"Feed"> | bigint | number | null
    userId?: BigIntNullableFilter<"Feed"> | bigint | number | null
  }

  export type FeedCommentsUpsertWithWhereUniqueWithoutUserInput = {
    where: FeedCommentsWhereUniqueInput
    update: XOR<FeedCommentsUpdateWithoutUserInput, FeedCommentsUncheckedUpdateWithoutUserInput>
    create: XOR<FeedCommentsCreateWithoutUserInput, FeedCommentsUncheckedCreateWithoutUserInput>
  }

  export type FeedCommentsUpdateWithWhereUniqueWithoutUserInput = {
    where: FeedCommentsWhereUniqueInput
    data: XOR<FeedCommentsUpdateWithoutUserInput, FeedCommentsUncheckedUpdateWithoutUserInput>
  }

  export type FeedCommentsUpdateManyWithWhereWithoutUserInput = {
    where: FeedCommentsScalarWhereInput
    data: XOR<FeedCommentsUpdateManyMutationInput, FeedCommentsUncheckedUpdateManyWithoutUserInput>
  }

  export type FeedCommentsScalarWhereInput = {
    AND?: FeedCommentsScalarWhereInput | FeedCommentsScalarWhereInput[]
    OR?: FeedCommentsScalarWhereInput[]
    NOT?: FeedCommentsScalarWhereInput | FeedCommentsScalarWhereInput[]
    id?: BigIntFilter<"FeedComments"> | bigint | number
    comment?: StringFilter<"FeedComments"> | string
    userId?: BigIntFilter<"FeedComments"> | bigint | number
  }

  export type UserCreateWithoutPerfilInput = {
    id?: bigint | number
    email: string
    password: string
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPerfilInput = {
    id?: bigint | number
    email: string
    password: string
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPerfilInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
  }

  export type UserUpsertWithoutPerfilInput = {
    update: XOR<UserUpdateWithoutPerfilInput, UserUncheckedUpdateWithoutPerfilInput>
    create: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPerfilInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPerfilInput, UserUncheckedUpdateWithoutPerfilInput>
  }

  export type UserUpdateWithoutPerfilInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPerfilInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutAddresInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAddresInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAddresInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddresInput, UserUncheckedCreateWithoutAddresInput>
  }

  export type UserUpsertWithoutAddresInput = {
    update: XOR<UserUpdateWithoutAddresInput, UserUncheckedUpdateWithoutAddresInput>
    create: XOR<UserCreateWithoutAddresInput, UserUncheckedCreateWithoutAddresInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddresInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddresInput, UserUncheckedUpdateWithoutAddresInput>
  }

  export type UserUpdateWithoutAddresInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAddresInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutContactInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactInput, UserUncheckedCreateWithoutContactInput>
  }

  export type UserUpsertWithoutContactInput = {
    update: XOR<UserUpdateWithoutContactInput, UserUncheckedUpdateWithoutContactInput>
    create: XOR<UserCreateWithoutContactInput, UserUncheckedCreateWithoutContactInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactInput, UserUncheckedUpdateWithoutContactInput>
  }

  export type UserUpdateWithoutContactInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DegreeCreateWithoutKnowledgespaceInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    user?: UserCreateNestedOneWithoutDegreeInput
  }

  export type DegreeUncheckedCreateWithoutKnowledgespaceInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    userId?: bigint | number | null
  }

  export type DegreeCreateOrConnectWithoutKnowledgespaceInput = {
    where: DegreeWhereUniqueInput
    create: XOR<DegreeCreateWithoutKnowledgespaceInput, DegreeUncheckedCreateWithoutKnowledgespaceInput>
  }

  export type DegreeCreateManyKnowledgespaceInputEnvelope = {
    data: DegreeCreateManyKnowledgespaceInput | DegreeCreateManyKnowledgespaceInput[]
    skipDuplicates?: boolean
  }

  export type DegreeUpsertWithWhereUniqueWithoutKnowledgespaceInput = {
    where: DegreeWhereUniqueInput
    update: XOR<DegreeUpdateWithoutKnowledgespaceInput, DegreeUncheckedUpdateWithoutKnowledgespaceInput>
    create: XOR<DegreeCreateWithoutKnowledgespaceInput, DegreeUncheckedCreateWithoutKnowledgespaceInput>
  }

  export type DegreeUpdateWithWhereUniqueWithoutKnowledgespaceInput = {
    where: DegreeWhereUniqueInput
    data: XOR<DegreeUpdateWithoutKnowledgespaceInput, DegreeUncheckedUpdateWithoutKnowledgespaceInput>
  }

  export type DegreeUpdateManyWithWhereWithoutKnowledgespaceInput = {
    where: DegreeScalarWhereInput
    data: XOR<DegreeUpdateManyMutationInput, DegreeUncheckedUpdateManyWithoutKnowledgespaceInput>
  }

  export type KnowledgespaceCreateWithoutDegreeInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
  }

  export type KnowledgespaceUncheckedCreateWithoutDegreeInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
  }

  export type KnowledgespaceCreateOrConnectWithoutDegreeInput = {
    where: KnowledgespaceWhereUniqueInput
    create: XOR<KnowledgespaceCreateWithoutDegreeInput, KnowledgespaceUncheckedCreateWithoutDegreeInput>
  }

  export type UserCreateWithoutDegreeInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDegreeInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDegreeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDegreeInput, UserUncheckedCreateWithoutDegreeInput>
  }

  export type KnowledgespaceUpsertWithoutDegreeInput = {
    update: XOR<KnowledgespaceUpdateWithoutDegreeInput, KnowledgespaceUncheckedUpdateWithoutDegreeInput>
    create: XOR<KnowledgespaceCreateWithoutDegreeInput, KnowledgespaceUncheckedCreateWithoutDegreeInput>
    where?: KnowledgespaceWhereInput
  }

  export type KnowledgespaceUpdateToOneWithWhereWithoutDegreeInput = {
    where?: KnowledgespaceWhereInput
    data: XOR<KnowledgespaceUpdateWithoutDegreeInput, KnowledgespaceUncheckedUpdateWithoutDegreeInput>
  }

  export type KnowledgespaceUpdateWithoutDegreeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type KnowledgespaceUncheckedUpdateWithoutDegreeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutDegreeInput = {
    update: XOR<UserUpdateWithoutDegreeInput, UserUncheckedUpdateWithoutDegreeInput>
    create: XOR<UserCreateWithoutDegreeInput, UserUncheckedCreateWithoutDegreeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDegreeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDegreeInput, UserUncheckedUpdateWithoutDegreeInput>
  }

  export type UserUpdateWithoutDegreeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDegreeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSkillsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSkillsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSkillsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
  }

  export type UserUpsertWithoutSkillsInput = {
    update: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
    create: XOR<UserCreateWithoutSkillsInput, UserUncheckedCreateWithoutSkillsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSkillsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSkillsInput, UserUncheckedUpdateWithoutSkillsInput>
  }

  export type UserUpdateWithoutSkillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSkillsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutExperiencesInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutExperiencesInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutExperiencesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
  }

  export type UserUpsertWithoutExperiencesInput = {
    update: XOR<UserUpdateWithoutExperiencesInput, UserUncheckedUpdateWithoutExperiencesInput>
    create: XOR<UserCreateWithoutExperiencesInput, UserUncheckedCreateWithoutExperiencesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExperiencesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExperiencesInput, UserUncheckedUpdateWithoutExperiencesInput>
  }

  export type UserUpdateWithoutExperiencesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutExperiencesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReferecesInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferecesInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferecesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferecesInput, UserUncheckedCreateWithoutReferecesInput>
  }

  export type UserUpsertWithoutReferecesInput = {
    update: XOR<UserUpdateWithoutReferecesInput, UserUncheckedUpdateWithoutReferecesInput>
    create: XOR<UserCreateWithoutReferecesInput, UserUncheckedCreateWithoutReferecesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferecesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferecesInput, UserUncheckedUpdateWithoutReferecesInput>
  }

  export type UserUpdateWithoutReferecesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferecesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReferecePricesInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReferecePricesInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReferecePricesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReferecePricesInput, UserUncheckedCreateWithoutReferecePricesInput>
  }

  export type UserUpsertWithoutReferecePricesInput = {
    update: XOR<UserUpdateWithoutReferecePricesInput, UserUncheckedUpdateWithoutReferecePricesInput>
    create: XOR<UserCreateWithoutReferecePricesInput, UserUncheckedCreateWithoutReferecePricesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReferecePricesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReferecePricesInput, UserUncheckedUpdateWithoutReferecePricesInput>
  }

  export type UserUpdateWithoutReferecePricesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReferecePricesInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutUserPointsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserPointsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserPointsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserPointsInput, UserUncheckedCreateWithoutUserPointsInput>
  }

  export type UserUpsertWithoutUserPointsInput = {
    update: XOR<UserUpdateWithoutUserPointsInput, UserUncheckedUpdateWithoutUserPointsInput>
    create: XOR<UserCreateWithoutUserPointsInput, UserUncheckedCreateWithoutUserPointsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserPointsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserPointsInput, UserUncheckedUpdateWithoutUserPointsInput>
  }

  export type UserUpdateWithoutUserPointsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserPointsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutFeedsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    comments?: FeedCommentsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFeedsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    comments?: FeedCommentsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFeedsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFeedsInput, UserUncheckedCreateWithoutFeedsInput>
  }

  export type UserUpsertWithoutFeedsInput = {
    update: XOR<UserUpdateWithoutFeedsInput, UserUncheckedUpdateWithoutFeedsInput>
    create: XOR<UserCreateWithoutFeedsInput, UserUncheckedCreateWithoutFeedsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFeedsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFeedsInput, UserUncheckedUpdateWithoutFeedsInput>
  }

  export type UserUpdateWithoutFeedsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFeedsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    comments?: FeedCommentsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutCommentsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilCreateNestedOneWithoutUserInput
    addres?: AddresCreateNestedManyWithoutUserInput
    contact?: ContactCreateNestedManyWithoutUserInput
    degree?: DegreeCreateNestedManyWithoutUserInput
    skills?: SkillsCreateNestedManyWithoutUserInput
    experiences?: ExperiencesCreateNestedManyWithoutUserInput
    projects?: ProjectsCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesCreateNestedManyWithoutUserInput
    refereces?: ReferecesCreateNestedManyWithoutUserInput
    userPoints?: UserPointsCreateNestedManyWithoutUserInput
    feeds?: FeedCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCommentsInput = {
    id?: bigint | number
    email: string
    password: string
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    addres?: AddresUncheckedCreateNestedManyWithoutUserInput
    contact?: ContactUncheckedCreateNestedManyWithoutUserInput
    degree?: DegreeUncheckedCreateNestedManyWithoutUserInput
    skills?: SkillsUncheckedCreateNestedManyWithoutUserInput
    experiences?: ExperiencesUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectsUncheckedCreateNestedManyWithoutUserInput
    referecePrices?: ReferecePricesUncheckedCreateNestedManyWithoutUserInput
    refereces?: ReferecesUncheckedCreateNestedManyWithoutUserInput
    userPoints?: UserPointsUncheckedCreateNestedManyWithoutUserInput
    feeds?: FeedUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCommentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
  }

  export type UserUpsertWithoutCommentsInput = {
    update: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
    create: XOR<UserCreateWithoutCommentsInput, UserUncheckedCreateWithoutCommentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCommentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCommentsInput, UserUncheckedUpdateWithoutCommentsInput>
  }

  export type UserUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    addres?: AddresUpdateManyWithoutUserNestedInput
    contact?: ContactUpdateManyWithoutUserNestedInput
    degree?: DegreeUpdateManyWithoutUserNestedInput
    skills?: SkillsUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUpdateManyWithoutUserNestedInput
    projects?: ProjectsUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUpdateManyWithoutUserNestedInput
    feeds?: FeedUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCommentsInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    addres?: AddresUncheckedUpdateManyWithoutUserNestedInput
    contact?: ContactUncheckedUpdateManyWithoutUserNestedInput
    degree?: DegreeUncheckedUpdateManyWithoutUserNestedInput
    skills?: SkillsUncheckedUpdateManyWithoutUserNestedInput
    experiences?: ExperiencesUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectsUncheckedUpdateManyWithoutUserNestedInput
    referecePrices?: ReferecePricesUncheckedUpdateManyWithoutUserNestedInput
    refereces?: ReferecesUncheckedUpdateManyWithoutUserNestedInput
    userPoints?: UserPointsUncheckedUpdateManyWithoutUserNestedInput
    feeds?: FeedUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AddresCreateManyUserInput = {
    id?: bigint | number
    address?: string | null
    complement?: string | null
    state?: string | null
    country?: string | null
  }

  export type ContactCreateManyUserInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
  }

  export type DegreeCreateManyUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    KnowledgespaceId?: bigint | number | null
  }

  export type SkillsCreateManyUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
  }

  export type ExperiencesCreateManyUserInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
  }

  export type ProjectsCreateManyUserInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
  }

  export type ReferecePricesCreateManyUserInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
  }

  export type ReferecesCreateManyUserInput = {
    id?: bigint | number
    description: string
    value: number
  }

  export type UserPointsCreateManyUserInput = {
    id?: bigint | number
    value: bigint | number
  }

  export type FeedCreateManyUserInput = {
    id?: bigint | number
    title: string
    img?: string | null
    description?: string | null
    react_positive?: bigint | number | null
    react_negative?: bigint | number | null
    react_smile?: bigint | number | null
    react_lovely?: bigint | number | null
  }

  export type FeedCommentsCreateManyUserInput = {
    id?: bigint | number
    comment: string
  }

  export type AddresUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddresUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AddresUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    address?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ContactUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DegreeUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    Knowledgespace?: KnowledgespaceUpdateOneWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    KnowledgespaceId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DegreeUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    KnowledgespaceId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type SkillsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SkillsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExperiencesUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ExperiencesUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ExperiencesUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ProjectsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ReferecePricesUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
  }

  export type ReferecePricesUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
  }

  export type ReferecePricesUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
  }

  export type ReferecesUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ReferecesUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type ReferecesUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type UserPointsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserPointsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type UserPointsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
  }

  export type FeedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    react_positive?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_negative?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_smile?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_lovely?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type FeedUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    react_positive?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_negative?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_smile?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_lovely?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type FeedUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    title?: StringFieldUpdateOperationsInput | string
    img?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    react_positive?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_negative?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_smile?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    react_lovely?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type FeedCommentsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FeedCommentsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type FeedCommentsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
  }

  export type DegreeCreateManyKnowledgespaceInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    userId?: bigint | number | null
  }

  export type DegreeUpdateWithoutKnowledgespaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateWithoutKnowledgespaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type DegreeUncheckedUpdateManyWithoutKnowledgespaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KnowledgespaceCountOutputTypeDefaultArgs instead
     */
    export type KnowledgespaceCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = KnowledgespaceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerfilDefaultArgs instead
     */
    export type PerfilArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PerfilDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AddresDefaultArgs instead
     */
    export type AddresArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AddresDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ContactDefaultArgs instead
     */
    export type ContactArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ContactDefaultArgs<ExtArgs>
    /**
     * @deprecated Use KnowledgespaceDefaultArgs instead
     */
    export type KnowledgespaceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = KnowledgespaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DegreeDefaultArgs instead
     */
    export type DegreeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = DegreeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SkillsDefaultArgs instead
     */
    export type SkillsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SkillsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExperiencesDefaultArgs instead
     */
    export type ExperiencesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ExperiencesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProjectsDefaultArgs instead
     */
    export type ProjectsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ProjectsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReferecesDefaultArgs instead
     */
    export type ReferecesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReferecesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReferecePricesDefaultArgs instead
     */
    export type ReferecePricesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = ReferecePricesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserPointsDefaultArgs instead
     */
    export type UserPointsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserPointsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedDefaultArgs instead
     */
    export type FeedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FeedDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FeedCommentsDefaultArgs instead
     */
    export type FeedCommentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FeedCommentsDefaultArgs<ExtArgs>

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