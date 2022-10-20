---
title: Secrets of Gamemode 4D
author: ToffeeMax
date: 2019-11-10 12:00
excerpt: Gamemode 4 is (now) 4 years old. Here are some secrets from its development.
---

> This post was originally written for ["Gamemode 4 Updates"](|https://ongamemode4.blogspot.com/2019/11/secrets-of-gamemode-4d.html). It has been copied here out of prosperity. There have been some edits to bring the style up to date. Major additions will be listed as `changes`.

The mega project that was 4D is now 2 years old `(4 years at time of writing)`. Here are some development secrets you may not have been aware of. 

## How did the idea of Dimensions come into being?
Sparks and Crazyman47_ dreamt up the main concept behind 4D, dimension-hopping, at Minecon 2016. 

Other Gamemode 4 Developers - Bluefire610 (now Bloo___) and SpecialBuilder32 later joined, with moderators helping in the final stage.
## `What was a bug that caused a lot of issues?`
Loosing items when transferring between worlds. Due to a design quirk, each dimension had its own player data storage compared to being stored in a central location.

If a player lost items, this was due to an error in transferring data across. You could sometimes change worlds to find you had an older copy of your inventory.

## What was with cross dimension chat, but no teleporting?
To make chat work across dimensions, all chats were sent via a proxy. This allowed players in Upper Caves, the Overworld, and the Moon to all communicate. 

One thing that was not possible was teleporting across dimensions. Moderators would have to travel to the location in question, which added a lot of lag time between reporting and action. 

However, landings did remove a lot of these issues. `(Landings was an initial world where all players started. There, they learnt the recipe for the Mandala that allowed them to teleport. This seemed to put most would be griefers off.)`

## How did the mandala plugin work?
You can find the source code [here to browse for yourself!](https://github.com/SpiderRobotMan/GM4-WorldLinks) 

It is no longer supported and works for Minecraft version 1.12.2 only, but feel free to pick it up if you really want to.

## The Dynmap
A lot of credit needs to go to TransportLayer - one of the two system admins on 4D (alongside SpiderRobotMan). They separately rendered all the dynmaps via their personal servers to then have them on the website.





