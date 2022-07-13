"use strict";

var SETDEX_URANIUM = {
	"Luxelong": {
		"Gamma Specially Defensive Pivot": {
			"level": 100,
			"ability": "Regenerator",
			"item": "Leftovers",
			"nature": "Calm",
			"evs": {"hp": 252, "df": 4, "sd": 252},
			"moves": ["Moonblast", "Wish", "Protect", "Heal Bell"]
		},
		"Gamma Physically Defensive Pivot": {
			"level": 100,
			"ability": "Regenerator",
			"item": "Leftovers",
			"nature": "Bold",
			"evs": {"hp": 252, "df": 252, "sd": 4},
			"moves": ["Moonblast", "Wish", "Protect", "Heal Bell"]
		},
		"Gamma SubPass Pivot": {
			"level": 100,
			"ability": "Regenerator",
			"item": "Leftovers",
			"nature": "Calm",
			"evs": {"hp": 248, "df": 196, "sd": 64},
			"moves": ["Substitute", "Baton Pass", "Roost", "Moonblast"]
		}
	}
};

for (var mon in SETDEX_URANIUM) {
	SETDEX_XY[mon] = SETDEX_URANIUM[mon];
}
