/*
<Statement> ::= <Subject> <Verb> <Object>
<Subject> ::= <Article> <Noun>
<Object> ::= <Article> <Noun>
<Verb> ::= eat | chase |walk
<Article> ::= a | an | the
<Noun> ::= bird | dog | chase
a dog eat a bird.
a dog chase a bird.
*/
class Parser
{
    constructor(str)
    {
        this.tokens = str.split(" ");
        this.index = 0;
    }
    parse()
    {
        try
        {
            this.Statement();
            console.log("Parse ok ")
        }
        catch(e)
        {
            console.error(e);
        }
    }
    Statement()
    {
        this.Subject();
        this.Verb();
        this.Object();
    }
    Subject()
    {
        this.Article();
        this.Noun();
    }
    Verb()
    {
        let currentToken = this.tokens[this.index];
        if(currentToken === 'eat' 
            || currentToken === 'chase'
            || currentToken === 'walk'  )
            {
                this.index++;
            }
            else
            {
                throw new Error('Expect verb eat, chase walk');
            }
    }
    Object()
    {
        this.Article();
        this.Noun();
    }
    Article()
    {
        let currentToken = this.tokens[this.index];
        if(currentToken === 'a' 
            || currentToken === 'an'
            || currentToken === 'the'  )
            {
                this.index++;
            }
            else
            {
                throw new Error('Expect article a,an,the');
            }
    }
    Noun()
    {
        let currentToken = this.tokens[this.index];
        if(currentToken === 'bird' 
            || currentToken === 'dog'
             )
            {
                this.index++;
            }
            else
            {
                throw new Error('Expect noun bird, dog');
            }
    }
}
let str = "a dog chase the dog";
let parser = new Parser(str);
parser.parse();
