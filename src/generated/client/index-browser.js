
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.3.1
 * Query Engine version: 61e140623197a131c2a6189271ffee05a7aa9a59
 */
Prisma.prismaVersion = {
  client: "5.3.1",
  engine: "61e140623197a131c2a6189271ffee05a7aa9a59"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password'
};

exports.Prisma.PerfilScalarFieldEnum = {
  id: 'id',
  photo: 'photo',
  name: 'name',
  secondname: 'secondname',
  socialname: 'socialname',
  birthday: 'birthday',
  userId: 'userId'
};

exports.Prisma.AddresScalarFieldEnum = {
  id: 'id',
  address: 'address',
  complement: 'complement',
  state: 'state',
  country: 'country',
  userId: 'userId'
};

exports.Prisma.ContactScalarFieldEnum = {
  id: 'id',
  email: 'email',
  phone: 'phone',
  another: 'another',
  userId: 'userId'
};

exports.Prisma.KnowledgespaceScalarFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description'
};

exports.Prisma.DegreeScalarFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description',
  KnowledgespaceId: 'KnowledgespaceId',
  userId: 'userId'
};

exports.Prisma.SkillsScalarFieldEnum = {
  id: 'id',
  code: 'code',
  description: 'description',
  userId: 'userId'
};

exports.Prisma.ExperiencesScalarFieldEnum = {
  id: 'id',
  company: 'company',
  start: 'start',
  end: 'end',
  iscurrent: 'iscurrent',
  userId: 'userId'
};

exports.Prisma.ProjectsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  start: 'start',
  end: 'end',
  iscurrent: 'iscurrent',
  userId: 'userId'
};

exports.Prisma.ReferecesScalarFieldEnum = {
  id: 'id',
  description: 'description',
  value: 'value',
  userId: 'userId'
};

exports.Prisma.ReferecePricesScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  contacts: 'contacts',
  userId: 'userId'
};

exports.Prisma.UserPointsScalarFieldEnum = {
  id: 'id',
  value: 'value',
  userId: 'userId'
};

exports.Prisma.FeedScalarFieldEnum = {
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

exports.Prisma.FeedCommentsScalarFieldEnum = {
  id: 'id',
  comment: 'comment',
  userId: 'userId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
