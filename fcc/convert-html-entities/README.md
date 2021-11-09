# Convert Characters to HTML Entities

Sadly, I didn't find any easy way to do this in JavaScript especially in browser environment.
It's easy to do this in other/backend language like PHP. They have `htmlentities()`
and `html_entity_decode`.

Since this problem only require me to convert these characters `&, <, >, ", '`, so looping
through the character one by one in string isn't that bad. The [solution](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-convert-html-entities/16007)
told me this way too. Or simply just use regex to save LoC.
