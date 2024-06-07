import _ from 'lodash';
import BaseRepository from './baseRepository';
import { AnyRecord, ModelStructure, ModelTypes, ModelScalarFields, MODELS_NAME } from './prisma-repo';

// This type will be used if you want to extends the functions in user_attendance Class

/* eslint-disable @typescript-eslint/no-unused-vars */
type Where = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['Where'];
type Select = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['Select'];
type Include = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['Include'];
type Create = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['Create'];
type Update = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['Update'];
type Cursor = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['Cursor'];
type Order = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['Order'];
type Delegate = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['Delegate'];
type GroupBy = ModelTypes[typeof MODELS_NAME.USER_ATTENDANCE]['GroupBy'];
type Scalar = ModelScalarFields<typeof MODELS_NAME.USER_ATTENDANCE>;
type Model = ModelStructure[typeof MODELS_NAME.USER_ATTENDANCE];
/*  eslint-enable @typescript-eslint/no-unused-vars */


class user_attendance extends BaseRepository(MODELS_NAME.USER_ATTENDANCE) {
}

export default user_attendance
