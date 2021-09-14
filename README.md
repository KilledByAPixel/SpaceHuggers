# S P A C E H U G G E R S
A JS13k Game by Frank Force

Explore strange planets using your tools of destruction to wipe out hordes of invading space marines. Up to 3 friends can join for co-op multiplayer!

![Screenshot](/screenshot.png)

# How To Play
- Use WASD or D-Pad to move
- Z or Left click to shoot
- X or Middle click - Roll -  brief invulnerability, does melee damage, boots, and puts out fire.
- C or Right click - Grenade - 3 per life, use wisely.
- You can also use a Xbox style controller, connect up to 4 for co-op play!
- Kill all enemies to complete the level.
- A radar along the bottom of the screen shows nearby enemies.
- You start with 9 lives and get 3 extra lives for completing each level.
- For optimal play experience use Chrome in full screen mode.
- There is no end, but for a challenge you can try to speed run X number of levels.

# Game Features
- Platforming run and gun style gameplay.
- 2-4 player jump in co-op mode.
- Procedural level generation of great variety and complexity.
- Levels are fully destructible with persistent debris.
- Fire propagation and explosion system.
- 5 enemy types with a larger variant.
- 7 different crate/barrel/rock types.
- 17 sprite textures using a 12 color pallet.
- Multi layer procedurally generated parallax background.
- Starfield simulation with stars and planets.
- Particle systems for rain, snow, blood, explosions, weapons, water and more.
- Native resolution rendering up to 1920x1200.
- Up to 4 player co-op with 4 gamepads.
- 11 different sound effects with [ZzFX](https://github.com/KilledByAPixel/ZzFX)

# Engine Features
- Custom game engine written during the compo is separate from game code.
- Super fast rendering system for up to 50,000 objects at 60 fps.
- Physics engine for rectangular and non rotating rigid body collisions.
- Particle effects system.
- Tile based rendering and collision system.
- Input processing system for keyboard, mouse, gamepads, and touch.
- Debug system not in JS13K build. (press ~ to enter debug mode).
- Audio with ZzFX with ability to attenuate sounds by distance.

# Enemy Types
- New Recruit (Green) - A bit shorter, more hesitant, takes only 1 hit.
- Soldier (Blue) - Normal height, takes 2 hits.
- Captain (Red) - Can climb walls, takes 3 hits.
- Specialist (White) - Can roll, climb, and jump often, melee, takes 4 hits.
- Demolitions Expert (Purple) - Throws grenades and can't catch fire, takes 5 hits.
- Small chance of larger size enemy that has double health and fires full auto.

# Props
- Wood Crate (Brown) - Burns easily and breaks when fully burnt.
- Metal Crate & Barrel (Gray) - Is hard to destroy, can't burn.
- Explosive Crate & Barrel (Green) - Burns and explodes after a few seconds.
- Water Barrel (Blue) - Puts out fires and pushes away objects
- High Explosive Barrel (Red) - Explodes quickly and much larger than normal explosives.
- Rock (Color Varies) - Extra heavy and hard to destroy, can crush enemies
- Lava Rock (Glowing Red & Orange) - Anything that touches it is lit on fire.

# Tools Used
- [Roadroller](https://github.com/lifthrasiir/roadroller)
- [Google Closure Compiler](https://github.com/google/closure-compiler)
- [Uglify](https://github.com/mishoo/UglifyJS)
- [Imagemin](https://github.com/imagemin/imagemin)
- [Efficient Compression Tool](https://github.com/fhanau/Efficient-Compression-Tool)
- [ZzFX](https://github.com/KilledByAPixel/ZzFX)
- [DownloadJS](http://danml.com/download.html)
- [Gif.js](https://github.com/jnordberg/gif.js)
