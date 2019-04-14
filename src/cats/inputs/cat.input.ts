import { InputType, Field, Int } from 'type-graphql';

@InputType()
export class CatInput {
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: number;
  @Field()
  readonly breed: string;
}
