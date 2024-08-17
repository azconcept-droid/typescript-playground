# Hello world Typescript

npm install -g typescript

tsc --v

npm install -g ts-node

<p>Type inference describes where and how TypeScript infers types when you don’t explicitly annotate them.</p>

Type inference: TypeScript guesses the type	
Type annotations: You explicitly tell TypeScript the type


In practice, you should always use the type inference as much as possible. And you use the type annotation in the following cases:

    When you declare a variable and assign it a value later.
    When you want a variable that can’t be inferred.
    When a function returns the any type and you need to clarify the value.