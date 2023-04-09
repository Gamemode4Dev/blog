---
title: Mid-February 2023 Project Update
tags:
  - all
  - updates
date: 2023-04-09 17:34:26
excerpt: An update on the state of the project from December 2022 to February 2023
author: ToffeeMax
---

> "Blow the dust off after christmas, loosening a few belt holes and running off that gained project weight" - ToffeeMax

Welcome
-------

Hello: Welcome to this VERY late post. It is covering changes from December to Mid-Feb (16th February)!

There may be some items missed, so do not take this update post as the true gospel; use it as a headline update about the amazing health of the Gamemode 4 project!

GitHub
------

Here is a run down of changes to the datapacks/GitHub side of the project.

Note: This is a set of headline changes, things may have been missed.

### Feature Changes

Bloo: Bug fix for charcoal blocks - now use wheat instead of only logs in autocrafter [(#830)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/pull/831&sa=D&source=editors&ust=1681061831186262&usg=AOvVaw275G4AAOX-uhz-OvOUy3_T)

Thanathor: Combat Expanded Balance Patch [(#816)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/pull/816&sa=D&source=editors&ust=1681061831187024&usg=AOvVaw2d8d-3b6UepYSfqhSDp-zV)

* More information and specifics can be [read here at this gist](https://www.google.com/url?q=https://gist.github.com/ToffeeMax/6f9396e281638f36d6d311643fc789f5&sa=D&source=editors&ust=1681061831187717&usg=AOvVaw3qEAh7pHkEB_b2Mlzi00rc)

### Technical Changes

JP12: Fix Autocrafter issues, remove item deletion duplication grip [(#826)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/commit/4e2508388acc180316aeb88550cd20adcdaa00c3&sa=D&source=editors&ust=1681061831188637&usg=AOvVaw04g21B_qOlbySc1DP00iMd)

* Fixes TNT not being autocraftable
* Fixes issue where some items in UI are modified incorrectly

JP12: Fix TP Jammer item name [(#829)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/pull/829&sa=D&source=editors&ust=1681061831189582&usg=AOvVaw3-cqPDL1IaiOHN7Oob6s5O)

* Loot table for TP Jammers gave them the name TP Anchor

Special: Fix Tunnel Bore rail drops[(!f889e88)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/commit/f889e88d5f37c8ac1eafff5d46838d523499a5eb&sa=D&source=editors&ust=1681061831190263&usg=AOvVaw0EBBSonjhgTY_u_TE3BfG3)

* Now allowsTunnel Bores to drop rails they have in their inventory when broken

Misode: Roll-out of Beet 2 [(#828)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/commits/master&sa=D&source=editors&ust=1681061831190927&usg=AOvVaw1LHbviSwurw-qW0Ruyq4Cu)

* Beet allows Gamemode 4 to run Python script by a GitHub action upon commit
* This means modules with repetitive source code can generate those files using Python (e.g. Autocrafters can automatically generate all the recipes)

Bloo: Fix Critical Combat expanded bug [(!baecc20)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/commit/baecc20ebaaac26f8ed1468c46f5a4ecb1354bc0&sa=D&source=editors&ust=1681061831191789&usg=AOvVaw0nwy3OScFWY7udlFoKoWuE)

* An unintended selector could cause server crashes via infinite mob spawning. This fixes the issue

Misode: Plethora of project integration fixes

* Fix incorrect meta,json format on site [(!793e7f3)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/commit/793e7f37a843518b8a5e83e4ab52262d867aaf98&sa=D&source=editors&ust=1681061831192437&usg=AOvVaw1-ceGHX9_M8XSD7LQlA4LL)
* Fix error in Dripleaf Filters meta [(!1cbc67a)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/commit/1cbc67aec4d6481e7ea1789100bef04fd14bcb07&sa=D&source=editors&ust=1681061831192989&usg=AOvVaw149fL9mK0AGXX383S5m6-o)
* Fix Metallurgy beet.yaml missing lib\_lore [(!b23f2dd)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/commit/b23f2dde255d8a86bc9488a27f1ca080a038a980&sa=D&source=editors&ust=1681061831193432&usg=AOvVaw3qgY3wYymiYSYnz8I0WAbV)
* This would cause a Beet build of Metallurgy to fail, since it did not pull all required libraries

Wiki
----

Epyon: Forming Press recipes updated to reflect the 1.19 update

* Mud Bricks and Deepslate Bricks have been added with the standard recipe of 8 items surrounding 1 Clay Ball, creating 16 of the brick type item and skipping one process/step

YouTube
-------

We've released two horizontal videos since November and a plethora of livestreams and shorts.

### Livestreams

Gamemode 4 has a series called "Gamemode 4 Toolbox"; these are designed to either showcase new features upcoming in GM4, livestreaming development, or developing concepts.

These are currently infrequent, and are usually announced via our [Discord](https://www.google.com/url?q=https://gm4.co/discord&sa=D&source=editors&ust=1681061831194888&usg=AOvVaw3AO4Iv9XcShEcabahgOuLS) by adding the ` @stream notifications`role in #bot. 

#### Beet Development Livestream

<iframe width="560" height="315" src="https://www.youtube.com/embed/YBHn1oLarZs?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

This expands on the new Beet 2 development pipeline that Gamemode 4 is now using [(#828)](https://www.google.com/url?q=https://github.com/Gamemode4Dev/GM4_Datapacks/commits/master&sa=D&source=editors&ust=1681061831196082&usg=AOvVaw0EX1Ur-O-Byvw8JzbFgGHk). 

#### Spawner Minecarts

<iframe width="560" height="315" src="https://www.youtube.com/embed/Vdn0HqgSFsM?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Spawner Minecarts has not been revisited since the 1.13 update, with the original concept created by Eease for Hermitcraft Gamemode 4.

> "Be it a lack of will to innovate or an over-nerf, the state of Spawner Minecarts was dire, and it felt like a relic from another time; too complicated for what it's supposed to be." - Bloo

### Shorts

#### What is a Custom Crafter?

<iframe width="560" height="315" src="https://www.youtube.com/embed/HJrExFVXqxI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

The recipe of a custom crafter changed! This short aimed to show new players and old how the customer crafter recipe was modified during the machine blocks update.

### Horizontal Video

#### What is the Ramble?

<iframe width="560" height="315" src="https://www.youtube.com/embed/xZVaf--Xc4o?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Public Server 9 has (now completed) the Ramble! This video was made to explain the location of the Ramble, and how to access it. 
  
You can still explore the Ramble now and do the puzzles. It is best to take along a group of friends to complete it!

#### Supercut of the World Tour

<iframe width="560" height="315" src="https://www.youtube.com/embed/6xVyrTyJX7I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

The closing of Public Server 8 had some interesting moments. This is a supercut of the most suspect.

-----------------------------

Some credits to those who helped produce this:

* Epyon: Helping draft some sections
* Sparks: Invaluable proofreading

Thanks for reading!

