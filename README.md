# Prerequisites
1. Make sure `node` & `npm` is installed (`node -v`, `npm -v`)
2. Install dependecies `npm install`

# Run project locally
`npm run start`

# Run tests
`npm run test`




Get Ready for PEG
-----------------

Take a look at [PEGjs](https://pegjs.org/). It's a Javascript parser for
[parser expression grammars](https://www.wikiwand.com/en/Parsing_expression_grammar) which is very similar to
context-free grammars you may know from the Computer Science courses.

Don't be afraid! It's not as scary as it seems (:

There is a nice [intro](https://coderwall.com/p/316gba/beginning-parsers-with-peg-js) you can look trough.

Step 0. Pick Your Favorite Tool
-------------------------------

The project should come in a form of a single page web application. You are free to use any framework you want but we
encourage you to use Angular 4 or React (+ something).

Note that we do care about design and usability but this assignment tests your engineering skills. So, the UI/UX should
help you to better express your solution and us to better asses them.

Step 1. The Language of Love and Destruction
--------------------------------------------

Let's say we have a toy language that describes relations between people:

```
A loves B but B hates A.
A hates B, A loves D while B loves C and D hates A.
A loves B, B loves A and B loves D.
A loves B but B hates A
D loves B and C loves A.
```

Each sentence here represents a state of the evolving love story.

Note that there are **multiline** sentences (like the last one)!
 
We want to write a parser for this language that for each line returns a structure of relations of people mentioned in
it. Such structure can be (but not necessary) like the following:

```javascript
[
  {
    'A': { 'loves': ['B'] },
    'B': { 'hates': ['A'] }
  },
  {
    'A': { 'hates': ['B'], 'loves': ['D'] },
    'B': { 'loves': ['C'] },
    'D': { 'hates': 'A' }
  }
]
```

As you can see it represents the first two lines of the story above.

We do not give you a formal definition of this language. Instead we want you to design grammar sufficient to grasp its
spirit.

For this part of the assignment the sufficient representation does not require any user interface. Instead we want the
parser to be implemented as a module and covered by test cases. We do not restrict you by any testing framework since
Node.js has built in `assert` module which may be sufficient if you are not experience with testing.

You should provide a description for each of your test cases.

### On the Meaning of Love

Here we want to disambiguate meaning of term we use in the document.
 
A *state of love*, the *love case* or the *situation of love* is the order of things described in a one sentence. We can
think about it as a snapshot of relations.

A *love story* is a sequence on love states.

Why not *story of relations*? Well, in our pocket universe loathing can be thought as just a negative form of love. 

Step 2. Show Me Your Love
-------------------------

The exercise will be completed when there will be a text area input for a love story and the text field with the
corresponding javascript structure. You should parse the stories automatically each time when user changes the text
(this is usually called "live edit").

There should be a minimal error reporting in case when user enters invalid love statements.

You can use code highlights like [Code Mirror](https://codemirror.net/) if you want. I've used the one in my one of my
[pet projects](http://takorogo.github.io/#/) when I was in love with graph databases and DSLs.

This is a major task and if fully completed together with the [Step 1](#step-1-the-language-of-love-and-destruction)
it should be enough to pass the grading threshold.

But why stop here? There are more challenges to complete. Besides, you may have some crucial errors in your solution
you, don't see now. So, if I were you, I will take the next steps in order to get even more fun and confidence in your
results.
