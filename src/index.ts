import Cppkies from "cppkies"
const { HeavenlyUpgrade, CookieUpgrade } = Cppkies;

class LoreoUpgrade extends Cppkies.CookieUpgrade {
	static LoreoNames: string[] = [];
	
	constructor(name: string, quote: string, icon: Game.Icon) {
		LoreoUpgrade.LoreoNames.push(name);
		super(name, quote, LoreoUpgrade.LoreoCostFunc, [icon[0], icon[1]], 2, {require : "Box of brand biscuts (Family Size)"}, 10031) ;
	}

	static LoreoCostFunc() {
		let cost = 999999999999999*5;
		for (const name of LoreoUpgrade.LoreoNames) {
			if (Game.Has(name)) cost *= 1.2
		}
		return cost
	}
}

function HasAll(arr: string[]) {
	for (const name of arr) {
		if (!Game.Has(name)) return false
	}
	return true
}

Cppkies.onLoad.push(() => {
	Cppkies.iconLink = "https://raw.githubusercontent.com/MasterOfBob777/LotsOfLoreos/master/static/LotsOfLoreosIcons.png";
	new HeavenlyUpgrade(
		"Box of brand biscuts (Family Size)", 
		"Contains lots of new flavors of loreos.<q>Now 10% larger!</q>", 
		1000000000, 
		[20,9, ""], 
		[-457,-305], 
		["Box of brand biscuits"]
	)
	
	let years = Math.floor((Number(Date.now())-Number(new Date(2013,7,8)))/(1000*60*60*24*365));
	let BdayLoreo = new CookieUpgrade(
		"Birthday Cake Loreo", 
		"", 
		2e+29 /* 200 octilion-ish */, 
		[0, 0], 
		years, 
		{
			require : "Box of brand biscuts (Family Size)"
		}, 
		10031 
	);
	BdayLoreo.desc = `Cookie production multiplier <b>+1%</b> for every year Cookie Clicker has existed (currently : <b>${Beautify(years)}%</b>).<q>Thank you for playing Cookie Clicker!<br>-Orteil (and Bob thanks you too!)</q>`;

	new LoreoUpgrade(
		"Mint Loreo",
		"Tastes a little like toothpaste, and it's not even mint flavored toothpaste. \
		Like why do they call it \"mint\" flavored when it doesn't taste like mint, \
		I guess it's because of the color but then why does it taste like the toothpaste \
		that does the exact same thing; I hate mint anything because you never know what \
		your going to get, it's either <b>this</b> or like thin- I mean Win Mints. \
		-A local mint critic".replace(/\t\t/g, ""), 
		[1,0]
	)
	new LoreoUpgrade(
		"Chocolate Loreo",
		"<b>You are filled with determination.</b>", 
		[2,0]
	)
	new LoreoUpgrade(
		"Peanut Butter Loreo",
		"Bob's Favorite, well of ore- loreos at least.", 
		[3,0]
	)
	new LoreoUpgrade(
		"Red Velvet Loreo",
		"Tasty!", 
		[4,0]
	)
	new LoreoUpgrade(
		"Peanut Butter Chocolate Pie Loreo",
		"Excessive but yet delicious.", 
		[5,0]
	)
	new LoreoUpgrade(
		"Spring Loreo",
		"Too much flower to be honest.", 
		[0,1]
	)
	new LoreoUpgrade(
		"Dark Chocolate Loreo",
		"It's like chocolate but <i>edgy</i>.", 
		[1,1]
	)
	new LoreoUpgrade(
		"Carrot Cake Loreo",
		"24-carrot, and great for eyesight!", 
		[2,1]
	)
	new LoreoUpgrade(
		"Lemon Loreo",
		"Made from the new and exotic \"Blood Lemon\"! Blood Oranges, \
		watch out because Blood Lemons are the new best blood fruit! \
		Note: Blood Lemons do not contain actual blood, but I heard \
		that Blood Oranges have actual blood in them, so don't buy them \
		they're gross, and Blood Lemons are far superior! \
		-A completely unbiased reviewer".replace(/\t\t/g, ""), 
		[3,1]
	)
	new LoreoUpgrade(
		"Golden Loreo",
		"High in beta karatene.", 
		[4,1]
	)
	new LoreoUpgrade(
		"Cinnamon Bun Loreo",
		"Made with actual bunnies!", 
		[5,1]
	)
	
	new Cppkies.Achievement(
		"Aurora Loreolis",
		"Buy all Loreos <q>At this time of year! At this time of day! In this part of the country! Localized entirely in your kitchen! Buy tickets now!</q>",
		[16, 3, ""]
	)
	
	
	Cppkies.on("check", () => {
		if (HasAll(LoreoUpgrade.LoreoNames)) {
			Game.Win("Aurora Loreolis")
		}
	})
})
