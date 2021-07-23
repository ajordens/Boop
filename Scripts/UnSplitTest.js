/**
	{
		"api":1,
		"name":"Unsplit text",
		"description":"Unsplit text on \\n.",
		"author":"Adam",
		"icon":"scissors",
		"tags":"unsplit"
	}
**/

function main(state) {
	state.text = state.text.replace(/\n/g, '');	
}
