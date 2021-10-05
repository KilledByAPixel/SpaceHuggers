![Space Huggers - A JS13k Game by Frank Force](/screenshot.png)

The empire is spreading like a plague across the galaxy and building outposts on remote planets.
You are an elite rebel soldier tasked with wiping out those bases.
Explore strange planets using your tools of destruction and eliminate the invaders!
You have only 10 clones left, 3 more will be replenished after each mission.
Good luck, have fun, and give space a hug for me.

# [PLAY SPACE HUGGERS!](https://killedbyapixel.github.io/SpaceHuggers/)
# [OFFICIAL JS13K BUILD](https://js13kgames.com/entries/space-huggers)
# [VIDEO DEMO](https://www.youtube.com/watch?v=6VXrnk18Z4s)

# How To Play
- Use WASD or D-Pad - Move, jump, and climb
- Z or Left click - Shoot - Most things will break, some will burn
- X or Middle click - Roll - brief invulnerability, does damage, gives a boost, puts out fire
- C or Right click - Grenade - 3 per life, use wisely
- You can also use a Xbox or SNES style controller, connect up to 4 for co-op play!
- Kill all enemies to complete the level
- A radar along the bottom of the screen shows nearby enemies
- You start with 10 lives and get 3 more for completing each level
- For an optimal play experience please use Chrome in full screen mode
- There is no end, but for a challenge, try beating the first 5 levels

# Gameplay Tips
- Roll to put out fire!
- Rolling also does melee damage to enemies
- Keep your distance from the specialists (white), they roll and flip often!
- You can hold down jump to climb up walls
- Jump flip to get more vertical height (roll immediately after jumping)
- To reach really high places try a grenade jump!
- You can press R to restart the game

# Game Features
- Run and gun / roguelike hybrid gameplay
- 2-4 player jump in local co-op mode
- Procedural level generation of great variety and complexity
- Levels are fully destructible with persistence
- Fire propagation and explosion system
- 5 enemy types with a larger variant
- 7 different crate/barrel/rock types
- 17 sprite textures using a 12 color palette
- Checkpoints can be captured for players to respawn there
- Multi layer procedurally generated parallax background
- Starfield simulation with moving stars, planets, and suns
- Particle systems for rain, snow, blood, explosions, weapons, water and more
- Native resolution rendering up to 1920x1200
- 11 different sound effects with [ZzFX](https://github.com/KilledByAPixel/ZzFX)
- Up to 4 player co-op with 4 gamepads!

# Engine Features
- Custom game engine written during the compo is separate from game code
- Super fast rendering system for up to 50,000 objects at 60 fps
- Physics engine for axis aligned bounding box rigid body dynamics
- Tile based rendering and collision system
- Particle effects system
- Input processing system for keyboard, mouse, gamepads, and touch
- Math library with Vector2, Color and Timer utility classes
- Audio with ZzFX has ability to attenuate sounds by distance
- Debug visualization system not in JS13K build. (press ~ to enter debug mode)

# Enemy Types
- Recruit (Green) - A bit shorter, more hesitant, takes only 1 hit
- Soldier (Blue) - Average height and ability, takes 2 hits
- Captain (Red) - Can climb walls and jumps more often, takes 3 hits
- Specialist (White) - Jumps and rolls often, they are ninjas, takes 4 hits
- Demolitions Expert (Purple) - Throws grenades and can't catch fire, takes 5 hits
- Small chance of a heavy weapons variation that has double health and fires full auto

# Object Types
- Plastic Crate (Brown) - Burns easily and breaks when fully burnt
- Metal Crate & Barrel (Gray) - Is hard to destroy, can't burn
- Water Barrel (Blue) - Puts out fires and pushes away objects
- Explosive Crate & Barrel (Green) - Burns and explodes after a few seconds
- High Explosive Barrel (Red) - Explodes quickly and much larger than normal explosives
- Rock (Color Varies) - Heavy and very hard to destroy, can't burn, can crush enemies
- Lava Rock (Glowing Red & Orange) - Anything that touches it is lit on fire

# Tools Used
- [Roadroller](https://github.com/lifthrasiir/roadroller)
- [Google Closure Compiler](https://github.com/google/closure-compiler)
- [UglifyJS](https://github.com/mishoo/UglifyJS)
- [Imagemin](https://github.com/imagemin/imagemin)
- [Efficient Compression Tool](https://github.com/fhanau/Efficient-Compression-Tool)
- [Advzip](https://www.npmjs.com/package/advzip-bin)
- [ZzFX](https://github.com/KilledByAPixel/ZzFX)

# How to build the 13k Zip
- Run engine\build\setupBuild.bat to install the necessary tools via npm
- You will need: google-closure-compiler, uglify, roadroller, imagemin-cli, and advzip
- Run engine\build\build.bat, to build app.zip which is the final result
- It will also create a file called index.min.html you can use for testing
- The zip size may vary by 20 bytes or so due to randomness of roadroller
