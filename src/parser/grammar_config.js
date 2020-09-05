function checkIfAllUnique(arr) {
	let map = {};
	return arr.every(key => {
		if (map[key]) return false;
		map[key] = true;
		return true;
	});
}

function validateResult(ast) {
	for (let sentenceAST of ast) {
		for (let obj in sentenceAST) {
			const { loves, hates } = sentenceAST[obj];
			// duplication check
			if ((loves && !checkIfAllUnique(loves)) || (hates && !checkIfAllUnique(hates))) {
				throw Error(`Don't repeat yourself 🧐 (e.g. "A loves B and A loves B")`);
			}

			// self-love / self hate check
			if ((loves && loves.some(subj => subj === obj)) || (hates && hates.some(subj => subj === obj))) {
				throw Error('Self-love (self-hate) is not allowed 😋 (e.g. "A loves A")');
			}

			// inersetions check
			if (loves && hates) {
				const hasIntersections = loves.some(lSubj => hates.some(hSubj => lSubj === hSubj));
				if (hasIntersections) throw Error(`It's impossible to love and to hate at the same time 🙄 (e.g. "A loves B and A hates B")`);
			}
		}
	}
}

function convertToTree(sentenceList) {
 return sentenceList.filter(expr => expr).reduce((acc, expr) => {
	if (!acc[expr.who]) {
		acc[expr.who] = { [expr.relation]: [] };
	}
	if (!acc[expr.who][expr.relation]) {
		acc[expr.who][expr.relation] = [];
	}
	acc[expr.who][expr.relation].push(expr.whom);
	return acc;
}, {})
}

export default `
	{
		${checkIfAllUnique.toString()}
		${validateResult.toString()}
		${convertToTree.toString()}
	}

	Paragraph 
		= paragraph: Sentence+ {
			const ast = paragraph.reduce((acc, sentences) => (acc.push(convertToTree(sentences)), acc), []);
			validateResult(ast);
			return ast;
		};

	Sentence 
		= expressions: (Expression (ExpressionSeparator / "\\n")?)+ lastExpr: Expression? EOS _ {
			return [...expressions.map(([expr]) => expr), lastExpr];
		}

	Expression 
		= who: Subject relation: (_("hates" / "loves")_) whom: Object { return { who, relation: relation[1], whom }; }
			
	ExpressionSeparator 
		= _("and" / "but" / "while" / ",")" "
			
	Subject = [A-Z]
	Object = [A-Z]

	EOS "End Of Sentence" = [.!]

	_ = [ \\t\\n\\r]*
`;