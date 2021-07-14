/**
	{
		"api":1,
		"name":"Split text",
		"description":"Split text on \\n.",
		"author":"Adam",
		"icon":"scissors",
		"tags":"split"
	}
**/

function main(state) {
	state.text = state.text.replace(/\\n/g, '\n');	
}
