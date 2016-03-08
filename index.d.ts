import {LanguageChains} from "chai/lib/Assertion";
import {NumericComparison} from "chai/lib/Assertion";
import {TypeComparison} from "chai/lib/Assertion";
import { Assert } from 'chai/lib/Assert';
import '~chai/lib/Assertion';
import '~chai/lib/Assert';

declare namespace ChaiPromised {

    // For BDD API

    // Eventually does not have .then(), but PromisedAssertion have.
    interface Eventually extends PromisedLanguageChains, PromisedNumericComparison, PromisedTypeComparison {
        // From chai-as-promised
        become(expected: Promise<any>): PromisedAssertion;
        fulfilled: PromisedAssertion;
        rejected: PromisedAssertion;
        rejectedWith(expected: any): PromisedAssertion;
        notify(fn: Function): PromisedAssertion;

        // From chai
        not: PromisedAssertion;
        deep: PromisedDeep;
        a: PromisedTypeComparison;
        an: PromisedTypeComparison;
        include: PromisedInclude;
        contain: PromisedInclude;
        ok: PromisedAssertion;
        true: PromisedAssertion;
        false: PromisedAssertion;
        null: PromisedAssertion;
        undefined: PromisedAssertion;
        exist: PromisedAssertion;
        empty: PromisedAssertion;
        arguments: PromisedAssertion;
        Arguments: PromisedAssertion;
        equal: PromisedEqual;
        equals: PromisedEqual;
        eq: PromisedEqual;
        eql: PromisedEqual;
        eqls: PromisedEqual;
        property: PromisedProperty;
        ownProperty: PromisedOwnProperty;
        haveOwnProperty: PromisedOwnProperty;
        length: PromisedLength;
        lengthOf: PromisedLength;
        match(regexp: RegExp|string, message?: string): PromisedAssertion;
        string(string: string, message?: string): PromisedAssertion;
        keys: PromisedKeys;
        key(string: string): PromisedAssertion;
        throw: PromisedThrow;
        throws: PromisedThrow;
        Throw: PromisedThrow;
        respondTo(method: string, message?: string): PromisedAssertion;
        itself: PromisedAssertion;
        satisfy(matcher: Function, message?: string): PromisedAssertion;
        closeTo(expected: number, delta: number, message?: string): PromisedAssertion;
        members: PromisedMembers;
    }

    interface PromisedAssertion extends Eventually, Promise<any> {
    }

    interface PromisedLanguageChains {
        eventually: Eventually;

        // From chai
        to: PromisedAssertion;
        be: PromisedAssertion;
        been: PromisedAssertion;
        is: PromisedAssertion;
        that: PromisedAssertion;
        which: PromisedAssertion;
        and: PromisedAssertion;
        has: PromisedAssertion;
        have: PromisedAssertion;
        with: PromisedAssertion;
        at: PromisedAssertion;
        of: PromisedAssertion;
        same: PromisedAssertion;
    }

    interface PromisedNumericComparison {
        above: PromisedNumberComparer;
        gt: PromisedNumberComparer;
        greaterThan: PromisedNumberComparer;
        least: PromisedNumberComparer;
        gte: PromisedNumberComparer;
        below: PromisedNumberComparer;
        lt: PromisedNumberComparer;
        lessThan: PromisedNumberComparer;
        most: PromisedNumberComparer;
        lte: PromisedNumberComparer;
        within(start: number, finish: number, message?: string): PromisedAssertion;
    }

    interface PromisedNumberComparer {
        (value: number, message?: string): PromisedAssertion;
    }

    interface PromisedTypeComparison {
        (type: string, message?: string): PromisedAssertion;
        instanceof: PromisedInstanceOf;
        instanceOf: PromisedInstanceOf;
    }

    interface PromisedInstanceOf {
        (constructor: Object, message?: string): PromisedAssertion;
    }

    interface PromisedDeep {
        equal: PromisedEqual;
        include: PromisedInclude;
        property: PromisedProperty;
    }

    interface PromisedEqual {
        (value: any, message?: string): PromisedAssertion;
    }

    interface PromisedProperty {
        (name: string, value?: any, message?: string): PromisedAssertion;
    }

    interface PromisedOwnProperty {
        (name: string, message?: string): PromisedAssertion;
    }

    interface PromisedLength extends PromisedLanguageChains, PromisedNumericComparison {
        (length: number, message?: string): PromisedAssertion;
    }

    interface PromisedInclude {
        (value: Object, message?: string): PromisedAssertion;
        (value: string, message?: string): PromisedAssertion;
        (value: number, message?: string): PromisedAssertion;
        keys: PromisedKeys;
        members: PromisedMembers;
    }

    interface PromisedKeys {
        (...keys: string[]): PromisedAssertion;
        (keys: any[]): PromisedAssertion;
    }

    interface PromisedThrow {
        (): PromisedAssertion;
        (expected: string, message?: string): PromisedAssertion;
        (expected: RegExp, message?: string): PromisedAssertion;
        (constructor: Error, expected?: string, message?: string): PromisedAssertion;
        (constructor: Error, expected?: RegExp, message?: string): PromisedAssertion;
        (constructor: Function, expected?: string, message?: string): PromisedAssertion;
        (constructor: Function, expected?: RegExp, message?: string): PromisedAssertion;
    }

    interface PromisedMembers {
        (set: any[], message?: string): PromisedAssertion;
    }

    // For Assert API

    export interface PromisedAssert {
        fail(actual?: any, expected?: any, msg?: string, operator?: string): Promise<void>;

        ok(val: any, msg?: string): Promise<void>;
        notOk(val: any, msg?: string): Promise<void>;

        equal(act: any, exp: any, msg?: string): Promise<void>;
        notEqual(act: any, exp: any, msg?: string): Promise<void>;

        strictEqual(act: any, exp: any, msg?: string): Promise<void>;
        notStrictEqual(act: any, exp: any, msg?: string): Promise<void>;

        deepEqual(act: any, exp: any, msg?: string): Promise<void>;
        notDeepEqual(act: any, exp: any, msg?: string): Promise<void>;

        isTrue(val: any, msg?: string): Promise<void>;
        isFalse(val: any, msg?: string): Promise<void>;

        isNull(val: any, msg?: string): Promise<void>;
        isNotNull(val: any, msg?: string): Promise<void>;

        isUndefined(val: any, msg?: string): Promise<void>;
        isDefined(val: any, msg?: string): Promise<void>;

        isFunction(val: any, msg?: string): Promise<void>;
        isNotFunction(val: any, msg?: string): Promise<void>;

        isObject(val: any, msg?: string): Promise<void>;
        isNotObject(val: any, msg?: string): Promise<void>;

        isArray(val: any, msg?: string): Promise<void>;
        isNotArray(val: any, msg?: string): Promise<void>;

        isString(val: any, msg?: string): Promise<void>;
        isNotString(val: any, msg?: string): Promise<void>;

        isNumber(val: any, msg?: string): Promise<void>;
        isNotNumber(val: any, msg?: string): Promise<void>;

        isBoolean(val: any, msg?: string): Promise<void>;
        isNotBoolean(val: any, msg?: string): Promise<void>;

        typeOf(val: any, type: string, msg?: string): Promise<void>;
        notTypeOf(val: any, type: string, msg?: string): Promise<void>;

        instanceOf(val: any, type: Function, msg?: string): Promise<void>;
        notInstanceOf(val: any, type: Function, msg?: string): Promise<void>;

        include(exp: string, inc: any, msg?: string): Promise<void>;
        include(exp: any[], inc: any, msg?: string): Promise<void>;

        notInclude(exp: string, inc: any, msg?: string): Promise<void>;
        notInclude(exp: any[], inc: any, msg?: string): Promise<void>;

        match(exp: any, re: RegExp, msg?: string): Promise<void>;
        notMatch(exp: any, re: RegExp, msg?: string): Promise<void>;

        property(obj: Object, prop: string, msg?: string): Promise<void>;
        notProperty(obj: Object, prop: string, msg?: string): Promise<void>;
        deepProperty(obj: Object, prop: string, msg?: string): Promise<void>;
        notDeepProperty(obj: Object, prop: string, msg?: string): Promise<void>;

        propertyVal(obj: Object, prop: string, val: any, msg?: string): Promise<void>;
        propertyNotVal(obj: Object, prop: string, val: any, msg?: string): Promise<void>;

        deepPropertyVal(obj: Object, prop: string, val: any, msg?: string): Promise<void>;
        deepPropertyNotVal(obj: Object, prop: string, val: any, msg?: string): Promise<void>;

        lengthOf(exp: any, len: number, msg?: string): Promise<void>;
        //alias frenzy
        throw(fn: Function, msg?: string): Promise<void>;
        throw(fn: Function, regExp: RegExp): Promise<void>;
        throw(fn: Function, errType: Function, msg?: string): Promise<void>;
        throw(fn: Function, errType: Function, regExp: RegExp): Promise<void>;

        throws(fn: Function, msg?: string): Promise<void>;
        throws(fn: Function, regExp: RegExp): Promise<void>;
        throws(fn: Function, errType: Function, msg?: string): Promise<void>;
        throws(fn: Function, errType: Function, regExp: RegExp): Promise<void>;

        Throw(fn: Function, msg?: string): Promise<void>;
        Throw(fn: Function, regExp: RegExp): Promise<void>;
        Throw(fn: Function, errType: Function, msg?: string): Promise<void>;
        Throw(fn: Function, errType: Function, regExp: RegExp): Promise<void>;

        doesNotThrow(fn: Function, msg?: string): Promise<void>;
        doesNotThrow(fn: Function, regExp: RegExp): Promise<void>;
        doesNotThrow(fn: Function, errType: Function, msg?: string): Promise<void>;
        doesNotThrow(fn: Function, errType: Function, regExp: RegExp): Promise<void>;

        operator(val: any, operator: string, val2: any, msg?: string): Promise<void>;
        closeTo(act: number, exp: number, delta: number, msg?: string): Promise<void>;

        sameMembers(set1: any[], set2: any[], msg?: string): Promise<void>;
        includeMembers(set1: any[], set2: any[], msg?: string): Promise<void>;

        ifError(val: any, msg?: string): Promise<void>;
    }
}

declare module '~chai/lib/Assertion' {
    interface Assertion {
        eventually: ChaiPromised.PromisedAssertion;
        become(expected: any): ChaiPromised.PromisedAssertion;
        fulfilled: ChaiPromised.PromisedAssertion;
        rejected: ChaiPromised.PromisedAssertion;
        rejectedWith(expected: any, message?: string): ChaiPromised.PromisedAssertion;
        notify(fn: Function): ChaiPromised.PromisedAssertion;
    }
}

declare module '~chai/lib/Assert' {
    interface Assert {
        eventually: ChaiPromised.PromisedAssert;
        isFulfilled(promise: Promise<any>, message?: string): Promise<void>;
        becomes(promise: Promise<any>, expected: any, message?: string): Promise<void>;
        doesNotBecome(promise: Promise<any>, expected: any, message?: string): Promise<void>;
        isRejected(promise: Promise<any>, message?: string): Promise<void>;
        isRejected(promise: Promise<any>, expected: any, message?: string): Promise<void>;
        isRejected(promise: Promise<any>, match: RegExp, message?: string): Promise<void>;
        notify(fn: Function): Promise<void>;
    }
}


declare function chaiAsPromised(chai: any, utils: any): void;
declare namespace chaiAsPromised {}
export = chaiAsPromised;
