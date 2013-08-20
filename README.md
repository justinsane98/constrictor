<pre>
 __
("_\   .-.   .-.   .-.   .-.   .-.   .-.   .-.   .-.   .-.   /)
   \\_//^\\_//^\\_//^\\_//^\\_//^\\_//^\\_//^\\_//^\\_//^\\_//
    `"`   `"`   `"`   `"`   `"`   `"`   `"`   `"`   `"`   `"`
                             /       .-.        /
  .-.  .-._..  .-.     . ---/---).--.`-'.-. ---/---.-._.).--.
 (    (   )  )/   )   / \  /   /    /  (      /   (   )/
  `---'`-'  '/   (   / ._)/   /  _.(__. `---'/     `-'/
                  `-/                                       __
(\   .-.   .-.   .-.   .-.   .-.   .-.   .-.   .-.   .-.   /_")
 \\_//^\\_//^\\_//^\\_//^\\_//^\\_//^\\_//^\\_//^\\_//^\\_//
  `"`   `"`   `"`   `"`   `"`   `"`   `"`   `"`   `"`   `"`
</pre>

PROBLEM:
---------------------------
Production designers have a challenging task of delivering
highly-optimized images quickly in an ever changing environment.

SPECIFIC ISSUES:
---------------------------
- Photoshop doesn't export PNG8 with 256 color transparency and
  PNG24 is just too large.
- Viewing varying quality images in photoshop takes a considerable
  amount of time and you can't easily compare.
- Designers have to know git.

TODO:
---------------------------
- upload image to FS
- create a stream of images
- display stream in view
- select image from view and save to FS
- delete stream
- create 1x version
- commit both to git repo
- delete images from FS

FLOW:
---------------------------
- upload image
- show jpg and png and allow user to select format
- show quality export view
  - 4 jpg =>
    show jpg quality slider
  - 4 png =>
    show 24, 8-bit(256), 8-bit(256) w/o dithering, 8-bit(128) w/o dithering, 8-bit(64) w/o dithering...
    transparency? #??????
- export options
  - 1x version?
  - allow for user download
  - commit via git
