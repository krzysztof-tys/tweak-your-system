import Realm, { BSON, ObjectSchema } from 'realm';
class Action extends Realm.Object<Action> {
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

class Record extends Realm.Object<Record> {
    _id!: BSON.ObjectID;
    action!: Action;
    dateStarted?: Date;
    dateEnded?: Date;

    static schema: ObjectSchema = {
        name: 'Record',
        properties: {
            _id: 'objectId',
            action: 'Action',
            dateStarted: 'date?',
            dateEnded: 'date?',
        },
        primaryKey: '_id',
    };
}

export { Action, Record };
