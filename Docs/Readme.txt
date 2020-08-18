================================================================================
Advanced engine needed  : GZDoom 4.4.x
Primary purpose         : Single player, no levels included
================================================================================
Title                   : Major's Minecraft Mobs
Filename                : MinecraftMobs.pk3
Release date            : --/--/----
Author                  : Major Cooke
Email Address           : majorcooke22@gmail.com
Other Files By Author   : "Doom 4 For Doom", "AEons of Death", 
						  "Doom Eternal 4 Doom"
						  
Misc. Author Info       : Pony.

Description             : Adds a bunch of minecraft monsters to the game, along
						  with customization options to tailor the experience
						  to the player's liking. See below for more details.
						  
						  Inspired by a dream I had where Minecraft monsters
						  randomly invaded my Doom Eternal play-throughs.

Additional Credits to   : See below.
================================================================================
* What is included *

New levels              : None
Sounds                  : Yes
Music                   : No
Graphics                : Yes
Dehacked/BEX Patch      : No
Demos                   : No
Other                   : Models
Other files required    : MC_Utility.pk3


* Play Information *

Game                    : Doom (Any)
Single Player           : Designed for
Cooperative 2-4 Player  : No
Deathmatch 2-4 Player   : No
Other game styles       : None
Difficulty Settings     : Yes (See Options -> Minecraft. Details below)


* Construction *

Base                    : New from scratch
Build Time              : 1-2 months
Editor(s) used          : SLADE, Blender
Known Bugs              : Monsters may spawn stuck in certain conditions.
Might Not Work With     : GZDoom devbuilds, unless mentioned otherwise.
Will NOT Work With 		: Anything that isn't GZDoom.
Tested With             : GZDoom 4.4.x

================================================================================
* Description *

This provides extra monsters to fight in the game that look and behave just like
their true Minecraft counterparts.

There are a few deviations that cannot be replicated due to engine differences,
but otherwise they behave similarly and add a variety of enemies to keep players
on their toes.

This mod was inspired by a dream

--------------------------------------------------------------------------------
* Options *

In the option menu is a specific submenu for this mod. The following are 
described as such:

Peaceful Mode
	Defaults to Off. If enabled, monsters can despawn based on Peaceful Behavior.

Difficulty
	Set your monster difficulty here. Defaults to Normal.
		
	* Easy: 
		Monsters deal less damage and don't spawn with protective gear.

	* Normal: 
		Monsters deal regular damage. Baby variants can spawn a bit more 
		frequently. Zombies and others may have a sword if they don't spawn with
		a weapon by default, which increases their damage. Small chance to be
		wearing armor which further reduces incoming damage.
		
	* Hard:
		Monsters deal more damage. Some mobs can inflict debuffs, and some can
		spawn wearing full sets of armor.
		
Peaceful Behavior
	Adjusts what happens to live monsters when in peaceful mode. Default is 
	Minecraft.
	
	* Force Despawn
		All active monsters will be forcefully despawned, regardless of 
		circumstances that normally would prevent them from despawning (such as
		bosses or named monsters). Any holding a Doom weapon will drop the item.
		Includes passive mobs.
		
	* Minecraft
		Monsters without special rules and are hostile mobs in nature will 
		despawn. This behaves just like Minecraft's rules.
	
	* No Spawning
		Hostile mobs become passive and any attacking the player currently will
		stop pursuing. Monsters will not continue spawning, but are allowed to
		exist until regular despawn rules remove them from the game.
		
	* Allow Spawning
		Monsters spawn docile, following the rules of the current difficulty.
		I.e. Hard allows mobs to spawn with armor, etc.
		

================================================================================
- Behaviors -
Monsters can spawn anywhere and at any time. While they do not combust 
spontaneously when walking outside, they do take damage from damage floors and
are instantly killed by crushers. They cannot trigger any line/sector actions
since they would otherwise break sensitive maps, but they can teleport.

Special DOOM-specific Behaviors included:
* Die instantly from crushers
* Take damage from damaging floors (except fire immune)
* Take fall damage
* Can drown
* Do not drop anything if not killed by a player
* Never triggers line/sector/action specials, and cannot be assigned specials
--------------------------------------------------------------------------------
***** Monsters *****
=== Zombies ===
= Regular =
This cumbersome beast is slow moving, yet hits quite hard if his grabby hands
get around your limbs. As they're undead, they're rather tough with stamina but
are also bumbling and, well, quite brain dead.

+ Slow
+ Weakness: Head (+300% damage)
+ Burns in daylight (regardless of sky texture)
- Turns into a Drowned if submerged underwater long enough
- Natural armor: 8% damage reduction
- Chance to call other zombies to help from all around when damaged
- Chance to turn into a skeleton when critically hit

= Husk =
Same as regular but different skin. 
- Doesn't burn in daylight

= Drowned =
Zombies that drown become this waterlogged creature.
/ Doesn't burn in daylight but becomes passive instead


=== Skeletons ===
How these things can act without meat is probably demonic in nature. Having shed
their rotten exoskeleton, these creatures are more nimble but also more brittle
than their cousin counterparts. Rarely, zombie's can lose their flesh and turn
into one of these if damage is low enough. They prefer to use ranged weaponry,
usually bows 95% of the time. 

Don't let them pick up other weapons! Otherwise, you'll have to deal with these
rocket toting monsters... At least until they run out of ammo and then discard
the weapon.

+ Less health, no armor, brittle
+ Weakness: Torso (+150% damage)
- Immune to poison, drowning

--- Creeper ---
A failed pig-monster with camoflauge green skin and an explosive temper (quite 
physically), these walking PTSD trigger creatures make like a dog's fart upon 
arrival: silent, and deadly, save for the soft hiss...

But you're Doomguy! You can outright ANYTHING! Right? ...Right?

...Say, what's with the spontaneous lighting strikes outside?

+ Weakness: Feet (+100% damage)
+ Weakness: Explosions (+200% damage)
- Big explosions
- Silent except for hissing
- Can explode when dropping over an edge when taking fall damage
- Always explodes if dying by falling

--- Spider ---
The itsy bitsy spider crawled up... another damn giant spider and tried to eat
everyone. They don't have any guns, phew... but they bite hard, leap, and climb
walls. Crap. 

They are also wide instead of tall, so they can get inside little slits. Beware.

+ Becomes passive in bright areas
- Can leap & climb walls

--- Cave Spider --
Smaller spiders with a smaller hitbox. Can poison their foes with their bites
on harder difficulties, but aren't as healthy.

+ Low health
+ Weak spot: Eyes (Instant death)
- Poisonous attack

--- Slime ---
Rare mobs that hop about. Depending on size is the damage radius and amount.
Splits into smaller slimes upon death. Skates very fast across water textures.

+ Only moves forward predictably and can fall off ledges
+ Burns easily, spreads fire/poison/wither to spawns
- Heavy damage
- Tanky
- No weak spots

--- Endermen ---
Tall lanky creatures that are passive until attacked or looked at on the head.

+ Takes damage from water surfaces, double from slime/lava
+ Negative status effects last twice as long
+ Weak spot: Mouth (+150% damage)
- Can teleport around to get out of danger and evade combat


--- Zombie Pigmen ---
Pack monsters that are generally neutral and don't attack. Spawns frequently
with hellish textures or later maps. They spawn in large packs and don't attack
unless attacked. Considering how big their packs usually are, one should avoid
hurting them if possible, but they'll forgive the player after a while.

Brandishing golden sword, they faster, hardier and more punishing than regular
zombies, so its wise to leave them be, but they drop quite a bit of resources 
if killed by players.

+ Neutral mob - doesn't attack anyone unless attacked
+ Drops more resources on death
+ Can forgive players, won't forgive mobs
+ Weak spot: Head (+300% damage)
+ Weak spot: Hand (Disarms when shot hard enough, lowering attack damage)
- Spawns in large packs
- ZERG- er, PIG SWARM!!!
- Immune to Fire

--- Magma Slime ---
Hellish variants of regular slimes.

+ Slower
- Hops very high
- Immune to Fire

--- Blaze ---
Floating monsters that cast infernal charges which sets fire to anything they
hit. Often spawns in packs, making them dangerous.

+ Doesn't move much horizontally
+ Tends to sink to the ground
- Immune to fire/fall damage

--- Ghast ---
Floating monsters that are huge and shoot bigger, explosive fireballs.

+ Big & slow enemy, easy to hit
+ Reflectable fireballs
+ Weakness: Fireballs (Instant death)
- Big fireballs that explode and set fire to the area around them
- Immune to Fire/Falling
- Can snipe from long ranges away

--- Wither Skeleton ---
Scorched by countless ages of Hellfire, the souls that infest them know nothing
but pain, and want nothing more than to share it with living mortal flesh - and
anyone insolent enough to attack them.

+ Weak spot: Head (+100% damage)
/ Death by weak spot prevents skull from dropping
- Inflicts Wither effect on attack
- Immune to Fire/Poison/Fall damage


	***** Bosses *****
	
--- Wither ---
A three headed eldritch abomination that attacks by launching floating skulls at
enemies. Has multiple phases.

PHASE 1
* Spawns in and generates health up to full, before emitting a massive explosion
that's guaranteed to be fatal to most enemies. Will attack most other enemies and
demons, including other undead, while also strafing players. Changes focus to 
enemies that attack it directly.

PHASE 2
* Becomes immune to explosion damage and long range projectiles, requiring 
direct contact damage to be large. Gets up REAL close and personal too, making 
it harder to dodge skulls.

--- 

--------------------------------------------------------------------------------



================================================================================
	***** Credits *****

Major Cooke
	Developer
	
Kodi
Phantombeta
	Coding Support
	(Without these two awesome folks, the mod would be worse.)

22i
	Models	(https://github.com/22i/minecraft-voxel-blender-models)

Mojang
	Minecraft Sounds & Textures

================================================================================
* Copyright / Permissions *
================================================================================
Authors MAY use the contents of this file as a base for
modification or reuse. JUST LET ME KNOW. :) Permissions have been obtained 
from original authors for any of their resources modified or included 
in this file.

Authors who copy the libraries MUST include the license(s) present in the 
folders.

You MAY distribute this file, provided you include this text file, with
no modifications. You may distribute this file in any electronic
format as long as you include this file intact. I have received permission 
from the original authors of any modified or included content in this file 
to allow further distribution.

***** TL;DR version ***** 
Do what you like with it as long as credit is given where due. Include this file
UNMODIFIED. And try to let me know if you can I'd love to see what you do to
expand this mod if you modify it.

Thank you! ♥

--------------------------------------------------------------------------------
* Where to get the file that this text file describes *

The Usual: ftp://archives.gamers.org/pub/idgames/ and mirrors
--------------------------------------------------------------------------------

As always, I hope you enjoy this. Feedback can always be provided on Discord or
at my email address, majorcooke22@gmail.com.

Enjoy!

- Major Cooke
