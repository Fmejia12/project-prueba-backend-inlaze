import {
    registerDecorator,
    ValidationOptions,
    ValidationArguments,
} from 'class-validator'

export function IsEqualTo(
    property: string,
    validationOptions?: ValidationOptions
) {
    return (object: Record<string, any>, propertyName: string) => {
        registerDecorator({
            name: 'isEqualTo',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any, args: ValidationArguments) {
                    const [relatedPropertyName] = args.constraints
                    const relatedValue = (args.object as Record<string, any>)[
                        relatedPropertyName
                    ]
                    return value === relatedValue
                },
            },
        })
    }
}
