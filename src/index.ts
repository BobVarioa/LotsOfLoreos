/// <reference types="cookieclicker" />
import Cppkies from "cppkies"

// Ugh, BeautifyInText isn't in the CC types. I'll fix it sometime, If I haven't done it already someone remind me to.
function UghBeautifyInText(str) {
	return str.replace(/(([\d]+[,]*)+)/g,(str) => {
		return Beautify(parseInt(str.replace(/,/g,''),10))
	});
}

function LoreolUpgrade(name: string, quote: string, icon: Game.Icon): Game.CookieUpgrade {
	let Loreol;
	if (name === "Birthday Cake Loreol")
	{
		let years = Math.floor((Number(Date.now())-Number(new Date(2013,7,8)))/(1000*60*60*24*365));
		Loreol = new Cppkies.CookieUpgrade("Birthday Cake Loreo", "", 99999999999999999999999999999*2 /* 200 octilion-ish */, [1, 1], years, {require : "Box of brand biscuts (Family Size)"}, 10031 );
		Loreol.baseDesc='Cookie production multiplier <b>+1%</b> for every year Cookie Clicker has existed (currently : <b>+'+Beautify(years)+'%</b>).<q>Thank you for playing Cookie Clicker!<br>-Orteil (and Bob thanks you too!)</q>';
		Loreol.desc=UghBeautifyInText(Loreol.baseDesc);
	} else {
		Loreol = new Cppkies.CookieUpgrade(name, quote, 999999999999999*5, [1, 1], 2, {require : "Box of brand biscuts (Family Size)"}, 10031 );
	}
	return Loreol;
}

Cppkies.onLoad.push(() => {
	new Cppkies.HeavenlyUpgrade("Box of brand biscuts (Family Size)", "Contains lots of new flavors of loreols.<q>Now %10 larger!</q>", 1000000000, [20,9], [-457,-305], ["Box of brand biscuits"])
	
	LoreolUpgrade("Birthday Cake Loreol", "", [0, 0])
	LoreolUpgrade("Chocolate Loreol", "<b>You are filled with determination.</b>", [0,0])
	LoreolUpgrade("Peanut Butter Loreol", "Bob's Favorite, well of ore- Loreols at least.", [0,0])
	LoreolUpgrade("Mint Loreol", "Tastes a little like toothpaste, and it's not even mint flavored toothpaste.", [0,0])

	LoreolUpgrade("Red Velvet Loreol", "", [0,0])
	LoreolUpgrade("Peanut Butter Chocolate Pie Loreol", "Excessive but yet delicious.", [0,0])
	LoreolUpgrade("Spring Loreol", "Too much flower to be honest.", [0,0])
	LoreolUpgrade("Dark Chocolate Loreol", "It's like chocolate but <i>edgy</i>.", [0,0])
	LoreolUpgrade("Carrot Cake Loreol", "24-carrot, and great for eyesight!", [0,0])
	LoreolUpgrade("Golden Loreol", "High in beta karatene.", [0,0])
	LoreolUpgrade("Lemon Loreol", "", [0,0])
	LoreolUpgrade("Cinnamon Bun Loreol", "", [0,0])

	new Cppkies.Achievement(
		"Aurora Loreolis",
		"Buy all Loreols <q>At this time of year! At this time of day! In this part of the country! Localized entirely in your kitchen! Buy tickets now!</q>",
		[1, 1]
	)

	
	Cppkies.on("check", () => {
		if (Game.Has("Birthday Cake Loreol") && Game.Has("Chocolate Loreol") && Game.Has("Peanut Butter Loreol") && Game.Has("Mint Loreol") && Game.Has("Mint Loreol") && Game.Has("Red Velvet Loreol") && Game.Has("Peanut Butter Chocolate Pie Loreol") && Game.Has("Spring Loreol") && Game.Has("Dark Chocolate Loreol") && Game.Has("Carrot Cake Loreol") && Game.Has("Golden Loreol") && Game.Has("Lemon Loreol") && Game.Has("Cinnamon Bun Loreol")) {
			Game.Win("Aurora Loreolis")
		}
	})
})
