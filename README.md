# TowerBallTowerSaver
a little website, where you can save the positioning of your towers in the game "TowerBall"  
The Project has very [basic Code](https://github.com/chibbi/TowerBallTowerSaver/blob/main/js/default.js) and relatively good varaible names, so if you haven't coded yet, you could take a look at it and try to understand what happens. (it's not hard, just a lot of same code xD).
##### You can always create a new Issue if you have any [feature requests](https://github.com/chibbi/TowerBallTowerSaver/issues/new?assignees=&labels=&template=feature_request.md&title=) or if you found a [bug](https://github.com/chibbi/TowerBallTowerSaver/issues/new?assignees=&labels=bug&template=bug_report.md&title=).  
  
#### short Description of how it works:  
If you open the website, html code and css make it fancy and shit.  
While loading the website, javascript adds an onclick event to every existing button (tower placement).  
It also checks your cookies, if you have any towers saved.  
After loading saved Towers, it checks if you actually have consented to using cookies, if not it throws a consent popup at you, because in my country it is illegal to save cookies without your consent (as far as i know).
When you decide to change a Tower to another tower (ex.: no Tower => Electric) you basically click a button which initiates javascript code, which creates the menu that opens.  
When you choose something in this menu (in this ex. electric) javacsript first sets a cookie, which contains the tower location and the specified tower and then changes the tower to the appropriate color and character (which exist for the color blind among us).  
After it has done that, it deletes the Menu that was opened, and you can choose another tower.  
  
##### If anyone knows, how to have the same functionality with less code, please let me know.  
I know that it should (and i think) can be written with less code, but this was the fastest way to finish it, and i wanted to finish it fast, and not work on it for a week

I left the java file, i used to create the command in javascript (because i didn't wanna copy paste everything)  
in the directory, if someone is interested in it.  

TODO:
 - [ ] add a textarea or smth, to export and import other peoples tower placements
 - [ ] put the tower menu in the middle of the level (or directly right to the button it refers to)
 - [ ] give all buttons in the tower menu the right color
