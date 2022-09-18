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
	},
	"S51-A": {
		"Gamma Specially Defensive": {
			"level": 100,
			"ability": "Levitate",
			"item": "Leftovers",
			"nature": "Calm",
			"evs": {"hp": 252, "df": 4, "sd": 252},
			"moves": ["Rapid Spin", "Recover", "U-turn", "Flash Cannon"]
		},
		"Gamma Physically Defensive": {
			"level": 100,
			"ability": "Levitate",
			"item": "Leftovers",
			"nature": "Bold",
			"evs": {"hp": 252, "df": 252, "sd": 4},
			"moves": ["Rapid Spin", "Recover", "U-turn", "Flash Cannon"]
		}
	},
	"S51-A-Mega": {
		"Gamma Speed Demon": {
			"level": 100,
			"ability": "Mega Launcher",
			"item": "Unidentified Fallen Object",
			"nature": "Timid",
			"evs": {"df": 4, "sa": 252, "sp": 252},
			"moves": ["Flash Cannon", "Dark Pulse", "Focus Blast", "Nasty Plot"]
		},
		"Gamma Bulky Offense": {
			"level": 100,
			"ability": "Mega Launcher",
			"item": "Unidentified Fallen Object",
			"nature": "Bold",
			"evs": {"hp": 240, "df": 116, "sp": 152},
			"moves": ["Psychic", "Dark Pulse", "Focus Blast", "Nasty Plot"]
		}
	}
};

for (var mon in SETDEX_URANIUM) {
	SETDEX_XY[mon] = SETDEX_URANIUM[mon];
}
