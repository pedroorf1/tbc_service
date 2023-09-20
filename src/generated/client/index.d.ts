
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions

export type PrismaPromise<T> = $Public.PrismaPromise<T>


export type UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "User"
  objects: {
    perfil: PerfilPayload<ExtArgs> | null
    address: AddressPayload<ExtArgs>[]
    contact: ContactPayload<ExtArgs>[]
    degree: DegreePayload<ExtArgs>[]
    skills: SkillsPayload<ExtArgs>[]
    experiences: ExperiencesPayload<ExtArgs>[]
    projects: ProjectsPayload<ExtArgs>[]
    referecePrices: ReferecePricesPayload<ExtArgs>[]
    refereces: ReferecesPayload<ExtArgs>[]
    userPoints: UserPointsPayload<ExtArgs>[]
    feeds: FeedPayload<ExtArgs>[]
    comments: FeedCommentsPayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    email: string
    password: string
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["user"]>
  composites: {}
}

/**
 * Model User
 * 
 */
export type User = runtime.Types.DefaultSelection<UserPayload>
export type PerfilPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Perfil"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    photo: string | null
    name: string | null
    secondname: string | null
    socialname: string | null
    birthday: Date | null
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["perfil"]>
  composites: {}
}

/**
 * Model Perfil
 * 
 */
export type Perfil = runtime.Types.DefaultSelection<PerfilPayload>
export type AddressPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Address"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    street: string | null
    number: string | null
    complement: string | null
    city: string | null
    state: string | null
    country: string | null
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["address"]>
  composites: {}
}

/**
 * Model Address
 * 
 */
export type Address = runtime.Types.DefaultSelection<AddressPayload>
export type ContactPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Contact"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    email: string | null
    phone: string | null
    another: string | null
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["contact"]>
  composites: {}
}

/**
 * Model Contact
 * 
 */
export type Contact = runtime.Types.DefaultSelection<ContactPayload>
export type KnowledgespacePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Knowledgespace"
  objects: {
    degree: DegreePayload<ExtArgs>[]
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    code: string | null
    description: string | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["knowledgespace"]>
  composites: {}
}

/**
 * Model Knowledgespace
 * 
 */
export type Knowledgespace = runtime.Types.DefaultSelection<KnowledgespacePayload>
export type DegreePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Degree"
  objects: {
    Knowledgespace: KnowledgespacePayload<ExtArgs> | null
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    code: string | null
    description: string | null
    KnowledgespaceId: bigint | null
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["degree"]>
  composites: {}
}

/**
 * Model Degree
 * 
 */
export type Degree = runtime.Types.DefaultSelection<DegreePayload>
export type SkillsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Skills"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    code: string | null
    description: string | null
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["skills"]>
  composites: {}
}

/**
 * Model Skills
 * 
 */
export type Skills = runtime.Types.DefaultSelection<SkillsPayload>
export type ExperiencesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Experiences"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    company: string
    start: Date
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["experiences"]>
  composites: {}
}

/**
 * Model Experiences
 * 
 */
export type Experiences = runtime.Types.DefaultSelection<ExperiencesPayload>
export type ProjectsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Projects"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    name: string
    description: string | null
    start: Date
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["projects"]>
  composites: {}
}

/**
 * Model Projects
 * 
 */
export type Projects = runtime.Types.DefaultSelection<ProjectsPayload>
export type ReferecesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Refereces"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    description: string
    value: number
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["refereces"]>
  composites: {}
}

/**
 * Model Refereces
 * 
 */
export type Refereces = runtime.Types.DefaultSelection<ReferecesPayload>
export type ReferecePricesPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "ReferecePrices"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    name: string
    description: string
    contacts: string
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["referecePrices"]>
  composites: {}
}

/**
 * Model ReferecePrices
 * 
 */
export type ReferecePrices = runtime.Types.DefaultSelection<ReferecePricesPayload>
export type UserPointsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "UserPoints"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    value: bigint
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["userPoints"]>
  composites: {}
}

/**
 * Model UserPoints
 * 
 */
export type UserPoints = runtime.Types.DefaultSelection<UserPointsPayload>
export type FeedPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "Feed"
  objects: {
    user: UserPayload<ExtArgs> | null
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
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["feed"]>
  composites: {}
}

/**
 * Model Feed
 * 
 */
export type Feed = runtime.Types.DefaultSelection<FeedPayload>
export type FeedCommentsPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
  name: "FeedComments"
  objects: {
    user: UserPayload<ExtArgs> | null
  }
  scalars: $Extensions.GetResult<{
    id: bigint
    comment: string
    userId: bigint
    createdAt: Date
    updatedAt: Date | null
  }, ExtArgs["result"]["feedComments"]>
  composites: {}
}

/**
 * Model FeedComments
 * 
 */
export type FeedComments = runtime.Types.DefaultSelection<FeedCommentsPayload>

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
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false,
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
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.perfil`: Exposes CRUD operations for the **Perfil** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Perfils
    * const perfils = await prisma.perfil.findMany()
    * ```
    */
  get perfil(): Prisma.PerfilDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.knowledgespace`: Exposes CRUD operations for the **Knowledgespace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Knowledgespaces
    * const knowledgespaces = await prisma.knowledgespace.findMany()
    * ```
    */
  get knowledgespace(): Prisma.KnowledgespaceDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.degree`: Exposes CRUD operations for the **Degree** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Degrees
    * const degrees = await prisma.degree.findMany()
    * ```
    */
  get degree(): Prisma.DegreeDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.skills`: Exposes CRUD operations for the **Skills** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skills.findMany()
    * ```
    */
  get skills(): Prisma.SkillsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.experiences`: Exposes CRUD operations for the **Experiences** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experiences.findMany()
    * ```
    */
  get experiences(): Prisma.ExperiencesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.projects`: Exposes CRUD operations for the **Projects** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.projects.findMany()
    * ```
    */
  get projects(): Prisma.ProjectsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.refereces`: Exposes CRUD operations for the **Refereces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Refereces
    * const refereces = await prisma.refereces.findMany()
    * ```
    */
  get refereces(): Prisma.ReferecesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.referecePrices`: Exposes CRUD operations for the **ReferecePrices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferecePrices
    * const referecePrices = await prisma.referecePrices.findMany()
    * ```
    */
  get referecePrices(): Prisma.ReferecePricesDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.userPoints`: Exposes CRUD operations for the **UserPoints** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserPoints
    * const userPoints = await prisma.userPoints.findMany()
    * ```
    */
  get userPoints(): Prisma.UserPointsDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.feed`: Exposes CRUD operations for the **Feed** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Feeds
    * const feeds = await prisma.feed.findMany()
    * ```
    */
  get feed(): Prisma.FeedDelegate<GlobalReject, ExtArgs>;

  /**
   * `prisma.feedComments`: Exposes CRUD operations for the **FeedComments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FeedComments
    * const feedComments = await prisma.feedComments.findMany()
    * ```
    */
  get feedComments(): Prisma.FeedCommentsDelegate<GlobalReject, ExtArgs>;
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
  export type Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export type Args<T, F extends $Public.Operation> = $Public.Args<T, F>
  export type Payload<T, F extends $Public.Operation> = $Public.Payload<T, F>
  export type Result<T, A, F extends $Public.Operation> = $Public.Result<T, A, F>
  export type Exact<T, W> = $Public.Exact<T, W>

  /**
   * Prisma Client JS version: 4.16.2
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

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
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

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
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Perfil: 'Perfil',
    Address: 'Address',
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
      modelProps: 'user' | 'perfil' | 'address' | 'contact' | 'knowledgespace' | 'degree' | 'skills' | 'experiences' | 'projects' | 'refereces' | 'referecePrices' | 'userPoints' | 'feed' | 'feedComments'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: UserPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPayload>
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
            result: $Utils.PayloadToResult<UserPayload>
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
        payload: PerfilPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.PerfilFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PerfilPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerfilFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PerfilPayload>
          }
          findFirst: {
            args: Prisma.PerfilFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PerfilPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerfilFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PerfilPayload>
          }
          findMany: {
            args: Prisma.PerfilFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PerfilPayload>[]
          }
          create: {
            args: Prisma.PerfilCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PerfilPayload>
          }
          createMany: {
            args: Prisma.PerfilCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PerfilDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PerfilPayload>
          }
          update: {
            args: Prisma.PerfilUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<PerfilPayload>
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
            result: $Utils.PayloadToResult<PerfilPayload>
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
      Address: {
        payload: AddressPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>,
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: ContactPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ContactPayload>
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
            result: $Utils.PayloadToResult<ContactPayload>
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
        payload: KnowledgespacePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.KnowledgespaceFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<KnowledgespacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.KnowledgespaceFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<KnowledgespacePayload>
          }
          findFirst: {
            args: Prisma.KnowledgespaceFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<KnowledgespacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.KnowledgespaceFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<KnowledgespacePayload>
          }
          findMany: {
            args: Prisma.KnowledgespaceFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<KnowledgespacePayload>[]
          }
          create: {
            args: Prisma.KnowledgespaceCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<KnowledgespacePayload>
          }
          createMany: {
            args: Prisma.KnowledgespaceCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.KnowledgespaceDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<KnowledgespacePayload>
          }
          update: {
            args: Prisma.KnowledgespaceUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<KnowledgespacePayload>
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
            result: $Utils.PayloadToResult<KnowledgespacePayload>
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
        payload: DegreePayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.DegreeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DegreePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DegreeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DegreePayload>
          }
          findFirst: {
            args: Prisma.DegreeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DegreePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DegreeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DegreePayload>
          }
          findMany: {
            args: Prisma.DegreeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DegreePayload>[]
          }
          create: {
            args: Prisma.DegreeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DegreePayload>
          }
          createMany: {
            args: Prisma.DegreeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.DegreeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DegreePayload>
          }
          update: {
            args: Prisma.DegreeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<DegreePayload>
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
            result: $Utils.PayloadToResult<DegreePayload>
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
        payload: SkillsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.SkillsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SkillsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SkillsPayload>
          }
          findFirst: {
            args: Prisma.SkillsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SkillsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SkillsPayload>
          }
          findMany: {
            args: Prisma.SkillsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SkillsPayload>[]
          }
          create: {
            args: Prisma.SkillsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SkillsPayload>
          }
          createMany: {
            args: Prisma.SkillsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SkillsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SkillsPayload>
          }
          update: {
            args: Prisma.SkillsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<SkillsPayload>
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
            result: $Utils.PayloadToResult<SkillsPayload>
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
        payload: ExperiencesPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ExperiencesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExperiencesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperiencesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExperiencesPayload>
          }
          findFirst: {
            args: Prisma.ExperiencesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExperiencesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperiencesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExperiencesPayload>
          }
          findMany: {
            args: Prisma.ExperiencesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExperiencesPayload>[]
          }
          create: {
            args: Prisma.ExperiencesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExperiencesPayload>
          }
          createMany: {
            args: Prisma.ExperiencesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ExperiencesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExperiencesPayload>
          }
          update: {
            args: Prisma.ExperiencesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ExperiencesPayload>
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
            result: $Utils.PayloadToResult<ExperiencesPayload>
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
        payload: ProjectsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ProjectsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProjectsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProjectsPayload>
          }
          findFirst: {
            args: Prisma.ProjectsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProjectsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProjectsPayload>
          }
          findMany: {
            args: Prisma.ProjectsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProjectsPayload>[]
          }
          create: {
            args: Prisma.ProjectsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProjectsPayload>
          }
          createMany: {
            args: Prisma.ProjectsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProjectsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProjectsPayload>
          }
          update: {
            args: Prisma.ProjectsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ProjectsPayload>
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
            result: $Utils.PayloadToResult<ProjectsPayload>
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
        payload: ReferecesPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ReferecesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferecesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecesPayload>
          }
          findFirst: {
            args: Prisma.ReferecesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferecesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecesPayload>
          }
          findMany: {
            args: Prisma.ReferecesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecesPayload>[]
          }
          create: {
            args: Prisma.ReferecesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecesPayload>
          }
          createMany: {
            args: Prisma.ReferecesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReferecesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecesPayload>
          }
          update: {
            args: Prisma.ReferecesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecesPayload>
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
            result: $Utils.PayloadToResult<ReferecesPayload>
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
        payload: ReferecePricesPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.ReferecePricesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecePricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferecePricesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecePricesPayload>
          }
          findFirst: {
            args: Prisma.ReferecePricesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecePricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferecePricesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecePricesPayload>
          }
          findMany: {
            args: Prisma.ReferecePricesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecePricesPayload>[]
          }
          create: {
            args: Prisma.ReferecePricesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecePricesPayload>
          }
          createMany: {
            args: Prisma.ReferecePricesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReferecePricesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecePricesPayload>
          }
          update: {
            args: Prisma.ReferecePricesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<ReferecePricesPayload>
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
            result: $Utils.PayloadToResult<ReferecePricesPayload>
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
        payload: UserPointsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.UserPointsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPointsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserPointsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPointsPayload>
          }
          findFirst: {
            args: Prisma.UserPointsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPointsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserPointsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPointsPayload>
          }
          findMany: {
            args: Prisma.UserPointsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPointsPayload>[]
          }
          create: {
            args: Prisma.UserPointsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPointsPayload>
          }
          createMany: {
            args: Prisma.UserPointsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserPointsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPointsPayload>
          }
          update: {
            args: Prisma.UserPointsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<UserPointsPayload>
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
            result: $Utils.PayloadToResult<UserPointsPayload>
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
        payload: FeedPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.FeedFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedPayload>
          }
          findFirst: {
            args: Prisma.FeedFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedPayload>
          }
          findMany: {
            args: Prisma.FeedFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedPayload>[]
          }
          create: {
            args: Prisma.FeedCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedPayload>
          }
          createMany: {
            args: Prisma.FeedCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeedDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedPayload>
          }
          update: {
            args: Prisma.FeedUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedPayload>
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
            result: $Utils.PayloadToResult<FeedPayload>
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
        payload: FeedCommentsPayload<ExtArgs>
        operations: {
          findUnique: {
            args: Prisma.FeedCommentsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedCommentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FeedCommentsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedCommentsPayload>
          }
          findFirst: {
            args: Prisma.FeedCommentsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedCommentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FeedCommentsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedCommentsPayload>
          }
          findMany: {
            args: Prisma.FeedCommentsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedCommentsPayload>[]
          }
          create: {
            args: Prisma.FeedCommentsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedCommentsPayload>
          }
          createMany: {
            args: Prisma.FeedCommentsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FeedCommentsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedCommentsPayload>
          }
          update: {
            args: Prisma.FeedCommentsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<FeedCommentsPayload>
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
            result: $Utils.PayloadToResult<FeedCommentsPayload>
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
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
    | 'findMany'
    | 'findFirst'
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
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

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
    address: number
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
    address?: boolean | UserCountOutputTypeCountAddressArgs
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
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAddressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
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
  export type KnowledgespaceCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    perfil?: boolean | User$perfilArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
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
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    perfil?: boolean | User$perfilArgs<ExtArgs>
    address?: boolean | User$addressArgs<ExtArgs>
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
    _count?: boolean | UserCountOutputTypeArgs<ExtArgs>
  }


  type UserGetPayload<S extends boolean | null | undefined | UserArgs> = $Types.GetResult<UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<UserPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    perfil<T extends User$perfilArgs<ExtArgs> = {}>(args?: Subset<T, User$perfilArgs<ExtArgs>>): Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    address<T extends User$addressArgs<ExtArgs> = {}>(args?: Subset<T, User$addressArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findMany', never>| Null>;

    contact<T extends User$contactArgs<ExtArgs> = {}>(args?: Subset<T, User$contactArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ContactPayload<ExtArgs>, T, 'findMany', never>| Null>;

    degree<T extends User$degreeArgs<ExtArgs> = {}>(args?: Subset<T, User$degreeArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findMany', never>| Null>;

    skills<T extends User$skillsArgs<ExtArgs> = {}>(args?: Subset<T, User$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    experiences<T extends User$experiencesArgs<ExtArgs> = {}>(args?: Subset<T, User$experiencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'findMany', never>| Null>;

    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    referecePrices<T extends User$referecePricesArgs<ExtArgs> = {}>(args?: Subset<T, User$referecePricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'findMany', never>| Null>;

    refereces<T extends User$referecesArgs<ExtArgs> = {}>(args?: Subset<T, User$referecesArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'findMany', never>| Null>;

    userPoints<T extends User$userPointsArgs<ExtArgs> = {}>(args?: Subset<T, User$userPointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    feeds<T extends User$feedsArgs<ExtArgs> = {}>(args?: Subset<T, User$feedsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<FeedPayload<ExtArgs>, T, 'findMany', never>| Null>;

    comments<T extends User$commentsArgs<ExtArgs> = {}>(args?: Subset<T, User$commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * User findUnique
   */
  export interface UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
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
    orderBy?: Enumerable<UserOrderByWithRelationInput>
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
    distinct?: Enumerable<UserScalarFieldEnum>
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
    data: Enumerable<UserCreateManyInput>
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
   * User.address
   */
  export type User$addressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    cursor?: AddressWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
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
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
    cursor?: ContactWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ContactScalarFieldEnum>
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
    orderBy?: Enumerable<DegreeOrderByWithRelationInput>
    cursor?: DegreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DegreeScalarFieldEnum>
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
    orderBy?: Enumerable<SkillsOrderByWithRelationInput>
    cursor?: SkillsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<SkillsScalarFieldEnum>
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
    orderBy?: Enumerable<ExperiencesOrderByWithRelationInput>
    cursor?: ExperiencesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ExperiencesScalarFieldEnum>
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
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
    cursor?: ProjectsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ProjectsScalarFieldEnum>
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
    orderBy?: Enumerable<ReferecePricesOrderByWithRelationInput>
    cursor?: ReferecePricesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReferecePricesScalarFieldEnum>
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
    orderBy?: Enumerable<ReferecesOrderByWithRelationInput>
    cursor?: ReferecesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ReferecesScalarFieldEnum>
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
    orderBy?: Enumerable<UserPointsOrderByWithRelationInput>
    cursor?: UserPointsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<UserPointsScalarFieldEnum>
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
    orderBy?: Enumerable<FeedOrderByWithRelationInput>
    cursor?: FeedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FeedScalarFieldEnum>
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
    orderBy?: Enumerable<FeedCommentsOrderByWithRelationInput>
    cursor?: FeedCommentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FeedCommentsScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerfilMaxAggregateOutputType = {
    id: bigint | null
    photo: string | null
    name: string | null
    secondname: string | null
    socialname: string | null
    birthday: Date | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PerfilCountAggregateOutputType = {
    id: number
    photo: number
    name: number
    secondname: number
    socialname: number
    birthday: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type PerfilMaxAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    secondname?: true
    socialname?: true
    birthday?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PerfilCountAggregateInputType = {
    id?: true
    photo?: true
    name?: true
    secondname?: true
    socialname?: true
    birthday?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<PerfilOrderByWithRelationInput>
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
    orderBy?: Enumerable<PerfilOrderByWithAggregationInput>
    by: PerfilScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: PerfilCountAggregateOutputType | null
    _avg: PerfilAvgAggregateOutputType | null
    _sum: PerfilSumAggregateOutputType | null
    _min: PerfilMinAggregateOutputType | null
    _max: PerfilMaxAggregateOutputType | null
  }

  type GetPerfilGroupByPayload<T extends PerfilGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PerfilGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PerfilInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Perfil$userArgs<ExtArgs>
  }


  type PerfilGetPayload<S extends boolean | null | undefined | PerfilArgs> = $Types.GetResult<PerfilPayload, S>

  type PerfilCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PerfilFindManyArgs, 'select' | 'include'> & {
      select?: PerfilCountAggregateInputType | true
    }

  export interface PerfilDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends PerfilFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PerfilFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Perfil'> extends True ? Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends PerfilFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PerfilFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Perfil'> extends True ? Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Perfil that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__PerfilClient<$Types.GetResult<PerfilPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Perfil.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PerfilClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Perfil$userArgs<ExtArgs> = {}>(args?: Subset<T, Perfil$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Perfil base type for findUnique actions
   */
  export type PerfilFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Perfil findUnique
   */
  export interface PerfilFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PerfilFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Perfil base type for findFirst actions
   */
  export type PerfilFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<PerfilOrderByWithRelationInput>
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
    distinct?: Enumerable<PerfilScalarFieldEnum>
  }

  /**
   * Perfil findFirst
   */
  export interface PerfilFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends PerfilFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<PerfilOrderByWithRelationInput>
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
    distinct?: Enumerable<PerfilScalarFieldEnum>
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
    orderBy?: Enumerable<PerfilOrderByWithRelationInput>
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
    distinct?: Enumerable<PerfilScalarFieldEnum>
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
    data: Enumerable<PerfilCreateManyInput>
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
  export type PerfilArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Model Address
   */


  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: bigint | null
    userId: bigint | null
  }

  export type AddressMinAggregateOutputType = {
    id: bigint | null
    street: string | null
    number: string | null
    complement: string | null
    city: string | null
    state: string | null
    country: string | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressMaxAggregateOutputType = {
    id: bigint | null
    street: string | null
    number: string | null
    complement: string | null
    city: string | null
    state: string | null
    country: string | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    street: number
    number: number
    complement: number
    city: number
    state: number
    country: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    city?: true
    state?: true
    country?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    city?: true
    state?: true
    country?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    street?: true
    number?: true
    complement?: true
    city?: true
    state?: true
    country?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: Enumerable<AddressOrderByWithAggregationInput>
    by: AddressScalarFieldEnum[]
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }


  export type AddressGroupByOutputType = {
    id: bigint
    street: string | null
    number: string | null
    complement: string | null
    city: string | null
    state: string | null
    country: string | null
    userId: bigint | null
    createdAt: Date
    updatedAt: Date | null
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Address$userArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    street?: boolean
    number?: boolean
    complement?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AddressInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Address$userArgs<ExtArgs>
  }


  type AddressGetPayload<S extends boolean | null | undefined | AddressArgs> = $Types.GetResult<AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AddressFindManyArgs, 'select' | 'include'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AddressFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Address'> extends True ? Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

    /**
     * Find one Address that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AddressFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Address'> extends True ? Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Address that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AddressFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Types.GetResult<AddressPayload<ExtArgs>, T, 'findMany', never>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
    **/
    create<T extends AddressCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressCreateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

    /**
     * Create many Addresses.
     *     @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     *     @example
     *     // Create many Addresses
     *     const address = await prisma.address.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AddressCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
    **/
    delete<T extends AddressDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AddressUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AddressDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AddressUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
    **/
    upsert<T extends AddressUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>
    ): Prisma__AddressClient<$Types.GetResult<AddressPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Address$userArgs<ExtArgs> = {}>(args?: Subset<T, Address$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Address base type for findUnique actions
   */
  export type AddressFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUnique
   */
  export interface AddressFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AddressFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address base type for findFirst actions
   */
  export type AddressFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: Enumerable<AddressScalarFieldEnum>
  }

  /**
   * Address findFirst
   */
  export interface AddressFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends AddressFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: Enumerable<AddressOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: Enumerable<AddressScalarFieldEnum>
  }


  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data?: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }


  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: Enumerable<AddressCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
  }


  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }


  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }


  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
  }


  /**
   * Address.user
   */
  export type Address$userArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Address without action
   */
  export type AddressArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AddressInclude<ExtArgs> | null
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: bigint | null
    email: string | null
    phone: string | null
    another: string | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    another: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    another?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    another?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
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
    orderBy?: Enumerable<ContactOrderByWithAggregationInput>
    by: ContactScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: ContactCountAggregateOutputType | null
    _avg: ContactAvgAggregateOutputType | null
    _sum: ContactSumAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ContactGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Contact$userArgs<ExtArgs>
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    another?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Contact$userArgs<ExtArgs>
  }


  type ContactGetPayload<S extends boolean | null | undefined | ContactArgs> = $Types.GetResult<ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ContactFindManyArgs, 'select' | 'include'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends ContactFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Contact'> extends True ? Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends ContactFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Contact'> extends True ? Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Contact that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<ContactPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__ContactClient<$Types.GetResult<ContactPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Contact$userArgs<ExtArgs> = {}>(args?: Subset<T, Contact$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Contact base type for findUnique actions
   */
  export type ContactFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Contact findUnique
   */
  export interface ContactFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ContactFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Contact base type for findFirst actions
   */
  export type ContactFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
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
    distinct?: Enumerable<ContactScalarFieldEnum>
  }

  /**
   * Contact findFirst
   */
  export interface ContactFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ContactFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
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
    distinct?: Enumerable<ContactScalarFieldEnum>
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
    orderBy?: Enumerable<ContactOrderByWithRelationInput>
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
    distinct?: Enumerable<ContactScalarFieldEnum>
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
    data: Enumerable<ContactCreateManyInput>
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
  export type ContactArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgespaceMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type KnowledgespaceCountAggregateOutputType = {
    id: number
    code: number
    description: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgespaceMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type KnowledgespaceCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<KnowledgespaceOrderByWithRelationInput>
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
    orderBy?: Enumerable<KnowledgespaceOrderByWithAggregationInput>
    by: KnowledgespaceScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: KnowledgespaceCountAggregateOutputType | null
    _avg: KnowledgespaceAvgAggregateOutputType | null
    _sum: KnowledgespaceSumAggregateOutputType | null
    _min: KnowledgespaceMinAggregateOutputType | null
    _max: KnowledgespaceMaxAggregateOutputType | null
  }

  type GetKnowledgespaceGroupByPayload<T extends KnowledgespaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<KnowledgespaceGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    degree?: boolean | Knowledgespace$degreeArgs<ExtArgs>
    _count?: boolean | KnowledgespaceCountOutputTypeArgs<ExtArgs>
  }, ExtArgs["result"]["knowledgespace"]>

  export type KnowledgespaceSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type KnowledgespaceInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    degree?: boolean | Knowledgespace$degreeArgs<ExtArgs>
    _count?: boolean | KnowledgespaceCountOutputTypeArgs<ExtArgs>
  }


  type KnowledgespaceGetPayload<S extends boolean | null | undefined | KnowledgespaceArgs> = $Types.GetResult<KnowledgespacePayload, S>

  type KnowledgespaceCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<KnowledgespaceFindManyArgs, 'select' | 'include'> & {
      select?: KnowledgespaceCountAggregateInputType | true
    }

  export interface KnowledgespaceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends KnowledgespaceFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, KnowledgespaceFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Knowledgespace'> extends True ? Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends KnowledgespaceFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, KnowledgespaceFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Knowledgespace'> extends True ? Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Knowledgespace that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Knowledgespace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__KnowledgespaceClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    degree<T extends Knowledgespace$degreeArgs<ExtArgs> = {}>(args?: Subset<T, Knowledgespace$degreeArgs<ExtArgs>>): Prisma.PrismaPromise<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findMany', never>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Knowledgespace base type for findUnique actions
   */
  export type KnowledgespaceFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Knowledgespace findUnique
   */
  export interface KnowledgespaceFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends KnowledgespaceFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Knowledgespace base type for findFirst actions
   */
  export type KnowledgespaceFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<KnowledgespaceOrderByWithRelationInput>
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
    distinct?: Enumerable<KnowledgespaceScalarFieldEnum>
  }

  /**
   * Knowledgespace findFirst
   */
  export interface KnowledgespaceFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends KnowledgespaceFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<KnowledgespaceOrderByWithRelationInput>
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
    distinct?: Enumerable<KnowledgespaceScalarFieldEnum>
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
    orderBy?: Enumerable<KnowledgespaceOrderByWithRelationInput>
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
    distinct?: Enumerable<KnowledgespaceScalarFieldEnum>
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
    data: Enumerable<KnowledgespaceCreateManyInput>
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
    orderBy?: Enumerable<DegreeOrderByWithRelationInput>
    cursor?: DegreeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DegreeScalarFieldEnum>
  }


  /**
   * Knowledgespace without action
   */
  export type KnowledgespaceArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DegreeMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
    KnowledgespaceId: bigint | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DegreeCountAggregateOutputType = {
    id: number
    code: number
    description: number
    KnowledgespaceId: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type DegreeMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    KnowledgespaceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DegreeCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    KnowledgespaceId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<DegreeOrderByWithRelationInput>
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
    orderBy?: Enumerable<DegreeOrderByWithAggregationInput>
    by: DegreeScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: DegreeCountAggregateOutputType | null
    _avg: DegreeAvgAggregateOutputType | null
    _sum: DegreeSumAggregateOutputType | null
    _min: DegreeMinAggregateOutputType | null
    _max: DegreeMaxAggregateOutputType | null
  }

  type GetDegreeGroupByPayload<T extends DegreeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DegreeGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    Knowledgespace?: boolean | Degree$KnowledgespaceArgs<ExtArgs>
    user?: boolean | Degree$userArgs<ExtArgs>
  }, ExtArgs["result"]["degree"]>

  export type DegreeSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    KnowledgespaceId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DegreeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    Knowledgespace?: boolean | Degree$KnowledgespaceArgs<ExtArgs>
    user?: boolean | Degree$userArgs<ExtArgs>
  }


  type DegreeGetPayload<S extends boolean | null | undefined | DegreeArgs> = $Types.GetResult<DegreePayload, S>

  type DegreeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<DegreeFindManyArgs, 'select' | 'include'> & {
      select?: DegreeCountAggregateInputType | true
    }

  export interface DegreeDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends DegreeFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DegreeFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Degree'> extends True ? Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends DegreeFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DegreeFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Degree'> extends True ? Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Degree that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<DegreePayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__DegreeClient<$Types.GetResult<DegreePayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Degree.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DegreeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Knowledgespace<T extends Degree$KnowledgespaceArgs<ExtArgs> = {}>(args?: Subset<T, Degree$KnowledgespaceArgs<ExtArgs>>): Prisma__KnowledgespaceClient<$Types.GetResult<KnowledgespacePayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    user<T extends Degree$userArgs<ExtArgs> = {}>(args?: Subset<T, Degree$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Degree base type for findUnique actions
   */
  export type DegreeFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Degree findUnique
   */
  export interface DegreeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DegreeFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Degree base type for findFirst actions
   */
  export type DegreeFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<DegreeOrderByWithRelationInput>
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
    distinct?: Enumerable<DegreeScalarFieldEnum>
  }

  /**
   * Degree findFirst
   */
  export interface DegreeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends DegreeFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<DegreeOrderByWithRelationInput>
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
    distinct?: Enumerable<DegreeScalarFieldEnum>
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
    orderBy?: Enumerable<DegreeOrderByWithRelationInput>
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
    distinct?: Enumerable<DegreeScalarFieldEnum>
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
    data: Enumerable<DegreeCreateManyInput>
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
  export type DegreeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillsMaxAggregateOutputType = {
    id: bigint | null
    code: string | null
    description: string | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillsCountAggregateOutputType = {
    id: number
    code: number
    description: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type SkillsMaxAggregateInputType = {
    id?: true
    code?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillsCountAggregateInputType = {
    id?: true
    code?: true
    description?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<SkillsOrderByWithRelationInput>
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
    orderBy?: Enumerable<SkillsOrderByWithAggregationInput>
    by: SkillsScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: SkillsCountAggregateOutputType | null
    _avg: SkillsAvgAggregateOutputType | null
    _sum: SkillsSumAggregateOutputType | null
    _min: SkillsMinAggregateOutputType | null
    _max: SkillsMaxAggregateOutputType | null
  }

  type GetSkillsGroupByPayload<T extends SkillsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<SkillsGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Skills$userArgs<ExtArgs>
  }, ExtArgs["result"]["skills"]>

  export type SkillsSelectScalar = {
    id?: boolean
    code?: boolean
    description?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Skills$userArgs<ExtArgs>
  }


  type SkillsGetPayload<S extends boolean | null | undefined | SkillsArgs> = $Types.GetResult<SkillsPayload, S>

  type SkillsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SkillsFindManyArgs, 'select' | 'include'> & {
      select?: SkillsCountAggregateInputType | true
    }

  export interface SkillsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends SkillsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, SkillsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Skills'> extends True ? Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends SkillsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, SkillsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Skills'> extends True ? Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Skills that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__SkillsClient<$Types.GetResult<SkillsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Skills.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__SkillsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Skills$userArgs<ExtArgs> = {}>(args?: Subset<T, Skills$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Skills base type for findUnique actions
   */
  export type SkillsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Skills findUnique
   */
  export interface SkillsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SkillsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Skills base type for findFirst actions
   */
  export type SkillsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<SkillsOrderByWithRelationInput>
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
    distinct?: Enumerable<SkillsScalarFieldEnum>
  }

  /**
   * Skills findFirst
   */
  export interface SkillsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends SkillsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<SkillsOrderByWithRelationInput>
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
    distinct?: Enumerable<SkillsScalarFieldEnum>
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
    orderBy?: Enumerable<SkillsOrderByWithRelationInput>
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
    distinct?: Enumerable<SkillsScalarFieldEnum>
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
    data: Enumerable<SkillsCreateManyInput>
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
  export type SkillsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperiencesMaxAggregateOutputType = {
    id: bigint | null
    company: string | null
    start: Date | null
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperiencesCountAggregateOutputType = {
    id: number
    company: number
    start: number
    end: number
    iscurrent: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type ExperiencesMaxAggregateInputType = {
    id?: true
    company?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperiencesCountAggregateInputType = {
    id?: true
    company?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<ExperiencesOrderByWithRelationInput>
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
    orderBy?: Enumerable<ExperiencesOrderByWithAggregationInput>
    by: ExperiencesScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: ExperiencesCountAggregateOutputType | null
    _avg: ExperiencesAvgAggregateOutputType | null
    _sum: ExperiencesSumAggregateOutputType | null
    _min: ExperiencesMinAggregateOutputType | null
    _max: ExperiencesMaxAggregateOutputType | null
  }

  type GetExperiencesGroupByPayload<T extends ExperiencesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ExperiencesGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Experiences$userArgs<ExtArgs>
  }, ExtArgs["result"]["experiences"]>

  export type ExperiencesSelectScalar = {
    id?: boolean
    company?: boolean
    start?: boolean
    end?: boolean
    iscurrent?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExperiencesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Experiences$userArgs<ExtArgs>
  }


  type ExperiencesGetPayload<S extends boolean | null | undefined | ExperiencesArgs> = $Types.GetResult<ExperiencesPayload, S>

  type ExperiencesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ExperiencesFindManyArgs, 'select' | 'include'> & {
      select?: ExperiencesCountAggregateInputType | true
    }

  export interface ExperiencesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends ExperiencesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ExperiencesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Experiences'> extends True ? Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends ExperiencesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ExperiencesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Experiences'> extends True ? Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Experiences that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__ExperiencesClient<$Types.GetResult<ExperiencesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Experiences.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ExperiencesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Experiences$userArgs<ExtArgs> = {}>(args?: Subset<T, Experiences$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Experiences base type for findUnique actions
   */
  export type ExperiencesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Experiences findUnique
   */
  export interface ExperiencesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExperiencesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Experiences base type for findFirst actions
   */
  export type ExperiencesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<ExperiencesOrderByWithRelationInput>
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
    distinct?: Enumerable<ExperiencesScalarFieldEnum>
  }

  /**
   * Experiences findFirst
   */
  export interface ExperiencesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ExperiencesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<ExperiencesOrderByWithRelationInput>
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
    distinct?: Enumerable<ExperiencesScalarFieldEnum>
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
    orderBy?: Enumerable<ExperiencesOrderByWithRelationInput>
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
    distinct?: Enumerable<ExperiencesScalarFieldEnum>
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
    data: Enumerable<ExperiencesCreateManyInput>
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
  export type ExperiencesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectsMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    start: Date | null
    end: Date | null
    iscurrent: boolean | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectsCountAggregateOutputType = {
    id: number
    name: number
    description: number
    start: number
    end: number
    iscurrent: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectsMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectsCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start?: true
    end?: true
    iscurrent?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
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
    orderBy?: Enumerable<ProjectsOrderByWithAggregationInput>
    by: ProjectsScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: ProjectsCountAggregateOutputType | null
    _avg: ProjectsAvgAggregateOutputType | null
    _sum: ProjectsSumAggregateOutputType | null
    _min: ProjectsMinAggregateOutputType | null
    _max: ProjectsMaxAggregateOutputType | null
  }

  type GetProjectsGroupByPayload<T extends ProjectsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ProjectsGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Projects$userArgs<ExtArgs>
  }


  type ProjectsGetPayload<S extends boolean | null | undefined | ProjectsArgs> = $Types.GetResult<ProjectsPayload, S>

  type ProjectsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ProjectsFindManyArgs, 'select' | 'include'> & {
      select?: ProjectsCountAggregateInputType | true
    }

  export interface ProjectsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends ProjectsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ProjectsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Projects'> extends True ? Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends ProjectsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ProjectsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Projects'> extends True ? Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Projects that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__ProjectsClient<$Types.GetResult<ProjectsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Projects.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ProjectsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Projects$userArgs<ExtArgs> = {}>(args?: Subset<T, Projects$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Projects base type for findUnique actions
   */
  export type ProjectsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Projects findUnique
   */
  export interface ProjectsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProjectsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Projects base type for findFirst actions
   */
  export type ProjectsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
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
    distinct?: Enumerable<ProjectsScalarFieldEnum>
  }

  /**
   * Projects findFirst
   */
  export interface ProjectsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ProjectsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
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
    distinct?: Enumerable<ProjectsScalarFieldEnum>
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
    orderBy?: Enumerable<ProjectsOrderByWithRelationInput>
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
    distinct?: Enumerable<ProjectsScalarFieldEnum>
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
    data: Enumerable<ProjectsCreateManyInput>
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
  export type ProjectsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferecesMaxAggregateOutputType = {
    id: bigint | null
    description: string | null
    value: number | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferecesCountAggregateOutputType = {
    id: number
    description: number
    value: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type ReferecesMaxAggregateInputType = {
    id?: true
    description?: true
    value?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferecesCountAggregateInputType = {
    id?: true
    description?: true
    value?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<ReferecesOrderByWithRelationInput>
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
    orderBy?: Enumerable<ReferecesOrderByWithAggregationInput>
    by: ReferecesScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: ReferecesCountAggregateOutputType | null
    _avg: ReferecesAvgAggregateOutputType | null
    _sum: ReferecesSumAggregateOutputType | null
    _min: ReferecesMinAggregateOutputType | null
    _max: ReferecesMaxAggregateOutputType | null
  }

  type GetReferecesGroupByPayload<T extends ReferecesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReferecesGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | Refereces$userArgs<ExtArgs>
  }, ExtArgs["result"]["refereces"]>

  export type ReferecesSelectScalar = {
    id?: boolean
    description?: boolean
    value?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReferecesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Refereces$userArgs<ExtArgs>
  }


  type ReferecesGetPayload<S extends boolean | null | undefined | ReferecesArgs> = $Types.GetResult<ReferecesPayload, S>

  type ReferecesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReferecesFindManyArgs, 'select' | 'include'> & {
      select?: ReferecesCountAggregateInputType | true
    }

  export interface ReferecesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends ReferecesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReferecesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Refereces'> extends True ? Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends ReferecesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReferecesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Refereces'> extends True ? Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Refereces that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__ReferecesClient<$Types.GetResult<ReferecesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Refereces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReferecesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Refereces$userArgs<ExtArgs> = {}>(args?: Subset<T, Refereces$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Refereces base type for findUnique actions
   */
  export type ReferecesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Refereces findUnique
   */
  export interface ReferecesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ReferecesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Refereces base type for findFirst actions
   */
  export type ReferecesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<ReferecesOrderByWithRelationInput>
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
    distinct?: Enumerable<ReferecesScalarFieldEnum>
  }

  /**
   * Refereces findFirst
   */
  export interface ReferecesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ReferecesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<ReferecesOrderByWithRelationInput>
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
    distinct?: Enumerable<ReferecesScalarFieldEnum>
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
    orderBy?: Enumerable<ReferecesOrderByWithRelationInput>
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
    distinct?: Enumerable<ReferecesScalarFieldEnum>
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
    data: Enumerable<ReferecesCreateManyInput>
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
  export type ReferecesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferecePricesMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    description: string | null
    contacts: string | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferecePricesCountAggregateOutputType = {
    id: number
    name: number
    description: number
    contacts: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type ReferecePricesMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    contacts?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferecePricesCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    contacts?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<ReferecePricesOrderByWithRelationInput>
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
    orderBy?: Enumerable<ReferecePricesOrderByWithAggregationInput>
    by: ReferecePricesScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: ReferecePricesCountAggregateOutputType | null
    _avg: ReferecePricesAvgAggregateOutputType | null
    _sum: ReferecePricesSumAggregateOutputType | null
    _min: ReferecePricesMinAggregateOutputType | null
    _max: ReferecePricesMaxAggregateOutputType | null
  }

  type GetReferecePricesGroupByPayload<T extends ReferecePricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ReferecePricesGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | ReferecePrices$userArgs<ExtArgs>
  }, ExtArgs["result"]["referecePrices"]>

  export type ReferecePricesSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    contacts?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ReferecePricesInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | ReferecePrices$userArgs<ExtArgs>
  }


  type ReferecePricesGetPayload<S extends boolean | null | undefined | ReferecePricesArgs> = $Types.GetResult<ReferecePricesPayload, S>

  type ReferecePricesCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<ReferecePricesFindManyArgs, 'select' | 'include'> & {
      select?: ReferecePricesCountAggregateInputType | true
    }

  export interface ReferecePricesDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends ReferecePricesFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ReferecePricesFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ReferecePrices'> extends True ? Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends ReferecePricesFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ReferecePricesFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ReferecePrices'> extends True ? Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first ReferecePrices that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__ReferecePricesClient<$Types.GetResult<ReferecePricesPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferecePrices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ReferecePricesClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends ReferecePrices$userArgs<ExtArgs> = {}>(args?: Subset<T, ReferecePrices$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ReferecePrices base type for findUnique actions
   */
  export type ReferecePricesFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * ReferecePrices findUnique
   */
  export interface ReferecePricesFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ReferecePricesFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * ReferecePrices base type for findFirst actions
   */
  export type ReferecePricesFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<ReferecePricesOrderByWithRelationInput>
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
    distinct?: Enumerable<ReferecePricesScalarFieldEnum>
  }

  /**
   * ReferecePrices findFirst
   */
  export interface ReferecePricesFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends ReferecePricesFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<ReferecePricesOrderByWithRelationInput>
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
    distinct?: Enumerable<ReferecePricesScalarFieldEnum>
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
    orderBy?: Enumerable<ReferecePricesOrderByWithRelationInput>
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
    distinct?: Enumerable<ReferecePricesScalarFieldEnum>
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
    data: Enumerable<ReferecePricesCreateManyInput>
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
  export type ReferecePricesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPointsMaxAggregateOutputType = {
    id: bigint | null
    value: bigint | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserPointsCountAggregateOutputType = {
    id: number
    value: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type UserPointsMaxAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserPointsCountAggregateInputType = {
    id?: true
    value?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<UserPointsOrderByWithRelationInput>
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
    orderBy?: Enumerable<UserPointsOrderByWithAggregationInput>
    by: UserPointsScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: UserPointsCountAggregateOutputType | null
    _avg: UserPointsAvgAggregateOutputType | null
    _sum: UserPointsSumAggregateOutputType | null
    _min: UserPointsMinAggregateOutputType | null
    _max: UserPointsMaxAggregateOutputType | null
  }

  type GetUserPointsGroupByPayload<T extends UserPointsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserPointsGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserPoints$userArgs<ExtArgs>
  }, ExtArgs["result"]["userPoints"]>

  export type UserPointsSelectScalar = {
    id?: boolean
    value?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserPointsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserPoints$userArgs<ExtArgs>
  }


  type UserPointsGetPayload<S extends boolean | null | undefined | UserPointsArgs> = $Types.GetResult<UserPointsPayload, S>

  type UserPointsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserPointsFindManyArgs, 'select' | 'include'> & {
      select?: UserPointsCountAggregateInputType | true
    }

  export interface UserPointsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserPointsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserPointsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'UserPoints'> extends True ? Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends UserPointsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserPointsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'UserPoints'> extends True ? Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first UserPoints that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__UserPointsClient<$Types.GetResult<UserPointsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for UserPoints.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserPointsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends UserPoints$userArgs<ExtArgs> = {}>(args?: Subset<T, UserPoints$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * UserPoints base type for findUnique actions
   */
  export type UserPointsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * UserPoints findUnique
   */
  export interface UserPointsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserPointsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * UserPoints base type for findFirst actions
   */
  export type UserPointsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<UserPointsOrderByWithRelationInput>
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
    distinct?: Enumerable<UserPointsScalarFieldEnum>
  }

  /**
   * UserPoints findFirst
   */
  export interface UserPointsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends UserPointsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<UserPointsOrderByWithRelationInput>
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
    distinct?: Enumerable<UserPointsScalarFieldEnum>
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
    orderBy?: Enumerable<UserPointsOrderByWithRelationInput>
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
    distinct?: Enumerable<UserPointsScalarFieldEnum>
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
    data: Enumerable<UserPointsCreateManyInput>
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
  export type UserPointsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
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
    createdAt: Date | null
    updatedAt: Date | null
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
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
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
    createdAt?: true
    updatedAt?: true
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
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<FeedOrderByWithRelationInput>
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
    orderBy?: Enumerable<FeedOrderByWithAggregationInput>
    by: FeedScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: FeedCountAggregateOutputType | null
    _avg: FeedAvgAggregateOutputType | null
    _sum: FeedSumAggregateOutputType | null
    _min: FeedMinAggregateOutputType | null
    _max: FeedMaxAggregateOutputType | null
  }

  type GetFeedGroupByPayload<T extends FeedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FeedGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
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
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeedInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | Feed$userArgs<ExtArgs>
  }


  type FeedGetPayload<S extends boolean | null | undefined | FeedArgs> = $Types.GetResult<FeedPayload, S>

  type FeedCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FeedFindManyArgs, 'select' | 'include'> & {
      select?: FeedCountAggregateInputType | true
    }

  export interface FeedDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends FeedFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FeedFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Feed'> extends True ? Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends FeedFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FeedFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Feed'> extends True ? Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first Feed that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<FeedPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__FeedClient<$Types.GetResult<FeedPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for Feed.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FeedClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends Feed$userArgs<ExtArgs> = {}>(args?: Subset<T, Feed$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Feed base type for findUnique actions
   */
  export type FeedFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * Feed findUnique
   */
  export interface FeedFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FeedFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * Feed base type for findFirst actions
   */
  export type FeedFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<FeedOrderByWithRelationInput>
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
    distinct?: Enumerable<FeedScalarFieldEnum>
  }

  /**
   * Feed findFirst
   */
  export interface FeedFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FeedFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<FeedOrderByWithRelationInput>
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
    distinct?: Enumerable<FeedScalarFieldEnum>
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
    orderBy?: Enumerable<FeedOrderByWithRelationInput>
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
    distinct?: Enumerable<FeedScalarFieldEnum>
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
    data: Enumerable<FeedCreateManyInput>
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
  export type FeedArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedCommentsMaxAggregateOutputType = {
    id: bigint | null
    comment: string | null
    userId: bigint | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FeedCommentsCountAggregateOutputType = {
    id: number
    comment: number
    userId: number
    createdAt: number
    updatedAt: number
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
    createdAt?: true
    updatedAt?: true
  }

  export type FeedCommentsMaxAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FeedCommentsCountAggregateInputType = {
    id?: true
    comment?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
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
    orderBy?: Enumerable<FeedCommentsOrderByWithRelationInput>
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
    orderBy?: Enumerable<FeedCommentsOrderByWithAggregationInput>
    by: FeedCommentsScalarFieldEnum[]
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
    createdAt: Date
    updatedAt: Date | null
    _count: FeedCommentsCountAggregateOutputType | null
    _avg: FeedCommentsAvgAggregateOutputType | null
    _sum: FeedCommentsSumAggregateOutputType | null
    _min: FeedCommentsMinAggregateOutputType | null
    _max: FeedCommentsMaxAggregateOutputType | null
  }

  type GetFeedCommentsGroupByPayload<T extends FeedCommentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FeedCommentsGroupByOutputType, T['by']> &
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
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | FeedComments$userArgs<ExtArgs>
  }, ExtArgs["result"]["feedComments"]>

  export type FeedCommentsSelectScalar = {
    id?: boolean
    comment?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FeedCommentsInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | FeedComments$userArgs<ExtArgs>
  }


  type FeedCommentsGetPayload<S extends boolean | null | undefined | FeedCommentsArgs> = $Types.GetResult<FeedCommentsPayload, S>

  type FeedCommentsCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FeedCommentsFindManyArgs, 'select' | 'include'> & {
      select?: FeedCommentsCountAggregateInputType | true
    }

  export interface FeedCommentsDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    findUnique<T extends FeedCommentsFindUniqueArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FeedCommentsFindUniqueArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FeedComments'> extends True ? Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'findUnique', never>, never, ExtArgs> : Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'findUnique', never> | null, null, ExtArgs>

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
    ): Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'findUniqueOrThrow', never>, never, ExtArgs>

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
    findFirst<T extends FeedCommentsFindFirstArgs<ExtArgs>, LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FeedCommentsFindFirstArgs<ExtArgs>>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FeedComments'> extends True ? Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'findFirst', never>, never, ExtArgs> : Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'findFirst', never> | null, null, ExtArgs>

    /**
     * Find the first FeedComments that matches the filter or
     * throw `NotFoundError` if no matches were found.
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
    ): Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'findFirstOrThrow', never>, never, ExtArgs>

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
    ): Prisma.PrismaPromise<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'findMany', never>>

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
    ): Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'create', never>, never, ExtArgs>

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
    ): Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'delete', never>, never, ExtArgs>

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
    ): Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'update', never>, never, ExtArgs>

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
    ): Prisma__FeedCommentsClient<$Types.GetResult<FeedCommentsPayload<ExtArgs>, T, 'upsert', never>, never, ExtArgs>

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
      ByFields extends TupleToUnion<T['by']>,
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

  }

  /**
   * The delegate class that acts as a "Promise-like" for FeedComments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FeedCommentsClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    user<T extends FeedComments$userArgs<ExtArgs> = {}>(args?: Subset<T, FeedComments$userArgs<ExtArgs>>): Prisma__UserClient<$Types.GetResult<UserPayload<ExtArgs>, T, 'findUnique', never> | Null, never, ExtArgs>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FeedComments base type for findUnique actions
   */
  export type FeedCommentsFindUniqueArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
   * FeedComments findUnique
   */
  export interface FeedCommentsFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FeedCommentsFindUniqueArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
   * FeedComments base type for findFirst actions
   */
  export type FeedCommentsFindFirstArgsBase<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    orderBy?: Enumerable<FeedCommentsOrderByWithRelationInput>
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
    distinct?: Enumerable<FeedCommentsScalarFieldEnum>
  }

  /**
   * FeedComments findFirst
   */
  export interface FeedCommentsFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends FeedCommentsFindFirstArgsBase<ExtArgs> {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
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
    orderBy?: Enumerable<FeedCommentsOrderByWithRelationInput>
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
    distinct?: Enumerable<FeedCommentsScalarFieldEnum>
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
    orderBy?: Enumerable<FeedCommentsOrderByWithRelationInput>
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
    distinct?: Enumerable<FeedCommentsScalarFieldEnum>
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
    data: Enumerable<FeedCommentsCreateManyInput>
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
  export type FeedCommentsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PerfilScalarFieldEnum: {
    id: 'id',
    photo: 'photo',
    name: 'name',
    secondname: 'secondname',
    socialname: 'socialname',
    birthday: 'birthday',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PerfilScalarFieldEnum = (typeof PerfilScalarFieldEnum)[keyof typeof PerfilScalarFieldEnum]


  export const AddressScalarFieldEnum: {
    id: 'id',
    street: 'street',
    number: 'number',
    complement: 'complement',
    city: 'city',
    state: 'state',
    country: 'country',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    another: 'another',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const KnowledgespaceScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type KnowledgespaceScalarFieldEnum = (typeof KnowledgespaceScalarFieldEnum)[keyof typeof KnowledgespaceScalarFieldEnum]


  export const DegreeScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    KnowledgespaceId: 'KnowledgespaceId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DegreeScalarFieldEnum = (typeof DegreeScalarFieldEnum)[keyof typeof DegreeScalarFieldEnum]


  export const SkillsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    description: 'description',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillsScalarFieldEnum = (typeof SkillsScalarFieldEnum)[keyof typeof SkillsScalarFieldEnum]


  export const ExperiencesScalarFieldEnum: {
    id: 'id',
    company: 'company',
    start: 'start',
    end: 'end',
    iscurrent: 'iscurrent',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExperiencesScalarFieldEnum = (typeof ExperiencesScalarFieldEnum)[keyof typeof ExperiencesScalarFieldEnum]


  export const ProjectsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    start: 'start',
    end: 'end',
    iscurrent: 'iscurrent',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectsScalarFieldEnum = (typeof ProjectsScalarFieldEnum)[keyof typeof ProjectsScalarFieldEnum]


  export const ReferecesScalarFieldEnum: {
    id: 'id',
    description: 'description',
    value: 'value',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReferecesScalarFieldEnum = (typeof ReferecesScalarFieldEnum)[keyof typeof ReferecesScalarFieldEnum]


  export const ReferecePricesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    contacts: 'contacts',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReferecePricesScalarFieldEnum = (typeof ReferecePricesScalarFieldEnum)[keyof typeof ReferecePricesScalarFieldEnum]


  export const UserPointsScalarFieldEnum: {
    id: 'id',
    value: 'value',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FeedScalarFieldEnum = (typeof FeedScalarFieldEnum)[keyof typeof FeedScalarFieldEnum]


  export const FeedCommentsScalarFieldEnum: {
    id: 'id',
    comment: 'comment',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
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
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: BigIntFilter<"User"> | bigint | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    perfil?: XOR<PerfilNullableRelationFilter, PerfilWhereInput> | null
    address?: AddressListRelationFilter
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
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    perfil?: PerfilOrderByWithRelationInput
    address?: AddressOrderByRelationAggregateInput
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
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableFilter<"User"> | Date | string | null
    perfil?: XOR<PerfilNullableRelationFilter, PerfilWhereInput> | null
    address?: AddressListRelationFilter
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
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"User"> | bigint | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
  }

  export type PerfilWhereInput = {
    AND?: Enumerable<PerfilWhereInput>
    OR?: Enumerable<PerfilWhereInput>
    NOT?: Enumerable<PerfilWhereInput>
    id?: BigIntFilter<"Perfil"> | bigint | number
    photo?: StringNullableFilter<"Perfil"> | string | null
    name?: StringNullableFilter<"Perfil"> | string | null
    secondname?: StringNullableFilter<"Perfil"> | string | null
    socialname?: StringNullableFilter<"Perfil"> | string | null
    birthday?: DateTimeNullableFilter<"Perfil"> | Date | string | null
    userId?: BigIntNullableFilter<"Perfil"> | bigint | number | null
    createdAt?: DateTimeFilter<"Perfil"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Perfil"> | Date | string | null
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
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PerfilWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    userId?: bigint | number
    AND?: Enumerable<PerfilWhereInput>
    OR?: Enumerable<PerfilWhereInput>
    NOT?: Enumerable<PerfilWhereInput>
    photo?: StringNullableFilter<"Perfil"> | string | null
    name?: StringNullableFilter<"Perfil"> | string | null
    secondname?: StringNullableFilter<"Perfil"> | string | null
    socialname?: StringNullableFilter<"Perfil"> | string | null
    birthday?: DateTimeNullableFilter<"Perfil"> | Date | string | null
    createdAt?: DateTimeFilter<"Perfil"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Perfil"> | Date | string | null
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
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: PerfilCountOrderByAggregateInput
    _avg?: PerfilAvgOrderByAggregateInput
    _max?: PerfilMaxOrderByAggregateInput
    _min?: PerfilMinOrderByAggregateInput
    _sum?: PerfilSumOrderByAggregateInput
  }

  export type PerfilScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PerfilScalarWhereWithAggregatesInput>
    OR?: Enumerable<PerfilScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PerfilScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Perfil"> | bigint | number
    photo?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    name?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    secondname?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    socialname?: StringNullableWithAggregatesFilter<"Perfil"> | string | null
    birthday?: DateTimeNullableWithAggregatesFilter<"Perfil"> | Date | string | null
    userId?: BigIntNullableWithAggregatesFilter<"Perfil"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Perfil"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Perfil"> | Date | string | null
  }

  export type AddressWhereInput = {
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    id?: BigIntFilter<"Address"> | bigint | number
    street?: StringNullableFilter<"Address"> | string | null
    number?: StringNullableFilter<"Address"> | string | null
    complement?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    userId?: BigIntNullableFilter<"Address"> | bigint | number | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    street?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<AddressWhereInput>
    OR?: Enumerable<AddressWhereInput>
    NOT?: Enumerable<AddressWhereInput>
    street?: StringNullableFilter<"Address"> | string | null
    number?: StringNullableFilter<"Address"> | string | null
    complement?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    userId?: BigIntNullableFilter<"Address"> | bigint | number | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    street?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    complement?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AddressScalarWhereWithAggregatesInput>
    OR?: Enumerable<AddressScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AddressScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Address"> | bigint | number
    street?: StringNullableWithAggregatesFilter<"Address"> | string | null
    number?: StringNullableWithAggregatesFilter<"Address"> | string | null
    complement?: StringNullableWithAggregatesFilter<"Address"> | string | null
    city?: StringNullableWithAggregatesFilter<"Address"> | string | null
    state?: StringNullableWithAggregatesFilter<"Address"> | string | null
    country?: StringNullableWithAggregatesFilter<"Address"> | string | null
    userId?: BigIntNullableWithAggregatesFilter<"Address"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Address"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Address"> | Date | string | null
  }

  export type ContactWhereInput = {
    AND?: Enumerable<ContactWhereInput>
    OR?: Enumerable<ContactWhereInput>
    NOT?: Enumerable<ContactWhereInput>
    id?: BigIntFilter<"Contact"> | bigint | number
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    another?: StringNullableFilter<"Contact"> | string | null
    userId?: BigIntNullableFilter<"Contact"> | bigint | number | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    another?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<ContactWhereInput>
    OR?: Enumerable<ContactWhereInput>
    NOT?: Enumerable<ContactWhereInput>
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    another?: StringNullableFilter<"Contact"> | string | null
    userId?: BigIntNullableFilter<"Contact"> | bigint | number | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    another?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ContactCountOrderByAggregateInput
    _avg?: ContactAvgOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
    _sum?: ContactSumOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ContactScalarWhereWithAggregatesInput>
    OR?: Enumerable<ContactScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ContactScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Contact"> | bigint | number
    email?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    another?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    userId?: BigIntNullableWithAggregatesFilter<"Contact"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Contact"> | Date | string | null
  }

  export type KnowledgespaceWhereInput = {
    AND?: Enumerable<KnowledgespaceWhereInput>
    OR?: Enumerable<KnowledgespaceWhereInput>
    NOT?: Enumerable<KnowledgespaceWhereInput>
    id?: BigIntFilter<"Knowledgespace"> | bigint | number
    code?: StringNullableFilter<"Knowledgespace"> | string | null
    description?: StringNullableFilter<"Knowledgespace"> | string | null
    createdAt?: DateTimeFilter<"Knowledgespace"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Knowledgespace"> | Date | string | null
    degree?: DegreeListRelationFilter
  }

  export type KnowledgespaceOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    degree?: DegreeOrderByRelationAggregateInput
  }

  export type KnowledgespaceWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<KnowledgespaceWhereInput>
    OR?: Enumerable<KnowledgespaceWhereInput>
    NOT?: Enumerable<KnowledgespaceWhereInput>
    code?: StringNullableFilter<"Knowledgespace"> | string | null
    description?: StringNullableFilter<"Knowledgespace"> | string | null
    createdAt?: DateTimeFilter<"Knowledgespace"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Knowledgespace"> | Date | string | null
    degree?: DegreeListRelationFilter
  }, "id">

  export type KnowledgespaceOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: KnowledgespaceCountOrderByAggregateInput
    _avg?: KnowledgespaceAvgOrderByAggregateInput
    _max?: KnowledgespaceMaxOrderByAggregateInput
    _min?: KnowledgespaceMinOrderByAggregateInput
    _sum?: KnowledgespaceSumOrderByAggregateInput
  }

  export type KnowledgespaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<KnowledgespaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<KnowledgespaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<KnowledgespaceScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Knowledgespace"> | bigint | number
    code?: StringNullableWithAggregatesFilter<"Knowledgespace"> | string | null
    description?: StringNullableWithAggregatesFilter<"Knowledgespace"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Knowledgespace"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Knowledgespace"> | Date | string | null
  }

  export type DegreeWhereInput = {
    AND?: Enumerable<DegreeWhereInput>
    OR?: Enumerable<DegreeWhereInput>
    NOT?: Enumerable<DegreeWhereInput>
    id?: BigIntFilter<"Degree"> | bigint | number
    code?: StringNullableFilter<"Degree"> | string | null
    description?: StringNullableFilter<"Degree"> | string | null
    KnowledgespaceId?: BigIntNullableFilter<"Degree"> | bigint | number | null
    userId?: BigIntNullableFilter<"Degree"> | bigint | number | null
    createdAt?: DateTimeFilter<"Degree"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Degree"> | Date | string | null
    Knowledgespace?: XOR<KnowledgespaceNullableRelationFilter, KnowledgespaceWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type DegreeOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    KnowledgespaceId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    Knowledgespace?: KnowledgespaceOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type DegreeWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    KnowledgespaceId?: bigint | number
    userId?: bigint | number
    AND?: Enumerable<DegreeWhereInput>
    OR?: Enumerable<DegreeWhereInput>
    NOT?: Enumerable<DegreeWhereInput>
    code?: StringNullableFilter<"Degree"> | string | null
    description?: StringNullableFilter<"Degree"> | string | null
    createdAt?: DateTimeFilter<"Degree"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Degree"> | Date | string | null
    Knowledgespace?: XOR<KnowledgespaceNullableRelationFilter, KnowledgespaceWhereInput> | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id" | "KnowledgespaceId" | "userId">

  export type DegreeOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    KnowledgespaceId?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: DegreeCountOrderByAggregateInput
    _avg?: DegreeAvgOrderByAggregateInput
    _max?: DegreeMaxOrderByAggregateInput
    _min?: DegreeMinOrderByAggregateInput
    _sum?: DegreeSumOrderByAggregateInput
  }

  export type DegreeScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DegreeScalarWhereWithAggregatesInput>
    OR?: Enumerable<DegreeScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DegreeScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Degree"> | bigint | number
    code?: StringNullableWithAggregatesFilter<"Degree"> | string | null
    description?: StringNullableWithAggregatesFilter<"Degree"> | string | null
    KnowledgespaceId?: BigIntNullableWithAggregatesFilter<"Degree"> | bigint | number | null
    userId?: BigIntNullableWithAggregatesFilter<"Degree"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Degree"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Degree"> | Date | string | null
  }

  export type SkillsWhereInput = {
    AND?: Enumerable<SkillsWhereInput>
    OR?: Enumerable<SkillsWhereInput>
    NOT?: Enumerable<SkillsWhereInput>
    id?: BigIntFilter<"Skills"> | bigint | number
    code?: StringNullableFilter<"Skills"> | string | null
    description?: StringNullableFilter<"Skills"> | string | null
    userId?: BigIntNullableFilter<"Skills"> | bigint | number | null
    createdAt?: DateTimeFilter<"Skills"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Skills"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type SkillsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SkillsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<SkillsWhereInput>
    OR?: Enumerable<SkillsWhereInput>
    NOT?: Enumerable<SkillsWhereInput>
    code?: StringNullableFilter<"Skills"> | string | null
    description?: StringNullableFilter<"Skills"> | string | null
    userId?: BigIntNullableFilter<"Skills"> | bigint | number | null
    createdAt?: DateTimeFilter<"Skills"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Skills"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type SkillsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: SkillsCountOrderByAggregateInput
    _avg?: SkillsAvgOrderByAggregateInput
    _max?: SkillsMaxOrderByAggregateInput
    _min?: SkillsMinOrderByAggregateInput
    _sum?: SkillsSumOrderByAggregateInput
  }

  export type SkillsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<SkillsScalarWhereWithAggregatesInput>
    OR?: Enumerable<SkillsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<SkillsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Skills"> | bigint | number
    code?: StringNullableWithAggregatesFilter<"Skills"> | string | null
    description?: StringNullableWithAggregatesFilter<"Skills"> | string | null
    userId?: BigIntNullableWithAggregatesFilter<"Skills"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Skills"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Skills"> | Date | string | null
  }

  export type ExperiencesWhereInput = {
    AND?: Enumerable<ExperiencesWhereInput>
    OR?: Enumerable<ExperiencesWhereInput>
    NOT?: Enumerable<ExperiencesWhereInput>
    id?: BigIntFilter<"Experiences"> | bigint | number
    company?: StringFilter<"Experiences"> | string
    start?: DateTimeFilter<"Experiences"> | Date | string
    end?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Experiences"> | boolean | null
    userId?: BigIntNullableFilter<"Experiences"> | bigint | number | null
    createdAt?: DateTimeFilter<"Experiences"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ExperiencesOrderByWithRelationInput = {
    id?: SortOrder
    company?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    iscurrent?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ExperiencesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<ExperiencesWhereInput>
    OR?: Enumerable<ExperiencesWhereInput>
    NOT?: Enumerable<ExperiencesWhereInput>
    company?: StringFilter<"Experiences"> | string
    start?: DateTimeFilter<"Experiences"> | Date | string
    end?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Experiences"> | boolean | null
    userId?: BigIntNullableFilter<"Experiences"> | bigint | number | null
    createdAt?: DateTimeFilter<"Experiences"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ExperiencesOrderByWithAggregationInput = {
    id?: SortOrder
    company?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    iscurrent?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ExperiencesCountOrderByAggregateInput
    _avg?: ExperiencesAvgOrderByAggregateInput
    _max?: ExperiencesMaxOrderByAggregateInput
    _min?: ExperiencesMinOrderByAggregateInput
    _sum?: ExperiencesSumOrderByAggregateInput
  }

  export type ExperiencesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ExperiencesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ExperiencesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ExperiencesScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Experiences"> | bigint | number
    company?: StringWithAggregatesFilter<"Experiences"> | string
    start?: DateTimeWithAggregatesFilter<"Experiences"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"Experiences"> | Date | string | null
    iscurrent?: BoolNullableWithAggregatesFilter<"Experiences"> | boolean | null
    userId?: BigIntNullableWithAggregatesFilter<"Experiences"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Experiences"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Experiences"> | Date | string | null
  }

  export type ProjectsWhereInput = {
    AND?: Enumerable<ProjectsWhereInput>
    OR?: Enumerable<ProjectsWhereInput>
    NOT?: Enumerable<ProjectsWhereInput>
    id?: BigIntFilter<"Projects"> | bigint | number
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    start?: DateTimeFilter<"Projects"> | Date | string
    end?: DateTimeNullableFilter<"Projects"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Projects"> | boolean | null
    userId?: BigIntNullableFilter<"Projects"> | bigint | number | null
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Projects"> | Date | string | null
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
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ProjectsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<ProjectsWhereInput>
    OR?: Enumerable<ProjectsWhereInput>
    NOT?: Enumerable<ProjectsWhereInput>
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    start?: DateTimeFilter<"Projects"> | Date | string
    end?: DateTimeNullableFilter<"Projects"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Projects"> | boolean | null
    userId?: BigIntNullableFilter<"Projects"> | bigint | number | null
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Projects"> | Date | string | null
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
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ProjectsCountOrderByAggregateInput
    _avg?: ProjectsAvgOrderByAggregateInput
    _max?: ProjectsMaxOrderByAggregateInput
    _min?: ProjectsMinOrderByAggregateInput
    _sum?: ProjectsSumOrderByAggregateInput
  }

  export type ProjectsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ProjectsScalarWhereWithAggregatesInput>
    OR?: Enumerable<ProjectsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ProjectsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Projects"> | bigint | number
    name?: StringWithAggregatesFilter<"Projects"> | string
    description?: StringNullableWithAggregatesFilter<"Projects"> | string | null
    start?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"Projects"> | Date | string | null
    iscurrent?: BoolNullableWithAggregatesFilter<"Projects"> | boolean | null
    userId?: BigIntNullableWithAggregatesFilter<"Projects"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Projects"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Projects"> | Date | string | null
  }

  export type ReferecesWhereInput = {
    AND?: Enumerable<ReferecesWhereInput>
    OR?: Enumerable<ReferecesWhereInput>
    NOT?: Enumerable<ReferecesWhereInput>
    id?: BigIntFilter<"Refereces"> | bigint | number
    description?: StringFilter<"Refereces"> | string
    value?: FloatFilter<"Refereces"> | number
    userId?: BigIntNullableFilter<"Refereces"> | bigint | number | null
    createdAt?: DateTimeFilter<"Refereces"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Refereces"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ReferecesOrderByWithRelationInput = {
    id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReferecesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<ReferecesWhereInput>
    OR?: Enumerable<ReferecesWhereInput>
    NOT?: Enumerable<ReferecesWhereInput>
    description?: StringFilter<"Refereces"> | string
    value?: FloatFilter<"Refereces"> | number
    userId?: BigIntNullableFilter<"Refereces"> | bigint | number | null
    createdAt?: DateTimeFilter<"Refereces"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Refereces"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReferecesOrderByWithAggregationInput = {
    id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ReferecesCountOrderByAggregateInput
    _avg?: ReferecesAvgOrderByAggregateInput
    _max?: ReferecesMaxOrderByAggregateInput
    _min?: ReferecesMinOrderByAggregateInput
    _sum?: ReferecesSumOrderByAggregateInput
  }

  export type ReferecesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReferecesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReferecesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReferecesScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Refereces"> | bigint | number
    description?: StringWithAggregatesFilter<"Refereces"> | string
    value?: FloatWithAggregatesFilter<"Refereces"> | number
    userId?: BigIntNullableWithAggregatesFilter<"Refereces"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Refereces"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Refereces"> | Date | string | null
  }

  export type ReferecePricesWhereInput = {
    AND?: Enumerable<ReferecePricesWhereInput>
    OR?: Enumerable<ReferecePricesWhereInput>
    NOT?: Enumerable<ReferecePricesWhereInput>
    id?: BigIntFilter<"ReferecePrices"> | bigint | number
    name?: StringFilter<"ReferecePrices"> | string
    description?: StringFilter<"ReferecePrices"> | string
    contacts?: StringFilter<"ReferecePrices"> | string
    userId?: BigIntNullableFilter<"ReferecePrices"> | bigint | number | null
    createdAt?: DateTimeFilter<"ReferecePrices"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ReferecePrices"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type ReferecePricesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contacts?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type ReferecePricesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<ReferecePricesWhereInput>
    OR?: Enumerable<ReferecePricesWhereInput>
    NOT?: Enumerable<ReferecePricesWhereInput>
    name?: StringFilter<"ReferecePrices"> | string
    description?: StringFilter<"ReferecePrices"> | string
    contacts?: StringFilter<"ReferecePrices"> | string
    userId?: BigIntNullableFilter<"ReferecePrices"> | bigint | number | null
    createdAt?: DateTimeFilter<"ReferecePrices"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ReferecePrices"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type ReferecePricesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contacts?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: ReferecePricesCountOrderByAggregateInput
    _avg?: ReferecePricesAvgOrderByAggregateInput
    _max?: ReferecePricesMaxOrderByAggregateInput
    _min?: ReferecePricesMinOrderByAggregateInput
    _sum?: ReferecePricesSumOrderByAggregateInput
  }

  export type ReferecePricesScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ReferecePricesScalarWhereWithAggregatesInput>
    OR?: Enumerable<ReferecePricesScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ReferecePricesScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"ReferecePrices"> | bigint | number
    name?: StringWithAggregatesFilter<"ReferecePrices"> | string
    description?: StringWithAggregatesFilter<"ReferecePrices"> | string
    contacts?: StringWithAggregatesFilter<"ReferecePrices"> | string
    userId?: BigIntNullableWithAggregatesFilter<"ReferecePrices"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"ReferecePrices"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"ReferecePrices"> | Date | string | null
  }

  export type UserPointsWhereInput = {
    AND?: Enumerable<UserPointsWhereInput>
    OR?: Enumerable<UserPointsWhereInput>
    NOT?: Enumerable<UserPointsWhereInput>
    id?: BigIntFilter<"UserPoints"> | bigint | number
    value?: BigIntFilter<"UserPoints"> | bigint | number
    userId?: BigIntNullableFilter<"UserPoints"> | bigint | number | null
    createdAt?: DateTimeFilter<"UserPoints"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserPoints"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type UserPointsOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type UserPointsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<UserPointsWhereInput>
    OR?: Enumerable<UserPointsWhereInput>
    NOT?: Enumerable<UserPointsWhereInput>
    value?: BigIntFilter<"UserPoints"> | bigint | number
    userId?: BigIntNullableFilter<"UserPoints"> | bigint | number | null
    createdAt?: DateTimeFilter<"UserPoints"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserPoints"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type UserPointsOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: UserPointsCountOrderByAggregateInput
    _avg?: UserPointsAvgOrderByAggregateInput
    _max?: UserPointsMaxOrderByAggregateInput
    _min?: UserPointsMinOrderByAggregateInput
    _sum?: UserPointsSumOrderByAggregateInput
  }

  export type UserPointsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserPointsScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserPointsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserPointsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"UserPoints"> | bigint | number
    value?: BigIntWithAggregatesFilter<"UserPoints"> | bigint | number
    userId?: BigIntNullableWithAggregatesFilter<"UserPoints"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"UserPoints"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"UserPoints"> | Date | string | null
  }

  export type FeedWhereInput = {
    AND?: Enumerable<FeedWhereInput>
    OR?: Enumerable<FeedWhereInput>
    NOT?: Enumerable<FeedWhereInput>
    id?: BigIntFilter<"Feed"> | bigint | number
    title?: StringFilter<"Feed"> | string
    img?: StringNullableFilter<"Feed"> | string | null
    description?: StringNullableFilter<"Feed"> | string | null
    react_positive?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_negative?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_smile?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_lovely?: BigIntNullableFilter<"Feed"> | bigint | number | null
    userId?: BigIntNullableFilter<"Feed"> | bigint | number | null
    createdAt?: DateTimeFilter<"Feed"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Feed"> | Date | string | null
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
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FeedWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<FeedWhereInput>
    OR?: Enumerable<FeedWhereInput>
    NOT?: Enumerable<FeedWhereInput>
    title?: StringFilter<"Feed"> | string
    img?: StringNullableFilter<"Feed"> | string | null
    description?: StringNullableFilter<"Feed"> | string | null
    react_positive?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_negative?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_smile?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_lovely?: BigIntNullableFilter<"Feed"> | bigint | number | null
    userId?: BigIntNullableFilter<"Feed"> | bigint | number | null
    createdAt?: DateTimeFilter<"Feed"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Feed"> | Date | string | null
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
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: FeedCountOrderByAggregateInput
    _avg?: FeedAvgOrderByAggregateInput
    _max?: FeedMaxOrderByAggregateInput
    _min?: FeedMinOrderByAggregateInput
    _sum?: FeedSumOrderByAggregateInput
  }

  export type FeedScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FeedScalarWhereWithAggregatesInput>
    OR?: Enumerable<FeedScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FeedScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"Feed"> | bigint | number
    title?: StringWithAggregatesFilter<"Feed"> | string
    img?: StringNullableWithAggregatesFilter<"Feed"> | string | null
    description?: StringNullableWithAggregatesFilter<"Feed"> | string | null
    react_positive?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    react_negative?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    react_smile?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    react_lovely?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    userId?: BigIntNullableWithAggregatesFilter<"Feed"> | bigint | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Feed"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Feed"> | Date | string | null
  }

  export type FeedCommentsWhereInput = {
    AND?: Enumerable<FeedCommentsWhereInput>
    OR?: Enumerable<FeedCommentsWhereInput>
    NOT?: Enumerable<FeedCommentsWhereInput>
    id?: BigIntFilter<"FeedComments"> | bigint | number
    comment?: StringFilter<"FeedComments"> | string
    userId?: BigIntFilter<"FeedComments"> | bigint | number
    createdAt?: DateTimeFilter<"FeedComments"> | Date | string
    updatedAt?: DateTimeNullableFilter<"FeedComments"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }

  export type FeedCommentsOrderByWithRelationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FeedCommentsWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: Enumerable<FeedCommentsWhereInput>
    OR?: Enumerable<FeedCommentsWhereInput>
    NOT?: Enumerable<FeedCommentsWhereInput>
    comment?: StringFilter<"FeedComments"> | string
    userId?: BigIntFilter<"FeedComments"> | bigint | number
    createdAt?: DateTimeFilter<"FeedComments"> | Date | string
    updatedAt?: DateTimeNullableFilter<"FeedComments"> | Date | string | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
  }, "id">

  export type FeedCommentsOrderByWithAggregationInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrderInput | SortOrder
    _count?: FeedCommentsCountOrderByAggregateInput
    _avg?: FeedCommentsAvgOrderByAggregateInput
    _max?: FeedCommentsMaxOrderByAggregateInput
    _min?: FeedCommentsMinOrderByAggregateInput
    _sum?: FeedCommentsSumOrderByAggregateInput
  }

  export type FeedCommentsScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FeedCommentsScalarWhereWithAggregatesInput>
    OR?: Enumerable<FeedCommentsScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FeedCommentsScalarWhereWithAggregatesInput>
    id?: BigIntWithAggregatesFilter<"FeedComments"> | bigint | number
    comment?: StringWithAggregatesFilter<"FeedComments"> | string
    userId?: BigIntWithAggregatesFilter<"FeedComments"> | bigint | number
    createdAt?: DateTimeWithAggregatesFilter<"FeedComments"> | Date | string
    updatedAt?: DateTimeNullableWithAggregatesFilter<"FeedComments"> | Date | string | null
  }

  export type UserCreateInput = {
    id?: bigint | number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PerfilCreateInput = {
    id?: bigint | number
    photo?: string | null
    name?: string | null
    secondname?: string | null
    socialname?: string | null
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PerfilUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PerfilCreateManyInput = {
    id?: bigint | number
    photo?: string | null
    name?: string | null
    secondname?: string | null
    socialname?: string | null
    birthday?: Date | string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PerfilUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PerfilUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateInput = {
    id?: bigint | number
    street?: string | null
    number?: string | null
    complement?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: bigint | number
    street?: string | null
    number?: string | null
    complement?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AddressUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressCreateManyInput = {
    id?: bigint | number
    street?: string | null
    number?: string | null
    complement?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AddressUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactCreateInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutContactInput
  }

  export type ContactUncheckedCreateInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutContactNestedInput
  }

  export type ContactUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactCreateManyInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KnowledgespaceCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    degree?: DegreeCreateNestedManyWithoutKnowledgespaceInput
  }

  export type KnowledgespaceUncheckedCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    degree?: DegreeUncheckedCreateNestedManyWithoutKnowledgespaceInput
  }

  export type KnowledgespaceUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    degree?: DegreeUpdateManyWithoutKnowledgespaceNestedInput
  }

  export type KnowledgespaceUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    degree?: DegreeUncheckedUpdateManyWithoutKnowledgespaceNestedInput
  }

  export type KnowledgespaceCreateManyInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type KnowledgespaceUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KnowledgespaceUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DegreeCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Knowledgespace?: KnowledgespaceCreateNestedOneWithoutDegreeInput
    user?: UserCreateNestedOneWithoutDegreeInput
  }

  export type DegreeUncheckedCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    KnowledgespaceId?: bigint | number | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DegreeUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Knowledgespace?: KnowledgespaceUpdateOneWithoutDegreeNestedInput
    user?: UserUpdateOneWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    KnowledgespaceId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DegreeCreateManyInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    KnowledgespaceId?: bigint | number | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DegreeUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DegreeUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    KnowledgespaceId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillsCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutSkillsInput
  }

  export type SkillsUncheckedCreateInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SkillsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutSkillsNestedInput
  }

  export type SkillsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillsCreateManyInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SkillsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExperiencesCreateInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutExperiencesInput
  }

  export type ExperiencesUncheckedCreateInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ExperiencesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutExperiencesNestedInput
  }

  export type ExperiencesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExperiencesCreateManyInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ExperiencesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExperiencesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectsCreateInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProjectsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectsCreateManyInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProjectsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecesCreateInput = {
    id?: bigint | number
    description: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutReferecesInput
  }

  export type ReferecesUncheckedCreateInput = {
    id?: bigint | number
    description: string
    value: number
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutReferecesNestedInput
  }

  export type ReferecesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecesCreateManyInput = {
    id?: bigint | number
    description: string
    value: number
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecePricesCreateInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutReferecePricesInput
  }

  export type ReferecePricesUncheckedCreateInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecePricesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutReferecePricesNestedInput
  }

  export type ReferecePricesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecePricesCreateManyInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecePricesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecePricesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPointsCreateInput = {
    id?: bigint | number
    value: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutUserPointsInput
  }

  export type UserPointsUncheckedCreateInput = {
    id?: bigint | number
    value: bigint | number
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserPointsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutUserPointsNestedInput
  }

  export type UserPointsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPointsCreateManyInput = {
    id?: bigint | number
    value: bigint | number
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserPointsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPointsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedCommentsCreateInput = {
    id?: bigint | number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutCommentsInput
  }

  export type FeedCommentsUncheckedCreateInput = {
    id?: bigint | number
    comment: string
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FeedCommentsUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutCommentsNestedInput
  }

  export type FeedCommentsUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedCommentsCreateManyInput = {
    id?: bigint | number
    comment: string
    userId: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FeedCommentsUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedCommentsUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    userId?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PerfilNullableRelationFilter = {
    is?: PerfilWhereInput | null
    isNot?: PerfilWhereInput | null
  }

  export type AddressListRelationFilter = {
    every?: AddressWhereInput
    some?: AddressWhereInput
    none?: AddressWhereInput
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AddressOrderByRelationAggregateInput = {
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
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
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
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

  export type PerfilCountOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    secondname?: SortOrder
    socialname?: SortOrder
    birthday?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerfilMinOrderByAggregateInput = {
    id?: SortOrder
    photo?: SortOrder
    name?: SortOrder
    secondname?: SortOrder
    socialname?: SortOrder
    birthday?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PerfilSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
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

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    street?: SortOrder
    number?: SortOrder
    complement?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    another?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    another?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type KnowledgespaceCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgespaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type KnowledgespaceMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type KnowledgespaceMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DegreeMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    KnowledgespaceId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    description?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperiencesMinOrderByAggregateInput = {
    id?: SortOrder
    company?: SortOrder
    start?: SortOrder
    end?: SortOrder
    iscurrent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperiencesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start?: SortOrder
    end?: SortOrder
    iscurrent?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectsSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferecesMinOrderByAggregateInput = {
    id?: SortOrder
    description?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferecesSumOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferecePricesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    contacts?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferecePricesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type UserPointsCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserPointsMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedCommentsAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type FeedCommentsMaxOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FeedCommentsMinOrderByAggregateInput = {
    id?: SortOrder
    comment?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type AddressCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUserInput>, Enumerable<AddressUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUserInput>
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type ContactCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ContactCreateWithoutUserInput>, Enumerable<ContactUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutUserInput>
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type DegreeCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DegreeCreateWithoutUserInput>, Enumerable<DegreeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DegreeCreateOrConnectWithoutUserInput>
    createMany?: DegreeCreateManyUserInputEnvelope
    connect?: Enumerable<DegreeWhereUniqueInput>
  }

  export type SkillsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SkillsCreateWithoutUserInput>, Enumerable<SkillsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillsCreateOrConnectWithoutUserInput>
    createMany?: SkillsCreateManyUserInputEnvelope
    connect?: Enumerable<SkillsWhereUniqueInput>
  }

  export type ExperiencesCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ExperiencesCreateWithoutUserInput>, Enumerable<ExperiencesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExperiencesCreateOrConnectWithoutUserInput>
    createMany?: ExperiencesCreateManyUserInputEnvelope
    connect?: Enumerable<ExperiencesWhereUniqueInput>
  }

  export type ProjectsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutUserInput>, Enumerable<ProjectsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutUserInput>
    createMany?: ProjectsCreateManyUserInputEnvelope
    connect?: Enumerable<ProjectsWhereUniqueInput>
  }

  export type ReferecePricesCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReferecePricesCreateWithoutUserInput>, Enumerable<ReferecePricesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReferecePricesCreateOrConnectWithoutUserInput>
    createMany?: ReferecePricesCreateManyUserInputEnvelope
    connect?: Enumerable<ReferecePricesWhereUniqueInput>
  }

  export type ReferecesCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReferecesCreateWithoutUserInput>, Enumerable<ReferecesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReferecesCreateOrConnectWithoutUserInput>
    createMany?: ReferecesCreateManyUserInputEnvelope
    connect?: Enumerable<ReferecesWhereUniqueInput>
  }

  export type UserPointsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPointsCreateWithoutUserInput>, Enumerable<UserPointsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPointsCreateOrConnectWithoutUserInput>
    createMany?: UserPointsCreateManyUserInputEnvelope
    connect?: Enumerable<UserPointsWhereUniqueInput>
  }

  export type FeedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCreateWithoutUserInput>, Enumerable<FeedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCreateOrConnectWithoutUserInput>
    createMany?: FeedCreateManyUserInputEnvelope
    connect?: Enumerable<FeedWhereUniqueInput>
  }

  export type FeedCommentsCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCommentsCreateWithoutUserInput>, Enumerable<FeedCommentsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCommentsCreateOrConnectWithoutUserInput>
    createMany?: FeedCommentsCreateManyUserInputEnvelope
    connect?: Enumerable<FeedCommentsWhereUniqueInput>
  }

  export type PerfilUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PerfilCreateWithoutUserInput, PerfilUncheckedCreateWithoutUserInput>
    connectOrCreate?: PerfilCreateOrConnectWithoutUserInput
    connect?: PerfilWhereUniqueInput
  }

  export type AddressUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUserInput>, Enumerable<AddressUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUserInput>
    createMany?: AddressCreateManyUserInputEnvelope
    connect?: Enumerable<AddressWhereUniqueInput>
  }

  export type ContactUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ContactCreateWithoutUserInput>, Enumerable<ContactUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutUserInput>
    createMany?: ContactCreateManyUserInputEnvelope
    connect?: Enumerable<ContactWhereUniqueInput>
  }

  export type DegreeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<DegreeCreateWithoutUserInput>, Enumerable<DegreeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DegreeCreateOrConnectWithoutUserInput>
    createMany?: DegreeCreateManyUserInputEnvelope
    connect?: Enumerable<DegreeWhereUniqueInput>
  }

  export type SkillsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<SkillsCreateWithoutUserInput>, Enumerable<SkillsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillsCreateOrConnectWithoutUserInput>
    createMany?: SkillsCreateManyUserInputEnvelope
    connect?: Enumerable<SkillsWhereUniqueInput>
  }

  export type ExperiencesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ExperiencesCreateWithoutUserInput>, Enumerable<ExperiencesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExperiencesCreateOrConnectWithoutUserInput>
    createMany?: ExperiencesCreateManyUserInputEnvelope
    connect?: Enumerable<ExperiencesWhereUniqueInput>
  }

  export type ProjectsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutUserInput>, Enumerable<ProjectsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutUserInput>
    createMany?: ProjectsCreateManyUserInputEnvelope
    connect?: Enumerable<ProjectsWhereUniqueInput>
  }

  export type ReferecePricesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReferecePricesCreateWithoutUserInput>, Enumerable<ReferecePricesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReferecePricesCreateOrConnectWithoutUserInput>
    createMany?: ReferecePricesCreateManyUserInputEnvelope
    connect?: Enumerable<ReferecePricesWhereUniqueInput>
  }

  export type ReferecesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ReferecesCreateWithoutUserInput>, Enumerable<ReferecesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReferecesCreateOrConnectWithoutUserInput>
    createMany?: ReferecesCreateManyUserInputEnvelope
    connect?: Enumerable<ReferecesWhereUniqueInput>
  }

  export type UserPointsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<UserPointsCreateWithoutUserInput>, Enumerable<UserPointsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPointsCreateOrConnectWithoutUserInput>
    createMany?: UserPointsCreateManyUserInputEnvelope
    connect?: Enumerable<UserPointsWhereUniqueInput>
  }

  export type FeedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCreateWithoutUserInput>, Enumerable<FeedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCreateOrConnectWithoutUserInput>
    createMany?: FeedCreateManyUserInputEnvelope
    connect?: Enumerable<FeedWhereUniqueInput>
  }

  export type FeedCommentsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<FeedCommentsCreateWithoutUserInput>, Enumerable<FeedCommentsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCommentsCreateOrConnectWithoutUserInput>
    createMany?: FeedCommentsCreateManyUserInputEnvelope
    connect?: Enumerable<FeedCommentsWhereUniqueInput>
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type AddressUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUserInput>, Enumerable<AddressUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AddressCreateManyUserInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type ContactUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ContactCreateWithoutUserInput>, Enumerable<ContactUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ContactCreateManyUserInputEnvelope
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type DegreeUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<DegreeCreateWithoutUserInput>, Enumerable<DegreeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DegreeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DegreeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DegreeCreateManyUserInputEnvelope
    set?: Enumerable<DegreeWhereUniqueInput>
    disconnect?: Enumerable<DegreeWhereUniqueInput>
    delete?: Enumerable<DegreeWhereUniqueInput>
    connect?: Enumerable<DegreeWhereUniqueInput>
    update?: Enumerable<DegreeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DegreeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DegreeScalarWhereInput>
  }

  export type SkillsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SkillsCreateWithoutUserInput>, Enumerable<SkillsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SkillsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SkillsCreateManyUserInputEnvelope
    set?: Enumerable<SkillsWhereUniqueInput>
    disconnect?: Enumerable<SkillsWhereUniqueInput>
    delete?: Enumerable<SkillsWhereUniqueInput>
    connect?: Enumerable<SkillsWhereUniqueInput>
    update?: Enumerable<SkillsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SkillsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SkillsScalarWhereInput>
  }

  export type ExperiencesUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ExperiencesCreateWithoutUserInput>, Enumerable<ExperiencesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExperiencesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ExperiencesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ExperiencesCreateManyUserInputEnvelope
    set?: Enumerable<ExperiencesWhereUniqueInput>
    disconnect?: Enumerable<ExperiencesWhereUniqueInput>
    delete?: Enumerable<ExperiencesWhereUniqueInput>
    connect?: Enumerable<ExperiencesWhereUniqueInput>
    update?: Enumerable<ExperiencesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ExperiencesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ExperiencesScalarWhereInput>
  }

  export type ProjectsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutUserInput>, Enumerable<ProjectsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProjectsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProjectsCreateManyUserInputEnvelope
    set?: Enumerable<ProjectsWhereUniqueInput>
    disconnect?: Enumerable<ProjectsWhereUniqueInput>
    delete?: Enumerable<ProjectsWhereUniqueInput>
    connect?: Enumerable<ProjectsWhereUniqueInput>
    update?: Enumerable<ProjectsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProjectsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProjectsScalarWhereInput>
  }

  export type ReferecePricesUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReferecePricesCreateWithoutUserInput>, Enumerable<ReferecePricesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReferecePricesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReferecePricesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReferecePricesCreateManyUserInputEnvelope
    set?: Enumerable<ReferecePricesWhereUniqueInput>
    disconnect?: Enumerable<ReferecePricesWhereUniqueInput>
    delete?: Enumerable<ReferecePricesWhereUniqueInput>
    connect?: Enumerable<ReferecePricesWhereUniqueInput>
    update?: Enumerable<ReferecePricesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReferecePricesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReferecePricesScalarWhereInput>
  }

  export type ReferecesUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReferecesCreateWithoutUserInput>, Enumerable<ReferecesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReferecesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReferecesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReferecesCreateManyUserInputEnvelope
    set?: Enumerable<ReferecesWhereUniqueInput>
    disconnect?: Enumerable<ReferecesWhereUniqueInput>
    delete?: Enumerable<ReferecesWhereUniqueInput>
    connect?: Enumerable<ReferecesWhereUniqueInput>
    update?: Enumerable<ReferecesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReferecesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReferecesScalarWhereInput>
  }

  export type UserPointsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserPointsCreateWithoutUserInput>, Enumerable<UserPointsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPointsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserPointsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserPointsCreateManyUserInputEnvelope
    set?: Enumerable<UserPointsWhereUniqueInput>
    disconnect?: Enumerable<UserPointsWhereUniqueInput>
    delete?: Enumerable<UserPointsWhereUniqueInput>
    connect?: Enumerable<UserPointsWhereUniqueInput>
    update?: Enumerable<UserPointsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserPointsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserPointsScalarWhereInput>
  }

  export type FeedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FeedCreateWithoutUserInput>, Enumerable<FeedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedCreateManyUserInputEnvelope
    set?: Enumerable<FeedWhereUniqueInput>
    disconnect?: Enumerable<FeedWhereUniqueInput>
    delete?: Enumerable<FeedWhereUniqueInput>
    connect?: Enumerable<FeedWhereUniqueInput>
    update?: Enumerable<FeedUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedScalarWhereInput>
  }

  export type FeedCommentsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FeedCommentsCreateWithoutUserInput>, Enumerable<FeedCommentsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCommentsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedCommentsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedCommentsCreateManyUserInputEnvelope
    set?: Enumerable<FeedCommentsWhereUniqueInput>
    disconnect?: Enumerable<FeedCommentsWhereUniqueInput>
    delete?: Enumerable<FeedCommentsWhereUniqueInput>
    connect?: Enumerable<FeedCommentsWhereUniqueInput>
    update?: Enumerable<FeedCommentsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedCommentsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedCommentsScalarWhereInput>
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

  export type AddressUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<AddressCreateWithoutUserInput>, Enumerable<AddressUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<AddressCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<AddressUpsertWithWhereUniqueWithoutUserInput>
    createMany?: AddressCreateManyUserInputEnvelope
    set?: Enumerable<AddressWhereUniqueInput>
    disconnect?: Enumerable<AddressWhereUniqueInput>
    delete?: Enumerable<AddressWhereUniqueInput>
    connect?: Enumerable<AddressWhereUniqueInput>
    update?: Enumerable<AddressUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<AddressUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<AddressScalarWhereInput>
  }

  export type ContactUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ContactCreateWithoutUserInput>, Enumerable<ContactUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ContactCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ContactUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ContactCreateManyUserInputEnvelope
    set?: Enumerable<ContactWhereUniqueInput>
    disconnect?: Enumerable<ContactWhereUniqueInput>
    delete?: Enumerable<ContactWhereUniqueInput>
    connect?: Enumerable<ContactWhereUniqueInput>
    update?: Enumerable<ContactUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ContactUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ContactScalarWhereInput>
  }

  export type DegreeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<DegreeCreateWithoutUserInput>, Enumerable<DegreeUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<DegreeCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<DegreeUpsertWithWhereUniqueWithoutUserInput>
    createMany?: DegreeCreateManyUserInputEnvelope
    set?: Enumerable<DegreeWhereUniqueInput>
    disconnect?: Enumerable<DegreeWhereUniqueInput>
    delete?: Enumerable<DegreeWhereUniqueInput>
    connect?: Enumerable<DegreeWhereUniqueInput>
    update?: Enumerable<DegreeUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<DegreeUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<DegreeScalarWhereInput>
  }

  export type SkillsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<SkillsCreateWithoutUserInput>, Enumerable<SkillsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<SkillsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<SkillsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: SkillsCreateManyUserInputEnvelope
    set?: Enumerable<SkillsWhereUniqueInput>
    disconnect?: Enumerable<SkillsWhereUniqueInput>
    delete?: Enumerable<SkillsWhereUniqueInput>
    connect?: Enumerable<SkillsWhereUniqueInput>
    update?: Enumerable<SkillsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<SkillsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<SkillsScalarWhereInput>
  }

  export type ExperiencesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ExperiencesCreateWithoutUserInput>, Enumerable<ExperiencesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ExperiencesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ExperiencesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ExperiencesCreateManyUserInputEnvelope
    set?: Enumerable<ExperiencesWhereUniqueInput>
    disconnect?: Enumerable<ExperiencesWhereUniqueInput>
    delete?: Enumerable<ExperiencesWhereUniqueInput>
    connect?: Enumerable<ExperiencesWhereUniqueInput>
    update?: Enumerable<ExperiencesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ExperiencesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ExperiencesScalarWhereInput>
  }

  export type ProjectsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ProjectsCreateWithoutUserInput>, Enumerable<ProjectsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ProjectsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ProjectsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ProjectsCreateManyUserInputEnvelope
    set?: Enumerable<ProjectsWhereUniqueInput>
    disconnect?: Enumerable<ProjectsWhereUniqueInput>
    delete?: Enumerable<ProjectsWhereUniqueInput>
    connect?: Enumerable<ProjectsWhereUniqueInput>
    update?: Enumerable<ProjectsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ProjectsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ProjectsScalarWhereInput>
  }

  export type ReferecePricesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReferecePricesCreateWithoutUserInput>, Enumerable<ReferecePricesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReferecePricesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReferecePricesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReferecePricesCreateManyUserInputEnvelope
    set?: Enumerable<ReferecePricesWhereUniqueInput>
    disconnect?: Enumerable<ReferecePricesWhereUniqueInput>
    delete?: Enumerable<ReferecePricesWhereUniqueInput>
    connect?: Enumerable<ReferecePricesWhereUniqueInput>
    update?: Enumerable<ReferecePricesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReferecePricesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReferecePricesScalarWhereInput>
  }

  export type ReferecesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ReferecesCreateWithoutUserInput>, Enumerable<ReferecesUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ReferecesCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ReferecesUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ReferecesCreateManyUserInputEnvelope
    set?: Enumerable<ReferecesWhereUniqueInput>
    disconnect?: Enumerable<ReferecesWhereUniqueInput>
    delete?: Enumerable<ReferecesWhereUniqueInput>
    connect?: Enumerable<ReferecesWhereUniqueInput>
    update?: Enumerable<ReferecesUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ReferecesUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ReferecesScalarWhereInput>
  }

  export type UserPointsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<UserPointsCreateWithoutUserInput>, Enumerable<UserPointsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<UserPointsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<UserPointsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: UserPointsCreateManyUserInputEnvelope
    set?: Enumerable<UserPointsWhereUniqueInput>
    disconnect?: Enumerable<UserPointsWhereUniqueInput>
    delete?: Enumerable<UserPointsWhereUniqueInput>
    connect?: Enumerable<UserPointsWhereUniqueInput>
    update?: Enumerable<UserPointsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<UserPointsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<UserPointsScalarWhereInput>
  }

  export type FeedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FeedCreateWithoutUserInput>, Enumerable<FeedUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedCreateManyUserInputEnvelope
    set?: Enumerable<FeedWhereUniqueInput>
    disconnect?: Enumerable<FeedWhereUniqueInput>
    delete?: Enumerable<FeedWhereUniqueInput>
    connect?: Enumerable<FeedWhereUniqueInput>
    update?: Enumerable<FeedUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedScalarWhereInput>
  }

  export type FeedCommentsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<FeedCommentsCreateWithoutUserInput>, Enumerable<FeedCommentsUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<FeedCommentsCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<FeedCommentsUpsertWithWhereUniqueWithoutUserInput>
    createMany?: FeedCommentsCreateManyUserInputEnvelope
    set?: Enumerable<FeedCommentsWhereUniqueInput>
    disconnect?: Enumerable<FeedCommentsWhereUniqueInput>
    delete?: Enumerable<FeedCommentsWhereUniqueInput>
    connect?: Enumerable<FeedCommentsWhereUniqueInput>
    update?: Enumerable<FeedCommentsUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<FeedCommentsUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<FeedCommentsScalarWhereInput>
  }

  export type UserCreateNestedOneWithoutPerfilInput = {
    create?: XOR<UserCreateWithoutPerfilInput, UserUncheckedCreateWithoutPerfilInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerfilInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type UserCreateNestedOneWithoutAddressInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneWithoutAddressNestedInput = {
    create?: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    connectOrCreate?: UserCreateOrConnectWithoutAddressInput
    upsert?: UserUpsertWithoutAddressInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAddressInput, UserUpdateWithoutAddressInput>, UserUncheckedUpdateWithoutAddressInput>
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
    create?: XOR<Enumerable<DegreeCreateWithoutKnowledgespaceInput>, Enumerable<DegreeUncheckedCreateWithoutKnowledgespaceInput>>
    connectOrCreate?: Enumerable<DegreeCreateOrConnectWithoutKnowledgespaceInput>
    createMany?: DegreeCreateManyKnowledgespaceInputEnvelope
    connect?: Enumerable<DegreeWhereUniqueInput>
  }

  export type DegreeUncheckedCreateNestedManyWithoutKnowledgespaceInput = {
    create?: XOR<Enumerable<DegreeCreateWithoutKnowledgespaceInput>, Enumerable<DegreeUncheckedCreateWithoutKnowledgespaceInput>>
    connectOrCreate?: Enumerable<DegreeCreateOrConnectWithoutKnowledgespaceInput>
    createMany?: DegreeCreateManyKnowledgespaceInputEnvelope
    connect?: Enumerable<DegreeWhereUniqueInput>
  }

  export type DegreeUpdateManyWithoutKnowledgespaceNestedInput = {
    create?: XOR<Enumerable<DegreeCreateWithoutKnowledgespaceInput>, Enumerable<DegreeUncheckedCreateWithoutKnowledgespaceInput>>
    connectOrCreate?: Enumerable<DegreeCreateOrConnectWithoutKnowledgespaceInput>
    upsert?: Enumerable<DegreeUpsertWithWhereUniqueWithoutKnowledgespaceInput>
    createMany?: DegreeCreateManyKnowledgespaceInputEnvelope
    set?: Enumerable<DegreeWhereUniqueInput>
    disconnect?: Enumerable<DegreeWhereUniqueInput>
    delete?: Enumerable<DegreeWhereUniqueInput>
    connect?: Enumerable<DegreeWhereUniqueInput>
    update?: Enumerable<DegreeUpdateWithWhereUniqueWithoutKnowledgespaceInput>
    updateMany?: Enumerable<DegreeUpdateManyWithWhereWithoutKnowledgespaceInput>
    deleteMany?: Enumerable<DegreeScalarWhereInput>
  }

  export type DegreeUncheckedUpdateManyWithoutKnowledgespaceNestedInput = {
    create?: XOR<Enumerable<DegreeCreateWithoutKnowledgespaceInput>, Enumerable<DegreeUncheckedCreateWithoutKnowledgespaceInput>>
    connectOrCreate?: Enumerable<DegreeCreateOrConnectWithoutKnowledgespaceInput>
    upsert?: Enumerable<DegreeUpsertWithWhereUniqueWithoutKnowledgespaceInput>
    createMany?: DegreeCreateManyKnowledgespaceInputEnvelope
    set?: Enumerable<DegreeWhereUniqueInput>
    disconnect?: Enumerable<DegreeWhereUniqueInput>
    delete?: Enumerable<DegreeWhereUniqueInput>
    connect?: Enumerable<DegreeWhereUniqueInput>
    update?: Enumerable<DegreeUpdateWithWhereUniqueWithoutKnowledgespaceInput>
    updateMany?: Enumerable<DegreeUpdateManyWithWhereWithoutKnowledgespaceInput>
    deleteMany?: Enumerable<DegreeScalarWhereInput>
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
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: Enumerable<bigint> | Enumerable<number>
    notIn?: Enumerable<bigint> | Enumerable<number>
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: Enumerable<string>
    notIn?: Enumerable<string>
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Enumerable<Date> | Enumerable<string> | null
    notIn?: Enumerable<Date> | Enumerable<string> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
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

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: Enumerable<bigint> | Enumerable<number> | null
    notIn?: Enumerable<bigint> | Enumerable<number> | null
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
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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
    in?: Enumerable<number>
    notIn?: Enumerable<number>
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PerfilUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    photo?: string | null
    name?: string | null
    secondname?: string | null
    socialname?: string | null
    birthday?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type PerfilCreateOrConnectWithoutUserInput = {
    where: PerfilWhereUniqueInput
    create: XOR<PerfilCreateWithoutUserInput, PerfilUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateWithoutUserInput = {
    id?: bigint | number
    street?: string | null
    number?: string | null
    complement?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AddressUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    street?: string | null
    number?: string | null
    complement?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AddressCreateOrConnectWithoutUserInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressCreateManyUserInputEnvelope = {
    data: Enumerable<AddressCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ContactCreateWithoutUserInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactCreateOrConnectWithoutUserInput = {
    where: ContactWhereUniqueInput
    create: XOR<ContactCreateWithoutUserInput, ContactUncheckedCreateWithoutUserInput>
  }

  export type ContactCreateManyUserInputEnvelope = {
    data: Enumerable<ContactCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type DegreeCreateWithoutUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
    Knowledgespace?: KnowledgespaceCreateNestedOneWithoutDegreeInput
  }

  export type DegreeUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    KnowledgespaceId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DegreeCreateOrConnectWithoutUserInput = {
    where: DegreeWhereUniqueInput
    create: XOR<DegreeCreateWithoutUserInput, DegreeUncheckedCreateWithoutUserInput>
  }

  export type DegreeCreateManyUserInputEnvelope = {
    data: Enumerable<DegreeCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type SkillsCreateWithoutUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SkillsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SkillsCreateOrConnectWithoutUserInput = {
    where: SkillsWhereUniqueInput
    create: XOR<SkillsCreateWithoutUserInput, SkillsUncheckedCreateWithoutUserInput>
  }

  export type SkillsCreateManyUserInputEnvelope = {
    data: Enumerable<SkillsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ExperiencesCreateWithoutUserInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ExperiencesUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ExperiencesCreateOrConnectWithoutUserInput = {
    where: ExperiencesWhereUniqueInput
    create: XOR<ExperiencesCreateWithoutUserInput, ExperiencesUncheckedCreateWithoutUserInput>
  }

  export type ExperiencesCreateManyUserInputEnvelope = {
    data: Enumerable<ExperiencesCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ProjectsCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProjectsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProjectsCreateOrConnectWithoutUserInput = {
    where: ProjectsWhereUniqueInput
    create: XOR<ProjectsCreateWithoutUserInput, ProjectsUncheckedCreateWithoutUserInput>
  }

  export type ProjectsCreateManyUserInputEnvelope = {
    data: Enumerable<ProjectsCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReferecePricesCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecePricesUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecePricesCreateOrConnectWithoutUserInput = {
    where: ReferecePricesWhereUniqueInput
    create: XOR<ReferecePricesCreateWithoutUserInput, ReferecePricesUncheckedCreateWithoutUserInput>
  }

  export type ReferecePricesCreateManyUserInputEnvelope = {
    data: Enumerable<ReferecePricesCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ReferecesCreateWithoutUserInput = {
    id?: bigint | number
    description: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecesUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    description: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecesCreateOrConnectWithoutUserInput = {
    where: ReferecesWhereUniqueInput
    create: XOR<ReferecesCreateWithoutUserInput, ReferecesUncheckedCreateWithoutUserInput>
  }

  export type ReferecesCreateManyUserInputEnvelope = {
    data: Enumerable<ReferecesCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type UserPointsCreateWithoutUserInput = {
    id?: bigint | number
    value: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserPointsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    value: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserPointsCreateOrConnectWithoutUserInput = {
    where: UserPointsWhereUniqueInput
    create: XOR<UserPointsCreateWithoutUserInput, UserPointsUncheckedCreateWithoutUserInput>
  }

  export type UserPointsCreateManyUserInputEnvelope = {
    data: Enumerable<UserPointsCreateManyUserInput>
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FeedCreateOrConnectWithoutUserInput = {
    where: FeedWhereUniqueInput
    create: XOR<FeedCreateWithoutUserInput, FeedUncheckedCreateWithoutUserInput>
  }

  export type FeedCreateManyUserInputEnvelope = {
    data: Enumerable<FeedCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type FeedCommentsCreateWithoutUserInput = {
    id?: bigint | number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FeedCommentsUncheckedCreateWithoutUserInput = {
    id?: bigint | number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FeedCommentsCreateOrConnectWithoutUserInput = {
    where: FeedCommentsWhereUniqueInput
    create: XOR<FeedCommentsCreateWithoutUserInput, FeedCommentsUncheckedCreateWithoutUserInput>
  }

  export type FeedCommentsCreateManyUserInputEnvelope = {
    data: Enumerable<FeedCommentsCreateManyUserInput>
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PerfilUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    secondname?: NullableStringFieldUpdateOperationsInput | string | null
    socialname?: NullableStringFieldUpdateOperationsInput | string | null
    birthday?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUpsertWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    update: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
    create: XOR<AddressCreateWithoutUserInput, AddressUncheckedCreateWithoutUserInput>
  }

  export type AddressUpdateWithWhereUniqueWithoutUserInput = {
    where: AddressWhereUniqueInput
    data: XOR<AddressUpdateWithoutUserInput, AddressUncheckedUpdateWithoutUserInput>
  }

  export type AddressUpdateManyWithWhereWithoutUserInput = {
    where: AddressScalarWhereInput
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyWithoutUserInput>
  }

  export type AddressScalarWhereInput = {
    AND?: Enumerable<AddressScalarWhereInput>
    OR?: Enumerable<AddressScalarWhereInput>
    NOT?: Enumerable<AddressScalarWhereInput>
    id?: BigIntFilter<"Address"> | bigint | number
    street?: StringNullableFilter<"Address"> | string | null
    number?: StringNullableFilter<"Address"> | string | null
    complement?: StringNullableFilter<"Address"> | string | null
    city?: StringNullableFilter<"Address"> | string | null
    state?: StringNullableFilter<"Address"> | string | null
    country?: StringNullableFilter<"Address"> | string | null
    userId?: BigIntNullableFilter<"Address"> | bigint | number | null
    createdAt?: DateTimeFilter<"Address"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Address"> | Date | string | null
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
    AND?: Enumerable<ContactScalarWhereInput>
    OR?: Enumerable<ContactScalarWhereInput>
    NOT?: Enumerable<ContactScalarWhereInput>
    id?: BigIntFilter<"Contact"> | bigint | number
    email?: StringNullableFilter<"Contact"> | string | null
    phone?: StringNullableFilter<"Contact"> | string | null
    another?: StringNullableFilter<"Contact"> | string | null
    userId?: BigIntNullableFilter<"Contact"> | bigint | number | null
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Contact"> | Date | string | null
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
    AND?: Enumerable<DegreeScalarWhereInput>
    OR?: Enumerable<DegreeScalarWhereInput>
    NOT?: Enumerable<DegreeScalarWhereInput>
    id?: BigIntFilter<"Degree"> | bigint | number
    code?: StringNullableFilter<"Degree"> | string | null
    description?: StringNullableFilter<"Degree"> | string | null
    KnowledgespaceId?: BigIntNullableFilter<"Degree"> | bigint | number | null
    userId?: BigIntNullableFilter<"Degree"> | bigint | number | null
    createdAt?: DateTimeFilter<"Degree"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Degree"> | Date | string | null
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
    AND?: Enumerable<SkillsScalarWhereInput>
    OR?: Enumerable<SkillsScalarWhereInput>
    NOT?: Enumerable<SkillsScalarWhereInput>
    id?: BigIntFilter<"Skills"> | bigint | number
    code?: StringNullableFilter<"Skills"> | string | null
    description?: StringNullableFilter<"Skills"> | string | null
    userId?: BigIntNullableFilter<"Skills"> | bigint | number | null
    createdAt?: DateTimeFilter<"Skills"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Skills"> | Date | string | null
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
    AND?: Enumerable<ExperiencesScalarWhereInput>
    OR?: Enumerable<ExperiencesScalarWhereInput>
    NOT?: Enumerable<ExperiencesScalarWhereInput>
    id?: BigIntFilter<"Experiences"> | bigint | number
    company?: StringFilter<"Experiences"> | string
    start?: DateTimeFilter<"Experiences"> | Date | string
    end?: DateTimeNullableFilter<"Experiences"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Experiences"> | boolean | null
    userId?: BigIntNullableFilter<"Experiences"> | bigint | number | null
    createdAt?: DateTimeFilter<"Experiences"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Experiences"> | Date | string | null
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
    AND?: Enumerable<ProjectsScalarWhereInput>
    OR?: Enumerable<ProjectsScalarWhereInput>
    NOT?: Enumerable<ProjectsScalarWhereInput>
    id?: BigIntFilter<"Projects"> | bigint | number
    name?: StringFilter<"Projects"> | string
    description?: StringNullableFilter<"Projects"> | string | null
    start?: DateTimeFilter<"Projects"> | Date | string
    end?: DateTimeNullableFilter<"Projects"> | Date | string | null
    iscurrent?: BoolNullableFilter<"Projects"> | boolean | null
    userId?: BigIntNullableFilter<"Projects"> | bigint | number | null
    createdAt?: DateTimeFilter<"Projects"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Projects"> | Date | string | null
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
    AND?: Enumerable<ReferecePricesScalarWhereInput>
    OR?: Enumerable<ReferecePricesScalarWhereInput>
    NOT?: Enumerable<ReferecePricesScalarWhereInput>
    id?: BigIntFilter<"ReferecePrices"> | bigint | number
    name?: StringFilter<"ReferecePrices"> | string
    description?: StringFilter<"ReferecePrices"> | string
    contacts?: StringFilter<"ReferecePrices"> | string
    userId?: BigIntNullableFilter<"ReferecePrices"> | bigint | number | null
    createdAt?: DateTimeFilter<"ReferecePrices"> | Date | string
    updatedAt?: DateTimeNullableFilter<"ReferecePrices"> | Date | string | null
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
    AND?: Enumerable<ReferecesScalarWhereInput>
    OR?: Enumerable<ReferecesScalarWhereInput>
    NOT?: Enumerable<ReferecesScalarWhereInput>
    id?: BigIntFilter<"Refereces"> | bigint | number
    description?: StringFilter<"Refereces"> | string
    value?: FloatFilter<"Refereces"> | number
    userId?: BigIntNullableFilter<"Refereces"> | bigint | number | null
    createdAt?: DateTimeFilter<"Refereces"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Refereces"> | Date | string | null
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
    AND?: Enumerable<UserPointsScalarWhereInput>
    OR?: Enumerable<UserPointsScalarWhereInput>
    NOT?: Enumerable<UserPointsScalarWhereInput>
    id?: BigIntFilter<"UserPoints"> | bigint | number
    value?: BigIntFilter<"UserPoints"> | bigint | number
    userId?: BigIntNullableFilter<"UserPoints"> | bigint | number | null
    createdAt?: DateTimeFilter<"UserPoints"> | Date | string
    updatedAt?: DateTimeNullableFilter<"UserPoints"> | Date | string | null
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
    AND?: Enumerable<FeedScalarWhereInput>
    OR?: Enumerable<FeedScalarWhereInput>
    NOT?: Enumerable<FeedScalarWhereInput>
    id?: BigIntFilter<"Feed"> | bigint | number
    title?: StringFilter<"Feed"> | string
    img?: StringNullableFilter<"Feed"> | string | null
    description?: StringNullableFilter<"Feed"> | string | null
    react_positive?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_negative?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_smile?: BigIntNullableFilter<"Feed"> | bigint | number | null
    react_lovely?: BigIntNullableFilter<"Feed"> | bigint | number | null
    userId?: BigIntNullableFilter<"Feed"> | bigint | number | null
    createdAt?: DateTimeFilter<"Feed"> | Date | string
    updatedAt?: DateTimeNullableFilter<"Feed"> | Date | string | null
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
    AND?: Enumerable<FeedCommentsScalarWhereInput>
    OR?: Enumerable<FeedCommentsScalarWhereInput>
    NOT?: Enumerable<FeedCommentsScalarWhereInput>
    id?: BigIntFilter<"FeedComments"> | bigint | number
    comment?: StringFilter<"FeedComments"> | string
    userId?: BigIntFilter<"FeedComments"> | bigint | number
    createdAt?: DateTimeFilter<"FeedComments"> | Date | string
    updatedAt?: DateTimeNullableFilter<"FeedComments"> | Date | string | null
  }

  export type UserCreateWithoutPerfilInput = {
    id?: bigint | number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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

  export type UserCreateWithoutAddressInput = {
    id?: bigint | number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
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

  export type UserUncheckedCreateWithoutAddressInput = {
    id?: bigint | number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
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

  export type UserCreateOrConnectWithoutAddressInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
  }

  export type UserUpsertWithoutAddressInput = {
    update: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
    create: XOR<UserCreateWithoutAddressInput, UserUncheckedCreateWithoutAddressInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAddressInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAddressInput, UserUncheckedUpdateWithoutAddressInput>
  }

  export type UserUpdateWithoutAddressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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

  export type UserUncheckedUpdateWithoutAddressInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    user?: UserCreateNestedOneWithoutDegreeInput
  }

  export type DegreeUncheckedCreateWithoutKnowledgespaceInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DegreeCreateOrConnectWithoutKnowledgespaceInput = {
    where: DegreeWhereUniqueInput
    create: XOR<DegreeCreateWithoutKnowledgespaceInput, DegreeUncheckedCreateWithoutKnowledgespaceInput>
  }

  export type DegreeCreateManyKnowledgespaceInputEnvelope = {
    data: Enumerable<DegreeCreateManyKnowledgespaceInput>
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type KnowledgespaceUncheckedCreateWithoutDegreeInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type KnowledgespaceCreateOrConnectWithoutDegreeInput = {
    where: KnowledgespaceWhereUniqueInput
    create: XOR<KnowledgespaceCreateWithoutDegreeInput, KnowledgespaceUncheckedCreateWithoutDegreeInput>
  }

  export type UserCreateWithoutDegreeInput = {
    id?: bigint | number
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type KnowledgespaceUncheckedUpdateWithoutDegreeInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilCreateNestedOneWithoutUserInput
    address?: AddressCreateNestedManyWithoutUserInput
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
    perfil?: PerfilUncheckedCreateNestedOneWithoutUserInput
    address?: AddressUncheckedCreateNestedManyWithoutUserInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUpdateOneWithoutUserNestedInput
    address?: AddressUpdateManyWithoutUserNestedInput
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    perfil?: PerfilUncheckedUpdateOneWithoutUserNestedInput
    address?: AddressUncheckedUpdateManyWithoutUserNestedInput
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

  export type AddressCreateManyUserInput = {
    id?: bigint | number
    street?: string | null
    number?: string | null
    complement?: string | null
    city?: string | null
    state?: string | null
    country?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ContactCreateManyUserInput = {
    id?: bigint | number
    email?: string | null
    phone?: string | null
    another?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DegreeCreateManyUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    KnowledgespaceId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type SkillsCreateManyUserInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ExperiencesCreateManyUserInput = {
    id?: bigint | number
    company: string
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ProjectsCreateManyUserInput = {
    id?: bigint | number
    name: string
    description?: string | null
    start: Date | string
    end?: Date | string | null
    iscurrent?: boolean | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecePricesCreateManyUserInput = {
    id?: bigint | number
    name: string
    description: string
    contacts: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type ReferecesCreateManyUserInput = {
    id?: bigint | number
    description: string
    value: number
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type UserPointsCreateManyUserInput = {
    id?: bigint | number
    value: bigint | number
    createdAt?: Date | string
    updatedAt?: Date | string | null
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
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type FeedCommentsCreateManyUserInput = {
    id?: bigint | number
    comment: string
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type AddressUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AddressUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    street?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    complement?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ContactUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    another?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DegreeUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Knowledgespace?: KnowledgespaceUpdateOneWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    KnowledgespaceId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DegreeUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    KnowledgespaceId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SkillsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExperiencesUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExperiencesUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExperiencesUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    company?: StringFieldUpdateOperationsInput | string
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    iscurrent?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecePricesUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecePricesUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecePricesUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    contacts?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecesUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecesUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReferecesUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    description?: StringFieldUpdateOperationsInput | string
    value?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPointsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPointsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserPointsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    value?: BigIntFieldUpdateOperationsInput | bigint | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedCommentsUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedCommentsUncheckedUpdateWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type FeedCommentsUncheckedUpdateManyWithoutUserInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    comment?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DegreeCreateManyKnowledgespaceInput = {
    id?: bigint | number
    code?: string | null
    description?: string | null
    userId?: bigint | number | null
    createdAt?: Date | string
    updatedAt?: Date | string | null
  }

  export type DegreeUpdateWithoutKnowledgespaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneWithoutDegreeNestedInput
  }

  export type DegreeUncheckedUpdateWithoutKnowledgespaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DegreeUncheckedUpdateManyWithoutKnowledgespaceInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    code?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



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