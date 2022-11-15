function metadataParameterDec(
    target: any,
    methodName: string,
    parameterIndex: number
) {}
class ClassWithMetadata {
    print(
        @metadataParameterDec id: number, name: string
    ) {}
}