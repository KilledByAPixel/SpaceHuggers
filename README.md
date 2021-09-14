# S P A C E H U G G E R S
A JS13k Game by Frank Force

The empire is spreading like a plague across the galaxy and building outposts everywhere.
You are an elite rebel operative tasked with wiping out entire bases.
Explore strange planets using your tools of destruction to eliminate the invaders!
You have only 10 clones left, 3 more will be replenished after each mission.
Good luck, have fun, and give space a hug for me.

# [PLAY SPACE HUGGERS!](https://js13kgames.com/entries/space-huggers)

![Screenshot](/screenshot.png)

# How To Play
- Use WASD or D-Pad to move
- Z or Left click to shoot - Most things will break if you shoot them, some will catch fire.
- X or Middle click - Roll - brief invulnerability, does damage, gives a boost, and puts out fire.
- C or Right click - Grenade - 3 per life, use wisely.
- You can also use a Xbox style controller, connect up to 4 for co-op play!
- Kill all enemies to complete the level.
- A radar along the bottom of the screen shows nearby enemies.
- You start with 9 lives and get 3 more for completing each level.
- For an optimal play experience please use Chrome in full screen mode.
- There is no end, but for a challenge, try speed running the first 5 levels.

# Game Features
- Run and gun roguelike platformer
- 2-4 player jump in local co-op mode
- Procedural level generation of great variety and complexity
- Levels are fully destructible with persistentance
- Fire propagation and explosion system
- 5 enemy types with a larger variant
- 7 different crate/barrel/rock types
- 17 sprite textures using a 12 color palette
- Multi layer procedurally generated parallax background
- Starfield simulation with stars and planets
- Particle systems for rain, snow, blood, explosions, weapons, water and more
- Native resolution rendering up to 1920x1200
- Up to 4 player co-op with 4 gamepads
- 11 different sound effects with [ZzFX](https://github.com/KilledByAPixel/ZzFX)

# Engine Features
- Custom game engine written during the compo is separate from game code
- Super fast rendering system for up to 50,000 objects at 60 fps
- Physics engine for rectangular and non rotating rigid body collisions
- Particle effects system
- Tile based rendering and collision system
- Input processing system for keyboard, mouse, gamepads, and touch
- Debug system not in JS13K build. (press ~ to enter debug mode)
- Audio with ZzFX with ability to attenuate sounds by distance

# Enemy Types
- New Recruit (Green) - A bit shorter, more hesitant, takes only 1 hit
- Soldier (Blue) - Normal height, takes 2 hits
- Captain (Red) - Can climb walls, takes 3 hits
- Specialist (White) - Can roll, climb, and jump often, melee, takes 4 hits
- Demolitions Expert (Purple) - Throws grenades and can't catch fire, takes 5 hits
- Small chance of larger size enemy that has double health and fires full auto

# Props
- Wood Crate (Brown) - Burns easily and breaks when fully burnt
- Metal Crate & Barrel (Gray) - Is hard to destroy, can't burn
- Explosive Crate & Barrel (Green) - Burns and explodes after a few seconds
- Water Barrel (Blue) - Puts out fires and pushes away objects
- High Explosive Barrel (Red) - Explodes quickly and much larger than normal explosives
- Rock (Color Varies) - Extra heavy and hard to destroy, can crush enemies
- Lava Rock (Glowing Red & Orange) - Anything that touches it is lit on fire

# Tools Used
- [Roadroller](https://github.com/lifthrasiir/roadroller)
- [Google Closure Compiler](https://github.com/google/closure-compiler)
- [UglifyJS](https://github.com/mishoo/UglifyJS)
- [Imagemin](https://github.com/imagemin/imagemin)
- [Efficient Compression Tool](https://github.com/fhanau/Efficient-Compression-Tool)
- [ZzFX](https://github.com/KilledByAPixel/ZzFX)
- [DownloadJS](http://danml.com/download.html)
- [Gif.js](https://github.com/jnordberg/gif.js)
