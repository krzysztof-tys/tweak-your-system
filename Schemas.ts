import Realm, { BSON, ObjectSchema } from 'realm';

export class Action extends Realm.Object<Action> {
    _id!: BSON.ObjectID;
    name!: string;

    static schema: ObjectSchema = {
        name: 'Action',
        properties: {
            _id: 'objectId',
            name: { type: 'string', indexed: true },
        },
        primaryKey: '_id',
    };
}

export class Record extends Realm.Object<Record> {
    _id!: BSON.ObjectID;
    dateStarted?: Date;
    dateEnded?: Date;

    static schema: ObjectSchema = {
        name: 'Record',
        properties: {
            _id: 'objectId',
            dateStarted: 'date?',
            dateEnded: 'date?',
        },
        primaryKey: '_id',
    };
}
